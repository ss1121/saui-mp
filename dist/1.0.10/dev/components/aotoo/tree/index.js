; require("../../../runtime.js");
/**aotoo commonfile**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[21],{

/***/ 123:
/*!*******************************************!*\
  !*** ./js/components/aotoo/tree/index.js ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 作者： 天天修改
 * github: webkixi
 * 小程序的模板真是又长又臭
 * 
 *
 const defaultListOptions = {
   data: [
     // String / Json 
   ],
   listClass: '',
   listStyle: '',
   itemClass: '',
   itemStyle: '',
   itemMethod: {},
 }
 */

var app = getApp();
var Core = __webpack_require__(/*! ../core */ 0);
var lib = Core.lib;
Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  behaviors: [Core.treeBehavior(app, 'tree')]
});

/***/ })

},[[123,0,1]]]);