; require("../../../../runtime.js");
/**aotoo commonfile**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[44],{

/***/ 227:
/*!*****************************************!*\
  !*** ./js/demo/ui/list/normal/index.js ***!
  \*****************************************/
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
    listClass: 'bb-e3e3e3-list-hbody',
    itemClass: 'plr-20-r ss-focus flex-row',
    data: (0, _adapter.adapterListSs)(_data2.default.listDatax)
  },
  parent: 'g1'
}, { title: { title: '效果二', itemClass: 'bg-title' }, liClass: 'bg-fff bb-default', idf: 'g2' }, {
  '@list': {
    listClass: 'bb-e3e3e3-list-hbody',
    itemClass: 'plr-20-r ss-focus flex-row',
    data: (0, _adapter.adapterListSs)(_data2.default.listData4x, {
      titleGClass: 'hei-p100 flex-column-between',
      itemClass: 'hei-p100',
      bodyClass: 'next-p100-first flex-row-between-center'
    })
  },
  parent: 'g2'
}, { title: { title: '效果三', itemClass: 'bg-title' }, liClass: 'bg-fff bb-default', idf: 'g3' }, {
  '@list': {
    listClass: 'bb-e3e3e3-list-hbody',
    itemClass: 'plr-20-r ss-focus flex-row',
    data: (0, _adapter.adapterListSs)(_data2.default.listData2x, {
      bodyClass: 'flex-row-between-center'
    })
  },
  parent: 'g3'
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

},[[227,0,1]]]);