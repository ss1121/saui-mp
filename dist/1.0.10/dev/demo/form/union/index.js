; require("../../../runtime.js");
/**aotoo commonfile**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[36],{

/***/ 171:
/*!*************************************!*\
  !*** ./js/demo/form/union/index.js ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//index.js
//获取应用实例
var app = getApp();
var Pager = __webpack_require__(/*! components/aotoo/core */ 0);

var formData = {
  data: [{
    title: '类目1',
    itemClass: 'oooo',
    input: [{
      type: 'text', id: 'username', title: '标题', placeholder: '动态响应下拉框的值',
      union: {
        id: 'ddmenu',
        callback: function callback(point) {
          switch (point.value) {
            case '1002':
              this.inputData.value = '湖南省吧';
              break;
            case '1001':
              this.inputData.value = '广东省吧';
              break;
          }
          this.save();
        }
      }
    }]
  }, {
    title: '类目6',
    input: [{
      id: 'ddmenu',
      type: 'dropdown',
      title: '省份',
      placeholder: '请选择省份',
      titles: {
        data: [{ title: '广东', value: '1001' }, { title: '湖南', value: '1002' }, { title: '山东', value: '1003' }, { title: '广西', value: '1004' }, { title: '山西', value: '1005' }]
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

},[[171,0,1]]]);