; require("../../../runtime.js");
/**aotoo commonfile**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[26],{

/***/ 131:
/*!****************************************!*\
  !*** ./js/demo/form/dropdown/index.js ***!
  \****************************************/
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
    title: '类目6',
    input: [{
      id: 'ddmenu',
      type: 'dropdown',
      title: '省份',
      placeholder: '请选择省份',
      titles: {
        data: [{ title: '广东', value: '1001' }, { title: '湖南', value: '1002' }, { title: '山东', value: '1003' }, { title: '广西', value: '1004' }, { title: '山西', value: '1005' }]
      },
      bindchange: 'ddAction'
    }]
  }]
};

Pager({
  data: {
    motto: formData
  },
  ddAction: function ddAction(e, param, inst) {
    var inputData = param.inputData;

    var val = inst.value('ddmenu');
    console.log(val.value);
  }
});

/***/ })

},[[131,0,1]]]);