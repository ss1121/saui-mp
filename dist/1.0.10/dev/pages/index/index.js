; require("../../runtime.js");
/**aotoo commonfile**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[234],{

/***/ 96:
/*!*********************************!*\
  !*** ./js/pages/index/index.js ***!
  \*********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//index.js
//获取应用实例
var app = getApp();
var Pager = __webpack_require__(/*! components/aotoo/core */ 0);
// import createActionSide from 'components/actionside'


var data = [{
  title: 'Basic 基础组件',
  id: 'basic',
  list: [{ title: 'Button', attr: 'button', littleTitle: '按钮 ' }, { title: 'Utility', attr: 'utility', littleTitle: '工具类 ' }, { title: 'Tag', attr: 'tag', littleTitle: '标签 ' }, { title: 'Article', attr: 'article', littleTitle: '文章 ' }]
}, {
  title: 'List 列表',
  id: 'list',
  list: [{ title: 'Image-text', attr: 'list', littleTitle: '图文列表 ' }]
}, {
  title: 'Feedback 操作反馈',
  id: 'feedback',
  list: [{ title: 'Modal', attr: 'modal', littleTitle: '弹出层 ' }]
}, {
  title: 'Form 表单',
  id: 'form',
  list: [{ title: 'Input', attr: 'input', littleTitle: '文本类 ' }, { title: 'Number', attr: 'number', littleTitle: '数字类 ' }, { title: 'Icon', attr: 'icon', littleTitle: 'icon替代标题文字 ' }, { title: 'Switch', attr: 'switch', littleTitle: '开关 ' }, { title: 'Union', attr: 'union', littleTitle: '联动 ' }, { title: 'Checkbox', attr: 'checkbox', littleTitle: '多选择框 ' }, { title: 'Radio', attr: 'radio', littleTitle: '单选择框 ' }, { title: 'Slider', attr: 'slider', littleTitle: '滑动选取器 ' }, { title: 'Single-picker', attr: 'singlepicker', littleTitle: '单层弹层选择器 ' }, { title: 'Multipy-picker', attr: 'multipypicker', littleTitle: '多层弹层选择器 ' }, { title: 'Dropdown', attr: 'dropdown', littleTitle: '下拉菜单 ' }]
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
        tap: item.id == 'form' ? 'onTap?demo=' + item.id + '_' + itemxx.attr : 'onTap?demo=ui_' + itemxx.attr
        // tap: 'onTap?demo='+item.id+'/'+itemxx.attr
      });
    });
  });
  return output;
};

Pager({
  data: {
    headLogo: Pager.item({
      img: {
        src: 'http://agzgz.com/myimgs/logo.png',
        itemClass: 'logo-size'
      },
      title: [{
        title: 'Saui',
        itemClass: 'size20 color-active mt-10-r'
      }, {
        title: 'Saui是基于Aotoo而来。如需详细了解，可打开www.agzgz.com',
        itemClass: 'size12 color-grey'
      }],
      titleClass: 'ss-center plr-default',
      itemClass: 'flex-column-start-center mtb-20-r'
    }),
    menuData: Pager.tree({
      $$id: 'sstree',
      type: {
        is: "scroll"
      },
      data: adapterMenu(data)
    })
  },

  onLongPress: function onLongPress(e, inst) {
    Pager.alert('我是长按响应');
  },

  onTap: function onTap(e, query, inst) {
    var theTap = query.demo.replace(/_/g, "/");
    if (theTap) {
      switch (theTap) {
        case theTap:
          wx.navigateTo({
            url: '../../demo/' + theTap + '/index'
          });
          break;
      }
    }
  },

  oktapme: function oktapme(e) {
    // this.setData({
    //   'formData.data[0].title': '这就是类目1'
    // })
    Pager.alert('点我干啥？');
  },

  onShow: function onShow() {},

  onReady: function onReady() {},

  aim: function aim(e, inst) {
    var target = e.currentTarget;
    var currentDset = target.dataset;
    var theAim = currentDset.aim;
    var aside1 = this.getElementsById('aside1');
    var aside2 = this.getElementsById('aside2');
    if (theAim) {
      switch (theAim) {
        default:
          aside1.right();
          break;
      }
    }
  },

  onLoad: function onLoad() {},

  getUserInfo: function getUserInfo(e) {}
});

/***/ })

},[[96,0,1]]]);