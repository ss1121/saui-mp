; require("../../../runtime.js");
/**aotoo commonfile**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[48],{

/***/ 191:
/*!*********************************!*\
  !*** ./js/demo/ui/tag/index.js ***!
  \*********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//index.js
//获取应用实例
var app = getApp();
var Pager = __webpack_require__(/*! components/aotoo/core */ 0);

var data = [{
  title: 'default',
  id: 'default',
  list: [{ title: 'ff7e11', littleTitle: 'primary', parentId: 'default' }, { title: '227ce1', littleTitle: 'default', parentId: 'default' }, { title: '5dcba6', littleTitle: 'special', parentId: 'default' }, { title: 'ff5552', littleTitle: 'minor', parentId: 'default' }]
}, {
  title: '背景色-白',
  id: 'bgfff',
  list: [{ title: 'ff7e11', littleTitle: 'fff-primary', parentId: 'bgfff' }, { title: '227ce1', littleTitle: 'fff-default', parentId: 'bgfff' }, { title: '5dcba6', littleTitle: 'fff-special', parentId: 'bgfff' }, { title: 'ff5552', littleTitle: 'fff-minor', parentId: 'bgfff' }]
}, {
  title: '业务',
  id: 'work',
  list: [{ title: '227ce1', littleTitle: 'work-default', parentId: 'work' }]
}];

var adaptertag = function adaptertag(res, itemClass) {
  var output = [];
  res.map(function (item) {
    output.push({
      title: {
        title: item.title,
        itemClass: 'title-primary-grey mb-20-r'
      },
      idf: item.id,
      liClass: 'flex-row-wrap-between-center list-mt-30-r mb-40-r'
    });
    item.list.map(function (itemxx) {
      output.push({
        title: {
          title: itemxx.title
        },
        itemClass: itemClass + itemxx.littleTitle,
        parent: item.id
      });
    });
  });
  return output;
};

var tagData = {
  title: [{ title: 'Tag', itemClass: 'title-lg-active' }, { title: '标签', itemClass: 'title-primary-grey' }],
  '@tree': {
    data: adaptertag(data, 'item-li tag-'),
    listClass: 'mt-40-r'
  },
  titleClass: 'ml-40-r',
  itemClass: 'pages-wrap-default bg-fff'
};

Pager({
  data: {
    motto: Pager.item(tagData)
  }
});

/***/ })

},[[191,0,1]]]);