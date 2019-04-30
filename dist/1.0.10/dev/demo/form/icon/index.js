; require("../../../runtime.js");
/**aotoo commonfile**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[27],{

/***/ 135:
/*!************************************!*\
  !*** ./js/demo/form/icon/index.js ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//index.js
//获取应用实例
var app = getApp();
var Pager = __webpack_require__(/*! components/aotoo/core */ 0);
var lib = Pager.lib;

var formData = {
  $$id: 'formInst',
  data: [{
    title: '类目3',
    input: [{
      type: 'number', placeholder: '数字输入键盘',
      title: {
        '@icon': { class: 'icon-menu-1 mr-10-r size16 color-primary' },
        itemStyle: 'text-align: center; margin-top: -5rpx'
      }
    }, {
      type: 'idcard', placeholder: '身份证输入键盘',
      title: {
        '@icon': { class: 'icon-3 mr-10-r size16 color-primary' },
        itemStyle: 'text-align: center; margin-top: -5rpx'
      }
    }, {
      type: 'idcard', placeholder: '身份证输入键盘',
      title: '标题',
      eye: {
        class: 'icon-3 mr-10-r size16 color-primary'
      }
    }]
  }]
};

Pager({
  data: {
    motto: formData
  }
});

/***/ })

},[[135,0,1]]]);