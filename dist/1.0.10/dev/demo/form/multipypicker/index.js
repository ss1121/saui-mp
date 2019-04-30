; require("../../../runtime.js");
/**aotoo commonfile**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[30],{

/***/ 147:
/*!*********************************************!*\
  !*** ./js/demo/form/multipypicker/index.js ***!
  \*********************************************/
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
    title: '多选择器-确定后设置值',
    input: [{
      id: 'test_pickers',
      type: 'picker',
      title: '双选选择器',
      values: [[{ title: '猫科', id: '100', select: true }, { title: '狗科', id: '101' }], [{ title: '老虎', id: '102' }, { title: '狮子', id: '103' }, { title: '豹子', id: '104', select: true }, { title: '野狗', id: '105' }]],
      itemClass: 'mt-8-r'
    }, {
      id: 'test_pickers',
      type: 'picker',
      title: '三选选择器',
      values: [[{ title: '猫科', id: '100', select: true }, { title: '狗科', id: '101' }], [{ title: '老虎', id: '102' }, { title: '狮子', id: '103' }, { title: '豹子', id: '104', select: true }, { title: '野狗', id: '105' }], [{ title: '猎豹', id: '106' }, { title: '猞猁', id: '107' }, { title: '英短', id: '108' }]],
      itemClass: 'mt-8-r'
    }, {
      id: 'test_pickers',
      type: 'picker',
      title: '四选选择器',
      values: [[{ title: '猫科', id: '100', select: true }, { title: '狗科', id: '101' }], [{ title: '老虎', id: '102' }, { title: '狮子', id: '103' }, { title: '豹子', id: '104', select: true }, { title: '野狗', id: '105' }], [{ title: '猎豹', id: '106' }, { title: '猞猁', id: '107' }, { title: '英短', id: '108' }], [{ title: '猎豹', id: '106' }, { title: '猞猁', id: '107' }, { title: '英短', id: '108' }]],
      itemClass: 'mt-8-r'
    }]
  }, {
    title: '多选择器-即时设置值',
    input: [{
      id: 'test_pickers',
      type: 'picker',
      title: '三选选择器',
      bindcolumnchange: true,
      values: [[{ title: '猫科', id: '100', select: true }, { title: '狗科', id: '101' }], [{ title: '老虎', id: '102' }, { title: '狮子', id: '103' }, { title: '豹子', id: '104', select: true }, { title: '野狗', id: '105' }], [{ title: '猎豹', id: '106' }, { title: '猞猁', id: '107' }, { title: '英短', id: '108' }]],
      itemClass: 'mt-8-r'
    }]
  }, {
    title: '动态表单',
    input: [{
      id: 'test_text',
      type: 'text',
      title: '标题',
      placeholder: 'picker的选项将被插入这里',
      itemClass: 'mt-8-r'
    }, {
      id: 'test_pickers8',
      type: 'picker',
      title: '多选选择器',
      values: [[{ title: '猫科', id: '100', select: true }, { title: '狗科', id: '101' }], [{ title: '老虎', id: '102' }, { title: '狮子', id: '103' }, { title: '豹子', id: '104', select: true }, { title: '野狗', id: '105' }], [{ title: '猎豹', id: '106' }, { title: '猞猁', id: '107' }, { title: '英短', id: '108' }]],
      itemClass: 'mt-8-r',
      bindchange: 'pickerAction'
    }, {
      id: 'btn_prt_value',
      type: 'button',
      value: '打印值',
      tap: 'prtValue'
    }]
  }, {
    title: '联动选择器',
    input: [{
      id: 'test_pickers9',
      type: 'picker',
      title: '多选选择器',
      values: [[{ title: '猫科', id: '100', select: true }, { title: '狗科', id: '101' }], [{ title: '老虎', id: '102' }, { title: '狮子', id: '103' }, { title: '豹子', id: '104', select: true }, { title: '野狗', id: '105' }], [{ title: '猎豹', id: '106' }, { title: '猞猁', id: '107' }, { title: '英短', id: '108' }]],
      itemClass: 'mt-8-r',
      bindcolumnchange: 'pickerColumnAction'
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

    var _values = inputData.values;
    var values = [];
    inputData.value.forEach(function (idx, ii) {
      values.push({
        title: _values[ii][idx].title,
        id: _values[ii][idx].id
      });
    });
    if (values.length) {
      var content = values.map(function (item) {
        return item.title;
      });
      var ids = values.map(function (item) {
        return item.id;
      });
      inst.value('test_text', {
        value: '您选了' + content.join(',') + ', id分别为' + ids.join(',')
      });
    }
  },
  pickerColumnAction: function pickerColumnAction(e, param, inst) {
    var detail = e.detail;
    var column = detail.column,
        value = detail.value;
    var inputData = param.inputData,
        profile = param.profile;

    if (column || column === 0) {
      if (column === 0) {
        if (value == 1) {
          inputData.values[1] = [{ title: '猫猫', id: '201' }, { title: '臭猫猫', id: '202' }, { title: '丑猫猫', id: '203' }, { title: '五毛猫猫', id: '204' }];
        }
      }
      if (column === 1) {
        if (value == 1) {
          inputData.values[2] = [{ title: 'A猫猫', id: '301' }, { title: 'B臭猫猫', id: '302' }, { title: 'C丑猫猫', id: '303' }, { title: 'D五毛猫猫', id: '304' }];
        }
      }
      return inputData;
    }
  },
  prtValue: function prtValue(e, param, inst) {
    var val = inst.value('test_pickers9');
    console.log('picker选项值为：', val.value);
  }
});

/***/ })

},[[147,0,1]]]);