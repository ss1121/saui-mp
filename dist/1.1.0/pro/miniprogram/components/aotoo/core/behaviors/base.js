require("../../../../runtime.js"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[3,4,13,14,15,16,17,18],[function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function i(t,e){if(t){if(t.nv_constructor)return t.nv_constructor.toLowerCase();if(t.constructor.toLowerCase)return t.constructor.toLowerCase();var r=void 0===t?"undefined":n(t);return e&&"array"==e&&Array.isArray(t)?"array":r}}function o(t){return"object"==i(t)}function s(t){return"array"==i(t,"array")}e.isString=function(t){return"string"==typeof t},e.objTypeof=i,e.isObject=o,e.isArray=s,e.isNumber=function(t){return"number"==i(t)},e.isFunction=function(t){return"function"==i(t)},e.clone=function(t){return JSON.parse(JSON.stringify(t))},e.isEmpty=function(t){if(o(t)){var e=Object.keys(t).length;return!e}if(s(t))return!t.length;return!0},e.formatQuery=function(t){var e=t,r={};if(t){var n=t.split("?");if(e=n[0],n[1]){var i=n[1].split("&");i.forEach(function(t){var e=t.split("=");r[e[0]]=!e[1]||e[1]})}}return{url:e,query:r}},e.suid=function(t){if(a++,"string"==typeof(t=t||"normal_"))return t+a},e.resetSuidCount=function(){a>9999&&(a=-1)};var a=-1},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0);Object.defineProperty(e,"isString",{enumerable:!0,get:function(){return n.isString}}),Object.defineProperty(e,"isObject",{enumerable:!0,get:function(){return n.isObject}}),Object.defineProperty(e,"isArray",{enumerable:!0,get:function(){return n.isArray}}),Object.defineProperty(e,"isNumber",{enumerable:!0,get:function(){return n.isNumber}}),Object.defineProperty(e,"isFunction",{enumerable:!0,get:function(){return n.isFunction}}),Object.defineProperty(e,"formatQuery",{enumerable:!0,get:function(){return n.formatQuery}}),Object.defineProperty(e,"suid",{enumerable:!0,get:function(){return n.suid}}),Object.defineProperty(e,"resetSuidCount",{enumerable:!0,get:function(){return n.resetSuidCount}}),Object.defineProperty(e,"clone",{enumerable:!0,get:function(){return n.clone}}),Object.defineProperty(e,"isEmpty",{enumerable:!0,get:function(){return n.isEmpty}});var i=r(6);Object.defineProperty(e,"tree",{enumerable:!0,get:function(){return i.tree}}),Object.defineProperty(e,"listToTree",{enumerable:!0,get:function(){return i.listToTree}});var o=r(7);Object.defineProperty(e,"hooks",{enumerable:!0,get:function(){return o.hooks}});var s=r(3);Object.defineProperty(e,"resetItem",{enumerable:!0,get:function(){return s.resetItem}});var a=r(8);Object.defineProperty(e,"reSetItemAttr",{enumerable:!0,get:function(){return a.reSetItemAttr}}),Object.defineProperty(e,"reSetList",{enumerable:!0,get:function(){return a.reSetList}});e.md5=r(9)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.resetStoreEvts=function(t){i={}};var n=r(1),i={};function o(t){if(n.isString(t)){var e=n.md5(t);if(i[e])return i[e];var r=void 0;if(t.indexOf("?")>-1){var o={},s=t.split("@@"),a=s[0];(t=s[1]).split(",").forEach(function(t){if(t){var e=t.split("="),r=e.splice(0,1),i=e.join("="),s=n.formatQuery(i);o[r]={fun:s.url,param:s.query}}}),r=o[a]}else{t=t.replace("@@","?").replace(/,/g,"&");var u=n.formatQuery(t),c=u.url,f=u.query[c],l=n.formatQuery(f);r={fun:l.url,param:l.query}}return i[e]=r,r||{}}}e.commonBehavior=function(t,e){return e=e||"behavior",Behavior({properties:{id:{type:String},fromComponent:{type:String,value:""}},externalClasses:["class-name"],relations:{},pageLifetimes:{show:function(){},hide:function(){},resize:function(t){}},lifetimes:{created:function(t){this.uniqId=n.suid(e),this.hooks=n.hooks(this.uniqId),this.$$type=e,this.init=!0,this.mounted=!1},attached:function(){var t=this.properties,e=t.item||t.list||t.dataSource,r=t.id;this.mountId=!e.$$id&&r,e.show=!e.hasOwnProperty("show")||e.show,this.setData({uniqId:this.uniqId})},ready:function(e){this.init=!1,this.mounted=!0,this.hooks.emit("ready"),this.activePage=t.activePage,this.originalDataSource=JSON.stringify(this.data.item||this.data.list||this.data.dataSource),this.data.fromTree&&(this.treeInst=t._vars[this.data.fromTree]),this.data.fromComponent&&(this.componentInst=t._vars[this.data.fromComponent])},moved:function(){},detached:function(){}},methods:{getData:function(){return this.data.$item||this.data.$list||this.data.$dataSource||{}},_getAppVars:function(e){var r=e||this.data.fromComponent;return r&&t._vars[r]||{}},_preGetAppVars:function(t,e,r){var i=e.fn,o=this._getAppVars(t);return n.isEmpty(o)?r||{}:o[i]?o:o.data.fromComponent?this._preGetAppVars(o.data.fromComponent,e,o):o},generateUpdate:function(t,e){var r=this;if(t){var i=t+".";this.update=function(t){if(n.isObject(t)){var o={};Object.keys(t).forEach(function(e){-1==e.indexOf(i)?o[i+e]=t[e]:o[e]=t[e]}),t=o,this.setData(t,function(){n.isFunction(e)&&e.call(r)})}}}return this},mount:function(e){var r=this;this.mountId=e||this.mountId,this.init?this.hooks.on("ready",function(){r.mount(e)}):(this.mountId&&(this.activePage.elements[this.mountId]=this),t._vars[this.uniqId]=this,this.activePage.hooks.on("destory",function(){t._vars[r.uniqId]=null}))},show:function(t){n.isFunction(this.update)&&this.update({show:!0})},hide:function(t){n.isFunction(this.update)&&this.update({show:!1})},toggle:function(t){var e=!this.getData().show;n.isFunction(this.update)&&this.update({show:e},function(){n.isFunction(t)&&t(e)})}}})},e.commonMethodBehavior=function(t,e){return Behavior({behaviors:[],methods:{_rightEvent:function(t){var e=this.$$is,r=t.currentTarget.dataset,n=t.type+"@@"+r.evt;if("list"==e||"tree"==e){var i=this.data.$list.type;!i||"scroll"!=i.is&&"swiper"!=i.is||(n="bind"+n)}var s=o(n);return t.currentTarget.dataset._query=s.param,s},itemMethod:function(t){s.call(this,t)},catchItemMethod:function(t){s.call(this,t,"catch")}}})};function s(t,e){if(this.treeInst)return this.treeInst[e?"catchItemMethod":"itemMethod"].call(this.treeInst,t,e),!1;var r=this,i=t.currentTarget.dataset,s=this.activePage,a=t.type,u=o((e?e+a:a)+"@@"+i.evt),c=u.fun,f=u.param,l=this._preGetAppVars(null,u);n.isEmpty(l)&&(l=void 0),t.currentTarget.dataset._query=f;var h=s[c],y=this[c],d=n.isFunction(h),m=this.hooks.emit("beforeBind",{ctx:this,event:t,funName:c,param:f});l&&n.isFunction(l[c])?l[c].call(l,t,f,r):m?m.forEach(function(e){0!==e&&d&&h.call(s,t,f,r)}):n.isFunction(y)?y.call(this,t,f,this):d&&h.call(s,t,f,r)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.resetItem=function(t,e){var r={},n=[];if("string"==typeof t||"number"==typeof t||"boolean"==typeof t)return t;Object.keys(t).forEach(function(e){o.indexOf(e)>-1||0==e.indexOf("@")&&e.length>1?n.push(e):("aim"==e&&(t.catchtap=t[e]),r[e]=t[e])}),t.__sort=n;var u=function(){var r=t[c];"itemMethod"==c?e&&(0,i.isObject)(r)&&(Object.keys(r).forEach(function(t){e[t]=r[t]}),delete t.itemMethod):Array.isArray(r)?t[c]=a(r,e):t[c]=s(r,e)};for(var c in t)u();t.parent||(t.itemDataRoot=!0);return t};var i=r(0),o=["title","img","icon","list","tree","item","header","body","footer","dot","li","k","v"];function s(t,e){if("string"==typeof t||"number"==typeof t||"boolean"==typeof t)return t;if("object"==(void 0===t?"undefined":n(t))&&!Array.isArray(t)){var r={},i=[];return t.__sort=[],e&&(t.fromComponent=e.data.uniqId),Object.keys(t).forEach(function(e){o.indexOf(e)>-1||0==e.indexOf("@")&&e.length>1?i.push(e):r[e]=t[e]}),i.length&&(t.__sort=i,i.map(function(r){var i=t[r];"object"==(void 0===i?"undefined":n(i))&&(Array.isArray(i)?t[r]=a(i,e):t[r]=s(i,e))})),t}}function a(t,e){if(Array.isArray(t)&&t.length)return t.map(function(t){return s(t,e)})}},function(t,e){var r={utf8:{stringToBytes:function(t){return r.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(r.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],r=0;r<t.length;r++)e.push(255&t.charCodeAt(r));return e},bytesToString:function(t){for(var e=[],r=0;r<t.length;r++)e.push(String.fromCharCode(t[r]));return e.join("")}}};t.exports=r},,function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.tree=c,e.listToTree=function(t,e){var r=(0,i.clone)(t);(0,i.isObject)(r)&&r.data&&(r.data=c(r.data,r,e));return r};var i=r(0),o=function(t,e){if((0,i.isArray)(t))return t.filter(e)},s=[],a={};var u=1;function c(t,e,r){var i=[];return s=[],a={itemClass:e.itemClass||e.class,itemStyle:e.itemStyle||e.style},t.forEach(function(e,c){if(u=1,"object"==(void 0===e?"undefined":n(e))&&!Array.isArray(e)){if(e.idf&&!e.parent&&-1==s.indexOf(e.idf)){var f=e.itemClass||e.class;f=f?-1==f.indexOf("level0")?f+" level0":f:"level0",e.itemClass=f;var l=function t(e,r,n,i){n=u=n||1;var c=void 0;this&&this.fromTree&&(c=this.fromTree);var f=[];if(o(r,function(t){return t.parent==e.idf}).forEach(function(e,i){var o=e.itemClass||e.class;o=function(t,e){var r=/ *level([\d]* *)?/gi,n="level"+e;if(t)return r.test(t)&&(t=t.replace(r,"")),t+=" "+n}(o,n),e.itemClass=o,e.idf&&-1==s.indexOf(e.idf)?(s.push(e.idf),f=f.concat([t.call({fromTree:c},e,r,++n,i)]),--n):f=f.concat(e)}),f.length){var l=e.attr&&e.attr["data-treeid"]||i,h=e.$$id||e.id||""+l;e["@list"]={$$id:h,data:f,listClass:e.liClass||"ul",itemClass:a.itemClass||"",itemStyle:a.itemStyle||"",show:!e.hasOwnProperty("show")||e.show,fromTree:c},e.__sort=(e.__sort||[]).concat("@list")}return e}.call({fromTree:r},e,t,c);l.__deep=u,i.push(l)}e.idf||e.parent||i.push(e)}if(Array.isArray(e)){var h=function t(e){var r=[];if(e.forEach(function(n){if(Array.isArray(n))return t(e);r.push(n)}),r.length)return{li:r}}(e);h&&i.push(h)}}),i}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();e.hooks=function(t){if((0,i.isString)(t))return s[t]||(s[t]=new o),s[t]};var i=r(0);var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.actions={},this.storeData={}}return n(t,[{key:"destory",value:function(){this.actions=null,this.storeData=null}},{key:"setItem",value:function(t,e){this.storeData[t]=e}},{key:"getItem",value:function(t){return this.storeData[t]}},{key:"append",value:function(t,e){if(this.storeData[t]){var r=this.storeData[t];(0,i.isArray)(r)?r=r.concat(e):(0,i.isObject)(r)?(0,i.isObject)(e)?r=Object.assign(r,e):r[(0,i.suid)("random_")]=e:this.setItem(t,e)}else this.setItem(t,e)}},{key:"delete",value:function(t){this.storeData[t]=null}},{key:"on",value:function(t,e){var r=this.actions,n=(0,i.suid)("hooks_action_");e&&(e.hooksActionUniqId=n),(0,i.isString)(t)&&(r[t]?r[t]=[].concat(r[t]).concat(e):r[t]=[e])}},{key:"off",value:function(t,e){if((0,i.isString)(t))if(e){var r=e.hooksActionUniqId;if(r){var n=this.actions[t],o=void 0;n&&(n.forEach(function(t,e){t.hooksActionUniqId==r&&(o=e)}),o&&n.splice(o,1))}}else delete this.actions[t]}},{key:"emit",value:function(t,e){var r=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if((0,i.isString)(t)&&this.actions[t]){var o=[];if(this.actions[t].forEach(function(s){if((0,i.isFunction)(s)){var a=s.call(n,e);a?o.push(a):o.push(void 0),s.onlyonetime&&r.off(t,s)}}),o.length)return o}}},{key:"one",value:function(t,e){t&&"function"==typeof e&&(e.onlyonetime=!0),this.on(t,e)}}]),t}(),s={}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.reSetItemAttr=s,e.reSetList=function(t){if((0,i.isObject)(t))return t.show=!t.hasOwnProperty("show")||t.show,function(t,e){var r=this;(0,i.isArray)(t)&&(e.data=t.map(function(t){return s.call(r,t,e)}));return e}.call(this,t.data,t)};var i=r(0),o=r(3);function s(t,e){if("boolean"==typeof t)return t;"string"!=typeof t&&"number"!=typeof t||(t={title:t});var r=(0,i.suid)("index-");if(e.itemMethod){var s=e.itemMethod;"object"==(void 0===s?"undefined":n(s))&&Object.keys(s).forEach(function(e){t[e]=s[e]})}var a=e.itemClass||e.class||"",u=t.itemClass||t.class||t.className||"";if(t.itemClass=u?a+" "+u:a,t.itemClass=t.idf?"item itemroot "+t.itemClass:"item "+t.itemClass,e.itemStyle||e.style){var c=e.itemStyle||e.style;if(t.style||t.itemStyle){var f=t.style||t.itemStyle;t.style=f}else t.style=c}return(0,i.isObject)(t)&&(t.attr?t.attr["data-treeid"]||(t.attr["data-treeid"]=r):t.$$typeof?t={title:t,attr:{"data-treeid":r}}:t.attr={"data-treeid":r}),t.$$id?t:(0,o.resetItem)(t,this)}},function(t,e,r){!function(){var e=r(10),n=r(4).utf8,i=r(11),o=r(4).bin,s=function(t,r){t.constructor==String?t=r&&"binary"===r.encoding?o.stringToBytes(t):n.stringToBytes(t):i(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||(t=t.toString());for(var a=e.bytesToWords(t),u=8*t.length,c=1732584193,f=-271733879,l=-1732584194,h=271733878,y=0;y<a.length;y++)a[y]=16711935&(a[y]<<8|a[y]>>>24)|4278255360&(a[y]<<24|a[y]>>>8);a[u>>>5]|=128<<u%32,a[14+(u+64>>>9<<4)]=u;var d=s._ff,m=s._gg,p=s._hh,v=s._ii;for(y=0;y<a.length;y+=16){var b=c,g=f,S=l,O=h;f=v(f=v(f=v(f=v(f=p(f=p(f=p(f=p(f=m(f=m(f=m(f=m(f=d(f=d(f=d(f=d(f,l=d(l,h=d(h,c=d(c,f,l,h,a[y+0],7,-680876936),f,l,a[y+1],12,-389564586),c,f,a[y+2],17,606105819),h,c,a[y+3],22,-1044525330),l=d(l,h=d(h,c=d(c,f,l,h,a[y+4],7,-176418897),f,l,a[y+5],12,1200080426),c,f,a[y+6],17,-1473231341),h,c,a[y+7],22,-45705983),l=d(l,h=d(h,c=d(c,f,l,h,a[y+8],7,1770035416),f,l,a[y+9],12,-1958414417),c,f,a[y+10],17,-42063),h,c,a[y+11],22,-1990404162),l=d(l,h=d(h,c=d(c,f,l,h,a[y+12],7,1804603682),f,l,a[y+13],12,-40341101),c,f,a[y+14],17,-1502002290),h,c,a[y+15],22,1236535329),l=m(l,h=m(h,c=m(c,f,l,h,a[y+1],5,-165796510),f,l,a[y+6],9,-1069501632),c,f,a[y+11],14,643717713),h,c,a[y+0],20,-373897302),l=m(l,h=m(h,c=m(c,f,l,h,a[y+5],5,-701558691),f,l,a[y+10],9,38016083),c,f,a[y+15],14,-660478335),h,c,a[y+4],20,-405537848),l=m(l,h=m(h,c=m(c,f,l,h,a[y+9],5,568446438),f,l,a[y+14],9,-1019803690),c,f,a[y+3],14,-187363961),h,c,a[y+8],20,1163531501),l=m(l,h=m(h,c=m(c,f,l,h,a[y+13],5,-1444681467),f,l,a[y+2],9,-51403784),c,f,a[y+7],14,1735328473),h,c,a[y+12],20,-1926607734),l=p(l,h=p(h,c=p(c,f,l,h,a[y+5],4,-378558),f,l,a[y+8],11,-2022574463),c,f,a[y+11],16,1839030562),h,c,a[y+14],23,-35309556),l=p(l,h=p(h,c=p(c,f,l,h,a[y+1],4,-1530992060),f,l,a[y+4],11,1272893353),c,f,a[y+7],16,-155497632),h,c,a[y+10],23,-1094730640),l=p(l,h=p(h,c=p(c,f,l,h,a[y+13],4,681279174),f,l,a[y+0],11,-358537222),c,f,a[y+3],16,-722521979),h,c,a[y+6],23,76029189),l=p(l,h=p(h,c=p(c,f,l,h,a[y+9],4,-640364487),f,l,a[y+12],11,-421815835),c,f,a[y+15],16,530742520),h,c,a[y+2],23,-995338651),l=v(l,h=v(h,c=v(c,f,l,h,a[y+0],6,-198630844),f,l,a[y+7],10,1126891415),c,f,a[y+14],15,-1416354905),h,c,a[y+5],21,-57434055),l=v(l,h=v(h,c=v(c,f,l,h,a[y+12],6,1700485571),f,l,a[y+3],10,-1894986606),c,f,a[y+10],15,-1051523),h,c,a[y+1],21,-2054922799),l=v(l,h=v(h,c=v(c,f,l,h,a[y+8],6,1873313359),f,l,a[y+15],10,-30611744),c,f,a[y+6],15,-1560198380),h,c,a[y+13],21,1309151649),l=v(l,h=v(h,c=v(c,f,l,h,a[y+4],6,-145523070),f,l,a[y+11],10,-1120210379),c,f,a[y+2],15,718787259),h,c,a[y+9],21,-343485551),c=c+b>>>0,f=f+g>>>0,l=l+S>>>0,h=h+O>>>0}return e.endian([c,f,l,h])};s._ff=function(t,e,r,n,i,o,s){var a=t+(e&r|~e&n)+(i>>>0)+s;return(a<<o|a>>>32-o)+e},s._gg=function(t,e,r,n,i,o,s){var a=t+(e&n|r&~n)+(i>>>0)+s;return(a<<o|a>>>32-o)+e},s._hh=function(t,e,r,n,i,o,s){var a=t+(e^r^n)+(i>>>0)+s;return(a<<o|a>>>32-o)+e},s._ii=function(t,e,r,n,i,o,s){var a=t+(r^(e|~n))+(i>>>0)+s;return(a<<o|a>>>32-o)+e},s._blocksize=16,s._digestsize=16,t.exports=function(t,r){if(void 0===t||null===t)throw new Error("Illegal argument "+t);var n=e.wordsToBytes(s(t,r));return r&&r.asBytes?n:r&&r.asString?o.bytesToString(n):e.bytesToHex(n)}}()},function(t,e){!function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&r.rotl(t,8)|4278255360&r.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=r.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],r=0,n=0;r<t.length;r++,n+=8)e[n>>>5]|=t[r]<<24-n%32;return e},wordsToBytes:function(t){for(var e=[],r=0;r<32*t.length;r+=8)e.push(t[r>>>5]>>>24-r%32&255);return e},bytesToHex:function(t){for(var e=[],r=0;r<t.length;r++)e.push((t[r]>>>4).toString(16)),e.push((15&t[r]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],r=0;r<t.length;r+=2)e.push(parseInt(t.substr(r,2),16));return e},bytesToBase64:function(t){for(var r=[],n=0;n<t.length;n+=3)for(var i=t[n]<<16|t[n+1]<<8|t[n+2],o=0;o<4;o++)8*n+6*o<=8*t.length?r.push(e.charAt(i>>>6*(3-o)&63)):r.push("=");return r.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var r=[],n=0,i=0;n<t.length;i=++n%4)0!=i&&r.push((e.indexOf(t.charAt(n-1))&Math.pow(2,-2*i+8)-1)<<2*i|e.indexOf(t.charAt(n))>>>6-2*i);return r}};t.exports=r}()},function(t,e){function r(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(r(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&r(t.slice(0,0))}(t)||!!t._isBuffer)}},,,function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.baseBehavior=void 0;var n=r(2);e.baseBehavior=function(t,e){return e=e||"tree",Behavior({behaviors:[(0,n.commonBehavior)(t,e),(0,n.commonMethodBehavior)(t,e)]})}}],[[14,0]]]);