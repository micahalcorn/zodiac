import { AddressZero } from "@ethersproject/constants";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import hre from "hardhat";

import { TestGuard__factory, TestModule__factory } from "../typechain-types";

async function setupTests() {
  const [owner, other, relayer] = await hre.ethers.getSigners();
  const Avatar = await hre.ethers.getContractFactory("TestAvatar");
  const avatar = await Avatar.deploy();
  const Module = await hre.ethers.getContractFactory("TestModule");
  const module = TestModule__factory.connect(
    await (
      await Module.connect(owner).deploy(
        await avatar.getAddress(),
        await avatar.getAddress()
      )
    ).getAddress(),
    owner
  );
  await avatar.enableModule(await module.getAddress());

  const Guard = await hre.ethers.getContractFactory("TestGuard");
  const guard = TestGuard__factory.connect(
    await (await Guard.deploy(await module.getAddress())).getAddress(),
    relayer
  );

  const GuardNonCompliant = await hre.ethers.getContractFactory(
    "TestNonCompliantGuard"
  );
  const guardNonCompliant = TestGuard__factory.connect(
    await (await GuardNonCompliant.deploy()).getAddress(),
    hre.ethers.provider
  );

  const tx = {
    to: await avatar.getAddress(),
    value: 0,
    data: "0x",
    operation: 0,
    avatarTxGas: 0,
    baseGas: 0,
    gasPrice: 0,
    gasToken: AddressZero,
    refundReceiver: AddressZero,
    signatures: "0x",
  };

  return {
    owner,
    other,
    module,
    guard,
    guardNonCompliant,
    tx,
  };
}

describe("Guardable", async () => {
  describe("setGuard", async () => {
    it("reverts if reverts if caller is not the owner", async () => {
      const { other, guard, module } = await loadFixture(setupTests);
      await expect(module.connect(other).setGuard(await guard.getAddress()))
        .to.be.revertedWithCustomError(module, "OwnableUnauthorizedAccount")
        .withArgs(other.address);
    });

    it("reverts if guard does not implement ERC165", async () => {
      const { module } = await loadFixture(setupTests);
      await expect(module.setGuard(await module.getAddress())).to.be.reverted;
    });

    it("reverts if guard implements ERC165 and returns false", async () => {
      const { module, guardNonCompliant } = await loadFixture(setupTests);
      await expect(module.setGuard(await guardNonCompliant.getAddress()))
        .to.be.revertedWithCustomError(module, "NotIERC165Compliant")
        .withArgs(await guardNonCompliant.getAddress());
    });

    it("sets module and emits event", async () => {
      const { module, guard } = await loadFixture(setupTests);
      await expect(module.setGuard(await guard.getAddress()))
        .to.emit(module, "ChangedGuard")
        .withArgs(await guard.getAddress());
    });

    it("sets guard back to zero", async () => {
      const { module, guard } = await loadFixture(setupTests);
      await expect(module.setGuard(await guard.getAddress()))
        .to.emit(module, "ChangedGuard")
        .withArgs(await guard.getAddress());

      await expect(module.setGuard(AddressZero))
        .to.emit(module, "ChangedGuard")
        .withArgs(AddressZero);
    });
  });

  describe("getGuard", async () => {
    it("returns guard address", async () => {
      const { module } = await loadFixture(setupTests);
      await expect(await module.getGuard()).to.be.equals(AddressZero);
    });
  });
});

describe("BaseGuard", async () => {
  const txHash =
    "0x0000000000000000000000000000000000000000000000000000000000000001";

  it("supports interface", async () => {
    const { guard } = await loadFixture(setupTests);
    expect(await guard.supportsInterface("0xe6d7a83a")).to.be.true;
    expect(await guard.supportsInterface("0x01ffc9a7")).to.be.true;
  });

  describe("checkTransaction", async () => {
    it("reverts if test fails", async () => {
      const { guard, tx } = await loadFixture(setupTests);
      await expect(
        guard.checkTransaction(
          tx.to,
          1337,
          tx.data,
          tx.operation,
          tx.avatarTxGas,
          tx.baseGas,
          tx.gasPrice,
          tx.gasToken,
          tx.refundReceiver,
          tx.signatures,
          AddressZero
        )
      ).to.be.revertedWith("Cannot send 1337");
    });
    it("checks transaction", async () => {
      const { guard, tx } = await loadFixture(setupTests);
      await expect(
        guard.checkTransaction(
          tx.to,
          tx.value,
          tx.data,
          tx.operation,
          tx.avatarTxGas,
          tx.baseGas,
          tx.gasPrice,
          tx.gasToken,
          tx.refundReceiver,
          tx.signatures,
          AddressZero
        )
      ).to.emit(guard, "PreChecked");
    });
  });

  describe("checkAfterExecution", async () => {
    it("reverts if test fails", async () => {
      const { guard } = await loadFixture(setupTests);
      await expect(guard.checkAfterExecution(txHash, true)).to.be.revertedWith(
        "Module cannot remove its own guard."
      );
    });
    it("checks state after execution", async () => {
      const { module, guard } = await loadFixture(setupTests);
      await expect(module.setGuard(await guard.getAddress()))
        .to.emit(module, "ChangedGuard")
        .withArgs(await guard.getAddress());
      await expect(guard.checkAfterExecution(txHash, true))
        .to.emit(guard, "PostChecked")
        .withArgs(true);
    });
  });
});
