; require("../../../../runtime.js");
/**auto import common&runtime js**/
webpackHotUpdate(52,{

/***/ 232:
/*!******************************************!*\
  !*** ./js/demo/ui/tabs/fscroll/index.js ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//index.js
//获取应用实例
var app = getApp();
var Pager = __webpack_require__(/*! components/aotoo/core */ 20);

var refertowx = {
  title: { title: '用list组件实现tab的效果', itemClass: 'bg-title' },
  '@list': {
    $$id: 'refertowx',
    is: 'scroll',
    'scroll-y': true,
    data: [{ title: '酒店介绍', itemClass: "active", tap: 'onTap2?idx=0' }, { title: '酒店设施', tap: 'onTap2?idx=1' }],
    listClass: 'tab-list-2 tabs-default-scroll'
  }
};

Pager({
  data: {
    motto: Pager.item(refertowx)
  },
  savePrevSelect: [],
  onTap2: function onTap2(e, param, inst) {
    var _this = this;

    var listTab = Pager.getElementsById('refertowx');
    var idx = parseInt(param['idx']);
    var $list = listTab.data.$list;
    this.savePrevSelect.length > 1 ? this.savePrevSelect = this.savePrevSelect.slice(1) : this.savePrevSelect;
    $list.data = $list.data.map(function (item, ii) {
      if (item.itemClass) item.itemClass = '';
      if (ii == idx) {

        _this.savePrevSelect.push(idx);
        item.itemClass = _this.savePrevSelect.length > 1 ? _this.savePrevSelect[0] > _this.savePrevSelect[1] ? 'f-right active' : 'active' : 'active';
      }
      return item;
    });
    listTab.update($list.data);
  }
});

/***/ })

})