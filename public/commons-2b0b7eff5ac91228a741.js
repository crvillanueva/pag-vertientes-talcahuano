/*! For license information please see commons-2b0b7eff5ac91228a741.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[351],{1686:function(n,t,e){"use strict";e.d(t,{Z:function(){return Qn}});var r=e(7294),a=e(5444);function i(n){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function c(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){c(n,t,e[t])}))}return n}function s(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,a=!1,i=void 0;try{for(var o,c=n[Symbol.iterator]();!(r=(o=c.next()).done)&&(e.push(o.value),!t||e.length!==t);r=!0);}catch(l){a=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var f=function(){},u={},m={},p={mark:f,measure:f};try{"undefined"!=typeof window&&(u=window),"undefined"!=typeof document&&(m=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&(p=performance)}catch(Zn){}var d=(u.navigator||{}).userAgent,h=void 0===d?"":d,g=u,y=m,b=p,v=(g.document,!!y.documentElement&&!!y.head&&"function"==typeof y.addEventListener&&"function"==typeof y.createElement),w=(~h.indexOf("MSIE")||h.indexOf("Trident/"),"svg-inline--fa"),k="data-fa-i2svg",x=(function(){try{}catch(Zn){return!1}}(),[1,2,3,4,5,6,7,8,9,10]),O=x.concat([11,12,13,14,15,16,17,18,19,20]),_={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},E=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",_.GROUP,_.SWAP_OPACITY,_.PRIMARY,_.SECONDARY].concat(x.map((function(n){return"".concat(n,"x")}))).concat(O.map((function(n){return"w-".concat(n)}))),g.FontAwesomeConfig||{});if(y&&"function"==typeof y.querySelector){[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(n){var t=s(n,2),e=t[0],r=t[1],a=function(n){return""===n||"false"!==n&&("true"===n||n)}(function(n){var t=y.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}(e));null!=a&&(E[r]=a)}))}var z=l({},{familyPrefix:"fa",replacementClass:w,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},E);z.autoReplaceSvg||(z.observeMutations=!1);var j=l({},z);g.FontAwesomeConfig=j;var A=g||{};A.___FONT_AWESOME___||(A.___FONT_AWESOME___={}),A.___FONT_AWESOME___.styles||(A.___FONT_AWESOME___.styles={}),A.___FONT_AWESOME___.hooks||(A.___FONT_AWESOME___.hooks={}),A.___FONT_AWESOME___.shims||(A.___FONT_AWESOME___.shims=[]);var P=A.___FONT_AWESOME___,M=[];v&&((y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState)||y.addEventListener("DOMContentLoaded",(function n(){y.removeEventListener("DOMContentLoaded",n),1,M.map((function(n){return n()}))})));var C,S="pending",N="settled",I="fulfilled",T="rejected",L=function(){},W=void 0!==e.g&&void 0!==e.g.process&&"function"==typeof e.g.process.emit,R="undefined"==typeof setImmediate?setTimeout:setImmediate,D=[];function U(){for(var n=0;n<D.length;n++)D[n][0](D[n][1]);D=[],C=!1}function Y(n,t){D.push([n,t]),C||(C=!0,R(U,0))}function F(n){var t=n.owner,e=t._state,r=t._data,a=n[e],i=n.then;if("function"==typeof a){e=I;try{r=a(r)}catch(Zn){G(i,Zn)}}X(i,r)||(e===I&&B(i,r),e===T&&G(i,r))}function X(n,t){var e;try{if(n===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&("function"==typeof t||"object"===i(t))){var r=t.then;if("function"==typeof r)return r.call(t,(function(r){e||(e=!0,t===r?H(n,r):B(n,r))}),(function(t){e||(e=!0,G(n,t))})),!0}}catch(Zn){return e||G(n,Zn),!0}return!1}function B(n,t){n!==t&&X(n,t)||H(n,t)}function H(n,t){n._state===S&&(n._state=N,n._data=t,Y(q,n))}function G(n,t){n._state===S&&(n._state=N,n._data=t,Y(J,n))}function V(n){n._then=n._then.forEach(F)}function q(n){n._state=I,V(n)}function J(n){n._state=T,V(n),!n._handled&&W&&e.g.process.emit("unhandledRejection",n._data,n)}function K(n){e.g.process.emit("rejectionHandled",n)}function Q(n){if("function"!=typeof n)throw new TypeError("Promise resolver "+n+" is not a function");if(this instanceof Q==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(n,t){function e(n){G(t,n)}try{n((function(n){B(t,n)}),e)}catch(Zn){e(Zn)}}(n,this)}Q.prototype={constructor:Q,_state:S,_then:null,_data:void 0,_handled:!1,then:function(n,t){var e={owner:this,then:new this.constructor(L),fulfilled:n,rejected:t};return!t&&!n||this._handled||(this._handled=!0,this._state===T&&W&&Y(K,this)),this._state===I||this._state===T?Y(F,e):this._then.push(e),e.then},catch:function(n){return this.then(null,n)}},Q.all=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.all().");return new Q((function(t,e){var r=[],a=0;function i(n){return a++,function(e){r[n]=e,--a||t(r)}}for(var o,c=0;c<n.length;c++)(o=n[c])&&"function"==typeof o.then?o.then(i(c),e):r[c]=o;a||t(r)}))},Q.race=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.race().");return new Q((function(t,e){for(var r,a=0;a<n.length;a++)(r=n[a])&&"function"==typeof r.then?r.then(t,e):t(r)}))},Q.resolve=function(n){return n&&"object"===i(n)&&n.constructor===Q?n:new Q((function(t){t(n)}))},Q.reject=function(n){return new Q((function(t,e){e(n)}))};var Z={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $(n){if(n&&v){var t=y.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var e=y.head.childNodes,r=null,a=e.length-1;a>-1;a--){var i=e[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return y.head.insertBefore(t,r),n}}function nn(){for(var n=12,t="";n-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function tn(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function en(n){return Object.keys(n||{}).reduce((function(t,e){return t+"".concat(e,": ").concat(n[e],";")}),"")}function rn(n){return n.size!==Z.size||n.x!==Z.x||n.y!==Z.y||n.rotate!==Z.rotate||n.flipX||n.flipY}function an(n){var t=n.transform,e=n.containerWidth,r=n.iconWidth,a={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(32*t.x,", ").concat(32*t.y,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),c="rotate(".concat(t.rotate," 0 0)");return{outer:a,inner:{transform:"".concat(i," ").concat(o," ").concat(c)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}var on={x:0,y:0,width:"100%",height:"100%"};function cn(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}function ln(n){var t=n.icons,e=t.main,r=t.mask,a=n.prefix,i=n.iconName,o=n.transform,c=n.symbol,s=n.title,f=n.maskId,u=n.titleId,m=n.extra,p=n.watchable,d=void 0!==p&&p,h=r.found?r:e,g=h.width,y=h.height,b="fak"===a,v=b?"":"fa-w-".concat(Math.ceil(g/y*16)),w=[j.replacementClass,i?"".concat(j.familyPrefix,"-").concat(i):"",v].filter((function(n){return-1===m.classes.indexOf(n)})).filter((function(n){return""!==n||!!n})).concat(m.classes).join(" "),x={children:[],attributes:l({},m.attributes,{"data-prefix":a,"data-icon":i,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(y)})},O=b&&!~m.classes.indexOf("fa-fw")?{width:"".concat(g/y*16*.0625,"em")}:{};d&&(x.attributes[k]=""),s&&x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(u||nn())},children:[s]});var _=l({},x,{prefix:a,iconName:i,main:e,mask:r,maskId:f,transform:o,symbol:c,styles:l({},O,m.styles)}),E=r.found&&e.found?function(n){var t,e=n.children,r=n.attributes,a=n.main,i=n.mask,o=n.maskId,c=n.transform,s=a.width,f=a.icon,u=i.width,m=i.icon,p=an({transform:c,containerWidth:u,iconWidth:s}),d={tag:"rect",attributes:l({},on,{fill:"white"})},h=f.children?{children:f.children.map(cn)}:{},g={tag:"g",attributes:l({},p.inner),children:[cn(l({tag:f.tag,attributes:l({},f.attributes,p.path)},h))]},y={tag:"g",attributes:l({},p.outer),children:[g]},b="mask-".concat(o||nn()),v="clip-".concat(o||nn()),w={tag:"mask",attributes:l({},on,{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,y]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:(t=m,"g"===t.tag?t.children:[t])},w]};return e.push(k,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(b,")")},on)}),{children:e,attributes:r}}(_):function(n){var t=n.children,e=n.attributes,r=n.main,a=n.transform,i=en(n.styles);if(i.length>0&&(e.style=i),rn(a)){var o=an({transform:a,containerWidth:r.width,iconWidth:r.width});t.push({tag:"g",attributes:l({},o.outer),children:[{tag:"g",attributes:l({},o.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:l({},r.icon.attributes,o.path)}]}]})}else t.push(r.icon);return{children:t,attributes:e}}(_),z=E.children,A=E.attributes;return _.children=z,_.attributes=A,c?function(n){var t=n.prefix,e=n.iconName,r=n.children,a=n.attributes,i=n.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l({},a,{id:!0===i?"".concat(t,"-").concat(j.familyPrefix,"-").concat(e):i}),children:r}]}]}(_):function(n){var t=n.children,e=n.main,r=n.mask,a=n.attributes,i=n.styles,o=n.transform;if(rn(o)&&e.found&&!r.found){var c={x:e.width/e.height/2,y:.5};a.style=en(l({},i,{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}(_)}var sn=function(){},fn=(j.measurePerformance&&b&&b.mark&&b.measure,function(n,t,e,r){var a,i,o,c=Object.keys(n),l=c.length,s=void 0!==r?function(n,t){return function(e,r,a,i){return n.call(t,e,r,a,i)}}(t,r):t;for(void 0===e?(a=1,o=n[c[0]]):(a=0,o=e);a<l;a++)o=s(o,n[i=c[a]],i,n);return o});function un(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e.skipHooks,a=void 0!==r&&r,i=Object.keys(t).reduce((function(n,e){var r=t[e];return!!r.icon?n[r.iconName]=r.icon:n[e]=r,n}),{});"function"!=typeof P.hooks.addPack||a?P.styles[n]=l({},P.styles[n]||{},i):P.hooks.addPack(n,i),"fas"===n&&un("fa",t)}var mn=P.styles,pn=P.shims,dn=function(){var n=function(n){return fn(mn,(function(t,e,r){return t[r]=fn(e,n,{}),t}),{})};n((function(n,t,e){return t[3]&&(n[t[3]]=e),n})),n((function(n,t,e){var r=t[2];return n[e]=e,r.forEach((function(t){n[t]=e})),n}));var t="far"in mn;fn(pn,(function(n,e){var r=e[0],a=e[1],i=e[2];return"far"!==a||t||(a="fas"),n[r]={prefix:a,iconName:i},n}),{})};dn();P.styles;function hn(n,t,e){if(n&&n[t]&&n[t][e])return{prefix:t,iconName:e,icon:n[t][e]}}function gn(n){var t=n.tag,e=n.attributes,r=void 0===e?{}:e,a=n.children,i=void 0===a?[]:a;return"string"==typeof n?tn(n):"<".concat(t," ").concat(function(n){return Object.keys(n||{}).reduce((function(t,e){return t+"".concat(e,'="').concat(tn(n[e]),'" ')}),"").trim()}(r),">").concat(i.map(gn).join(""),"</").concat(t,">")}var yn=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n?n.toLowerCase().split(" ").reduce((function(n,t){var e=t.toLowerCase().split("-"),r=e[0],a=e.slice(1).join("-");if(r&&"h"===a)return n.flipX=!0,n;if(r&&"v"===a)return n.flipY=!0,n;if(a=parseFloat(a),isNaN(a))return n;switch(r){case"grow":n.size=n.size+a;break;case"shrink":n.size=n.size-a;break;case"left":n.x=n.x-a;break;case"right":n.x=n.x+a;break;case"up":n.y=n.y-a;break;case"down":n.y=n.y+a;break;case"rotate":n.rotate=n.rotate+a}return n}),t):t};function bn(n){this.name="MissingIcon",this.message=n||"Icon unavailable",this.stack=(new Error).stack}bn.prototype=Object.create(Error.prototype),bn.prototype.constructor=bn;var vn={fill:"currentColor"},wn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},kn={tag:"path",attributes:l({},vn,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},xn=l({},wn,{attributeName:"opacity"});l({},vn,{cx:"256",cy:"364",r:"28"}),l({},wn,{attributeName:"r",values:"28;14;28;28;14;28;"}),l({},xn,{values:"1;0;1;1;0;1;"}),l({},vn,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),l({},xn,{values:"1;0;0;0;0;1;"}),l({},vn,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),l({},xn,{values:"0;0;1;1;0;0;"}),P.styles;function On(n){var t=n[0],e=n[1],r=s(n.slice(4),1)[0];return{found:!0,width:t,height:e,icon:Array.isArray(r)?{tag:"g",attributes:{class:"".concat(j.familyPrefix,"-").concat(_.GROUP)},children:[{tag:"path",attributes:{class:"".concat(j.familyPrefix,"-").concat(_.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(j.familyPrefix,"-").concat(_.PRIMARY),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}}}}P.styles;function _n(){var n="fa",t=w,e=j.familyPrefix,r=j.replacementClass,a='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';if(e!==n||r!==t){var i=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),c=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(c,".".concat(r))}return a}function En(){j.autoAddCss&&!Mn&&($(_n()),Mn=!0)}function zn(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map((function(n){return gn(n)}))}}),Object.defineProperty(n,"node",{get:function(){if(v){var t=y.createElement("div");return t.innerHTML=n.html,t.children}}}),n}function jn(n){var t=n.prefix,e=void 0===t?"fa":t,r=n.iconName;if(r)return hn(Pn.definitions,e,r)||hn(P.styles,e,r)}var An,Pn=new(function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.definitions={}}var t,e,r;return t=n,(e=[{key:"add",value:function(){for(var n=this,t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var a=e.reduce(this._pullDefinitions,{});Object.keys(a).forEach((function(t){n.definitions[t]=l({},n.definitions[t]||{},a[t]),un(t,a[t]),dn()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,t){var e=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(e).map((function(t){var r=e[t],a=r.prefix,i=r.iconName,o=r.icon;n[a]||(n[a]={}),n[a][i]=o})),n}}])&&o(t.prototype,e),r&&o(t,r),n}()),Mn=!1,Cn={transform:function(n){return yn(n)}},Sn=(An=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.transform,r=void 0===e?Z:e,a=t.symbol,i=void 0!==a&&a,o=t.mask,c=void 0===o?null:o,s=t.maskId,f=void 0===s?null:s,u=t.title,m=void 0===u?null:u,p=t.titleId,d=void 0===p?null:p,h=t.classes,g=void 0===h?[]:h,y=t.attributes,b=void 0===y?{}:y,v=t.styles,w=void 0===v?{}:v;if(n){var k=n.prefix,x=n.iconName,O=n.icon;return zn(l({type:"icon"},n),(function(){return En(),j.autoA11y&&(m?b["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(d||nn()):(b["aria-hidden"]="true",b.focusable="false")),ln({icons:{main:On(O),mask:c?On(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:x,transform:l({},Z,r),symbol:i,title:m,maskId:f,titleId:d,extra:{attributes:b,styles:w,classes:g}})}))}},function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=(n||{}).icon?n:jn(n||{}),r=t.mask;return r&&(r=(r||{}).icon?r:jn(r||{})),An(e,l({},t,{mask:r}))}),Nn=e(5697),In=e.n(Nn);function Tn(n){return(Tn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function Ln(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Wn(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function Rn(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?Wn(Object(e),!0).forEach((function(t){Ln(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Wn(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function Dn(n,t){if(null==n)return{};var e,r,a=function(n,t){if(null==n)return{};var e,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}function Un(n){return function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Yn(n){return t=n,(t-=0)==t?n:(n=n.replace(/[\-_\s]+(.)?/g,(function(n,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+n.substr(1);var t}function Fn(n){return n.split(";").map((function(n){return n.trim()})).filter((function(n){return n})).reduce((function(n,t){var e,r=t.indexOf(":"),a=Yn(t.slice(0,r)),i=t.slice(r+1).trim();return a.startsWith("webkit")?n[(e=a,e.charAt(0).toUpperCase()+e.slice(1))]=i:n[a]=i,n}),{})}var Xn=!1;try{Xn=!0}catch(Zn){}function Bn(n){return Cn.icon?Cn.icon(n):null===n?null:"object"===Tn(n)&&n.prefix&&n.iconName?n:Array.isArray(n)&&2===n.length?{prefix:n[0],iconName:n[1]}:"string"==typeof n?{prefix:"fas",iconName:n}:void 0}function Hn(n,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ln({},n,t):{}}function Gn(n){var t=n.forwardedRef,e=Dn(n,["forwardedRef"]),r=e.icon,a=e.mask,i=e.symbol,o=e.className,c=e.title,l=e.titleId,s=Bn(r),f=Hn("classes",[].concat(Un(function(n){var t,e=n.spin,r=n.pulse,a=n.fixedWidth,i=n.inverse,o=n.border,c=n.listItem,l=n.flip,s=n.size,f=n.rotation,u=n.pull,m=(Ln(t={"fa-spin":e,"fa-pulse":r,"fa-fw":a,"fa-inverse":i,"fa-border":o,"fa-li":c,"fa-flip-horizontal":"horizontal"===l||"both"===l,"fa-flip-vertical":"vertical"===l||"both"===l},"fa-".concat(s),null!=s),Ln(t,"fa-rotate-".concat(f),null!=f&&0!==f),Ln(t,"fa-pull-".concat(u),null!=u),Ln(t,"fa-swap-opacity",n.swapOpacity),t);return Object.keys(m).map((function(n){return m[n]?n:null})).filter((function(n){return n}))}(e)),Un(o.split(" ")))),u=Hn("transform","string"==typeof e.transform?Cn.transform(e.transform):e.transform),m=Hn("mask",Bn(a)),p=Sn(s,Rn({},f,{},u,{},m,{symbol:i,title:c,titleId:l}));if(!p)return function(){var n;!Xn&&console&&"function"==typeof console.error&&(n=console).error.apply(n,arguments)}("Could not find icon",s),null;var d=p.abstract,h={ref:t};return Object.keys(e).forEach((function(n){Gn.defaultProps.hasOwnProperty(n)||(h[n]=e[n])})),Vn(d[0],h)}Gn.displayName="FontAwesomeIcon",Gn.propTypes={border:In().bool,className:In().string,mask:In().oneOfType([In().object,In().array,In().string]),fixedWidth:In().bool,inverse:In().bool,flip:In().oneOf(["horizontal","vertical","both"]),icon:In().oneOfType([In().object,In().array,In().string]),listItem:In().bool,pull:In().oneOf(["right","left"]),pulse:In().bool,rotation:In().oneOf([0,90,180,270]),size:In().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:In().bool,symbol:In().oneOfType([In().bool,In().string]),title:In().string,transform:In().oneOfType([In().string,In().object]),swapOpacity:In().bool},Gn.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var Vn=function n(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof e)return e;var a=(e.children||[]).map((function(e){return n(t,e)})),i=Object.keys(e.attributes||{}).reduce((function(n,t){var r=e.attributes[t];switch(t){case"class":n.attrs.className=r,delete e.attributes.class;break;case"style":n.attrs.style=Fn(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?n.attrs[t.toLowerCase()]=r:n.attrs[Yn(t)]=r}return n}),{attrs:{}}),o=r.style,c=void 0===o?{}:o,l=Dn(r,["style"]);return i.attrs.style=Rn({},i.attrs.style,{},c),t.apply(void 0,[e.tag,Rn({},i.attrs,{},l)].concat(Un(a)))}.bind(null,r.createElement),qn=e(8014),Jn=function(){return r.createElement("header",null,r.createElement("nav",{className:"navbar"},r.createElement("div",{className:"logo"},r.createElement("svg",{version:"1.1",viewBox:"0 0 85.592 175.57",xmlns:"http://www.w3.org/2000/svg"},r.createElement("g",{transform:"translate(-52.147 -28.45)"},r.createElement("path",{id:"logo-tumbes",d:"m93.981 203.18s1.1415-5.1366-4.2805-10.559c0 0-3.6147.66586-4.5659 2.8537 0 0 .95123 1.4268.66586 1.8073s-6.3732 5.9928-6.7537 5.9928.47561-.76099.47561-1.2366c0-.47562-3.6147-1.8073-5.3269-1.0464-1.7122.76099 1.1415-5.1366 1.0464-5.8976-.09512-.76098-2.5683-3.7098-2.5683-4.2805s.19025-2.0927-2.5683-3.4244c-2.7586-1.3317-4.1854-2.6634-5.5171-1.1415-1.3317 1.522-5.7074-1.9025-5.5171-2.4732s3.8049.38049 3.4244-.66586c-.38049-1.0464-6.0879-4.2805-6.0879-5.422 0-1.1415 2.0927-3.8049 1.9976-5.2318-.09512-1.4268-5.8025 4.1854-5.7074 2.283.09512-1.9025 4.1854-6.944 7.2293-9.6074 3.0439-2.6634 4.1854-4.4708 4.3757-5.9928s1.7122-3.7098 3.8049-5.2318 5.422-4.0903 7.4196-4.0903 4.4708.0951 5.1366-1.522c.66586-1.6171 1.1415-3.8049.57074-4.2805-.57074-.47561-1.522-1.1415-3.0439-1.4268s-3.7098 0-3.8049-.95123c-.09512-.95123-.38049-1.9025.38049-2.3781.76098-.47561 3.2342-.28537 4.1854-.57073.95123-.28537 1.9976-.66587 2.5683-1.4268.57074-.76098.66586-1.8073 0-2.4732-.66586-.66586-.57074-1.522-.47562-2.0927.09512-.57074-.19025-1.0464-1.2366-1.8073-1.0464-.76098-1.4268-1.3317-1.3317-1.8073.09512-.47562.76098-1.2366 1.9025-1.2366 1.1415 0 2.7586.76098 2.7586-.0951 0-.85611-.85611-2.1878-.57074-3.3293.28537-1.1415-1.1415-3.0439-.66586-3.8049.47562-.76098.28537-3.139 1.8073-3.9952 1.522-.85611 2.4732-1.3317 2.9488-2.1878.47562-.85611-1.2366-2.8537-1.4268-3.7098-.19025-.85611.28537-1.7122 1.1415-2.8537.85611-1.1415 1.9025-2.8537 2.0927-3.4244s-.09512-2.283-1.2366-2.8537c-1.1415-.57074-1.9976-.66586-1.9976-1.4268 0-.76099-1.522-1.9976.28537-1.9976s2.0927.85611 3.1391.19025c1.0464-.66586 2.0927-.76098 3.0439-1.6171.95123-.85611 2.0927-1.8073 2.283-2.8537.19025-1.0464 0-2.5683.19025-3.4244s.47562-1.7122.76098-2.5683 0-2.0927-1.1415-5.422c-1.1415-3.3293-1.9025-5.3269-3.0439-6.5635-1.1415-1.2366-3.6147-2.283-4.5659-2.283-.95123 0-.57074-.95123-.19025-1.522.38049-.57074-.57074-2.0927.95123-3.9952 1.522-1.9025 2.5683-3.5195 3.7098-4.4708 1.1415-.95123 3.1391-1.4268 4.2805-2.1878 1.1415-.76098 3.5195-1.9976 4.1854-2.6634s1.3317-2.283 1.7122-3.4244c.38049-1.1415.95123-2.9488.95123-3.7098 0-.76098 0-2.283-.28537-2.8537-.28537-.57074-.66586-.85611 0-1.7122.66586-.85611 2.1878-1.522 2.4732-1.9976.28536-.47562-1.4268-1.8073-1.2366-2.3781.19024-.57074 1.8073-.09512 1.2366-1.9025-.57074-1.8073-2.0927-1.4268-1.6171-2.5683.47562-1.1415.76099-1.0464 1.2366-1.6171.47562-.57074-.38049-.09512-.76098-1.1415-.38049-1.0464.28537-1.8073.76098-2.283.47562-.47562 1.4268-.38049 1.6171-1.6171.19025-1.2366-1.6171-.95123-1.522-1.522.0951-.57074 2.3781-1.7122 4.0903-.57074 1.7122 1.1415 1.6171 3.7098 3.2342 3.7098s2.5683.47562 3.6147-.95123c1.0464-1.4268.76098-1.8073 1.7122-2.283.95123-.47561 2.9488.47562 3.8049 1.0464.8561.57074 1.1415 1.522 2.1878 1.9976 1.0464.47562 2.8537 1.3317 3.7098 1.9025.85611.57074.95123.47562 1.7122 1.7122.76098 1.2366 1.6171 2.4732 2.283 3.0439.66586.57074 1.1415.66586 1.522.95123.3805.28537.85611.57074.95123 1.1415.0951.57074.47562 1.2366.95123 1.9976.47562.76098.47562 1.1415 1.2366 2.283.76098 1.1415 1.1415.95123 1.6171 2.283.47562 1.3317.85611 2.0927.85611 2.8537 0 .76098.0951.57074-.0951 1.7122-.19025 1.1415-.19025.95123-.19025 2.4732 0 1.522.0951 1.3317-.0951 2.8537-.19025 1.522-1.9025 3.3293-.95123 5.8025s-1.8073 1.4268-1.8073 2.9488c0 1.522.38049 5.0415-.57074 6.3732-.95123 1.3317-3.4244 2.283-2.8537 4.0903.57074 1.8073.28537 3.5196-.19024 5.7074-.47562 2.1878-.85611 6.2781-1.0464 8.3708-.19025 2.0927-.47562 3.5196-.19025 5.5171s.38049 4.5659.28537 5.7074c-.0951 1.1415.0951 3.7098-.0951 4.5659-.19025.85611-.47562 1.2366-.3805 2.3781.0951 1.1415.0951 1.4268.19025 2.1878.0951.76098.19025 0 0 1.1415-.19025 1.1415-.0951 1.2366-.38049 2.0927-.28537.85611-.28537 2.1878-1.6171 5.6123-1.3317 3.4244-1.9025 5.422-1.9025 6.8488 0 1.4268-.66586 3.8049-1.0464 4.5659-.3805.76098-.47562 1.0464-.76099 1.8073-.28537.76098-.57074 1.2366-.57074 2.4732 0 1.2366-.19024.95123.28537 2.5683.47562 1.6171.76099 3.2342 2.6634 3.9s3.6147-.3805 5.0415 1.2366c1.4268 1.6171.38049 4.661-.76098 4.661-1.1415 0-2.8537-1.3317-2.8537-1.3317-1.4052 4.0374-2.9764 2.7216-3.8049 1.9976l1.9976-4.3757s-1.7122-1.6171-2.283-.95123c-.57073.66586-3.9952 4.1854-3.9952 4.1854s-.57074 1.9976-1.4268 3.7098c-.8561 1.7122-2.3781 4.0903-3.0439 5.3269-.66586 1.2366-.85611 1.9024-2.1878 3.9952s-2.0927 4.0903-1.9976 4.661c.0951.57073 1.9025 1.522 2.5683 1.9976.66586.47561-1.3317.38049-2.1878 1.2366-.85611.8561-1.2366-.3805-.95123 1.6171.28537 1.9976 1.2366 3.3293 2.8537 3.8049 1.6171.47562 2.283-1.9976 2.283-1.9976l.28537-2.0927 1.3317.0951c1.6454 3.5-.0794 8.58-.0951 9.6074 0 2.0927.0951 6.0879 2.283 7.4196 2.1878 1.3317 1.7122 2.4732 3.1391 3.4244 1.4268.95123 3.1391 1.6171 4.5659 2.3781s3.9 1.7122 5.1366 2.0927c1.2366.38049 3.3293.57073 5.3269 1.4268v6.4684h-42.996z"}))),r.createElement("span",null,"Península de Tumbes")),r.createElement("div",{className:"nav-links"},r.createElement("div",{className:"menu-icon"},r.createElement(Gn,{icon:qn.xiG,size:"1x"})),r.createElement("ul",{className:"nav-items"},r.createElement("li",null,r.createElement(a.rU,{to:"/"},r.createElement(Gn,{icon:qn.J9Y})," Inicio")),r.createElement("li",null,r.createElement(a.rU,{to:"/informacion/"},r.createElement(Gn,{icon:qn.sph}),"¿Qué es una vertiente?")),r.createElement("li",null,r.createElement(a.rU,{to:"/ubicacion/"},r.createElement(Gn,{icon:qn.Wx7}),"Ubicación")),r.createElement("li",null,r.createElement(a.rU,{to:"/geologia/"},r.createElement(Gn,{icon:qn.neB}),"Geología"))))))},Kn=function(){return r.createElement("footer",null,r.createElement("ul",null,r.createElement("li",null,"Cristobal Villanueva Pavez"),r.createElement("li",null,r.createElement(Gn,{icon:qn.FU$,transform:"left-4"}),"cristobaljvp@gmail.com"),r.createElement("li",null,r.createElement(Gn,{icon:qn.j1w,transform:"left-4"}),"+56 9 92864526")),r.createElement("br",null),r.createElement("ul",null,r.createElement("li",null,"Mauro Castillo Carmona"),r.createElement("li",null,r.createElement(Gn,{icon:qn.FU$,transform:"left-4"}),"mau.castillo1708@gmail.com"),r.createElement("li",null,r.createElement(Gn,{icon:qn.j1w,transform:"left-4"}),"+56 9 93106183")))},Qn=function(n){var t=n.children;return r.createElement("div",{className:"layout"},r.createElement(Jn,null),t,r.createElement(Kn,null))}}}]);
//# sourceMappingURL=commons-2b0b7eff5ac91228a741.js.map