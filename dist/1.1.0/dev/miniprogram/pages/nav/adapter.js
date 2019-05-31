; require("../../runtime.js");
/**auto import common&runtime js**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[241],{

/***/ 26:
/*!*********************************!*\
  !*** ./js/pages/nav/adapter.js ***!
  \*********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var adapterNav = function adapterNav(res, idx) {
  return res.map(function (item, ii) {
    return {
      title: [{
        title: ' ',
        itemClass: item.attrx == 'index' ? 'item-icon icon-index' : 'item-icon icon-about'
      }, {
        title: item.title,
        itemClass: 'item-title'
      }],
      titleClass: idx == ii ? 'item active' : 'item',
      tap: 'onNav?nav=' + item.attrx
    };
  });
};
exports.default = adapterNav;

/***/ })

},[[26,0]]]);