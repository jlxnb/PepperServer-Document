"use strict";(self.webpackChunkwiki_template=self.webpackChunkwiki_template||[]).push([[987],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,y=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3},o=void 0,l={unversionedId:"\u90e8\u7f72\u5230GitLab",id:"\u90e8\u7f72\u5230GitLab",title:"\u90e8\u7f72\u5230GitLab",description:"\u5728gitlab\u90a3\u8fb9\u5bfc\u5165\u8fd9\u4e2a\u4ed3\u5e93,\u6216\u8005\u4f60\u628a\u8fd9\u4e2a\u4ed3\u5e93\u4e0b\u8f7d\u4e0b\u6765,\u4f20gitlab\u4e0a",source:"@site/docs/\u90e8\u7f72\u5230GitLab.md",sourceDirName:".",slug:"/\u90e8\u7f72\u5230GitLab",permalink:"/en/\u90e8\u7f72\u5230GitLab",draft:!1,editUrl:"https://github.com/jlxnb/PepperServer-Document/docs/\u90e8\u7f72\u5230GitLab.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Fork\u4ed3\u5e93",permalink:"/en/Fork\u4ed3\u5e93"},next:{title:"\u8bbe\u7f6eACCESS_TOKEN",permalink:"/en/\u8bbe\u7f6eACCESS_TOKEN"}},p={},u=[],s={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728gitlab\u90a3\u8fb9\u5bfc\u5165\u8fd9\u4e2a\u4ed3\u5e93,\u6216\u8005\u4f60\u628a\u8fd9\u4e2a\u4ed3\u5e93\u4e0b\u8f7d\u4e0b\u6765,\u4f20gitlab\u4e0a"),(0,a.kt)("p",null,".gitlab-ci.yml \u9a7f\u7ad9\u5e2e\u4f60\u5199\u597d\u4e86awa"),(0,a.kt)("p",null,"\u7136\u540e\u628a docusaurus.config.js \u91cc\u7684\u4e1c\u897f\u6539\u4e0b"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5728GitLab\u90a3\u4e00\u4fa7\u7684\u4ed3\u5e93\u6539")),(0,a.kt)("p",null,"\u627e\u5230\u8fd9\u4e00\u6bb5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  title: 'Wiki-Template',\n  tagline: 'Docusaurus \u63d2\u4ef6\u6587\u6863\u6a21\u677f',\n  favicon: 'img/favicon.ico',\n\n  // Set the production url of your site here\n  url: 'https://postyizhan.github.io',\n  // Set the /<baseUrl>/ pathname under which your site is served\n  // For GitHub pages deployment, it is often '/<projectName>/'\n  baseUrl: '/Wiki-Template/',\n\n  // GitHub pages deployment config.\n  // If you aren't using GitHub pages, you don't need these.\n  organizationName: 'postyizhan', // Usually your GitHub org/user name.\n  projectName: 'Wiki-Template', // Usually your repo name.\n  deploymentBranch: 'gh-pages',\n  trailingSlash: false,\n};\n")),(0,a.kt)("p",null,"postyizhan \u6539\u6210\u4f60\u81ea\u5df1\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"username/groupname")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"github.io")," \u6539\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"gitlab.io")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Wiki-Template")," \u6539\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"username/groupname")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"baseUrl")," \u6539\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"/")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"projectName")," \u6539\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"username/groupname")," \u800c\u4e0d\u662f \u4f60\u8fd9\u4e2a\u6587\u6863\u4ed3\u5e93\u7684\u540d\u5b57"),(0,a.kt)("p",null,"``"),(0,a.kt)("p",null,"\u6bd4\u5982\u6211\u7684\u662f\u6539\u6210\u8fd9\u6837"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  title: 'Wiki-Template',\n  tagline: 'Docusaurus \u63d2\u4ef6\u6587\u6863\u6a21\u677f',\n  favicon: 'img/favicon.ico',\n\n  // Set the production url of your site here\n  url: 'https://yizhan.gitlab.io',\n  // Set the /<baseUrl>/ pathname under which your site is served\n  // For GitHub pages deployment, it is often '/<projectName>/'\n  baseUrl: '/',\n\n  // GitHub pages deployment config.\n  // If you aren't using GitHub pages, you don't need these.\n  organizationName: 'postyizhan', // Usually your GitHub org/user name.\n  projectName: 'yizhan', // Usually your repo name.\n  deploymentBranch: 'gh-pages',\n  trailingSlash: false,\n")))}m.isMDXComponent=!0}}]);