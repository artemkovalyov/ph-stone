/*! For license information please see 2.e7a3ae33.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{156:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=o.a.createContext({}),s=function(t){var e=o.a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):c({},e,{},t)),n},f=function(t){var e=s(t.components);return o.a.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},h=Object(r.forwardRef)((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,a=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),f=s(n),h=r,d=f["".concat(a,".").concat(h)]||f[h]||p[h]||i;return n?o.a.createElement(d,c({ref:e},u,{components:n})):o.a.createElement(d,c({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=h;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},164:function(t,e,n){"use strict";e.a=()=>null},168:function(t,e,n){"use strict";var r=n(19);n.d(e,"a",(function(){return r.c})),n.d(e,"b",(function(){return r.d}))},169:function(t,e,n){var r=n(52);r(r.S+r.F,"Object",{assign:n(177)})},170:function(t,e,n){"use strict";var r=n(52),o=n(54),i=n(175),a="".startsWith;r(r.P+r.F*n(176)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return a?a.call(e,r,n):e.slice(n,n+r.length)===r}})},171:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(0),a=p(i),c=p(n(158)),l=p(n(8)),u=p(n(179)),s=p(n(180)),f=n(181);function p(t){return t&&t.__esModule?t:{default:t}}var h=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!t.checked&&!t.defaultChecked),n.state={checked:!(!t.checked&&!t.defaultChecked),hasFocus:!1},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidUpdate",value:function(t){t.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(t){var e=this.input;if(t.target!==e&&!this.moved)return this.previouslyChecked=e.checked,t.preventDefault(),e.focus(),void e.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:e.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(t){this.startX=(0,f.pointerCoord)(t).x,this.activated=!0}},{key:"handleTouchMove",value:function(t){if(this.activated&&(this.moved=!0,this.startX)){var e=(0,f.pointerCoord)(t).x;this.state.checked&&e+15<this.startX?(this.setState({checked:!1}),this.startX=e,this.activated=!0):e-15>this.startX&&(this.setState({checked:!0}),this.startX=e,this.activated=e<this.startX+5)}}},{key:"handleTouchEnd",value:function(t){if(this.moved){var e=this.input;if(t.preventDefault(),this.startX){var n=(0,f.pointerCoord)(t).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,e.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,e.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(t){var e=this.props.onFocus;e&&e(t),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(t){var e=this.props.onBlur;e&&e(t),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(t){var n=this.props.icons;return n?void 0===n[t]?e.defaultProps.icons[t]:n[t]:null}},{key:"render",value:function(){var t=this,e=this.props,n=e.className,o=(e.icons,function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(e,["className","icons"])),i=(0,c.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return a.default.createElement("div",{className:i,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},a.default.createElement("div",{className:"react-toggle-track"},a.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),a.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),a.default.createElement("div",{className:"react-toggle-thumb"}),a.default.createElement("input",r({},o,{ref:function(e){t.input=e},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),e}(i.PureComponent);e.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:a.default.createElement(u.default,null),unchecked:a.default.createElement(s.default,null)}},h.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},172:function(t,e){e.f={}.propertyIsEnumerable},173:function(t,e,n){var r=n(20),o=n(55),i=n(11)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},175:function(t,e,n){var r=n(173),o=n(37);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(t))}},176:function(t,e,n){var r=n(11)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(o){}}return!0}},177:function(t,e,n){"use strict";var r=n(12),o=n(36),i=n(178),a=n(172),c=n(53),l=n(56),u=Object.assign;t.exports=!u||n(35)((function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=r}))?function(t,e){for(var n=c(t),u=arguments.length,s=1,f=i.f,p=a.f;u>s;)for(var h,d=l(arguments[s++]),y=f?o(d).concat(f(d)):o(d),v=y.length,g=0;v>g;)h=y[g++],r&&!p.call(d,h)||(n[h]=d[h]);return n}:u},178:function(t,e){e.f=Object.getOwnPropertySymbols},179:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(0),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(){return i.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},i.default.createElement("title",null,"switch-check"),i.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},180:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(0),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(){return i.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},i.default.createElement("title",null,"switch-x"),i.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},181:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.pointerCoord=function(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var n=e[0];return{x:n.clientX,y:n.clientY}}var r=t.pageX;if(void 0!==r)return{x:r,y:t.pageY}}return{x:0,y:0}}},182:function(t,e,n){"use strict";var r=n(173),o=n(21),i=n(217),a=n(199),c=n(54),l=n(200),u=n(201),s=n(35),f=Math.min,p=[].push,h="length",d=!s((function(){RegExp(4294967295,"y")}));n(202)("split",2,(function(t,e,n,s){var y;return y="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[h]||2!="ab".split(/(?:ab)*/)[h]||4!=".".split(/(.?)(.?)/)[h]||".".split(/()()/)[h]>1||"".split(/.?/)[h]?function(t,e){var o=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(o,t,e);for(var i,a,c,l=[],s=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,d=void 0===e?4294967295:e>>>0,y=new RegExp(t.source,s+"g");(i=u.call(y,o))&&!((a=y.lastIndex)>f&&(l.push(o.slice(f,i.index)),i[h]>1&&i.index<o[h]&&p.apply(l,i.slice(1)),c=i[0][h],f=a,l[h]>=d));)y.lastIndex===i.index&&y.lastIndex++;return f===o[h]?!c&&y.test("")||l.push(""):l.push(o.slice(f)),l[h]>d?l.slice(0,d):l}:"0".split(void 0,0)[h]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var o=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,o,r):y.call(String(o),n,r)},function(t,e){var r=s(y,t,this,e,y!==n);if(r.done)return r.value;var u=o(t),p=String(this),h=i(u,RegExp),v=u.unicode,g=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(d?"y":"g"),m=new h(d?u:"^(?:"+u.source+")",g),b=void 0===e?4294967295:e>>>0;if(0===b)return[];if(0===p.length)return null===l(m,p)?[p]:[];for(var k=0,x=0,E=[];x<p.length;){m.lastIndex=d?x:0;var O,w=l(m,d?p:p.slice(x));if(null===w||(O=f(c(m.lastIndex+(d?0:x)),p.length))===k)x=a(p,x,v);else{if(E.push(p.slice(k,x)),E.length===b)return E;for(var S=1;S<=w.length-1;S++)if(E.push(w[S]),E.length===b)return E;x=k=O}}return E.push(p.slice(k)),E}]}))},185:function(t,e,n){var r=n(55),o=n(11)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(n){}}(e=Object(t),o))?n:i?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},186:function(t,e,n){"use strict";var r=n(52),o=n(64)(!0);r(r.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(58)("includes")},187:function(t,e,n){"use strict";var r=n(52),o=n(175);r(r.P+r.F*n(176)("includes"),"String",{includes:function(t){return!!~o(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},188:function(t,e,n){"use strict";var r=n(21),o=n(53),i=n(54),a=n(38),c=n(199),l=n(200),u=Math.max,s=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g;n(202)("replace",2,(function(t,e,n,d){return[function(r,o){var i=t(this),a=null==r?void 0:r[e];return void 0!==a?a.call(r,i,o):n.call(String(i),r,o)},function(t,e){var o=d(n,t,this,e);if(o.done)return o.value;var f=r(t),p=String(this),h="function"==typeof e;h||(e=String(e));var v=f.global;if(v){var g=f.unicode;f.lastIndex=0}for(var m=[];;){var b=l(f,p);if(null===b)break;if(m.push(b),!v)break;""===String(b[0])&&(f.lastIndex=c(p,i(f.lastIndex),g))}for(var k,x="",E=0,O=0;O<m.length;O++){b=m[O];for(var w=String(b[0]),S=u(s(a(b.index),p.length),0),T=[],j=1;j<b.length;j++)T.push(void 0===(k=b[j])?k:String(k));var _=b.groups;if(h){var P=[w].concat(T,S,p);void 0!==_&&P.push(_);var C=String(e.apply(void 0,P))}else C=y(w,p,S,T,_,e);S>=E&&(x+=p.slice(E,S)+C,E=S+w.length)}return x+p.slice(E)}];function y(t,e,r,i,a,c){var l=r+t.length,u=i.length,s=h;return void 0!==a&&(a=o(a),s=p),n.call(c,s,(function(n,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(l);case"<":c=a[o.slice(1,-1)];break;default:var s=+o;if(0===s)return n;if(s>u){var p=f(s/10);return 0===p?n:p<=u?void 0===i[p-1]?o.charAt(1):i[p-1]+o.charAt(1):n}c=i[s-1]}return void 0===c?"":c}))}}))},189:function(t,e,n){"use strict";var r=n(21),o=n(54),i=n(199),a=n(200);n(202)("match",1,(function(t,e,n,c){return[function(n){var r=t(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=c(n,t,this);if(e.done)return e.value;var l=r(t),u=String(this);if(!l.global)return a(l,u);var s=l.unicode;l.lastIndex=0;for(var f,p=[],h=0;null!==(f=a(l,u));){var d=String(f[0]);p[h]=d,""===d&&(l.lastIndex=i(u,o(l.lastIndex),s)),h++}return 0===h?null:p}]}))},190:function(t,e,n){var r=n(7),o=n(220),i=n(22).f,a=n(223).f,c=n(173),l=n(204),u=r.RegExp,s=u,f=u.prototype,p=/a/g,h=/a/g,d=new u(p)!==p;if(n(12)&&(!d||n(35)((function(){return h[n(11)("match")]=!1,u(p)!=p||u(h)==h||"/a/i"!=u(p,"i")})))){u=function(t,e){var n=this instanceof u,r=c(t),i=void 0===e;return!n&&r&&t.constructor===u&&i?t:o(d?new s(r&&!i?t.source:t,e):s((r=t instanceof u)?t.source:t,r&&i?l.call(t):e),n?this:f,u)};for(var y=function(t){t in u||i(u,t,{configurable:!0,get:function(){return s[t]},set:function(e){s[t]=e}})},v=a(s),g=0;v.length>g;)y(v[g++]);f.constructor=u,u.prototype=f,n(23)(r,"RegExp",u)}n(224)("RegExp")},191:function(t,e,n){var r;r=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(t),r.removeAllRanges(),r.addRange(o),e=r.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},function(t,e,n){var r=n(3),o=n(4);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(r.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}(t,e,n);if(r.string(t))return function(t,e,n){return o(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var r=n(5);function o(t,e,n,r,o){var a=i.apply(this,arguments);return t.addEventListener(n,a,o),{destroy:function(){t.removeEventListener(n,a,o)}}}function i(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}t.exports=function(t,e,n,r,i){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return o(t,e,n,r,i)})))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=o()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=o()(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}(),l=n(1),u=n.n(l),s=n(2),f=n.n(s),p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),d=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return r.resolveOptions(n),r.listenClick(t),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),h(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===p(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=f()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new c({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return y("action",t)}},{key:"defaultTarget",value:function(t){var e=y("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return y("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),e}(u.a);function y(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}e.default=d}]).default},t.exports=r()},192:function(t,e){t.exports.parse=function(t){var e=t.split(",").map((function(t){return function(t){if(/^-?\d+$/.test(t))return parseInt(t,10);var e;if(e=t.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=e[1],r=e[2],o=e[3];if(n&&o){var i=[],a=(n=parseInt(n))<(o=parseInt(o))?1:-1;"-"!=r&&".."!=r&&"\u2025"!=r||(o+=a);for(var c=n;c!=o;c+=a)i.push(c);return i}}return[]}(t)}));return 0===e.length?[]:1===e.length?Array.isArray(e[0])?e[0]:e:e.reduce((function(t,e){return Array.isArray(t)||(t=[t]),Array.isArray(e)||(e=[e]),t.concat(e)}))}},193:function(t,e){t.exports={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]}},194:function(t,e,n){"use strict";n.d(e,"b",(function(){return a}));var r=n(39),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i=n(0),a={Prism:r.a,theme:o};function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var u=/\r\n|\r|\n/,s=function(t){0===t.length?t.push({types:["plain"],content:"",empty:!0}):1===t.length&&""===t[0].content&&(t[0].empty=!0)},f=function(t,e){var n=t.length;return n>0&&t[n-1]===e?t:t.concat(e)},p=function(t,e){var n=t.plain,r=Object.create(null),o=t.styles.reduce((function(t,n){var r=n.languages,o=n.style;return r&&!r.includes(e)||n.types.forEach((function(e){var n=l({},t[e],o);t[e]=n})),t}),r);return o.root=n,o.plain=l({},n,{backgroundColor:null}),o};function h(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&-1===e.indexOf(r)&&(n[r]=t[r]);return n}var d=function(t){function e(){for(var e=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];t.apply(this,n),c(this,"getThemeDict",(function(t){if(void 0!==e.themeDict&&t.theme===e.prevTheme&&t.language===e.prevLanguage)return e.themeDict;e.prevTheme=t.theme,e.prevLanguage=t.language;var n=t.theme?p(t.theme,t.language):void 0;return e.themeDict=n})),c(this,"getLineProps",(function(t){var n=t.key,r=t.className,o=t.style,i=l({},h(t,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=e.getThemeDict(e.props);return void 0!==a&&(i.style=a.plain),void 0!==o&&(i.style=void 0!==i.style?l({},i.style,o):o),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i})),c(this,"getStyleForToken",(function(t){var n=t.types,r=t.empty,o=n.length,i=e.getThemeDict(e.props);if(void 0!==i){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return i[n[0]];var a=r?{display:"inline-block"}:{},c=n.map((function(t){return i[t]}));return Object.assign.apply(Object,[a].concat(c))}})),c(this,"getTokenProps",(function(t){var n=t.key,r=t.className,o=t.style,i=t.token,a=l({},h(t,["key","className","style","token"]),{className:"token "+i.types.join(" "),children:i.content,style:e.getStyleForToken(i),key:void 0});return void 0!==o&&(a.style=void 0!==a.style?l({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a}))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.render=function(){var t=this.props,e=t.Prism,n=t.language,r=t.code,o=t.children,i=this.getThemeDict(this.props),a=e.languages[n];return o({tokens:function(t){for(var e=[[]],n=[t],r=[0],o=[t.length],i=0,a=0,c=[],l=[c];a>-1;){for(;(i=r[a]++)<o[a];){var p=void 0,h=e[a],d=n[a][i];if("string"==typeof d?(h=a>0?h:["plain"],p=d):(h=f(h,d.type),d.alias&&(h=f(h,d.alias)),p=d.content),"string"==typeof p){var y=p.split(u),v=y.length;c.push({types:h,content:y[0]});for(var g=1;g<v;g++)s(c),l.push(c=[]),c.push({types:h,content:y[g]})}else a++,e.push(h),n.push(p),r.push(0),o.push(p.length)}a--,e.pop(),n.pop(),r.pop(),o.pop()}return s(c),l}(void 0!==a?e.tokenize(r,a,n):[r]),className:"prism-code language-"+n,style:void 0!==i?i.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},e}(i.Component);e.a=d},199:function(t,e,n){"use strict";var r=n(218)(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},200:function(t,e,n){"use strict";var r=n(185),o=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},201:function(t,e,n){"use strict";var r,o,i=n(204),a=RegExp.prototype.exec,c=String.prototype.replace,l=a,u=(r=/a/,o=/b*/g,a.call(r,"a"),a.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),s=void 0!==/()??/.exec("")[1];(u||s)&&(l=function(t){var e,n,r,o,l=this;return s&&(n=new RegExp("^"+l.source+"$(?!\\s)",i.call(l))),u&&(e=l.lastIndex),r=a.call(l,t),u&&r&&(l.lastIndex=l.global?r.index+r[0].length:e),s&&r&&r.length>1&&c.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=l},202:function(t,e,n){"use strict";n(219);var r=n(23),o=n(9),i=n(35),a=n(37),c=n(11),l=n(201),u=c("species"),s=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=c(t),h=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),d=h?!i((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[p](""),!e})):void 0;if(!h||!d||"replace"===t&&!s||"split"===t&&!f){var y=/./[p],v=n(a,p,""[t],(function(t,e,n,r,o){return e.exec===l?h&&!o?{done:!0,value:y.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),g=v[0],m=v[1];r(String.prototype,t,g),o(RegExp.prototype,p,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},204:function(t,e,n){"use strict";var r=n(21);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},217:function(t,e,n){var r=n(21),o=n(60),i=n(11)("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||null==(n=r(a)[i])?e:o(n)}},218:function(t,e,n){var r=n(38),o=n(37);t.exports=function(t){return function(e,n){var i,a,c=String(o(e)),l=r(n),u=c.length;return l<0||l>=u?t?"":void 0:(i=c.charCodeAt(l))<55296||i>56319||l+1===u||(a=c.charCodeAt(l+1))<56320||a>57343?t?c.charAt(l):i:t?c.slice(l,l+2):a-56320+(i-55296<<10)+65536}}},219:function(t,e,n){"use strict";var r=n(201);n(52)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},220:function(t,e,n){var r=n(20),o=n(221).set;t.exports=function(t,e,n){var i,a=e.constructor;return a!==n&&"function"==typeof a&&(i=a.prototype)!==n.prototype&&r(i)&&o&&o(t,i),t}},221:function(t,e,n){var r=n(20),o=n(21),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(59)(Function.call,n(222).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},222:function(t,e,n){var r=n(172),o=n(41),i=n(25),a=n(62),c=n(14),l=n(61),u=Object.getOwnPropertyDescriptor;e.f=n(12)?u:function(t,e){if(t=i(t),e=a(e,!0),l)try{return u(t,e)}catch(n){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},223:function(t,e,n){var r=n(63),o=n(42).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},224:function(t,e,n){"use strict";var r=n(7),o=n(22),i=n(12),a=n(11)("species");t.exports=function(t){var e=r[t];i&&e&&!e[a]&&o.f(e,a,{configurable:!0,get:function(){return this}})}}}]);