; require("../../runtime.js");
/**aotoo commonfile**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[22],{

/***/ 72:
/*!*****************************************!*\
  !*** ./js/components/collapse/index.js ***!
  \*****************************************/
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
var Core = __webpack_require__(/*! ../aotoo/core */ 0);
var lib = Core.lib;

function collapseParse() {
  var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var data = source.data;
  if (lib.isArray(data)) {
    data = data.map(function (item) {
      if (lib.isString(item) || lib.isNumber(item)) {
        item = { title: item };
      }

      if (lib.isObject(item)) {
        if (item.idf && !item.parent) {
          item.liClass = 'xxx';
          item.show = false;
          item.catchtap = 'toggleChildren';
          if (lib.isString(item.title)) {
            item.title = {
              title: item.title,
              class: 'item icon-arrows-a-r color-999'
            };
          }
        }
      }
      return item;
    });
  }
  source.data = data;
  return source;
}

/**
 * data: [
 *  {title: 'tabName', content: 'some content'},
 *  {title: 'tabName', content: 'some content'},
 *  {title: 'tabName', content: 'some content'},
 *  {title: 'tabName', content: 'some content'},
 * ],
 * $$id: 'some id',
 * select: 0,
 * multipy: false,
 * singleView: false,
 * show: true
 */

// 基于item的组件
Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
    addGlobalClass: true
  },
  properties: {
    dataSource: Object
  },
  data: {
    $dataSource: {}
  },
  behaviors: [Core.treeComponentBehavior(app, 'collapse')],
  lifetimes: {
    attached: function attached() {
      //节点树完成，可以用setData渲染节点，但无法操作节点
      var properties = this.properties;
      var dataSource = collapseParse(properties.dataSource);
      this.setData({
        $list: dataSource
      });
    },
    ready: function ready() {
      var ds = this.data.$list;
      this.mount(ds.$$id || ds.id);
    }
  },
  methods: {
    toggleChildren: function toggleChildren(e, param, inst) {
      var currentTarget = e.currentTarget;
      var dataset = currentTarget.dataset;
      var treeid = dataset.treeid;
      this.findAndUpdate(treeid, function (res) {
        var title = res.title;
        if (title.class.indexOf('icon-arrows-a-r') > -1) {
          res.title.class = 'item icon-arrows-a-b color-999';
          setTimeout(function () {
            return inst.children.level1.show();
          }, 100);
        } else {
          res.title.class = 'item icon-arrows-a-r color-999';
          setTimeout(function () {
            return inst.children.level1.hide();
          }, 100);
        }
        return res;
      });
      // if (inst && inst.children && inst.children.level1) {
      //   inst.children.level1.toggle()
      // }
    }
  }
});

/***/ })

},[[72,0,1]]]);