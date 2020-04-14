(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var o=n(1),r=n(9),a=(n(0),n(195)),i=n(197),s={id:"how-to-write-documentation",title:"Documentation Guide Lines",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Documentation How To",custom_edit_url:"https://github.com",description:"Writing is an art!",keywords:["sap","cloud","sdk"],image:null},c={id:"dzen/how-to-write-documentation",title:"Documentation Guide Lines",description:"Writing is an art!",source:"@site/docs/dzen/how-to-write-docs.md",permalink:"/ph-stone/docs/dzen/how-to-write-documentation",editUrl:"https://github.com",sidebar_label:"Documentation How To",sidebar:"someSidebar",next:{title:"About SAP Cloud SDK",permalink:"/ph-stone/docs/overview/about"}},u=[{value:"Cloud SDK Documentation Guidelines",id:"cloud-sdk-documentation-guidelines",children:[]},{value:"General notes on Writing",id:"general-notes-on-writing",children:[{value:"Basic recommendations about writing",id:"basic-recommendations-about-writing",children:[]}]}],l={rightToc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"cloud-sdk-documentation-guidelines"},"Cloud SDK Documentation Guidelines"),Object(a.b)("p",null,"Writing documentation seems difficult. Well, it doesn't just seem. It's indeed difficult."),Object(a.b)("h2",{id:"general-notes-on-writing"},"General notes on Writing"),Object(a.b)("p",null,"People who do not write frequently often struggle with putting words to paper. It's normal. A mental-ease soon to come\nwith practice."),Object(a.b)("h3",{id:"basic-recommendations-about-writing"},"Basic recommendations about writing"),Object(a.b)("h4",{id:"write-as-you-speak"},"Write as you speak"),Object(a.b)("p",null,"Imagine you're explaining what Cloud SDK does to your friend with enough tech background but without SAP context. You\nMom would also work."),Object(a.b)("p",null,"Many people think writing is different from speaking. Not that much. Speaking is a natural way to transfer information for\nhumans. Write as you're chatting to someone, answering questions, or asking questions to yourself. Then edit where\nthere's a lack of structure.  ",Object(a.b)("strong",{parentName:"p"},"Such texts are much easier to read and comprehend than those written in cumbersome and\ncomplicated way"),"."),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html"}),"If you need an example of bad documentation check Odata Sepcification"),"\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.odata.org/getting-started/basic-tutorial/"}),"On the other hand, their Getting Started guide is quite OK")),Object(a.b)("h4",{id:"use-simple-words"},"Use simple words"),Object(a.b)("p",null,"Don't try to over-smart yourself. Use the most frequent term for the notion. Check what others use if not sure. Be\nconsistent. Google a couple of options if in doubt. Be careful (cautious) acronyms. RTFM."),Object(a.b)("h4",{id:"more-active-case"},"More active case"),Object(a.b)("p",null,"Documentation is written or someone writes it? Both. When it's you who's writing is, please, use active voice where\nappropriate. Instead of ",Object(a.b)("strong",{parentName:"p"},"This feature was developed by us so that you are made happy")," try to use smth like this ",Object(a.b)("strong",{parentName:"p"},"We\ndeveloped this feature to make you happy"),". We naturally speak in an active voice. When appropriate passive voice if fine."),Object(a.b)("h4",{id:"use-short-sentences"},"Use short sentences"),Object(a.b)("p",null,"Make sentences as long as needed, but as short as possible. If you have a second subordinate clause something is\ndefinitely getting wrong."),Object(a.b)("h4",{id:"use-examples"},"Use examples"),Object(a.b)("p",null,"They are better than many abstract terms following each other. Our minds were not made for this kind of work in the\nfirst place. A good example helps connecting dots between concepts and builds beautiful memory associations."),Object(a.b)("h4",{id:"build-upon-the-context"},"Build upon the context"),Object(a.b)("p",null,"The same as defining a function for a code reusability context allows us to re-use already introduced concepts. It makes\nthe explanation more concise, easy to read and allows for scalable writing. Make sure there's just enough context introduced\nand provide links or reminders where it might be lacking."),Object(a.b)("h4",{id:"use-spelling-and-grammar-checking"},"Use spelling and grammar checking"),Object(a.b)("p",null,"Linting, code style, static types checking, typos. Writing is no different from coding here. I found 16 issues in this\ndocument after checking it with free version of ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.grammarly.com/"}),"Grammarly")," ."),Object(a.b)("h4",{id:"steal-relentlessly"},'"Steal" relentlessly'),Object(a.b)("p",null,"Think if someone has already documented what you now want to document. Use it as an example! Take parts of it if\nrelevant. Be mindful and check copywrites if copying too much. Bookmark a couple of favorite documentation web-sites\nand visit them for inspiration. Think of Google Cloud SDK, Graph QL, React, etc..."),Object(a.b)("h4",{id:"ask-for-review"},"Ask for review"),Object(a.b)("p",null,"Yeah. Pull requests a new way."),Object(a.b)("h4",{id:"avoid-variant-reading"},"Avoid variant reading"),Object(a.b)("p",null,"Make sure you'll be understood one way and the one way only. For example, try to understand and make a single\ninterpretation for ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"http://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.html#sec_ControlInformationtypeodatatype"}),"odata.type meta\nfield"),". Don't spend too much time on it..."),Object(a.b)("h4",{id:"mvp"},"MVP"),Object(a.b)("p",null,"Don't be hard on yourself. Make smth imperfect and improve with every versions. Any documentation is better than no\ndocumentation. Use feedback to iterate. Involve collaborators. We're all not writers here."),Object(a.b)("h4",{id:"inverted-pyramid-style"},"Inverted Pyramid Style"),Object(a.b)("p",null,"Think a bit before getting to the text editor. Or start with an outline. Same as with structuring your class methods and\nvariables it makes eventual writing much simpler and often faster. Here's a method from a journalism world that enriches\nthe coding paradigm example I used before with valuable context. ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Inverted_pyramid_(journalism)"}),"It's called inverted pyramid and might be useful for\ndocumentation, in the same way, it's useful for news.")),Object(a.b)("img",{alt:"Inverted Pyramid of writing",src:Object(i.a)("img/docs/inverted-pyramid.png")}),";")}d.isMDXComponent=!0},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},d=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.a.createElement(b,s({ref:t},u,{components:n})):r.a.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},196:function(e,t,n){"use strict";var o=n(0),r=n(51);t.a=function(){return Object(o.useContext)(r.a)}},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(215);var o=n(196);function r(e){var t=(Object(o.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},215:function(e,t,n){"use strict";var o=n(17),r=n(37),a=n(216),i="".startsWith;o(o.P+o.F*n(217)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),o=String(e);return i?i.call(t,o,n):t.slice(n,n+o.length)===o}})},216:function(e,t,n){var o=n(70),r=n(23);e.exports=function(e,t,n){if(o(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(e))}},217:function(e,t,n){var o=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[o]=!1,!"/./"[e](t)}catch(r){}}return!0}}}]);