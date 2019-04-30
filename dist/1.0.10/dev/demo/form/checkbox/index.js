; require("../../../runtime.js");
/**aotoo commonfile**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[25],{

/***/ 127:
/*!****************************************!*\
  !*** ./js/demo/form/checkbox/index.js ***!
  \****************************************/
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
    title: 'CHECKBOX表单元素',
    input: [{
      name: 'test_checkbox1',
      type: 'checkbox',
      title: '默认选项',
      value: ['1', '3'],
      values: ['1', '2', '3', '4'],
      titles: ['A', 'B', 'C', 'D'],
      itemClass: 'mt-8-r'
    }, {
      name: 'test_checkbox2',
      type: 'checkbox',
      title: '提示信息',
      values: ['1', '2', '3', '4'],
      titles: ['A', 'B', 'C', 'D'],
      itemClass: 'mt-8-r',
      error: '出错信息',
      desc: '红字是出错提示，这里是提示信息'
    }]
  }, {
    title: '动态表单',
    input: [{
      name: 'test_checkbox1',
      type: 'checkbox',
      title: '默认选项',
      value: ['1', '3'],
      values: ['1', '2', '3', '4'],
      titles: ['A', 'B', 'C', 'D'],
      itemClass: 'mt-8-r'
    }, {
      id: 'btn_error',
      type: 'button',
      value: '是否出错',
      tap: 'setError'
    }, {
      id: 'btn_rmv_error',
      type: 'button',
      value: '清除信息',
      tap: 'rmvError'
    }, {
      id: 'btn_prt_val',
      type: 'button',
      value: '打印value',
      tap: 'prtValue'
    }]
  }]
};

Pager({
  data: {
    motto: formData
  },
  setError: function setError(e, param, ctx) {
    var tc1 = ctx.value('test_checkbox1');
    if (tc1 && lib.isArray(tc1.value) && tc1.value.length == 2 && tc1.value.indexOf('1') > -1 && tc1.value.indexOf('3') > -1) {
      ctx.removeWarn('test_checkbox1');
      ctx.addDesc('test_checkbox1', '您选择了正确答案，试试选择其他答案');
    } else {
      ctx.removeDesc('test_checkbox1');
      ctx.addWarn('test_checkbox1', '请选择正确的选项');
    }
  },
  rmvError: function rmvError(e, param, ctx) {
    ctx.removeDesc('test_checkbox1');
    ctx.removeWarn('test_checkbox1');
  },
  prtValue: function prtValue(e, param, ctx) {
    console.log(ctx.value('test_checkbox1').value);
  }
});

/***/ })

},[[127,0,1]]]);