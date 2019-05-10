; require("../../runtime.js");
/**auto import common&runtime js**/
webpackHotUpdate(23,{

/***/ 48:
/*!************************************!*\
  !*** ./js/components/tab/index.js ***!
  \************************************/
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
var Core = __webpack_require__(/*! ../aotoo/core */ 18);
var lib = Core.lib;

function grabData(dataSource) {
  var ds = dataSource;
  ds.select = ds.select ? ds.select : 0;
  var _menus = [];
  var _contents = [];
  if (lib.isObject(dataSource) && lib.isArray(dataSource.data)) {
    dataSource.data.forEach(function (item, ii) {
      if (item.title && item.content) {
        if (lib.isString(item.title)) {
          item.title = { title: item.title };
        }
        _menus.push({
          title: item.title,
          tap: 'tabIndex?idx=' + ii,
          itemClass: ds.select == ii ? 'active' : ''
        });
        _contents.push(item.content);
      }
    });
  }

  var menus = {
    data: _menus,
    listClass: 'menu-box',
    itemClass: 'menu-item'
  };

  var contents = {
    $$id: '__mytabcontent',
    data: _contents,
    type: {
      is: 'swiper',
      current: 0
    },
    listClass: 'content-box',
    itemClass: 'content-item'
  };
  return { menus: menus, contents: contents };
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
var xx = '';
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
    $dataSource: {},
    $menus: {},
    $contents: {}
  },
  behaviors: [Core.baseBehavior(app, 'tap')],
  lifetimes: {
    created: function created() {
      this.generateUpdate('$dataSource', function () {
        var $dataSource = this.data.$dataSource;

        var _grabData = grabData($dataSource),
            menus = _grabData.menus,
            contents = _grabData.contents;

        this.setData({
          $menus: menus,
          $contents: contents
        });
      });
    },
    attached: function attached() {
      //节点树完成，可以用setData渲染节点，但无法操作节点
      var properties = this.properties;
      var dataSource = properties.dataSource;

      var _grabData2 = grabData(dataSource),
          menus = _grabData2.menus,
          contents = _grabData2.contents;

      this.setData({
        $dataSource: dataSource,
        $menus: menus,
        $contents: contents
      });
    },
    ready: function ready() {
      var ds = this.data.$dataSource;
      this.mount(ds.$$id || ds.id);
    }
  },
  methods: {

    tabIndex: function tabIndex(e, param) {
      if (param) {
        var idx = parseInt(param['idx']);
        var $menus = this.data.$menus;

        $menus.data = $menus.data.map(function (item, ii) {
          if (item.itemClass) item.itemClass = '';

          if (ii == idx) {
            item.itemClass = 'active';
            // xx.push(idx)
            xx += idx;
          }
          return item;
        });
        console.log(e, xx, idx, this.data.$menus);
        this.setData({
          $menus: $menus,
          '$contents.type.current': idx
        });
      }
    }
  }
});

/***/ })

})