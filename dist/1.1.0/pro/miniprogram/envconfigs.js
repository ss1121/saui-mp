require("./runtime.js"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[53],{25:function(n,t,e){(function(n){function e(n,t){for(var e=0,r=n.length-1;r>=0;r--){var i=n[r];"."===i?n.splice(r,1):".."===i?(n.splice(r,1),e++):e&&(n.splice(r,1),e--)}if(t)for(;e--;e)n.unshift("..");return n}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(n){return r.exec(n).slice(1)};function o(n,t){if(n.filter)return n.filter(t);for(var e=[],r=0;r<n.length;r++)t(n[r],r,n)&&e.push(n[r]);return e}t.resolve=function(){for(var t="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var s=i>=0?arguments[i]:n.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,r="/"===s.charAt(0))}return t=e(o(t.split("/"),function(n){return!!n}),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(n){var r=t.isAbsolute(n),i="/"===s(n,-1);return(n=e(o(n.split("/"),function(n){return!!n}),!r).join("/"))||r||(n="."),n&&i&&(n+="/"),(r?"/":"")+n},t.isAbsolute=function(n){return"/"===n.charAt(0)},t.join=function(){var n=Array.prototype.slice.call(arguments,0);return t.normalize(o(n,function(n,t){if("string"!=typeof n)throw new TypeError("Arguments to path.join must be strings");return n}).join("/"))},t.relative=function(n,e){function r(n){for(var t=0;t<n.length&&""===n[t];t++);for(var e=n.length-1;e>=0&&""===n[e];e--);return t>e?[]:n.slice(t,e-t+1)}n=t.resolve(n).substr(1),e=t.resolve(e).substr(1);for(var i=r(n.split("/")),o=r(e.split("/")),s=Math.min(i.length,o.length),u=s,c=0;c<s;c++)if(i[c]!==o[c]){u=c;break}var a=[];for(c=u;c<i.length;c++)a.push("..");return(a=a.concat(o.slice(u))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(n){var t=i(n),e=t[0],r=t[1];return e||r?(r&&(r=r.substr(0,r.length-1)),e+r):"."},t.basename=function(n,t){var e=i(n)[2];return t&&e.substr(-1*t.length)===t&&(e=e.substr(0,e.length-t.length)),e},t.extname=function(n){return i(n)[3]};var s="b"==="ab".substr(-1)?function(n,t,e){return n.substr(t,e)}:function(n,t,e){return t<0&&(t=n.length+t),n.substr(t,e)}}).call(this,e(32))},26:function(n,t,e){"use strict";e(25);n.exports=function(n){n.name,n.startup,n.isDev,n.SRC,n.DIST,n.HOST,n.PORT,n.PROXYPORT,n.options;return{imgcodeurl:"http://api.test.7atour.com/tp-web-api/captcha.svl"}}},30:function(n,t,e){"use strict";(function(t,r){var i=e(25),o={name:"SaUi",ROOT:"/Users/sslin/lgh/xiaochengxu",version:"1.1.0",TYPE:"mp",startup:!0,isDev:!1,SRC:"/Users/sslin/lgh/xiaochengxu/src/SaUi",DIST:"/Users/sslin/lgh/xiaochengxu/src/SaUi/dist/1.1.0/pro",HOST:"localhost",PORT:8300,PROXYPORT:8317,options:{cloud:!0,appid:"wx6dfd3ea360d61f4d"},argv:{_:["build"]},isXcx:!0};n.exports=function(n){var s=e(26)(o);s.env=o,"undefined"==typeof wx?t.Configs=t.CONFIG=s:wx.CONFIG=s;var u=o.ROOT,c=o.SRC,a=i.join(c,"server"),l=o.DIST,f=(o.contentBase,""),p="",h="";!function(){var n=c.replace(u,""),t=a.replace(u,""),e=l.replace(u,"");n=i.join("/",n),t=i.join("/",t),e=i.join("/",e),t.split("/").forEach(function(n,t){t>0&&(f||(f=r),f=i.join(f,"../"))}),p=i.join(f,n),h=i.join(f,e),h}();o.ROOT=f,o.SRC=p,o.DIST=h,o.options.scenes=s,o.options.scenes.isXcx=!0;var v={};return o.options.scenes.mapper=v,"undefined"==typeof wx?(t.CONFIG.ROOT=f,t.Configs.mapper=t.CONFIG.mapper=v):wx.CONFIG.ROOT=f,o}}).call(this,e(31),"/")},31:function(n,t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(n){"object"==typeof wx&&(e=wx)}n.exports=e},32:function(n,t){var e,r,i=n.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function u(n){if(e===setTimeout)return setTimeout(n,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(n,0);try{return e(n,0)}catch(t){try{return e.call(null,n,0)}catch(t){return e.call(this,n,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:o}catch(n){e=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(n){r=s}}();var c,a=[],l=!1,f=-1;function p(){l&&c&&(l=!1,c.length?a=c.concat(a):f=-1,a.length&&h())}function h(){if(!l){var n=u(p);l=!0;for(var t=a.length;t;){for(c=a,a=[];++f<t;)c&&c[f].run();f=-1,t=a.length}c=null,l=!1,function(n){if(r===clearTimeout)return clearTimeout(n);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(n);try{r(n)}catch(t){try{return r.call(null,n)}catch(t){return r.call(this,n)}}}(n)}}function v(n,t){this.fun=n,this.array=t}function g(){}i.nextTick=function(n){var t=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];a.push(new v(n,t)),1!==a.length||l||u(h)},v.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(n){return[]},i.binding=function(n){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(n){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}}},[[30,0]]]);