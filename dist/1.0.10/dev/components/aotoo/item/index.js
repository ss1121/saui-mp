; require("../../../runtime.js");
/**aotoo commonfile**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[13],{

/***/ 104:
/*!*******************************************!*\
  !*** ./js/components/aotoo/item/index.js ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 作者： 天天修改
 * github: webkixi
 * 小程序的模板真是又长又臭
 */
var app = getApp();
var Core = __webpack_require__(/*! ../core */ 0);
var lib = Core.lib;
var resetItem = lib.resetItem;

Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
    addGlobalClass: true
  },
  behaviors: [Core.itemBehavior(app)],
  lifetimes: {
    attached: function attached() {
      //节点树完成，可以用setData渲染节点，但无法操作节点
      this.setData({
        "$item": resetItem(this.properties.item)
      });
    }
  }
});

/***/ })

},[[104,0,1]]]);