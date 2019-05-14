; require("../../../../runtime.js");
/**auto import common&runtime js**/
webpackHotUpdate(51,{

/***/ 228:
/*!******************************************!*\
  !*** ./js/demo/ui/tabs/fnormal/index.js ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//index.js
//获取应用实例
var app = getApp();
var Pager = __webpack_require__(/*! components/aotoo/core */ 20);

var tabMenu = [{ title: '选项一', itemClass: "active", tap: 'onTap?idx=0' }, { title: '选项二', tap: 'onTap?idx=1' }, { title: '选项三', tap: 'onTap?idx=2' }];

Pager({
  data: {
    motto: Pager.list({
      data: tabMenu,
      listClass: 'tab-list tab-list-theme'
    })
  },
  savePrevSelect: [],
  onTap: function onTap(e, param, inst) {
    var _this = this;

    var listTab = Pager.getElementsById('motto');
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