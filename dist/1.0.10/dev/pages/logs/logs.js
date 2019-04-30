; require("../../runtime.js");
/**aotoo commonfile**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[235],{

/***/ 100:
/*!*******************************!*\
  !*** ./js/pages/logs/logs.js ***!
  \*******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//logs.js
var util = __webpack_require__(/*! ../../utils/util.js */ 23);

Page({
  data: {
    logs: []
  },
  onLoad: function onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log));
      })
    });
  }
});

/***/ })

},[[100,0,1]]]);