; require("../../../runtime.js");
/**auto import common&runtime js**/
webpackHotUpdate(51,{

/***/ 176:
/*!**********************************!*\
  !*** ./js/demo/ui/tabs/index.js ***!
  \**********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//index.js
//获取应用实例
var app = getApp();
var Pager = __webpack_require__(/*! components/aotoo/core */ 18);

var data = [{
  title: 'Tabs 导航(除了normal, 其它都不是用tabs组件)',
  id: 'tabs',
  list: [{ title: 'Normal', attrx: 'normal', littleTitle: '常规 ' }, { title: 'Scroll', attrx: 'scroll', littleTitle: '滚动 ' }]
}];

var adapterMenu = function adapterMenu(res) {
  var output = [];
  res.map(function (item) {
    output.push({
      title: {
        title: item.title,
        itemClass: 'bg-title'
      },
      idf: item.id,
      liClass: 'bg-fff list-bb bb-default'
    });
    item.list.map(function (itemxx) {
      output.push({
        title: [{ title: itemxx.title }, { title: itemxx.littleTitle, itemClass: 'icon-arrows-r color-grey' }],
        titleClass: 'item-border flex-row-between-center',
        parent: item.id,
        itemClass: 'item ss-focus',
        tap: 'onTap?demo=' + itemxx.attrx
      });
    });
  });
  return output;
};

Pager({
  data: {
    motto: Pager.tree({
      data: adapterMenu(data)
    })
  },
  onTap: function onTap(e, query, inst) {
    var theTap = query.demo.replace(/_/g, "/");
    if (theTap) {
      switch (theTap) {
        case theTap:
          wx.navigateTo({
            url: './' + theTap + '/index'
          });
          break;
      }
    }
  }
});

/***/ })

})