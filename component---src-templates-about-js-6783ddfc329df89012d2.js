(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/b8u":function(i,a,t){var r=t("STAE");i.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"0rvr":function(i,a,t){var r=t("glrk"),o=t("O741");i.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var i,a=!1,t={};try{(i=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(t,[]),a=t instanceof Array}catch(n){}return function(t,n){return r(t),o(n),a?i.call(t,n):t.__proto__=n,t}}():void 0)},"2Zix":function(i,a,t){var r=t("NC/Y");i.exports=/MSIE|Trident/.test(r)},"4WOD":function(i,a,t){var r=t("UTVS"),o=t("ewvW"),n=t("93I0"),e=t("4Xet"),x=n("IE_PROTO"),s=Object.prototype;i.exports=e?Object.getPrototypeOf:function(i){return i=o(i),r(i,x)?i[x]:"function"==typeof i.constructor&&i instanceof i.constructor?i.constructor.prototype:i instanceof Object?s:null}},"4Xet":function(i,a,t){var r=t("0Dky");i.exports=!r((function(){function i(){}return i.prototype.constructor=null,Object.getPrototypeOf(new i)!==i.prototype}))},"67WC":function(i,a,t){"use strict";var r,o=t("qYE9"),n=t("g6v/"),e=t("2oRo"),x=t("hh1v"),s=t("UTVS"),k=t("9d/t"),m=t("kRJp"),p=t("busE"),c=t("m/L8").f,l=t("4WOD"),f=t("0rvr"),y=t("tiKp"),h=t("kOOl"),u=e.Int8Array,d=u&&u.prototype,A=e.Uint8ClampedArray,E=A&&A.prototype,G=u&&l(u),D=d&&l(d),b=Object.prototype,V=b.isPrototypeOf,B=y("toStringTag"),v=h("TYPED_ARRAY_TAG"),S=o&&!!f&&"Opera"!==k(e.opera),T=!1,g={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},F={BigInt64Array:8,BigUint64Array:8},O=function(i){if(!x(i))return!1;var a=k(i);return s(g,a)||s(F,a)};for(r in g)e[r]||(S=!1);if((!S||"function"!=typeof G||G===Function.prototype)&&(G=function(){throw TypeError("Incorrect invocation")},S))for(r in g)e[r]&&f(e[r],G);if((!S||!D||D===b)&&(D=G.prototype,S))for(r in g)e[r]&&f(e[r].prototype,D);if(S&&l(E)!==D&&f(E,D),n&&!s(D,B))for(r in T=!0,c(D,B,{get:function(){return x(this)?this[v]:void 0}}),g)e[r]&&m(e[r],v,r);i.exports={NATIVE_ARRAY_BUFFER_VIEWS:S,TYPED_ARRAY_TAG:T&&v,aTypedArray:function(i){if(O(i))return i;throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(i){if(f){if(V.call(G,i))return i}else for(var a in g)if(s(g,r)){var t=e[a];if(t&&(i===t||V.call(t,i)))return i}throw TypeError("Target is not a typed array constructor")},exportTypedArrayMethod:function(i,a,t){if(n){if(t)for(var r in g){var o=e[r];if(o&&s(o.prototype,i))try{delete o.prototype[i]}catch(x){}}D[i]&&!t||p(D,i,t?a:S&&d[i]||a)}},exportTypedArrayStaticMethod:function(i,a,t){var r,o;if(n){if(f){if(t)for(r in g)if((o=e[r])&&s(o,i))try{delete o[i]}catch(x){}if(G[i]&&!t)return;try{return p(G,i,t?a:S&&G[i]||a)}catch(x){}}for(r in g)!(o=e[r])||o[i]&&!t||p(o,i,a)}},isView:function(i){if(!x(i))return!1;var a=k(i);return"DataView"===a||s(g,a)||s(F,a)},isTypedArray:O,TypedArray:G,TypedArrayPrototype:D}},"9d/t":function(i,a,t){var r=t("AO7/"),o=t("xrYK"),n=t("tiKp")("toStringTag"),e="Arguments"==o(function(){return arguments}());i.exports=r?o:function(i){var a,t,r;return void 0===i?"Undefined":null===i?"Null":"string"==typeof(t=function(i,a){try{return i[a]}catch(t){}}(a=Object(i),n))?t:e?o(a):"Object"==(r=o(a))&&"function"==typeof a.callee?"Arguments":r}},"AO7/":function(i,a,t){var r={};r[t("tiKp")("toStringTag")]="z",i.exports="[object z]"===String(r)},BNF5:function(i,a,t){var r=t("NC/Y").match(/firefox\/(\d+)/i);i.exports=!!r&&+r[1]},EnGO:function(i,a,t){"use strict";t.r(a);var r=t("dI71"),o=t("q1tI"),n=t.n(o),e=t("83Zx"),x=(t("e+Ya"),t("lPHp")),s=t.n(x),k=t("eJw8"),m=t("TJpk"),p=t.n(m),c=t("S6qR"),l=t.n(c),f=function(i){function a(){return i.apply(this,arguments)||this}Object(r.a)(a,i);var t=a.prototype;return t.componentDidMount=function(){s.a.loadAnimation({container:document.getElementById("about-lottie"),renderer:"svg",loop:!0,autoplay:!0,animationData:k})},t.render=function(){var i=this.props.data.markdownRemark;return n.a.createElement(e.a,null,n.a.createElement(p.a,{title:"About | "+l.a.siteTitle+" – Software Engineer"}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{id:"about-lottie"}),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:i.html}})))},a}(n.a.Component);a.default=f},IZzc:function(i,a,t){"use strict";var r=t("67WC"),o=t("2oRo"),n=t("0Dky"),e=t("HAuM"),x=t("UMSQ"),s=t("rdv8"),k=t("BNF5"),m=t("2Zix"),p=t("LQDL"),c=t("USzg"),l=r.aTypedArray,f=r.exportTypedArrayMethod,y=o.Uint16Array,h=y&&y.prototype.sort,u=!!h&&!n((function(){var i=new y(2);i.sort(null),i.sort({})})),d=!!h&&!n((function(){if(p)return p<74;if(k)return k<67;if(m)return!0;if(c)return c<602;var i,a,t=new y(516),r=Array(516);for(i=0;i<516;i++)a=i%4,t[i]=515-i,r[i]=i-2*a+3;for(t.sort((function(i,a){return(i/4|0)-(a/4|0)})),i=0;i<516;i++)if(t[i]!==r[i])return!0}));f("sort",(function(i){if(void 0!==i&&e(i),d)return h.call(this,i);l(this);var a,t=x(this.length),r=Array(t);for(a=0;a<t;a++)r[a]=this[a];for(r=s(this,function(i){return function(a,t){return void 0!==i?+i(a,t)||0:t!=t?-1:a!=a?1:0===a&&0===t?1/a>0&&1/t<0?1:-1:a>t}}(i)),a=0;a<t;a++)this[a]=r[a];return this}),!d||u)},O741:function(i,a,t){var r=t("hh1v");i.exports=function(i){if(!r(i)&&null!==i)throw TypeError("Can't set "+String(i)+" as a prototype");return i}},STAE:function(i,a,t){var r=t("LQDL"),o=t("0Dky");i.exports=!!Object.getOwnPropertySymbols&&!o((function(){var i=Symbol();return!String(i)||!(Object(i)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},USzg:function(i,a,t){var r=t("NC/Y").match(/AppleWebKit\/(\d+)\./);i.exports=!!r&&+r[1]},"e+Ya":function(i,a,t){},eJw8:function(i){i.exports=JSON.parse('{"v":"5.5.1","fr":29.9700012207031,"ip":0,"op":150.000006109625,"w":500,"h":500,"nm":"empty notification","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"coffee-2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[195,260.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0]],"o":[[0,0]],"v":[[174.5,23.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.043137254902,0.035294117647,0.039215686275,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 2","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-2.5,6.5],[0,0]],"o":[[0,0],[2.5,-6.5],[0,0]],"v":[[96,-1],[95,-18],[91,-38]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":75,"s":[0]},{"t":95.0000038694293,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":85,"s":[0]},{"t":105.000004276738,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0.043137254902,0.035294117647,0.039215686275,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,50],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":4,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":75.0000030548126,"op":150.000006109625,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"coffee-1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[195,260.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0]],"o":[[0,0]],"v":[[174.5,23.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.043137254902,0.035294117647,0.039215686275,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 2","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-2.5,6.5],[0,0]],"o":[[0,0],[2.5,-6.5],[0,0]],"v":[[96,-1],[95,-18],[91,-38]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":20.0000008146167,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[0]},{"t":30.0000012219251,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0.043137254902,0.035294117647,0.039215686275,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,50],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":4,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150.000006109625,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"coffee/Empty notification animation Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[293,270,0],"ix":2},"a":{"a":0,"k":[13,7,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.46,-0.346],[0.961,0.173],[-0.126,1.246],[-0.645,-0.545],[0,-0.703]],"o":[[-0.823,0.617],[0.544,-1.453],[0.661,-0.041],[0.396,0.335],[0,0.825]],"v":[[9.778,0.16],[6.518,0.509],[7.456,-3.681],[9.873,-3.122],[10.463,-1.58]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0.576,0.487],[0.929,-0.033],[0,0],[0,0],[-9.755,-0.45],[-1.429,2.463],[-0.911,0],[-0.891,0.665],[0,1.802]],"o":[[-1.102,-0.932],[0.005,-0.682],[0,0],[0,0],[4.365,0.2],[0.466,0.112],[1.016,0],[0.662,-0.493],[0,-1.593]],"v":[[11.1,-4.575],[7.562,-5.593],[7.537,-6.695],[-11.757,-6.695],[-2.609,6.495],[5.686,2.277],[7.874,2.544],[10.913,1.684],[12.364,-1.58]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.995198388193,0.460065834195,0.125549062093,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.613,6.945],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150.000006109625,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"laptop/Empty notification animation Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[236.75,276.5,0],"ix":2},"a":{"a":0,"k":[35.25,35.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.376,-1.507],[1.173,-0.314],[0.376,1.507],[-1.173,0.314]],"o":[[0.376,1.507],[-1.172,0.314],[-0.376,-1.507],[1.172,-0.313]],"v":[[2.123,-0.569],[0.681,2.729],[-2.123,0.568],[-0.681,-2.729]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.999999820485,0.999999760646,0.999999820485,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[23.381,18.114],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-34.789,-18.38],[-22.203,18.4],[34.789,18.4],[34.368,16.507],[11.323,15.794],[0.707,-18.4]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.044099093418,0.036066866856,0.038500538994,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[35.039,18.65],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150.000006109625,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"notify-1/Empty notification animation Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[160,210,0],"ix":2},"a":{"a":0,"k":[45.5,13,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":30,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":37,"s":[100,100,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":90,"s":[100,100,100]},{"t":97.000003950891,"s":[0,0,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.106],[8.157,0],[0,0.106],[-8.16,0]],"o":[[0,0.106],[-8.16,0],[0,-0.106],[8.157,0]],"v":[[14.772,0],[0.001,0.193],[-14.772,0],[0.001,-0.193]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.999999820485,0.999999760646,0.999999820485,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[45.733,16.008],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.107],[14.11,0],[0,0.106],[-14.115,0]],"o":[[0,0.106],[-14.115,0],[0,-0.107],[14.11,0]],"v":[[25.551,0],[0.001,0.193],[-25.551,0],[0.001,-0.193]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.999999820485,0.999999760646,0.999999820485,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[55.914,11.017],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.075,-0.076],[1.71,-1.667],[0.234,-0.226],[0,0],[0,0],[-0.064,0.064],[-1.362,-1.334],[0,0],[-0.247,0.243]],"o":[[0.074,0.076],[-0.25,0.241],[0,0],[0,0],[-1.333,-1.362],[0.064,-0.064],[0,0],[0.232,-0.229],[1.711,-1.668]],"v":[[3.077,-1.956],[0.115,1.202],[-0.609,1.901],[-0.745,2.032],[-0.874,1.9],[-3.087,-0.58],[-0.609,1.635],[-0.872,1.633],[-0.154,0.926]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.999999820485,0.999999760646,0.999999820485,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[14.947,13.738],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.895,-2.363],[2.363,1.894],[-1.895,2.362],[-2.362,-1.895]],"o":[[-1.895,2.363],[-2.363,-1.895],[1.895,-2.364],[2.363,1.895]],"v":[[4.279,3.431],[-3.431,4.279],[-4.279,-3.43],[3.43,-4.278]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.868658686619,0.087623917823,0.342367763145,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[14.942,13.644],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.321,0],[0,0],[0,1.321],[0,0],[-1.322,0],[0,0],[0,-1.322],[0,0]],"o":[[0,0],[-1.322,0],[0,0],[0,-1.322],[0,0],[1.321,0],[0,0],[0,1.321]],"v":[[42.607,12.616],[-42.608,12.616],[-45,10.224],[-45,-10.224],[-42.608,-12.616],[42.607,-12.616],[45,-10.224],[45,10.224]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.044099093418,0.036066866856,0.038500538994,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[45.25,12.867],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false}],"ip":29.0000011811942,"op":150.000006109625,"st":21.0000008553475,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"notify-2/Empty notification animation Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[160,180,0],"ix":2},"a":{"a":0,"k":[45.5,13,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":45,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":52,"s":[100,100,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":105,"s":[100,100,100]},{"t":112.000004561854,"s":[0,0,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.106],[8.157,0],[0,0.106],[-8.16,0]],"o":[[0,0.106],[-8.16,0],[0,-0.106],[8.157,0]],"v":[[14.772,0],[0.001,0.193],[-14.772,0],[0.001,-0.193]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.999999820485,0.999999760646,0.999999820485,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[45.733,16.008],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.106],[14.11,0],[0,0.106],[-14.115,0]],"o":[[0,0.106],[-14.115,0],[0,-0.106],[14.11,0]],"v":[[25.551,0],[0.001,0.193],[-25.551,0],[0.001,-0.193]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.999999820485,0.999999760646,0.999999820485,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[55.914,11.017],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.075,-0.076],[1.71,-1.668],[0.234,-0.226],[0,0],[0,0],[-0.064,0.064],[-1.362,-1.333],[0,0],[-0.247,0.243]],"o":[[0.074,0.076],[-0.25,0.241],[0,0],[0,0],[-1.333,-1.362],[0.064,-0.064],[0,0],[0.232,-0.229],[1.711,-1.668]],"v":[[3.077,-1.956],[0.115,1.202],[-0.609,1.902],[-0.745,2.032],[-0.874,1.9],[-3.087,-0.58],[-0.609,1.635],[-0.872,1.633],[-0.154,0.926]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.999999820485,0.999999760646,0.999999820485,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[14.947,13.738],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.895,-2.363],[2.363,1.895],[-1.895,2.363],[-2.362,-1.895]],"o":[[-1.895,2.363],[-2.363,-1.894],[1.895,-2.363],[2.363,1.895]],"v":[[4.279,3.431],[-3.431,4.278],[-4.279,-3.431],[3.43,-4.278]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.749001955519,0.903692327761,0.855683031269,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[14.942,13.644],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.321,0],[0,0],[0,1.321],[0,0],[-1.322,0],[0,0],[0,-1.322],[0,0]],"o":[[0,0],[-1.322,0],[0,0],[0,-1.322],[0,0],[1.321,0],[0,0],[0,1.321]],"v":[[42.607,12.616],[-42.608,12.616],[-45,10.224],[-45,-10.224],[-42.608,-12.616],[42.607,-12.616],[45,-10.224],[45,10.224]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.044099093418,0.036066866856,0.038500538994,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[45.25,12.867],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false}],"ip":44.0000017921567,"op":150.000006109625,"st":28.0000011404634,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"notify-3/Empty notification animation Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[160,150,0],"ix":2},"a":{"a":0,"k":[45.5,13,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":60,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":67,"s":[100,100,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":120,"s":[100,100,100]},{"t":127.000005172816,"s":[0,0,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.106],[8.157,0],[0,0.107],[-8.16,0]],"o":[[0,0.107],[-8.16,0],[0,-0.106],[8.157,0]],"v":[[14.772,-0.001],[0.001,0.193],[-14.772,-0.001],[0.001,-0.193]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.999999820485,0.999999760646,0.999999820485,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[45.733,16.009],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.106],[14.11,0],[0,0.106],[-14.115,0]],"o":[[0,0.106],[-14.115,0],[0,-0.106],[14.11,0]],"v":[[25.551,0],[0.001,0.193],[-25.551,0],[0.001,-0.193]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.999999820485,0.999999760646,0.999999820485,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[55.914,11.018],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.075,-0.076],[1.71,-1.668],[0.234,-0.226],[0,0],[0,0],[-0.064,0.064],[-1.362,-1.334],[0,0],[-0.247,0.243]],"o":[[0.074,0.076],[-0.25,0.24],[0,0],[0,0],[-1.333,-1.362],[0.064,-0.064],[0,0],[0.232,-0.228],[1.711,-1.668]],"v":[[3.077,-1.956],[0.115,1.203],[-0.609,1.902],[-0.745,2.032],[-0.874,1.9],[-3.087,-0.58],[-0.609,1.635],[-0.872,1.633],[-0.154,0.926]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.999999820485,0.999999760646,0.999999820485,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[14.947,13.739],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.895,-2.363],[2.363,1.895],[-1.895,2.362],[-2.362,-1.895]],"o":[[-1.895,2.363],[-2.363,-1.895],[1.895,-2.363],[2.363,1.895]],"v":[[4.279,3.43],[-3.431,4.279],[-4.279,-3.431],[3.43,-4.279]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.979699587354,0.711141848097,0.243749027626,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[14.942,13.645],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.321,0],[0,0],[0,1.322],[0,0],[-1.322,0],[0,0],[0,-1.322],[0,0]],"o":[[0,0],[-1.322,0],[0,0],[0,-1.322],[0,0],[1.321,0],[0,0],[0,1.322]],"v":[[42.607,12.617],[-42.608,12.617],[-45,10.224],[-45,-10.224],[-42.608,-12.617],[42.607,-12.617],[45,-10.224],[45,10.224]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.044099093418,0.036066866856,0.038500538994,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[45.25,12.867],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false}],"ip":59.0000024031193,"op":150.000006109625,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"table/Empty notification animation Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,330,0],"ix":2},"a":{"a":0,"k":[176.5,53.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[113.489,-53.011],[-113.489,-53.011],[-113.489,-47.715],[-101.347,-47.715],[-107.605,52.846],[-104.151,53.011],[-97.882,-47.715],[101.109,-47.715],[106.448,52.928],[109.912,52.928],[104.573,-47.715],[113.489,-47.715]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.708927648208,0.686848479626,0.651805743049,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[176.25,53.261],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.118],[97.187,0],[0,0.118],[-97.221,0]],"o":[[0,0.118],[-97.221,0],[0,-0.118],[97.187,0]],"v":[[176,0],[0.009,0.215],[-176,0],[0.009,-0.215]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.094591896207,0.101605501362,0.127328012504,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[176.25,106.271],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150.000006109625,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"Background/Empty notification animation Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2},"a":{"a":0,"k":[250,250,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-249.5,249.686],[249.5,249.686],[249.5,-249.686],[-249.5,-249.686]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.953997922411,0.951844757678,0.955586033241,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[249.75,249.936],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":150.000006109625,"op":150.000006109625,"st":0,"bm":0,"hidden":150.000006109625}],"markers":[]}')},qYE9:function(i,a){i.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},rdv8:function(i,a){var t=Math.floor,r=function(i,a){var e=i.length,x=t(e/2);return e<8?o(i,a):n(r(i.slice(0,x),a),r(i.slice(x),a),a)},o=function(i,a){for(var t,r,o=i.length,n=1;n<o;){for(r=n,t=i[n];r&&a(i[r-1],t)>0;)i[r]=i[--r];r!==n++&&(i[r]=t)}return i},n=function(i,a,t){for(var r=i.length,o=a.length,n=0,e=0,x=[];n<r||e<o;)n<r&&e<o?x.push(t(i[n],a[e])<=0?i[n++]:a[e++]):x.push(n<r?i[n++]:a[e++]);return x};i.exports=r},tiKp:function(i,a,t){var r=t("2oRo"),o=t("VpIT"),n=t("UTVS"),e=t("kOOl"),x=t("STAE"),s=t("/b8u"),k=o("wks"),m=r.Symbol,p=s?m:m&&m.withoutSetter||e;i.exports=function(i){return n(k,i)&&(x||"string"==typeof k[i])||(x&&n(m,i)?k[i]=m[i]:k[i]=p("Symbol."+i)),k[i]}}}]);
//# sourceMappingURL=component---src-templates-about-js-6783ddfc329df89012d2.js.map