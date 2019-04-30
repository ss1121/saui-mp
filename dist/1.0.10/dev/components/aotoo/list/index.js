; require("../../../runtime.js");
/**aotoo commonfile**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[20],{

/***/ 108:
/*!*******************************************!*\
  !*** ./js/components/aotoo/list/index.js ***!
  \*******************************************/
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
var Core = __webpack_require__(/*! ../core */ 0);
var lib = Core.lib;

// 数据模型
// const defaultListOptions = {
//   data: [
//     // String / Json 
//   ],
//   listClass: '',
//   listStyle: '',
//   itemClass: '',
//   itemStyle: '',
//   itemMethod: {},
// }

Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
    addGlobalClass: true
  },
  behaviors: [Core.listBehavior(app, 'list')],
  methods: {
    findIndex: function findIndex(params) {
      var bywhat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'attr';

      var $selectIndex = void 0;
      if (params) {
        var $list = this.data.$list;
        var $data = $list.data;

        var _loop = function _loop(ii) {
          var item = $data[ii];

          if (bywhat == 'attr') {
            var attr = item.attr;
            if (attr && lib.isObject(params)) {
              // 只允许但条件查询
              Object.keys(params).forEach(function (key, jj) {
                if (jj == 0) {
                  if (attr[key] == params[key]) {
                    $selectIndex = ii;
                  }
                }
              });
              if ($selectIndex) return 'break';
            } else {
              return 'continue';
            }
          }

          if (bywhat == 'class') {
            if (lib.isString(params)) {
              var cls = item.class;
              if (cls.indexOf(params) > -1) {
                $selectIndex = ii;
                return 'break';
              }
            }
          }
        };

        _loop2: for (var ii = 0; ii < $data.length; ii++) {
          var _ret = _loop(ii);

          switch (_ret) {
            case 'break':
              break _loop2;

            case 'continue':
              continue;}
        }
      }
      return $selectIndex;
    },

    delete: function _delete(params) {
      if (params) {
        var $list = this.data.$list;
        var $data = $list.data;
        var $selectIndex = void 0;
        if (lib.isString(params)) {
          $selectIndex = this.findIndex(params, 'class');
        } else {
          if (lib.isObject(params)) {
            $selectIndex = this.findIndex(params);
          }
        }
        if ($selectIndex || $selectIndex == 0) {
          $data.splice($selectIndex, 1);
          this.setData({ $list: $list });
        }
      }
      return this;
    },

    insert: function insert(params, pay) {
      if (lib.isString(params)) {
        if (pay) {
          pay = this.__newItem(pay);
          var $list = this.data.$list;
          var $data = $list.data;
          var $selectIndex = void 0;
          if (lib.isString(params)) {
            $selectIndex = this.findIndex(params, 'class');
          } else {
            if (lib.isObject(params)) {
              $selectIndex = this.findIndex(params);
            }
          }
          if ($selectIndex || $selectIndex == 0) {
            $data.splice($selectIndex, 0, pay);
            this.setData({ $list: $list });
          }
        }
      }
      return this;
    }
  }
});

/***/ })

},[[108,0,1]]]);