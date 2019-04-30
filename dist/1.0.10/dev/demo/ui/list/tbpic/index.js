; require("../../../../runtime.js");
/**aotoo commonfile**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[45],{

/***/ 231:
/*!****************************************!*\
  !*** ./js/demo/ui/list/tbpic/index.js ***!
  \****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(/*! ../data */ 5);

var _data2 = _interopRequireDefault(_data);

var _adapter = __webpack_require__(/*! ../adapter */ 4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//index.js
//获取应用实例
var app = getApp();
var Pager = __webpack_require__(/*! components/aotoo/core */ 0);

var gatherList = [{ title: { title: '效果一', itemClass: 'bg-title' }, liClass: 'bg-fff bb-default', idf: 'g1' }, {
  '@list': {
    listClass: 'list-pic-column pic-2 padding-default',
    itemClass: 'ss-focus item-li',
    data: (0, _adapter.adapterList7Ss)(_data2.default.listData2xx)
  },
  parent: 'g1'
}];

Pager({
  data: {
    motto: Pager.tree({
      type: {
        is: "scroll"
      },
      data: gatherList
    })
  }
});

/***/ })

},[[231,0,1]]]);