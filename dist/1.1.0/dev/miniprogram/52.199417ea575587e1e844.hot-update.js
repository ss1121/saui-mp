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
    title: '选项一',
    content: '没什么大不了，死不了就还好。A'
  }, {
    title: '选项二',
    content: '没什么大不了，死不了就还好。B'
  }, {
    title: '选项三',
    content: '没什么大不了，死不了就还好。C'
  }],
  listClass: 'tabs-default hei-p100 bg-fff'
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