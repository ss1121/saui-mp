; require("../../../runtime.js");
/**aotoo commonfile**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[49],{

/***/ 195:
/*!*************************************!*\
  !*** ./js/demo/ui/utility/index.js ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//index.js
//获取应用实例
var app = getApp();
var Pager = __webpack_require__(/*! components/aotoo/core */ 0);

var data = [{
  title: 'color',
  id: 'color',
  list: [{ title: 'active', littleTitle: '#333', parentId: 'color' }, { title: 'default', littleTitle: '#666', parentId: 'color' }, { title: 'grey', littleTitle: '#999', parentId: 'color' }, { title: 'primary', littleTitle: '#227ce1', parentId: 'color' }, { title: 'minor', littleTitle: '#ff5552', parentId: 'color' }, { title: 'bg', littleTitle: '#f4f5f6', parentId: 'color' }]
}];

var adpeterButton = function adpeterButton(res) {
  var output = [];
  res.map(function (item) {
    output.push({
      title: {
        title: item.title,
        itemClass: 'title-primary-grey mb-20-r'
      },
      idf: item.id,
      liClass: 'flex-row-wrap-between-center list-mt-30-r'
    });
    item.list.map(function (itemxx) {
      output.push({
        title: [{
          title: itemxx.title
        }, {
          title: itemxx.littleTitle,
          itemClass: 'size12'
        }],
        itemClass: 'item-li bg-display wid-p30 color-fff bg-' + itemxx.title,
        parent: item.id
      });
    });
  });
  return output;
};

var buttonData = {
  title: [{
    title: 'Utility',
    itemClass: 'title-lg-active'
  }, {
    title: '工具类',
    itemClass: 'title-primary-grey'
  }],
  '@tree': {
    data: adpeterButton(data),
    listClass: 'mt-40-r'
  },
  titleClass: 'ml-40-r',
  itemClass: 'pages-wrap-default bg-fff'
};

Pager({
  data: {
    motto: Pager.item(buttonData)
  }
});

/***/ })

},[[195,0,1]]]);