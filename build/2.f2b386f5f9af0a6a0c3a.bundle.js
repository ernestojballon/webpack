(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{34:function(e,n,t){var r=t(35),o=t(36);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},35:function(e,n,i){"use strict";var t,r,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},a=(r={},function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}),l=[];function d(e){for(var n=-1,t=0;t<l.length;t++)if(l[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],o=0;o<e.length;o++){var i=e[o],a=n.base?i[0]+n.base:i[0],c=t[a]||0,s="".concat(a," ").concat(c);t[a]=c+1;var u=d(s),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(l[u].references++,l[u].updater(f)):l.push({identifier:s,updater:function(n,e){var t,r,o;{var i;o=e.singleton?(i=m++,t=h=h||p(e),r=v.bind(null,t,i,!1),v.bind(null,t,i,!0)):(t=p(e),r=function(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media");i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */"));if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,t,e),function(){!function(e){if(null===e.parentNode)return;e.parentNode.removeChild(e)}(t)})}return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}(f,n),references:1}),r.push(s)}return r}function p(e){var n,t=document.createElement("style"),r=e.attributes||{};if(void 0!==r.nonce||(n=i.nc)&&(r.nonce=n),Object.keys(r).forEach(function(e){t.setAttribute(e,r[e])}),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var c,u=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function v(e,n,t,r){var o,i,a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;e.styleSheet?e.styleSheet.cssText=u(n,a):(o=document.createTextNode(a),(i=e.childNodes)[n]&&e.removeChild(i[n]),i.length?e.insertBefore(o,i[n]):e.appendChild(o))}var h=null,m=0;e.exports=function(e,a){(a=a||{}).singleton||"boolean"==typeof a.singleton||(a.singleton=o());var c=s(e=e||[],a);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<c.length;n++){var t=d(c[n]);l[t].references--}for(var r=s(e,a),o=0;o<c.length;o++){var i=d(c[o]);0===l[i].references&&(l[i].updater(),l.splice(i,1))}c=r}}}},36:function(e,n,t){(n=t(37)(!1)).push([e.i,"body{\n  background:yellow;\n}",""]),e.exports=n},37:function(e,n,t){"use strict";e.exports=function(t){var s=[];return s.toString=function(){return this.map(function(e){var n=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=function(e){var n=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n);return"/*# ".concat(t," */")}(r),i=r.sources.map(function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")});return[t].concat(i).concat([o]).join("\n")}return[t].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n}).join("")},s.i=function(e,n,t){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(t)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);t&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),s.push(c))}},s}}}]);