"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[945],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=d(r),p=n,m=f["".concat(s,".").concat(p)]||f[p]||u[p]||i;return r?o.createElement(m,a(a({ref:t},c),{},{components:r})):o.createElement(m,a({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var d=2;d<i;d++)a[d]=r[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3397:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return f}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),a=["components"],l={sidebar_position:2},s="Add Modifier",d={unversionedId:"tutorial-modifier-roles/add-modifier",id:"tutorial-modifier-roles/add-modifier",isDocsHomePage:!1,title:"Add Modifier",description:"Next you should click on the Roles Modifier available through the Zodiac App on Gnosis Safe. When you open the Roles Modifier, it will look like this:",source:"@site/docs/tutorial-modifier-roles/add-modifier.md",sourceDirName:"tutorial-modifier-roles",slug:"/tutorial-modifier-roles/add-modifier",permalink:"/zodiac/docs/tutorial-modifier-roles/add-modifier",editUrl:"https://github.com/gnosis/zodiac/edit/master/website/docs/tutorial-modifier-roles/add-modifier.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Get started",permalink:"/zodiac/docs/tutorial-modifier-roles/get-started"},next:{title:"Add Role",permalink:"/zodiac/docs/tutorial-modifier-roles/add-role"}},c=[],u={toc:c};function f(e){var t=e.components,l=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"add-modifier"},"Add Modifier"),(0,i.kt)("p",null,"Next you should click on the Roles Modifier available through the Zodiac App on Gnosis Safe. When you open the Roles Modifier, it will look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Roles Modifier Deployment",src:r(5646).Z})),(0,i.kt)("p",null,"Now, you should fill in the fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Owner Address"),": Address that can call functions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Avatar Address"),": Address of the DAO (e.g. a Gnosis Safe).\n",(0,i.kt)("em",{parentName:"li"},"Note: This is usually the same as the owner address.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Target Address"),": Address on which the module will call ",(0,i.kt)("inlineCode",{parentName:"li"},"execModuleTransaction()"),". This is the contract that executes the transactions.")),(0,i.kt)("p",null,"For this tutorial, we've chosen short time periods."),(0,i.kt)("p",null,"Once you've entered the Cooldown and Expiration parameters, click the Add Module button."),(0,i.kt)("h1",{id:"submit-transaction"},"Submit transaction"),(0,i.kt)("p",null,"After that, you should see a Gnosis Safe modal prompting you to review the transaction. Click Submit when ready:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Roles Modifier Transaction Submission",src:r(5224).Z})),(0,i.kt)("p",null,"Confirm the transaction with your web3 wallet that is a signer on the Gnosis Safe."))}f.isMDXComponent=!0},5646:function(e,t,r){t.Z=r.p+"assets/images/roles_01-ee2b740b48f2b5f47b3aedb49c4213a3.png"},5224:function(e,t,r){t.Z=r.p+"assets/images/roles_02-154ea156d298d10b56aca830eafc2bbe.png"}}]);