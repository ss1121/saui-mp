; require("../../runtime.js");
/**auto import common&runtime js**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[239],{

/***/ 30:
/*!**************************!*\
  !*** ./js/utils/util.js ***!
  \**************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var formatTime = function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
};

var formatNumber = function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
};

module.exports = {
  formatTime: formatTime
};

/***/ }),

/***/ 76:
/*!*******************************!*\
  !*** ./js/pages/logs/logs.js ***!
  \*******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//logs.js
var util = __webpack_require__(/*! ../../utils/util.js */ 30);

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

},[[76,0]]]);