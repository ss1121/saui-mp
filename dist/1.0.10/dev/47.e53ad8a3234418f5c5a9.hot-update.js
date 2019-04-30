; require("../../../runtime.js");
/**aotoo commonfile**/
webpackHotUpdate(47,{

/***/ 187:
/*!***********************************!*\
  !*** ./js/demo/ui/modal/index.js ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//index.js
//获取应用实例
var app = getApp();
var Pager = __webpack_require__(/*! components/aotoo/core */ 0);

var data = [{
  title: '侧弹',
  id: 'default',
  list: [{ title: '顶弹', attr: 'top', type: 'primary', size: 'larger', parentId: 'default' }, { title: '底弹', attr: 'bot', type: 'primary', size: 'larger', parentId: 'default' }, { title: '左弹', attr: 'left', type: 'primary', size: 'larger', parentId: 'default' }, { title: '右弹', attr: 'right', type: 'primary', size: 'larger', parentId: 'default' }]
}, {
  title: '全屏侧弹',
  id: 'full',
  list: [{ title: '顶弹', attr: 'top', type: 'fff-primary', size: 'larger', parentId: 'full' }, { title: '底弹', attr: 'bot', type: 'fff-primary', size: 'larger', parentId: 'full' }, { title: '左弹', attr: 'left', type: 'fff-primary', size: 'larger', parentId: 'full' }, { title: '右弹', attr: 'right', type: 'fff-primary', size: 'larger', parentId: 'full' }]
}];

var adpeteractionSide = function adpeteractionSide(res) {
  var output = [];
  res.map(function (item) {
    output.push({
      title: {
        title: item.title,
        itemClass: 'title-primary-grey mb-20-r'
      },
      idf: item.id,
      liClass: 'list-mt-30-r'
    });
    item.list.map(function (itemxx) {
      output.push({
        title: [{
          title: itemxx.title
        }],
        itemClass: 'mb-20-r btn-' + itemxx.type,
        aim: 'openBar?direction=' + itemxx.attr,
        parent: item.id
      });
    });
  });
  return output;
};

var actionSideData = {
  title: [{
    title: 'Modal',
    itemClass: 'title-lg-active'
  }, {
    title: '弹出层',
    itemClass: 'title-primary-grey'
  }],
  '@tree': {
    data: adpeteractionSide(data),
    listClass: 'mt-40-r'
  },
  titleClass: 'ml-40-r',
  itemClass: 'pages-wrap-default bg-fff'
};

Pager({
  data: {
    motto: Pager.item(actionSideData),
    actionSide: {
      id: 'actionSide1',
      title: [{ title: '打开新侧弹', aim: 'open_as2' }]
    }
  },
  openBar: function openBar(e, query, inst) {
    var theAim = query.direction.replace(/_/g, "/");
    var aside1 = this.getElementsById('actionSide1');
    if (theAim) {
      switch (theAim) {
        case theAim:
          (function () {
            var direction = theAim || 'right';
            aside1.reset()[direction]({
              class: 'bar',
              title: [{ title: '弹窗1', class: 'h2' }, { title: '支持多弹窗，灵活属性设置可以实现多种弹窗效果', class: 'h6', style: 'margin: 0 0 50rpx 0;' }, {
                title: '打开第二个弹窗',
                aim: 'open-as2'
              }]
            });
          })();
          break;
      }
    }
  }
});

/***/ })

})