require("../../../runtime.js"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[61,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18],{0:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(1);Object.defineProperty(e,"isString",{enumerable:!0,get:function(){return r.isString}}),Object.defineProperty(e,"isObject",{enumerable:!0,get:function(){return r.isObject}}),Object.defineProperty(e,"isArray",{enumerable:!0,get:function(){return r.isArray}}),Object.defineProperty(e,"isNumber",{enumerable:!0,get:function(){return r.isNumber}}),Object.defineProperty(e,"isFunction",{enumerable:!0,get:function(){return r.isFunction}}),Object.defineProperty(e,"formatQuery",{enumerable:!0,get:function(){return r.formatQuery}}),Object.defineProperty(e,"formatToUrl",{enumerable:!0,get:function(){return r.formatToUrl}}),Object.defineProperty(e,"suid",{enumerable:!0,get:function(){return r.suid}}),Object.defineProperty(e,"uuid",{enumerable:!0,get:function(){return r.uuid}}),Object.defineProperty(e,"resetSuidCount",{enumerable:!0,get:function(){return r.resetSuidCount}}),Object.defineProperty(e,"clone",{enumerable:!0,get:function(){return r.clone}}),Object.defineProperty(e,"isEmpty",{enumerable:!0,get:function(){return r.isEmpty}});var n=i(9);Object.defineProperty(e,"tree",{enumerable:!0,get:function(){return n.tree}}),Object.defineProperty(e,"listToTree",{enumerable:!0,get:function(){return n.listToTree}});var o=i(10);Object.defineProperty(e,"hooks",{enumerable:!0,get:function(){return o.hooks}});var a=i(3);Object.defineProperty(e,"resetItem",{enumerable:!0,get:function(){return a.resetItem}});var s=i(11);Object.defineProperty(e,"reSetItemAttr",{enumerable:!0,get:function(){return s.reSetItemAttr}}),Object.defineProperty(e,"reSetList",{enumerable:!0,get:function(){return s.reSetList}});e.md5=i(5)},1:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.isString=o,e.objTypeof=a,e.isObject=s,e.isArray=u,e.isNumber=function(t){return"number"==a(t)},e.isFunction=function(t){return"function"==a(t)},e.clone=function(t){return JSON.parse(JSON.stringify(t))},e.isEmpty=function(t){if(s(t)){var e=Object.keys(t).length;return!e}if(u(t))return!t.length;return!0},e.formatQuery=function(t){var e=t,i={};if(t){var r=t.split("?");if(e=r[0],r[1]){var n=r[1].split("&");n.forEach(function(t){var e=t.split("=");i[e[0]]=!e[1]||e[1]})}}return{url:e,query:i}},e.formatToUrl=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o(t)&&s(e)){var i="";Object.keys(e).forEach(function(t){i+="&"+t+"="+e[t]}),i&&(t=(t+="?"+i).replace("?&","?").replace("&&","&"))}return t},e.suid=function(t){if(c++,"string"==typeof(t=t||"normal_"))return t+c},e.resetSuidCount=function(){c>9999&&(c=-1)},e.uuid=function(t,e){var i=new Date,r=i.getDay()+i.getHours()+i.getMinutes()+i.getSeconds()+i.getMilliseconds()+Math.round(1e4*Math.random()),o=(t||"uuid")+(0,n.default)(r);if(e&&"number"==typeof e&&e>6){var a=e-5,s=o.substr(0,5),u=o.substr(o.length-a);return s+u}return o};var n=function(t){return t&&t.__esModule?t:{default:t}}(i(5));function o(t){return"string"==typeof t}function a(t,e){if(t){if(t.nv_constructor)return t.nv_constructor.toLowerCase();if(t.constructor.toLowerCase)return t.constructor.toLowerCase();var i=void 0===t?"undefined":r(t);return e&&"array"==e&&Array.isArray(t)?"array":i}}function s(t){return"object"==a(t)&&!u(t)}function u(t){return"array"==a(t,"array")}var c=-1},10:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}();e.hooks=function(t,e){if((0,n.isString)(t))return a[t]||(a[t]=new o({storage:e})),a[t]};var n=i(1);var o=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.actions={},this.storeData={},this.storage=e.storage}return r(t,[{key:"destory",value:function(){this.actions=null,this.storeData=null}},{key:"getInfo",value:function(){return this.storage?getStorageInfoSync():this.storeData}},{key:"setItem",value:function(t,e){try{this.storage&&wx.setStorageSync(t,e),this.storeData[t]=e}catch(t){console.warn(t)}}},{key:"getItem",value:function(t){try{var e=void 0;return this.storage&&(e=wx.getStorageSync(t)),e&&(this.storeData[t]=e),e}catch(t){console.warn(t)}}},{key:"append",value:function(t,e){if(this.storeData[t]){var i=this.getItem(t);(0,n.isArray)(i)?i=i.concat(e):(0,n.isObject)(i)?(0,n.isObject)(e)?i=Object.assign(i,e):i[(0,n.suid)("random_")]=e:i=e,this.setItem(t,i)}else this.setItem(t,e)}},{key:"delete",value:function(t){this.storage&&wx.removeStorageSync(t),this.storeData[t]=null}},{key:"clear",value:function(){this.destory(),wx.clearStorageSync()}},{key:"on",value:function(t,e){var i=this.actions,r=(0,n.suid)("hooks_action_");e&&(e.hooksActionUniqId=r),(0,n.isString)(t)&&(i[t]?i[t]=[].concat(i[t]).concat(e):i[t]=[e])}},{key:"off",value:function(t,e){if((0,n.isString)(t))if(e){var i=e.hooksActionUniqId;if(i){var r=this.actions[t],o=void 0;r&&(r.forEach(function(t,e){t.hooksActionUniqId==i&&(o=e)}),o&&r.splice(o,1))}}else delete this.actions[t]}},{key:"emit",value:function(t,e){var i=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if((0,n.isString)(t)&&this.actions[t]){var o=[];if(this.actions[t].forEach(function(a){if((0,n.isFunction)(a)){var s=a.call(r,e);s?o.push(s):o.push(void 0),a.onlyonetime&&i.off(t,a)}}),o.length)return o}}},{key:"one",value:function(t,e){t&&"function"==typeof e&&(e.onlyonetime=!0),this.on(t,e)}}]),t}(),a={}},11:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.reSetItemAttr=a,e.reSetList=function(t){if((0,n.isObject)(t))return t.show=!t.hasOwnProperty("show")||t.show,function(t,e){var i=this,r=this;try{if(e.methods&&(0,n.isObject)(e.methods)){var o=e.methods;Object.keys(o).forEach(function(t){var e=o[t];(0,n.isFunction)(e)&&(e=e.bind(r),r[t]=o[t])})}return delete e.methods,(0,n.isArray)(t)&&(e.data=t.map(function(t){return a.call(i,t,e)})),e}catch(t){console.warn("======= lib.reSetArray =======",t)}}.call(this,t.data,t)};var n=i(1),o=i(3);function a(t,e){if("boolean"==typeof t)return t;"string"!=typeof t&&"number"!=typeof t||(t={title:t});var i=(0,n.suid)("index-");if(e.itemMethod){var a=e.itemMethod;"object"==(void 0===a?"undefined":r(a))&&Object.keys(a).forEach(function(e){t[e]=a[e]})}var s=e.itemClass||e.class||"",u=t.itemClass||t.class||t.className||"";if(t.itemClass=u?s+" "+u:s,t.itemClass=t.idf?"item itemroot "+t.itemClass:"item "+t.itemClass,e.itemStyle||e.style){var c=e.itemStyle||e.style;if(t.style||t.itemStyle){var f=t.style||t.itemStyle;t.style=f}else t.style=c}return(0,n.isObject)(t)&&(t.attr?t.attr["data-treeid"]||(t.attr["data-treeid"]=i):t.$$typeof?t={title:t,attr:{"data-treeid":i}}:t.attr={"data-treeid":i}),(0,o.resetItem)(t,this)}},12:function(t,e,i){(function(t){function i(t,e){for(var i=0,r=t.length-1;r>=0;r--){var n=t[r];"."===n?t.splice(r,1):".."===n?(t.splice(r,1),i++):i&&(t.splice(r,1),i--)}if(e)for(;i--;i)t.unshift("..");return t}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,n=function(t){return r.exec(t).slice(1)};function o(t,e){if(t.filter)return t.filter(e);for(var i=[],r=0;r<t.length;r++)e(t[r],r,t)&&i.push(t[r]);return i}e.resolve=function(){for(var e="",r=!1,n=arguments.length-1;n>=-1&&!r;n--){var a=n>=0?arguments[n]:t.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,r="/"===a.charAt(0))}return e=i(o(e.split("/"),function(t){return!!t}),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),n="/"===a(t,-1);return(t=i(o(t.split("/"),function(t){return!!t}),!r).join("/"))||r||(t="."),t&&n&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(o(t,function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,i){function r(t){for(var e=0;e<t.length&&""===t[e];e++);for(var i=t.length-1;i>=0&&""===t[i];i--);return e>i?[]:t.slice(e,i-e+1)}t=e.resolve(t).substr(1),i=e.resolve(i).substr(1);for(var n=r(t.split("/")),o=r(i.split("/")),a=Math.min(n.length,o.length),s=a,u=0;u<a;u++)if(n[u]!==o[u]){s=u;break}var c=[];for(u=s;u<n.length;u++)c.push("..");return(c=c.concat(o.slice(s))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=n(t),i=e[0],r=e[1];return i||r?(r&&(r=r.substr(0,r.length-1)),i+r):"."},e.basename=function(t,e){var i=n(t)[2];return e&&i.substr(-1*e.length)===e&&(i=i.substr(0,i.length-e.length)),i},e.extname=function(t){return n(t)[3]};var a="b"==="ab".substr(-1)?function(t,e,i){return t.substr(e,i)}:function(t,e,i){return e<0&&(e=t.length+e),t.substr(e,i)}}).call(this,i(13))},13:function(t,e){var i,r,n=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(i===setTimeout)return setTimeout(t,0);if((i===o||!i)&&setTimeout)return i=setTimeout,setTimeout(t,0);try{return i(t,0)}catch(e){try{return i.call(null,t,0)}catch(e){return i.call(this,t,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:o}catch(t){i=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var u,c=[],f=!1,l=-1;function h(){f&&u&&(f=!1,u.length?c=u.concat(c):l=-1,c.length&&d())}function d(){if(!f){var t=s(h);f=!0;for(var e=c.length;e;){for(u=c,c=[];++l<e;)u&&u[l].run();l=-1,e=c.length}u=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function v(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];c.push(new m(t,e)),1!==c.length||f||s(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=v,n.addListener=v,n.once=v,n.off=v,n.removeListener=v,n.removeAllListeners=v,n.emit=v,n.prependListener=v,n.prependOnceListener=v,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},14:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.itemComponentBehavior=e.itemBehavior=void 0;var r=i(2),n=i(0),o=e.itemBehavior=function(t,e){return e=e||"item",Behavior({behaviors:[(0,r.commonBehavior)(t,e),(0,r.commonMethodBehavior)(t,e)],properties:{item:{type:Object|String,observer:function(t){this.init||t&&(t.$$id?this.setData({$item:n.resetItem(t,this)}):this.update(t))}},id:String},data:{$item:{}},lifetimes:{created:function(){this.$$is="item"},attached:function(){var t=n.resetItem(this.properties.item);t&&this.setData({$item:t})},ready:function(){var e=this.activePage=t.activePage,i=this.data.item.$$id||this.properties.id||this.data.item.id;if(i){var r=e.eles[i];r?e.elements[r]=this:e.elements[i]=this}}},methods:{attr:function(t){return this.data.$item.attr},reset:function(){return this.setData({$item:JSON.parse(this.originalDataSource)}),this},update:function(t,e){if(n.isObject(t)){var i={};Object.keys(t).forEach(function(e){t[e]&&(-1==e.indexOf("$item.")?i["$item."+e]=t[e]:i[e]=t[e])}),t=i,this.setData(t);var r=n.resetItem(this.data.$item,this),o=n.isFunction(e)?e:null;this.setData({$item:r},o)}return this}}})};e.itemComponentBehavior=function(t,e){return Behavior({behaviors:[o(t,e)],definitionFilter:function(t,e){t.methods=t.methods||{},t.methods._setData=function(t,e,i){if(n.isFunction(e)&&(i=e,e={}),this.init&&t&&n.isObject(t)){var r=t.$item||t.item||t.dataSource||{};t.$item=n.resetItem(r,this)}this._originalSetData.call(this,t,i)}},lifetimes:{created:function(){this._originalSetData=this.setData,this.setData=this._setData},ready:function(){this.mount()}}})}},15:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.treeComponentBehavior=e.treeBehavior=void 0;var r=i(6),n=(i(0),e.treeBehavior=function(t,e){return e=e||"tree",Behavior({behaviors:[(0,r.listComponentBehavior)(t,e)],lifetimes:{created:function(){this.$$is="tree";var e=this.uniqId;this.children={},t._vars[e]=this},ready:function(){var e=this.activePage,i=this.uniqId;e.hooks.on("destory",function(){t._vars[i]=null})}}})});e.treeComponentBehavior=function(t,e){return e=e||"tree",Behavior({behaviors:[n(t,e)]})}},16:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.baseBehavior=void 0;var r=i(2);e.baseBehavior=function(t,e){return e=e||"tree",Behavior({behaviors:[(0,r.commonBehavior)(t,e),(0,r.commonMethodBehavior)(t,e)]})}},17:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(2);Object.defineProperty(e,"commonBehavior",{enumerable:!0,get:function(){return r.commonBehavior}}),Object.defineProperty(e,"commonMethodBehavior",{enumerable:!0,get:function(){return r.commonMethodBehavior}}),Object.defineProperty(e,"resetStoreEvts",{enumerable:!0,get:function(){return r.resetStoreEvts}});var n=i(14);Object.defineProperty(e,"itemBehavior",{enumerable:!0,get:function(){return n.itemBehavior}}),Object.defineProperty(e,"itemComponentBehavior",{enumerable:!0,get:function(){return n.itemComponentBehavior}});var o=i(6);Object.defineProperty(e,"listBehavior",{enumerable:!0,get:function(){return o.listBehavior}}),Object.defineProperty(e,"listComponentBehavior",{enumerable:!0,get:function(){return o.listComponentBehavior}});var a=i(15);Object.defineProperty(e,"treeBehavior",{enumerable:!0,get:function(){return a.treeBehavior}}),Object.defineProperty(e,"treeComponentBehavior",{enumerable:!0,get:function(){return a.treeComponentBehavior}});var s=i(16);Object.defineProperty(e,"baseBehavior",{enumerable:!0,get:function(){return s.baseBehavior}})},18:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.alert=function(t){wx.showModal({content:t,showCancel:!1})}},19:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.post=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(function(r,n){var o={url:t,method:"POST",data:e||{},header:{"content-type":"application/json"},success:function(t){r(t)},error:function(t){n("网络出错")}};(o=Object.assign(o,i)).fail=o.error,o.url&&wx.request(o)})},e.upload=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};n.isObject(t)&&(i=t);var r={url:t,type:"img",name:"file",filePath:"",header:{"content-type":"application/json"},data:e||{}};return(r=Object.assign(r,i)).formData=r.data,delete r.data,r.url&&r.filePath?(wx.showLoading({title:"上传中..."}),function(t){if(Array.isArray(t.filePath)){var e=[];return t.filePath.forEach(function(i){if(i=o(i)){var r=new Promise(function(e,r){var n={};Object.keys(t).forEach(function(e){"filePath"==e?n[e]=i:"formData"==e?(t[e].name=a(i),n[e]=t[e]):n[e]=t[e]}),n.success=function(t){e(t)},n.error=function(t){r(t)},n.fail=function(t){r(t)},s(n)});e.push(r)}}),Promise.all(e).then(function(t){return wx.hideLoading(),t})}return new Promise(function(e,i){var r=t.success,n=t.error;t.success=function(t){wx.hideLoading(),"function"==typeof r&&r(t),e(t)},t.error=function(t){"function"==typeof n&&n(t),i(t)},t.fail=t.error,t.filePath=o(t.filePath),t.formData.name=a(t.filePath),s(t)})}(r)):Promise.reject("url和filePath参数为必填项，url请填写服务器地址, filePath请填写上传图片地址")};var r=function(t){return t&&t.__esModule?t:{default:t}}(i(12));var n=i(0);function o(t){return n.isString(t)?t:n.isObject(t)?t.path?t.path:t.src?t.src:t.img?t.img.src?t.img.src:t.img:"":void 0}function a(t){var e=r.default.basename(t),i=r.default.extname(e);return e.length>10?n.uuid("upimg_",12)+i:e}function s(t){"cloud"==t.url?(t.cloudPath=t.formData.name,wx.cloud.uploadFile(t)):wx.uploadFile(t)}},2:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.resetStoreEvts=function(t){n={}};var r=i(0),n={};function o(t){if(r.isString(t)){var e=r.md5(t);if(n[e])return n[e];var i=void 0;if(t.indexOf("?")>-1){var o={},a=t.split("@@"),s=a[0];(t=a[1]).split(",").forEach(function(t){if(t){var e=t.split("="),i=e.splice(0,1),n=e.join("="),a=r.formatQuery(n);o[i]={fun:a.url,param:a.query}}}),i=o[s]}else{t=t.replace("@@","?").replace(/,/g,"&");var u=r.formatQuery(t),c=u.url,f=u.query[c],l=r.formatQuery(f);i={fun:l.url,param:l.query}}return n[e]=i,i||{}}}e.commonBehavior=function(t,e){return e=e||"behavior",Behavior({properties:{id:{type:String},fromComponent:{type:String,value:""}},externalClasses:["class-name"],relations:{},pageLifetimes:{show:function(){},hide:function(){},resize:function(t){}},lifetimes:{created:function(t){this.uniqId=r.suid(e),this.hooks=r.hooks(this.uniqId),this.$$type=e,this.init=!0,this.mounted=!1},attached:function(){var t=this.properties,e=t.item||t.list||t.dataSource,i=t.id;this.mountId=i||e.$$id,e.show=!e.hasOwnProperty("show")||e.show,this.setData({uniqId:this.uniqId})},ready:function(e){this.init=!1,this.mounted=!0,this.hooks.emit("ready"),this.activePage=t.activePage,this.originalDataSource=JSON.stringify(this.data.item||this.data.list||this.data.dataSource),this.data.fromTree&&(this.treeInst=t._vars[this.data.fromTree]),this.data.fromComponent&&(this.componentInst=t._vars[this.data.fromComponent]),this.mount()},moved:function(){},detached:function(){var e=this;setTimeout(function(){t._vars[e.uniqId]=null},50)}},methods:{getData:function(){return this.data.$item||this.data.$list||this.data.$dataSource||{}},_getAppVars:function(e){var i=e||this.data.fromComponent;return i&&t._vars[i]||{}},_preGetAppVars:function(t,e,i){var n=e.fn,o=this._getAppVars(t);return r.isEmpty(o)?i||{}:o[n]?o:o.data.fromComponent?this._preGetAppVars(o.data.fromComponent,e,o):o},generateUpdate:function(t,e){var i=this;if(t){var n=t+".";this.update=function(t){if(r.isObject(t)){var o={};Object.keys(t).forEach(function(e){-1==e.indexOf(n)?o[n+e]=t[e]:o[e]=t[e]}),t=o,this.setData(t,function(){r.isFunction(e)&&e.call(i)})}}}return this},mount:function(e){var i=this;this.mountId=e||this.mountId,this.init?this.hooks.on("ready",function(){i.mount(e)}):(this.mountId&&(this.activePage.elements[this.mountId]=this),t._vars[this.uniqId]=this,this.activePage.hooks.on("destory",function(){t._vars[i.uniqId]=null}))},show:function(t){r.isFunction(this.update)&&this.update({show:!0})},hide:function(t){r.isFunction(this.update)&&this.update({show:!1})},toggle:function(t){var e=!this.getData().show;r.isFunction(this.update)&&this.update({show:e},function(){r.isFunction(t)&&t(e)})}}})},e.commonMethodBehavior=function(t,e){return Behavior({behaviors:[],methods:{_rightEvent:function(t){var e=this.$$is,i=t.currentTarget.dataset,r=t.type+"@@"+i.evt;if("list"==e||"tree"==e){var n=this.data.$list.type;!n||"scroll"!=n.is&&"swiper"!=n.is||(r="bind"+r)}var a=o(r);return t.currentTarget.dataset._query=a.param,a},itemMethod:function(t){a.call(this,t)},catchItemMethod:function(t){a.call(this,t,"catch")}}})};function a(t,e){if(this.treeInst)return this.treeInst[e?"catchItemMethod":"itemMethod"].call(this.treeInst,t,e),!1;var i=this,n=t.currentTarget.dataset,a=this.activePage,s=t.type,u=o((e?e+s:s)+"@@"+n.evt),c=u.fun,f=u.param,l=this._preGetAppVars(null,u);r.isEmpty(l)&&(l=void 0),t.currentTarget.dataset._query=f;var h=a[c],d=this[c],m=r.isFunction(h),v=this.hooks.emit("beforeBind",{ctx:this,event:t,funName:c,param:f});l&&r.isFunction(l[c])?l[c].call(l,t,f,i):v?v.forEach(function(e){0!==e&&m&&h.call(a,t,f,i)}):r.isFunction(d)?d.call(this,t,f,this):m&&h.call(a,t,f,i)}},20:function(t,e,i){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=i(17),o=i(18),a=i(19),s=i(0);var u=void 0;function c(t){if(s.isObject(t)){var e=getApp(t.appConfig);if(e.hooks=s.hooks("aotoo"),t.data){var i=function t(e){var i=void 0,r={},n={};if(s.isObject(e))if(e.$$id){var o=e.$$id;if(r[o]=o,e.methods){var a=e.methods;s.isObject(a)&&(n[o]=Object.assign(n,a),delete e.methods)}}else i={},Object.keys(e).forEach(function(o){var a=e[o];if(s.isObject(a)&&a.$$id){var u=a.$$id;r[u]=o,a.methods&&s.isObject(a.methods)&&(n[u]=Object.assign(n,a.methods),delete a.methods),a.data&&s.isArray(a.data)&&(a.data=a.data.map(function(e){if(s.isObject(e)&&e.$$id){var i=t(e);r=Object.assign(r,i.eles),n=Object.assign(n,i.acts)}return e}))}i[o]=a});return{eles:r,acts:n,nData:i=i||e}}(t.data),r=i.eles,o=i.acts,a=i.nData;t.data=a,e._vars={}}var c=t.onLoad;t.onLoad=function(){var t=this,i=arguments;this.vars={},this.elements={},this.eles=r||{},this.acts=o||{},this.uniqId=s.suid("page"),this.hooks=s.hooks(this.uniqId),this.getElementsById=function(t){return this.elements[t]||this.selectComponent("#"+t)},e.activePage=u=this,"function"==typeof c&&setTimeout(function(){c.apply(t,i)},150)};var f=t.onReady;t.onReady=function(){var t=this,e=arguments,i=this,r=this.eles,n=this.acts;Object.keys(n).forEach(function(t){var e=n[t];if(r[t]){var o=r[t];if(i.elements[o])!function(t,e){s.isObject(e)&&Object.entries(e).forEach(function(e){var i=e[0],r=e[1];s.isFunction(r)&&(t[i]=r)})}(i.elements[o],e)}}),this.hooks.emit("onReady"),"function"==typeof f&&setTimeout(function(){f.apply(t,e)},150)};var l=t.onUnload;t.onUnload=function(){e.activePage=void 0,u=null,(0,n.resetStoreEvts)(),e.hooks.emit("destory"),this.hooks.emit("destory"),s.resetSuidCount(),this.hooks.destory(),"function"==typeof l&&l.apply(this,arguments)},Page(t)}}c.getElementsById=function(t){if(u)return u.getElementsById(t)},c.item=function(t,e){return t&&((s.isString(t)||s.isNumber(t))&&(t={title:t}),s.isObject(t)&&(t.$$id=t.$$id||e||s.suid("item__")),t.show=!t.hasOwnProperty("show")||t.show),t},c.list=function(t,e){if("object"==(void 0===t?"undefined":r(t)))return s.isArray(t)&&(t={data:t}),t.$$id=t.$$id||e||s.suid("list__"),t.show=!t.hasOwnProperty("show")||t.show,t},c.tree=function(t){return c.list(t,s.suid("tree__"))},c.lib=s,c.alert=o.alert,c.post=a.post,c.upload=a.upload,c.setItem=function(t){var e=t;return t.hasOwnProperty("show")||(e=c.item(t)),e=s.resetItem(e)},c.commonBehavior=n.commonBehavior,c.commonMethodBehavior=n.commonMethodBehavior,c.baseBehavior=n.baseBehavior,c.itemBehavior=n.itemBehavior,c.itemComponentBehavior=n.itemComponentBehavior,c.listBehavior=n.listBehavior,c.listComponentBehavior=n.listComponentBehavior,c.treeBehavior=n.treeBehavior,c.treeComponentBehavior=n.treeComponentBehavior,c.hooks=s.hooks,t.exports=c},203:function(t,e,i){"use strict";getApp();var r=i(20),n={title:[{title:"Utility",itemClass:"title-lg-active"},{title:"工具类",itemClass:"title-primary-grey"}],"@tree":{data:function(t){var e=[];return t.map(function(t){e.push({title:{title:t.title,itemClass:"title-primary-grey mb-20-r"},idf:t.id,liClass:"flex-row-wrap-between-center list-mt-30-r"}),t.list.map(function(i){e.push({title:[{title:i.title},{title:i.littleTitle,itemClass:"size12"}],itemClass:"item-li bg-display wid-p30 color-fff bg-"+i.title,parent:t.id})})}),e}([{title:"color",id:"color",list:[{title:"active",littleTitle:"#333",parentId:"color"},{title:"default",littleTitle:"#666",parentId:"color"},{title:"grey",littleTitle:"#999",parentId:"color"},{title:"primary",littleTitle:"#227ce1",parentId:"color"},{title:"minor",littleTitle:"#ff5552",parentId:"color"},{title:"bg",littleTitle:"#f4f5f6",parentId:"color"}]}]),listClass:"mt-40-r"},titleClass:"ml-40-r",itemClass:"pages-wrap-default bg-fff"};r({data:{motto:r.item(n)}})},3:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.resetItem=function t(e,i,o){if("string"==typeof e||"number"==typeof e||"boolean"==typeof e)return e;if((0,r.isObject)(e)){var a={},s=[];if(e.__sort=[],i&&(e.fromComponent=i.data.fromComponent||i.data.uniqId,e.methods||e.itemMethod)){var u=e.methods||e.itemMethod;Object.keys(u).forEach(function(t){var e=u[t];(0,r.isFunction)(e)&&(e=e.bind(i),i[t]=e)}),delete e.methods,delete e.itemMethod}Object.keys(e).forEach(function(t){e[t]||0===e[t]?n.indexOf(t)>-1||0==t.indexOf("@")&&t.length>1?s.push(t):"aim"==t?(e.catchtap=e[t],a.catchtap=e[t],delete e.aim):a[t]=e[t]:delete e[t]}),e.__sort=s;var c=!0,f=!1,l=void 0;try{for(var h,d=s[Symbol.iterator]();!(c=(h=d.next()).done);c=!0){var m=h.value,v=e[m];(0,r.isArray)(v)?e[m]=v.filter(function(e){return t(e,i,!0)}):/^[^@]/.test(m)&&v&&(e[m]=t(v,i,!0))}}catch(t){f=!0,l=t}finally{try{!c&&d.return&&d.return()}finally{if(f)throw l}}e.parent||o||(e.itemDataRoot=!0)}return e};var r=i(1),n=["title","img","icon","list","tree","item","header","body","footer","dot","li","k","v"]},4:function(t,e){var i={utf8:{stringToBytes:function(t){return i.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(i.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],i=0;i<t.length;i++)e.push(255&t.charCodeAt(i));return e},bytesToString:function(t){for(var e=[],i=0;i<t.length;i++)e.push(String.fromCharCode(t[i]));return e.join("")}}};t.exports=i},5:function(t,e,i){!function(){var e=i(7),r=i(4).utf8,n=i(8),o=i(4).bin,a=function(t,i){t.constructor==String?t=i&&"binary"===i.encoding?o.stringToBytes(t):r.stringToBytes(t):n(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||(t=t.toString());for(var s=e.bytesToWords(t),u=8*t.length,c=1732584193,f=-271733879,l=-1732584194,h=271733878,d=0;d<s.length;d++)s[d]=16711935&(s[d]<<8|s[d]>>>24)|4278255360&(s[d]<<24|s[d]>>>8);s[u>>>5]|=128<<u%32,s[14+(u+64>>>9<<4)]=u;var m=a._ff,v=a._gg,p=a._hh,y=a._ii;for(d=0;d<s.length;d+=16){var b=c,g=f,O=l,j=h;f=y(f=y(f=y(f=y(f=p(f=p(f=p(f=p(f=v(f=v(f=v(f=v(f=m(f=m(f=m(f=m(f,l=m(l,h=m(h,c=m(c,f,l,h,s[d+0],7,-680876936),f,l,s[d+1],12,-389564586),c,f,s[d+2],17,606105819),h,c,s[d+3],22,-1044525330),l=m(l,h=m(h,c=m(c,f,l,h,s[d+4],7,-176418897),f,l,s[d+5],12,1200080426),c,f,s[d+6],17,-1473231341),h,c,s[d+7],22,-45705983),l=m(l,h=m(h,c=m(c,f,l,h,s[d+8],7,1770035416),f,l,s[d+9],12,-1958414417),c,f,s[d+10],17,-42063),h,c,s[d+11],22,-1990404162),l=m(l,h=m(h,c=m(c,f,l,h,s[d+12],7,1804603682),f,l,s[d+13],12,-40341101),c,f,s[d+14],17,-1502002290),h,c,s[d+15],22,1236535329),l=v(l,h=v(h,c=v(c,f,l,h,s[d+1],5,-165796510),f,l,s[d+6],9,-1069501632),c,f,s[d+11],14,643717713),h,c,s[d+0],20,-373897302),l=v(l,h=v(h,c=v(c,f,l,h,s[d+5],5,-701558691),f,l,s[d+10],9,38016083),c,f,s[d+15],14,-660478335),h,c,s[d+4],20,-405537848),l=v(l,h=v(h,c=v(c,f,l,h,s[d+9],5,568446438),f,l,s[d+14],9,-1019803690),c,f,s[d+3],14,-187363961),h,c,s[d+8],20,1163531501),l=v(l,h=v(h,c=v(c,f,l,h,s[d+13],5,-1444681467),f,l,s[d+2],9,-51403784),c,f,s[d+7],14,1735328473),h,c,s[d+12],20,-1926607734),l=p(l,h=p(h,c=p(c,f,l,h,s[d+5],4,-378558),f,l,s[d+8],11,-2022574463),c,f,s[d+11],16,1839030562),h,c,s[d+14],23,-35309556),l=p(l,h=p(h,c=p(c,f,l,h,s[d+1],4,-1530992060),f,l,s[d+4],11,1272893353),c,f,s[d+7],16,-155497632),h,c,s[d+10],23,-1094730640),l=p(l,h=p(h,c=p(c,f,l,h,s[d+13],4,681279174),f,l,s[d+0],11,-358537222),c,f,s[d+3],16,-722521979),h,c,s[d+6],23,76029189),l=p(l,h=p(h,c=p(c,f,l,h,s[d+9],4,-640364487),f,l,s[d+12],11,-421815835),c,f,s[d+15],16,530742520),h,c,s[d+2],23,-995338651),l=y(l,h=y(h,c=y(c,f,l,h,s[d+0],6,-198630844),f,l,s[d+7],10,1126891415),c,f,s[d+14],15,-1416354905),h,c,s[d+5],21,-57434055),l=y(l,h=y(h,c=y(c,f,l,h,s[d+12],6,1700485571),f,l,s[d+3],10,-1894986606),c,f,s[d+10],15,-1051523),h,c,s[d+1],21,-2054922799),l=y(l,h=y(h,c=y(c,f,l,h,s[d+8],6,1873313359),f,l,s[d+15],10,-30611744),c,f,s[d+6],15,-1560198380),h,c,s[d+13],21,1309151649),l=y(l,h=y(h,c=y(c,f,l,h,s[d+4],6,-145523070),f,l,s[d+11],10,-1120210379),c,f,s[d+2],15,718787259),h,c,s[d+9],21,-343485551),c=c+b>>>0,f=f+g>>>0,l=l+O>>>0,h=h+j>>>0}return e.endian([c,f,l,h])};a._ff=function(t,e,i,r,n,o,a){var s=t+(e&i|~e&r)+(n>>>0)+a;return(s<<o|s>>>32-o)+e},a._gg=function(t,e,i,r,n,o,a){var s=t+(e&r|i&~r)+(n>>>0)+a;return(s<<o|s>>>32-o)+e},a._hh=function(t,e,i,r,n,o,a){var s=t+(e^i^r)+(n>>>0)+a;return(s<<o|s>>>32-o)+e},a._ii=function(t,e,i,r,n,o,a){var s=t+(i^(e|~r))+(n>>>0)+a;return(s<<o|s>>>32-o)+e},a._blocksize=16,a._digestsize=16,t.exports=function(t,i){if(void 0===t||null===t)throw new Error("Illegal argument "+t);var r=e.wordsToBytes(a(t,i));return i&&i.asBytes?r:i&&i.asString?o.bytesToString(r):e.bytesToHex(r)}}()},6:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.listComponentBehavior=e.listBehavior=void 0;var r=i(2);var n=i(0),o=n.reSetItemAttr,a=n.reSetList;function s(t){var e=this;if(t){var i=t,r=function(){var t={};return Object.keys(i).forEach(function(e){"data"!=e&&(t[e]=i[e])}),t}();i.itemMethod&&n.isObject(i.itemMethod)&&(Object.keys(i.itemMethod).forEach(function(t){e[t]=i.itemMethod[t]}),delete i.itemMethod);var o=i,s=this.data.fromTree;o=s?n.listToTree.call(this,o,s):a.call(this,i),this.setData({$list:o,props:r})}}var u=e.listBehavior=function(t,e){return e=e||"list",Behavior({behaviors:[(0,r.commonBehavior)(t,e),(0,r.commonMethodBehavior)(t,e)],properties:{list:{type:Object,observer:function(t){this.init||s.call(this,t)}},fromTree:{type:Boolean|String,value:!1},fromComponent:{type:String,value:""}},data:{$list:{}},lifetimes:{created:function(){this.$$is="list"},attached:function(){var t=this.properties.list;s.call(this,t)},ready:function(){var e=this.data.fromTree||this.data.$list.fromTree,i=this.activePage;if(this.data.$list.$$id){var r=this.data.$list.$$id;if(n.isString(e)){t._vars[e].children[r]=this}else{var o=i.eles[r];o?i.elements[o]=this:i.elements[r]=this}}t._vars[this.uniqId]=this}},methods:{reset:function(){return this.setData({$list:JSON.parse(this.originalDataSource)}),this},update:function(t,e){var i=this,r=n.isFunction(e)?e:null;if(n.isObject(t)){var s={};Object.keys(t).forEach(function(e){var r=e;-1==e.indexOf("$list.")&&(r="$list."+e),s[r]=o.call(i,t[e],i.data.$list)}),t=s,this.setData(t,r)}if(n.isArray(t)){var u=Object.assign({data:t},this.data.$list),c=a.call(this,u);this.setData({$list:c},r)}return this},__newItem:function(t){var e=this;return n.isArray(t)?t.map(function(t){return o.call(e,t,e.data.props)}):o.call(this,t,this.data.props)},findIndex:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"attr",i=void 0;if(t)for(var r=this.data.$list.data,o=function(o){var a=r[o],s=a.attr,u=s["data-treeid"]||s.treeid;if("attr"==e){if(n.isObject(t)&&(Object.keys(t).forEach(function(e,r){0==r&&a[e]==t[e]&&(i=o)}),i))return"break";if(n.isString(t)&&u==t)return i=o,"break"}"class"==e&&(n.isString(t)&&(a.itemClass||a.class).indexOf(t)>-1&&(i=i?i.concat(o):[o]))},a=0;a<r.length;a++){if("break"===o(a))break}return i},find:function(t,e){var i=this,r=this.findIndex(t,e);if(r||0===r){if(n.isArray(r))return r.map(function(t){return i.data.$list.data[t]});var o=this.data.$list.data[r];return o.__realIndex=r,o}},findAndUpdate:function(t,e){var i=this.find(t),r=i.__realIndex,o=n.isFunction(e),a=void 0;if(i){if(!o)return i;(a=e(i))&&this.update(function(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}({},"data["+r+"]",a))}},attr:function(t){if(n.isString(t))return this.find(t).attr},append:function(t){if(t){var e=this.data.$list,i=e.data;e.data=i.concat(this.__newItem(t)),this.setData({$list:e})}},prepend:function(t){if(t){var e=this.data.$list,i=e.data;e.data=[].concat(this.__newItem(t)).concat(i),this.setData({$list:e})}},delete:function(t){if(n.isString(t)){var e=this.data.$list,i=e.data,r=this.findIndex(t);(r||0==r)&&(i.splice(r,1),this.setData({$list:e}))}return this},insert:function(t,e){if(n.isString(t)&&e){e=this.__newItem(e);var i=this.data.$list,r=i.data,o=this.findIndex(t);(o||0==o)&&(r.splice(o,0,e),this.setData({$list:i}))}return this},_scrollMethod:function(t){return c.call(this,t,"scroll")},_swiperMethod:function(t){return c.call(this,t,"swiper")}}})};function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"list";if(this.treeInst)return"swiper"==e?this.treeInst._swiperMethod.call(this.treeInst,t,e):this.treeInst._scrollMethod.call(this.treeInst,t,e);this.data.$list.type;"swiper"==e&&(this.hooks.emit("bindchange",t),this.hooks.emit("bindtransition",t),this.hooks.emit("bindanimationfinish",t)),"scroll"==e&&(this.hooks.emit("bindscroll",t),this.hooks.emit("bindscrolltoupper",t),this.hooks.emit("bindscrolltolower",t));var i=this.activePage,r=this.componentInst,o=this._rightEvent(t),a=o.fun,s=o.param,u=i[a],c=this[a],f=n.isFunction(u);n.isEmpty(r)&&(r=void 0),r&&n.isFunction(r[a])?r[a].call(r,t,s):n.isFunction(c)?c.call(this,t,s,this):f&&u.call(i,t,s,r||that)}e.listComponentBehavior=function(t,e){return e=e||"list",Behavior({behaviors:[u(t,e)]})}},7:function(t,e){!function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&i.rotl(t,8)|4278255360&i.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=i.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],i=0,r=0;i<t.length;i++,r+=8)e[r>>>5]|=t[i]<<24-r%32;return e},wordsToBytes:function(t){for(var e=[],i=0;i<32*t.length;i+=8)e.push(t[i>>>5]>>>24-i%32&255);return e},bytesToHex:function(t){for(var e=[],i=0;i<t.length;i++)e.push((t[i]>>>4).toString(16)),e.push((15&t[i]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],i=0;i<t.length;i+=2)e.push(parseInt(t.substr(i,2),16));return e},bytesToBase64:function(t){for(var i=[],r=0;r<t.length;r+=3)for(var n=t[r]<<16|t[r+1]<<8|t[r+2],o=0;o<4;o++)8*r+6*o<=8*t.length?i.push(e.charAt(n>>>6*(3-o)&63)):i.push("=");return i.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var i=[],r=0,n=0;r<t.length;n=++r%4)0!=n&&i.push((e.indexOf(t.charAt(r-1))&Math.pow(2,-2*n+8)-1)<<2*n|e.indexOf(t.charAt(r))>>>6-2*n);return i}};t.exports=i}()},8:function(t,e){function i(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(i(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&i(t.slice(0,0))}(t)||!!t._isBuffer)}},9:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.tree=f,e.listToTree=function(t,e){var i=(0,n.clone)(t);(0,n.isObject)(i)&&i.data&&(i.data=f.call(this,i.data,i,e));return i};var n=i(1),o=i(3),a=function(t,e){if((0,n.isArray)(t))return t.filter(e)},s=[],u={};var c=1;function f(t,e,i){var n=[];return s=[],u={itemClass:e.itemClass||e.class,itemStyle:e.itemStyle||e.style},t.forEach(function(e,f){if(c=1,"object"==(void 0===e?"undefined":r(e))&&!Array.isArray(e)){if(e.fromComponent=i,e.idf&&!e.parent&&-1==s.indexOf(e.idf)){var l=e.itemClass||e.class;l=l?-1==l.indexOf("level0")?l+" level0":l:"level0",e.itemClass=l;var h=function t(e,i,r,n){r=c=r||1;var f=void 0;this&&this.fromTree&&(f=this.fromTree);var l=[];if(a(i,function(t){return t.parent==e.idf}).forEach(function(e,n){var o=e.itemClass||e.class;o=function(t,e){var i=/ *level([\d]* *)?/gi,r="level"+e;if(t)return i.test(t)&&(t=t.replace(i,"")),t+=" "+r}(o,r),e.itemClass=o,e.idf&&-1==s.indexOf(e.idf)?(s.push(e.idf),l=l.concat([t.call({fromTree:f},e,i,++r,n)]),--r):l=l.concat(e)}),l.length){var h=e.attr&&e.attr["data-treeid"]||n,d=e.$$id||e.id||""+h;e["@list"]={$$id:d,data:l,type:e.type,listClass:e.liClass||"ul",itemClass:u.itemClass||"",itemStyle:u.itemStyle||"",show:!e.hasOwnProperty("show")||e.show,fromComponent:f}}return e=(0,o.resetItem)(e)}.call({fromTree:i},e,t,f);h.__deep=c,n.push(h)}e.idf||e.parent||n.push(e)}if(Array.isArray(e)){var d=function t(e){var i=[];if(e.forEach(function(r){if(Array.isArray(r))return t(e);i.push(r)}),i.length)return{li:i}}(e);d&&n.push(d)}}),n}}},[[203,0]]]);