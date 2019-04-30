; require("../../../runtime.js");
/**aotoo commonfile**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[33],{

/***/ 159:
/*!********************************************!*\
  !*** ./js/demo/form/singlepicker/index.js ***!
  \********************************************/
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
    title: '单选择器',
    input: [{
      id: 'test_picker',
      type: 'picker',
      title: '选择器',
      values: [[{ title: '选项一', id: '100' }, { title: '选项二', id: '101', select: true }, { title: '选项三', id: '102' }]],
      itemClass: 'mt-8-r'
    }]
  }, {
    title: '动态表单',
    input: [{
      id: 'test_text',
      type: 'text',
      title: '标题',
      placeholder: '单选框选择以动态设置该文本框内容',
      itemClass: 'mt-8-r'
    }, {
      id: 'test_picker1',
      type: 'picker',
      title: '选择器',
      values: [[{ title: '选项一', id: '100' }, { title: '选项二', id: '101' }, { title: '选项三', id: '102', select: true }]],
      itemClass: 'mt-8-r',
      bindchange: 'pickerAction'
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
  pickerAction: function pickerAction(e, param, inst) {
    var inputData = param.inputData,
        profile = param.profile;

    var index = inputData.value[0];
    var val = inputData.values[0][index].id;
    var text = inputData.values[0][index].title;
    inst.value('test_text', {
      value: "index为:" + index + "  值为:" + val + "  text为" + text
    });
    return inputData;
  },
  prtValue: function prtValue(e, param, inst) {
    var val = inst.value('test_picker1');
    console.log('picker选项值为：', val.value);
  }
});

/***/ })

},[[159,0,1]]]);