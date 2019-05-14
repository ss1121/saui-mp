require("../../../../runtime.js"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[4,13,14,15,16,17,18],[function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1);Object.defineProperty(e,"isString",{enumerable:!0,get:function(){return n.isString}}),Object.defineProperty(e,"isObject",{enumerable:!0,get:function(){return n.isObject}}),Object.defineProperty(e,"isArray",{enumerable:!0,get:function(){return n.isArray}}),Object.defineProperty(e,"isNumber",{enumerable:!0,get:function(){return n.isNumber}}),Object.defineProperty(e,"isFunction",{enumerable:!0,get:function(){return n.isFunction}}),Object.defineProperty(e,"formatQuery",{enumerable:!0,get:function(){return n.formatQuery}}),Object.defineProperty(e,"suid",{enumerable:!0,get:function(){return n.suid}}),Object.defineProperty(e,"uuid",{enumerable:!0,get:function(){return n.uuid}}),Object.defineProperty(e,"resetSuidCount",{enumerable:!0,get:function(){return n.resetSuidCount}}),Object.defineProperty(e,"clone",{enumerable:!0,get:function(){return n.clone}}),Object.defineProperty(e,"isEmpty",{enumerable:!0,get:function(){return n.isEmpty}});var i=r(9);Object.defineProperty(e,"tree",{enumerable:!0,get:function(){return i.tree}}),Object.defineProperty(e,"listToTree",{enumerable:!0,get:function(){return i.listToTree}});var o=r(10);Object.defineProperty(e,"hooks",{enumerable:!0,get:function(){return o.hooks}});var s=r(5);Object.defineProperty(e,"resetItem",{enumerable:!0,get:function(){return s.resetItem}});var a=r(11);Object.defineProperty(e,"reSetItemAttr",{enumerable:!0,get:function(){return a.reSetItemAttr}}),Object.defineProperty(e,"reSetList",{enumerable:!0,get:function(){return a.reSetList}});e.md5=r(4)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.isString=function(t){return"string"==typeof t},e.objTypeof=o,e.isObject=s,e.isArray=a,e.isNumber=function(t){return"number"==o(t)},e.isFunction=function(t){return"function"==o(t)},e.clone=function(t){return JSON.parse(JSON.stringify(t))},e.isEmpty=function(t){if(s(t)){var e=Object.keys(t).length;return!e}if(a(t))return!t.length;return!0},e.formatQuery=function(t){var e=t,r={};if(t){var n=t.split("?");if(e=n[0],n[1]){var i=n[1].split("&");i.forEach(function(t){var e=t.split("=");r[e[0]]=!e[1]||e[1]})}}return{url:e,query:r}},e.suid=function(t){if(u++,"string"==typeof(t=t||"normal_"))return t+u},e.resetSuidCount=function(){u>9999&&(u=-1)},e.uuid=function(t,e){var r=new Date,n=r.getDay()+r.getHours()+r.getMinutes()+r.getSeconds()+r.getMilliseconds()+Math.round(1e4*Math.random()),o=(t||"uuid")+(0,i.default)(n);if(e&&"number"==typeof e&&e>6){var s=e-5,a=o.substr(0,5),u=o.substr(o.length-s);return a+u}return o};var i=function(t){return t&&t.__esModule?t:{default:t}}(r(4));function o(t,e){if(t){if(t.nv_constructor)return t.nv_constructor.toLowerCase();if(t.constructor.toLowerCase)return t.constructor.toLowerCase();var r=void 0===t?"undefined":n(t);return e&&"array"==e&&Array.isArray(t)?"array":r}}function s(t){return"object"==o(t)}function a(t){return"array"==o(t,"array")}var u=-1},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.resetStoreEvts=function(t){i={}};var n=r(0),i={};function o(t){if(n.isString(t)){var e=n.md5(t);if(i[e])return i[e];var r=void 0;if(t.indexOf("?")>-1){var o={},s=t.split("@@"),a=s[0];(t=s[1]).split(",").forEach(function(t){if(t){var e=t.split("="),r=e.splice(0,1),i=e.join("="),s=n.formatQuery(i);o[r]={fun:s.url,param:s.query}}}),r=o[a]}else{t=t.replace("@@","?").replace(/,/g,"&");var u=n.formatQuery(t),f=u.url,c=u.query[f],l=n.formatQuery(c);r={fun:l.url,param:l.query}}return i[e]=r,r||{}}}e.commonBehavior=function(t,e){return e=e||"behavior",Behavior({properties:{id:{type:String},fromComponent:{type:String,value:""}},externalClasses:["class-name"],relations:{},pageLifetimes:{show:function(){},hide:function(){},resize:function(t){}},lifetimes:{created:function(t){this.uniqId=n.suid(e),this.hooks=n.hooks(this.uniqId),this.$$type=e,this.init=!0,this.mounted=!1},attached:function(){var t=this.properties,e=t.item||t.list||t.dataSource,r=t.id;this.mountId=!e.$$id&&r,e.show=!e.hasOwnProperty("show")||e.show,this.setData({uniqId:this.uniqId})},ready:function(e){this.init=!1,this.mounted=!0,this.hooks.emit("ready"),this.activePage=t.activePage,this.originalDataSource=JSON.stringify(this.data.item||this.data.list||this.data.dataSource),this.data.fromTree&&(this.treeInst=t._vars[this.data.fromTree]),this.data.fromComponent&&(this.componentInst=t._vars[this.data.fromComponent])},moved:function(){},detached:function(){}},methods:{getData:function(){return this.data.$item||this.data.$list||this.data.$dataSource||{}},_getAppVars:function(e){var r=e||this.data.fromComponent;return r&&t._vars[r]||{}},_preGetAppVars:function(t,e,r){var i=e.fn,o=this._getAppVars(t);return n.isEmpty(o)?r||{}:o[i]?o:o.data.fromComponent?this._preGetAppVars(o.data.fromComponent,e,o):o},generateUpdate:function(t,e){var r=this;if(t){var i=t+".";this.update=function(t){if(n.isObject(t)){var o={};Object.keys(t).forEach(function(e){-1==e.indexOf(i)?o[i+e]=t[e]:o[e]=t[e]}),t=o,this.setData(t,function(){n.isFunction(e)&&e.call(r)})}}}return this},mount:function(e){var r=this;this.mountId=e||this.mountId,this.init?this.hooks.on("ready",function(){r.mount(e)}):(this.mountId&&(this.activePage.elements[this.mountId]=this),t._vars[this.uniqId]=this,this.activePage.hooks.on("destory",function(){t._vars[r.uniqId]=null}))},show:function(t){n.isFunction(this.update)&&this.update({show:!0})},hide:function(t){n.isFunction(this.update)&&this.update({show:!1})},toggle:function(t){var e=!this.getData().show;n.isFunction(this.update)&&this.update({show:e},function(){n.isFunction(t)&&t(e)})}}})},e.commonMethodBehavior=function(t,e){return Behavior({behaviors:[],methods:{_rightEvent:function(t){var e=this.$$is,r=t.currentTarget.dataset,n=t.type+"@@"+r.evt;if("list"==e||"tree"==e){var i=this.data.$list.type;!i||"scroll"!=i.is&&"swiper"!=i.is||(n="bind"+n)}var s=o(n);return t.currentTarget.dataset._query=s.param,s},itemMethod:function(t){s.call(this,t)},catchItemMethod:function(t){s.call(this,t,"catch")}}})};function s(t,e){if(this.treeInst)return this.treeInst[e?"catchItemMethod":"itemMethod"].call(this.treeInst,t,e),!1;var r=this,i=t.currentTarget.dataset,s=this.activePage,a=t.type,u=o((e?e+a:a)+"@@"+i.evt),f=u.fun,c=u.param,l=this._preGetAppVars(null,u);n.isEmpty(l)&&(l=void 0),t.currentTarget.dataset._query=c;var h=s[f],d=this[f],y=n.isFunction(h),p=this.hooks.emit("beforeBind",{ctx:this,event:t,funName:f,param:c});l&&n.isFunction(l[f])?l[f].call(l,t,c,r):p?p.forEach(function(e){0!==e&&y&&h.call(s,t,c,r)}):n.isFunction(d)?d.call(this,t,c,this):y&&h.call(s,t,c,r)}},function(t,e){var r={utf8:{stringToBytes:function(t){return r.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(r.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],r=0;r<t.length;r++)e.push(255&t.charCodeAt(r));return e},bytesToString:function(t){for(var e=[],r=0;r<t.length;r++)e.push(String.fromCharCode(t[r]));return e.join("")}}};t.exports=r},function(t,e,r){!function(){var e=r(7),n=r(3).utf8,i=r(8),o=r(3).bin,s=function(t,r){t.constructor==String?t=r&&"binary"===r.encoding?o.stringToBytes(t):n.stringToBytes(t):i(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||(t=t.toString());for(var a=e.bytesToWords(t),u=8*t.length,f=1732584193,c=-271733879,l=-1732584194,h=271733878,d=0;d<a.length;d++)a[d]=16711935&(a[d]<<8|a[d]>>>24)|4278255360&(a[d]<<24|a[d]>>>8);a[u>>>5]|=128<<u%32,a[14+(u+64>>>9<<4)]=u;var y=s._ff,p=s._gg,m=s._hh,v=s._ii;for(d=0;d<a.length;d+=16){var b=f,g=c,S=l,O=h;c=v(c=v(c=v(c=v(c=m(c=m(c=m(c=m(c=p(c=p(c=p(c=p(c=y(c=y(c=y(c=y(c,l=y(l,h=y(h,f=y(f,c,l,h,a[d+0],7,-680876936),c,l,a[d+1],12,-389564586),f,c,a[d+2],17,606105819),h,f,a[d+3],22,-1044525330),l=y(l,h=y(h,f=y(f,c,l,h,a[d+4],7,-176418897),c,l,a[d+5],12,1200080426),f,c,a[d+6],17,-1473231341),h,f,a[d+7],22,-45705983),l=y(l,h=y(h,f=y(f,c,l,h,a[d+8],7,1770035416),c,l,a[d+9],12,-1958414417),f,c,a[d+10],17,-42063),h,f,a[d+11],22,-1990404162),l=y(l,h=y(h,f=y(f,c,l,h,a[d+12],7,1804603682),c,l,a[d+13],12,-40341101),f,c,a[d+14],17,-1502002290),h,f,a[d+15],22,1236535329),l=p(l,h=p(h,f=p(f,c,l,h,a[d+1],5,-165796510),c,l,a[d+6],9,-1069501632),f,c,a[d+11],14,643717713),h,f,a[d+0],20,-373897302),l=p(l,h=p(h,f=p(f,c,l,h,a[d+5],5,-701558691),c,l,a[d+10],9,38016083),f,c,a[d+15],14,-660478335),h,f,a[d+4],20,-405537848),l=p(l,h=p(h,f=p(f,c,l,h,a[d+9],5,568446438),c,l,a[d+14],9,-1019803690),f,c,a[d+3],14,-187363961),h,f,a[d+8],20,1163531501),l=p(l,h=p(h,f=p(f,c,l,h,a[d+13],5,-1444681467),c,l,a[d+2],9,-51403784),f,c,a[d+7],14,1735328473),h,f,a[d+12],20,-1926607734),l=m(l,h=m(h,f=m(f,c,l,h,a[d+5],4,-378558),c,l,a[d+8],11,-2022574463),f,c,a[d+11],16,1839030562),h,f,a[d+14],23,-35309556),l=m(l,h=m(h,f=m(f,c,l,h,a[d+1],4,-1530992060),c,l,a[d+4],11,1272893353),f,c,a[d+7],16,-155497632),h,f,a[d+10],23,-1094730640),l=m(l,h=m(h,f=m(f,c,l,h,a[d+13],4,681279174),c,l,a[d+0],11,-358537222),f,c,a[d+3],16,-722521979),h,f,a[d+6],23,76029189),l=m(l,h=m(h,f=m(f,c,l,h,a[d+9],4,-640364487),c,l,a[d+12],11,-421815835),f,c,a[d+15],16,530742520),h,f,a[d+2],23,-995338651),l=v(l,h=v(h,f=v(f,c,l,h,a[d+0],6,-198630844),c,l,a[d+7],10,1126891415),f,c,a[d+14],15,-1416354905),h,f,a[d+5],21,-57434055),l=v(l,h=v(h,f=v(f,c,l,h,a[d+12],6,1700485571),c,l,a[d+3],10,-1894986606),f,c,a[d+10],15,-1051523),h,f,a[d+1],21,-2054922799),l=v(l,h=v(h,f=v(f,c,l,h,a[d+8],6,1873313359),c,l,a[d+15],10,-30611744),f,c,a[d+6],15,-1560198380),h,f,a[d+13],21,1309151649),l=v(l,h=v(h,f=v(f,c,l,h,a[d+4],6,-145523070),c,l,a[d+11],10,-1120210379),f,c,a[d+2],15,718787259),h,f,a[d+9],21,-343485551),f=f+b>>>0,c=c+g>>>0,l=l+S>>>0,h=h+O>>>0}return e.endian([f,c,l,h])};s._ff=function(t,e,r,n,i,o,s){var a=t+(e&r|~e&n)+(i>>>0)+s;return(a<<o|a>>>32-o)+e},s._gg=function(t,e,r,n,i,o,s){var a=t+(e&n|r&~n)+(i>>>0)+s;return(a<<o|a>>>32-o)+e},s._hh=function(t,e,r,n,i,o,s){var a=t+(e^r^n)+(i>>>0)+s;return(a<<o|a>>>32-o)+e},s._ii=function(t,e,r,n,i,o,s){var a=t+(r^(e|~n))+(i>>>0)+s;return(a<<o|a>>>32-o)+e},s._blocksize=16,s._digestsize=16,t.exports=function(t,r){if(void 0===t||null===t)throw new Error("Illegal argument "+t);var n=e.wordsToBytes(s(t,r));return r&&r.asBytes?n:r&&r.asString?o.bytesToString(n):e.bytesToHex(n)}}()},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.resetItem=function(t,e){var r={},n=[];if("string"==typeof t||"number"==typeof t||"boolean"==typeof t)return t;Object.keys(t).forEach(function(e){o.indexOf(e)>-1||0==e.indexOf("@")&&e.length>1?n.push(e):("aim"==e&&(t.catchtap=t[e]),r[e]=t[e])}),t.__sort=n;var u=function(){var r=t[f];"itemMethod"==f?e&&(0,i.isObject)(r)&&(Object.keys(r).forEach(function(t){e[t]=r[t]}),delete t.itemMethod):Array.isArray(r)?t[f]=a(r,e):t[f]=s(r,e)};for(var f in t)u();t.parent||(t.itemDataRoot=!0);return t};var i=r(1),o=["title","img","icon","list","tree","item","header","body","footer","dot","li","k","v"];function s(t,e){if("string"==typeof t||"number"==typeof t||"boolean"==typeof t)return t;if("object"==(void 0===t?"undefined":n(t))&&!Array.isArray(t)){var r={},i=[];return t.__sort=[],e&&(t.fromComponent=e.data.uniqId),Object.keys(t).forEach(function(e){o.indexOf(e)>-1||0==e.indexOf("@")&&e.length>1?i.push(e):r[e]=t[e]}),i.length&&(t.__sort=i,i.map(function(r){var i=t[r];"object"==(void 0===i?"undefined":n(i))&&(Array.isArray(i)?t[r]=a(i,e):t[r]=s(i,e))})),t}}function a(t,e){if(Array.isArray(t)&&t.length)return t.map(function(t){return s(t,e)})}},,function(t,e){!function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&r.rotl(t,8)|4278255360&r.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=r.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],r=0,n=0;r<t.length;r++,n+=8)e[n>>>5]|=t[r]<<24-n%32;return e},wordsToBytes:function(t){for(var e=[],r=0;r<32*t.length;r+=8)e.push(t[r>>>5]>>>24-r%32&255);return e},bytesToHex:function(t){for(var e=[],r=0;r<t.length;r++)e.push((t[r]>>>4).toString(16)),e.push((15&t[r]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],r=0;r<t.length;r+=2)e.push(parseInt(t.substr(r,2),16));return e},bytesToBase64:function(t){for(var r=[],n=0;n<t.length;n+=3)for(var i=t[n]<<16|t[n+1]<<8|t[n+2],o=0;o<4;o++)8*n+6*o<=8*t.length?r.push(e.charAt(i>>>6*(3-o)&63)):r.push("=");return r.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var r=[],n=0,i=0;n<t.length;i=++n%4)0!=i&&r.push((e.indexOf(t.charAt(n-1))&Math.pow(2,-2*i+8)-1)<<2*i|e.indexOf(t.charAt(n))>>>6-2*i);return r}};t.exports=r}()},function(t,e){function r(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(r(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&r(t.slice(0,0))}(t)||!!t._isBuffer)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.tree=f,e.listToTree=function(t,e){var r=(0,i.clone)(t);(0,i.isObject)(r)&&r.data&&(r.data=f(r.data,r,e));return r};var i=r(1),o=function(t,e){if((0,i.isArray)(t))return t.filter(e)},s=[],a={};var u=1;function f(t,e,r){var i=[];return s=[],a={itemClass:e.itemClass||e.class,itemStyle:e.itemStyle||e.style},t.forEach(function(e,f){if(u=1,"object"==(void 0===e?"undefined":n(e))&&!Array.isArray(e)){if(e.idf&&!e.parent&&-1==s.indexOf(e.idf)){var c=e.itemClass||e.class;c=c?-1==c.indexOf("level0")?c+" level0":c:"level0",e.itemClass=c;var l=function t(e,r,n,i){n=u=n||1;var f=void 0;this&&this.fromTree&&(f=this.fromTree);var c=[];if(o(r,function(t){return t.parent==e.idf}).forEach(function(e,i){var o=e.itemClass||e.class;o=function(t,e){var r=/ *level([\d]* *)?/gi,n="level"+e;if(t)return r.test(t)&&(t=t.replace(r,"")),t+=" "+n}(o,n),e.itemClass=o,e.idf&&-1==s.indexOf(e.idf)?(s.push(e.idf),c=c.concat([t.call({fromTree:f},e,r,++n,i)]),--n):c=c.concat(e)}),c.length){var l=e.attr&&e.attr["data-treeid"]||i,h=e.$$id||e.id||""+l;e["@list"]={$$id:h,data:c,listClass:e.liClass||"ul",itemClass:a.itemClass||"",itemStyle:a.itemStyle||"",show:!e.hasOwnProperty("show")||e.show,fromTree:f},e.__sort=(e.__sort||[]).concat("@list")}return e}.call({fromTree:r},e,t,f);l.__deep=u,i.push(l)}e.idf||e.parent||i.push(e)}if(Array.isArray(e)){var h=function t(e){var r=[];if(e.forEach(function(n){if(Array.isArray(n))return t(e);r.push(n)}),r.length)return{li:r}}(e);h&&i.push(h)}}),i}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();e.hooks=function(t){if((0,i.isString)(t))return s[t]||(s[t]=new o),s[t]};var i=r(1);var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.actions={},this.storeData={}}return n(t,[{key:"destory",value:function(){this.actions=null,this.storeData=null}},{key:"setItem",value:function(t,e){this.storeData[t]=e}},{key:"getItem",value:function(t){return this.storeData[t]}},{key:"append",value:function(t,e){if(this.storeData[t]){var r=this.storeData[t];(0,i.isArray)(r)?r=r.concat(e):(0,i.isObject)(r)?(0,i.isObject)(e)?r=Object.assign(r,e):r[(0,i.suid)("random_")]=e:this.setItem(t,e)}else this.setItem(t,e)}},{key:"delete",value:function(t){this.storeData[t]=null}},{key:"on",value:function(t,e){var r=this.actions,n=(0,i.suid)("hooks_action_");e&&(e.hooksActionUniqId=n),(0,i.isString)(t)&&(r[t]?r[t]=[].concat(r[t]).concat(e):r[t]=[e])}},{key:"off",value:function(t,e){if((0,i.isString)(t))if(e){var r=e.hooksActionUniqId;if(r){var n=this.actions[t],o=void 0;n&&(n.forEach(function(t,e){t.hooksActionUniqId==r&&(o=e)}),o&&n.splice(o,1))}}else delete this.actions[t]}},{key:"emit",value:function(t,e){var r=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if((0,i.isString)(t)&&this.actions[t]){var o=[];if(this.actions[t].forEach(function(s){if((0,i.isFunction)(s)){var a=s.call(n,e);a?o.push(a):o.push(void 0),s.onlyonetime&&r.off(t,s)}}),o.length)return o}}},{key:"one",value:function(t,e){t&&"function"==typeof e&&(e.onlyonetime=!0),this.on(t,e)}}]),t}(),s={}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.reSetItemAttr=s,e.reSetList=function(t){if((0,i.isObject)(t))return t.show=!t.hasOwnProperty("show")||t.show,function(t,e){var r=this;(0,i.isArray)(t)&&(e.data=t.map(function(t){return s.call(r,t,e)}));return e}.call(this,t.data,t)};var i=r(1),o=r(5);function s(t,e){if("boolean"==typeof t)return t;"string"!=typeof t&&"number"!=typeof t||(t={title:t});var r=(0,i.suid)("index-");if(e.itemMethod){var s=e.itemMethod;"object"==(void 0===s?"undefined":n(s))&&Object.keys(s).forEach(function(e){t[e]=s[e]})}var a=e.itemClass||e.class||"",u=t.itemClass||t.class||t.className||"";if(t.itemClass=u?a+" "+u:a,t.itemClass=t.idf?"item itemroot "+t.itemClass:"item "+t.itemClass,e.itemStyle||e.style){var f=e.itemStyle||e.style;if(t.style||t.itemStyle){var c=t.style||t.itemStyle;t.style=c}else t.style=f}return(0,i.isObject)(t)&&(t.attr?t.attr["data-treeid"]||(t.attr["data-treeid"]=r):t.$$typeof?t={title:t,attr:{"data-treeid":r}}:t.attr={"data-treeid":r}),t.$$id?t:(0,o.resetItem)(t,this)}}],[[2,0]]]);