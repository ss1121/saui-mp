; require("../../runtime.js");
/**auto import common&runtime js**/
webpackHotUpdate(55,{

/***/ 57:
/*!**********************************!*\
  !*** ./js/demo/uploads/index.js ***!
  \**********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//index.js
//获取应用实例
var app = getApp();
var Pager = __webpack_require__(/*! components/aotoo/core */ 18);
var lib = Pager.lib;

Pager({
  data: {
    uploads: {
      $$id: 'myupimg',
      server: 'http://localhost:8600/upimg',
      data: [{ img: '/images/huatong.png' }]
    },
    submitButton: {
      title: '上传图片',
      aim: 'upimg'
    }
  },

  upimg: function upimg(e, param, inst) {
    var upinst = Pager.getElementsById('myupimg');
    upinst.upload().then(function (res) {
      console.log(res);
    });
  },

  onShow: function onShow() {},

  onReady: function onReady() {},

  onLoad: function onLoad() {}
});

/***/ })

})