; require("../../../runtime.js");
/**aotoo commonfile**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[34],{

/***/ 163:
/*!**************************************!*\
  !*** ./js/demo/form/slider/index.js ***!
  \**************************************/
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
  data: [{
    title: '滑动块',
    input: {
      id: 'test_slider',
      type: 'slider',
      value: 50
    }
  }, {
    title: '动态表单',
    input: [{
      id: 'test_text',
      type: 'text',
      title: '标题',
      placeholder: '单选框选择以动态设置该文本框内容',
      itemClass: 'mt-8-r'
    }, {
      id: 'test_slider1',
      type: 'slider',
      value: 30,
      bindchange: 'sliderChange'
    }, {
      id: 'btn_prt_value',
      type: 'button',
      value: '打印值',
      tap: 'prtValue'
    }]
  }]
};

Pager({
  data: {
    motto: formData
  },
  sliderChange: function sliderChange(e, param, inst) {
    var inputData = param.inputData,
        profile = param.profile;

    inst.value('test_text', {
      value: inputData.value
    });
  },
  prtValue: function prtValue(e, param, inst) {
    var val = inst.value('test_slider1');
    console.log('slider状态值为：', val.value);
  }
});

/***/ })

},[[163,0,1]]]);