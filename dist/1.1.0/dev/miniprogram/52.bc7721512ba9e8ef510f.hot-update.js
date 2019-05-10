; require("../../../../runtime.js");
/**auto import common&runtime js**/
webpackHotUpdate(52,{

/***/ 228:
/*!*****************************************!*\
  !*** ./js/demo/ui/tabs/normal/index.js ***!
  \*****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//index.js
//获取应用实例
var app = getApp();
var Pager = __webpack_require__(/*! components/aotoo/core */ 18);

var tabData = {
  $$id: 'sstree',
  data: [{
    title: '选项一x',
    content: 'aaa-content'
  }, {
    title: '选项二',
    content: 'bbb-content'
  }, {
    title: '选项三',
    content: 'ccc-content'
  }],
  listClass: 'xx'
};

Pager({
  data: {
    motto: tabData
  },
  tabIndex: function tabIndex(e, query, inst) {
    console.log(e, query, inst);
    // const theTap = query.demo.replace(/_/g,"/")
    // if (theTap) {
    //   switch (theTap) {
    //     case theTap:
    //       wx.navigateTo({
    //         url: '../../demo/'+theTap+'/index'
    //       })
    //     break;
    //   }
    // }
  }
});

/***/ })

})