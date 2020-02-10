(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{138:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(9),o=(r(0),r(168)),i={id:"guides",title:"Guides",sidebar_label:"Introduction"},s={id:"version-1.0.6/guides",title:"Guides",description:"This section will walk you through the process of creating *map descriptions*. *Map description* is a data structure that holds all the information about how the final layout should look like. They are used as an input to the layout generator.\r",source:"@site/versioned_docs\\version-1.0.6\\guides.md",permalink:"/ProceduralLevelGenerator/docs/guides",editUrl:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator/tree/docusaurus/versioned_docs/version-1.0.6/guides.md",version:"1.0.6",sidebar_label:"Introduction",sidebar:"version-1.0.6/someSidebar",previous:{title:"Installation",permalink:"/ProceduralLevelGenerator/docs/installation"},next:{title:"Basics",permalink:"/ProceduralLevelGenerator/docs/basicMapDescription"}},c=[{value:"Creating map descriptions",id:"creating-map-descriptions",children:[]},{value:"Using map descriptions",id:"using-map-descriptions",children:[{value:"Using C# api",id:"using-c-api",children:[]},{value:"Using config files",id:"using-config-files",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This section will walk you through the process of creating ",Object(o.b)("em",{parentName:"p"},"map descriptions"),". ",Object(o.b)("em",{parentName:"p"},"Map description")," is a data structure that holds all the information about how the final layout should look like. They are used as an input to the layout generator."),Object(o.b)("h2",{id:"creating-map-descriptions"},"Creating map descriptions"),Object(o.b)("p",null,"Creating map descriptions is a 2-step process:\n1) A graph of room connections is created. The graph describes how many rooms are present in the layout and which rooms are connected by doors or corridors.\n2) Room shapes are assigned to graph nodes. This process is very customizable and will be explained in detail later in this section."),Object(o.b)("h2",{id:"using-map-descriptions"},"Using map descriptions"),Object(o.b)("p",null,"When we have a map description, it is easy to let the layout generator create our layouts."),Object(o.b)("h3",{id:"using-c-api"},"Using C# api"),Object(o.b)("p",null,"The hardest thing is to create an instance of the layout generator. After including the ",Object(o.b)("em",{parentName:"p"},"MapGeneration")," dll, we get access to the ",Object(o.b)("inlineCode",{parentName:"p"},"ChainBasedGenerator")," class. The problem is that this class has quite a lot of generic types and even after getting the parameters right, it is not ready to be used and has to be configured."),Object(o.b)("p",null,"To make things easier, there is a ",Object(o.b)("inlineCode",{parentName:"p"},"LayoutGeneratorFactory")," class with 2 static methods. Using this class, you can easily get a ready-to-be-used instance of the layout generator."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"int x = 10;\nvar layoutGenerator = LayoutGeneratorFactory.GetDefaultChainBasedGenerator<int>();\n// var layoutGenerator = LayoutGeneratorFactory.GetChainBasedGeneratorWithCorridors<int>(/* parameters */);\n")),Object(o.b)("p",null,"And layouts are then generated like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"var mapDescription = /* create map description */;\nvar layouts = layoutGenerator.Generate(mapDescription, 10); // Get 10 layouts\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," You can look at the source code of ",Object(o.b)("inlineCode",{parentName:"p"},"LayoutGeneratorFactory")," to see what needs to be done to create an instance of ",Object(o.b)("inlineCode",{parentName:"p"},"ChainBasedGenerator"),"."),Object(o.b)("h3",{id:"using-config-files"},"Using config files"),Object(o.b)("p",null,"After starting the GUI project, you can easily choose the file that contains your map description and start the generator by clicking the ",Object(o.b)("em",{parentName:"p"},"Generate")," button."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," All config files should be created in the ",Object(o.b)("em",{parentName:"p"},"Resources/Maps")," (map descriptions) or ",Object(o.b)("em",{parentName:"p"},"Resources/Rooms")," (room shapes) folders (relative to the ",Object(o.b)("em",{parentName:"p"},"GUI.exe")," file). Map descriptions that are placed in the ",Object(o.b)("em",{parentName:"p"},"Resources/Maps")," folder will automatically appear in the GUI (",Object(o.b)("em",{parentName:"p"},"Choose from existing")," select box). Config files with room shapes ",Object(o.b)("strong",{parentName:"p"},"MUST")," be placed in the ",Object(o.b)("em",{parentName:"p"},"Resources/Rooms")," folder in order for the config parser to correctly load them."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," All config files from the following tutorials are already present in the ",Object(o.b)("em",{parentName:"p"},"Resources")," folder. They are prefixed with _tutorial__."))}p.isMDXComponent=!0},168:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(h,s({ref:t},l,{components:r})):a.a.createElement(h,s({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);