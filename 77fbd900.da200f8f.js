(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{146:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(1),o=r(9),a=(r(0),r(168)),i={id:"installation",title:"Installation",sidebar_label:"Installation"},c={id:"installation",title:"Installation",description:"### Prerequisites\r",source:"@site/docs\\installation.md",permalink:"/ProceduralLevelGenerator/docs/next/installation",editUrl:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator/tree/docusaurus/docs/installation.md",version:"next",sidebar_label:"Installation",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/ProceduralLevelGenerator/docs/next/introduction"},next:{title:"Guides",permalink:"/ProceduralLevelGenerator/docs/next/guides"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Using the precompiled binaries on Windows",id:"using-the-precompiled-binaries-on-windows",children:[]},{value:"Compiling the source code",id:"compiling-the-source-code",children:[]}],p={rightToc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},".NET 4.6.1 installed")),Object(a.b)("h3",{id:"using-the-precompiled-binaries-on-windows"},"Using the precompiled binaries on Windows"),Object(a.b)("p",null,"Donwload binaries from the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator/releases/latest"}),"latest release"),". Run ",Object(a.b)("em",{parentName:"p"},"GUI/GUI.exe")," to start the main GUI application. Or place the content of  ",Object(a.b)("em",{parentName:"p"},"ProceduralLevelGenerator")," directory next to the main exe file of your ",Object(a.b)("em",{parentName:"p"},".NET")," application and then include all dlls (except the BoostWrapper.dll which is an unmanaged C++ dll) to use the generator from your application."),Object(a.b)("h3",{id:"compiling-the-source-code"},"Compiling the source code"),Object(a.b)("p",null,"Open the ",Object(a.b)("em",{parentName:"p"},"MapGeneration.sln")," file in Visual Studio. Compile the ",Object(a.b)("em",{parentName:"p"},"GUI")," project to get GUI binaries or compile the ",Object(a.b)("em",{parentName:"p"},"MapGeneration")," project to get the layout generator as a ",Object(a.b)("em",{parentName:"p"},"DLL"),". The target platform must be set to ",Object(a.b)("em",{parentName:"p"},"x86"),"."))}s.isMDXComponent=!0},168:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return r?o.a.createElement(m,c({ref:t},p,{components:r})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);