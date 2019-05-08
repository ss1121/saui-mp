; require("../../../runtime.js");
/**auto import common&runtime js**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[14],{

/***/ 0:
/*!*****************************************!*\
  !*** ./js/components/aotoo/lib/util.js ***!
  \*****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isString = isString;
exports.objTypeof = objTypeof;
exports.isObject = isObject;
exports.isArray = isArray;
exports.isNumber = isNumber;
exports.isFunction = isFunction;
exports.clone = clone;
exports.isEmpty = isEmpty;
exports.formatQuery = formatQuery;
exports.suid = suid;
exports.resetSuidCount = resetSuidCount;
function isString(title) {
  return typeof title == 'string';
}

function objTypeof(obj, type) {
  // if (obj) return obj.nv_constructor ? obj.nv_constructor.toLowerCase() : (obj.constructor.toLowerCase && obj.constructor.toLowerCase())
  if (obj) {
    if (obj.nv_constructor) {
      return obj.nv_constructor.toLowerCase();
    } else {
      if (obj.constructor.toLowerCase) {
        return obj.constructor.toLowerCase();
      }
    }
    var typeofobj = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    if (type && type == 'array') {
      return Array.isArray(obj) ? 'array' : typeofobj;
    }
    return typeofobj;
  }
}

function isObject(obj) {
  return objTypeof(obj) == 'object';
}

function isArray(obj) {
  return objTypeof(obj, 'array') == 'array';
}

function isNumber(obj) {
  return objTypeof(obj) == 'number';
}

function isFunction(obj) {
  return objTypeof(obj) == 'function';
}

function clone(params) {
  return JSON.parse(JSON.stringify(params));
}

function isEmpty(params) {
  if (isObject(params)) {
    var len = Object.keys(params).length;
    return len ? false : true;
  }
  if (isArray(params)) {
    return params.length ? false : true;
  }
  return true;
}

function formatQuery(url) {
  var aim = url;
  var query = {};
  if (url) {
    var urls = url.split('?');
    aim = urls[0];
    if (urls[1]) {
      var params = urls[1].split('&');
      params.forEach(function (param) {
        var attrs = param.split('=');
        query[attrs[0]] = attrs[1] ? attrs[1] : true;
      });
    }
  }
  return { url: aim, query: query };
}

var suidCount = -1;
function suid(prefix) {
  suidCount++;
  prefix = prefix || 'normal_';
  if (typeof prefix == 'string') {
    return prefix + suidCount;
  }
}

function resetSuidCount() {
  if (suidCount > 9999) suidCount = -1;
}

/***/ }),

/***/ 3:
/*!********************************************!*\
  !*** ./js/components/aotoo/lib/foritem.js ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.resetItem = resetItem;

var _util = __webpack_require__(/*! ./util */ 0);

var attrKey = ['aim', 'attr', 'class', 'itemClass', 'style', 'itemStyle', 'template', 'tap', 'catchtap', 'longtap', 'catchlongtap', 'longpress', 'catchlongpress', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'data-treeid', 'id', 'treeid', 'src', '$$id', '__sort', 'tempName', 'idf', 'parent', 'show', 'type', 'typeOptions', 'hoverclass', '__actionMask', 'data', 'mode'];

var accessKey = ['title', 'img', 'icon', 'list', 'tree', 'item', 'header', 'body', 'footer', 'dot', 'li', 'k', 'v'];

function setItemSortIdf(item, context) {
  if (typeof item == 'string' || typeof item == 'number' || typeof item == 'boolean') return item;
  if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) == 'object') {
    if (!Array.isArray(item)) {
      var extAttrs = {};
      var incAttrs = [];
      item['__sort'] = [];

      if (context) {
        // item.fromComponent = context.data.fromComponent||context.data.uniqId
        item.fromComponent = context.data.uniqId;
      }

      Object.keys(item).forEach(function (key) {
        if (accessKey.indexOf(key) > -1 || key.indexOf('@') == 0 && key.length > 1) {
          incAttrs.push(key);
        } else {
          extAttrs[key] = item[key];
        }
      });

      if (incAttrs.length) {
        item['__sort'] = incAttrs;
        incAttrs.map(function (attr) {
          var oData = item[attr];
          if ((typeof oData === 'undefined' ? 'undefined' : _typeof(oData)) == 'object') {
            if (Array.isArray(oData)) {
              item[attr] = setSortTemplateName(oData, context);
            } else {
              item[attr] = setItemSortIdf(oData, context);
            }
          }
        });
      }
      return item;
    }
  }
}

function setSortTemplateName(data, context) {
  if (Array.isArray(data) && data.length) {
    return data.map(function (item) {
      return setItemSortIdf(item, context);
    });
  }
}

function resetItem(data, context) {
  var extAttrs = {};
  var incAttrs = [];
  if (typeof data == 'string' || typeof data == 'number' || typeof data == 'boolean') {
    return data;
  }

  Object.keys(data).forEach(function (key) {
    if (accessKey.indexOf(key) > -1 || key.indexOf('@') == 0 && key.length > 1) {
      incAttrs.push(key);
    } else {
      if (key == 'aim') {
        data.catchtap = data[key];
      }
      extAttrs[key] = data[key];
    }
  });

  data['__sort'] = incAttrs;

  var _loop = function _loop() {
    var sonItem = data[attr];
    if (attr == 'itemMethod') {
      if (context && (0, _util.isObject)(sonItem)) {
        Object.keys(sonItem).forEach(function (fn) {
          context[fn] = sonItem[fn];
        });
        delete data.itemMethod;
      }
    } else {
      if (Array.isArray(sonItem)) {
        data[attr] = setSortTemplateName(sonItem, context);
      } else {
        data[attr] = setItemSortIdf(sonItem, context);
      }
    }
  };

  for (var attr in data) {
    _loop();
  }
  if (!data.parent) data.itemDataRoot = true; // 标识该item是最顶层item，class style用作容器描述

  // context.props = extAttrs
  return data;
}

/***/ }),

/***/ 8:
/*!********************************************!*\
  !*** ./js/components/aotoo/lib/forlist.js ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.reSetItemAttr = reSetItemAttr;
exports.reSetList = reSetList;

var _util = __webpack_require__(/*! ./util */ 0);

var _foritem = __webpack_require__(/*! ./foritem */ 3);

function reSetItemAttr(item, list) {
  if (typeof item == 'boolean') return item;
  if (typeof item == 'string' || typeof item == 'number') {
    item = { title: item };
  }

  var clsIndex = (0, _util.suid)('index-'); // 将data-index置入每条数据的class中，这样不用去动结构
  var $ii = clsIndex;

  if (list.itemMethod) {
    var itm = list.itemMethod;
    if ((typeof itm === 'undefined' ? 'undefined' : _typeof(itm)) == 'object') {
      Object.keys(itm).forEach(function (evt) {
        item[evt] = itm[evt];
      });
    }
  }

  var itmc = list.itemClass || list.class || '';
  var myClass = item['itemClass'] || item['class'] || item['className'] || '';
  item['itemClass'] = myClass ? itmc + ' ' + myClass : itmc;
  item['itemClass'] = item.idf ? 'item itemroot ' + item['itemClass'] : 'item ' + item['itemClass'];

  if (list.itemStyle || list.style) {
    var itsy = list.itemStyle || list.style;
    if (item['style'] || item['itemStyle']) {
      var myStyle = item['style'] || item['itemStyle'];
      item['style'] = myStyle;
    } else {
      item['style'] = itsy;
    }
  }

  // if (this.$$is=='tree' && isObject(item)) {
  if ((0, _util.isObject)(item)) {
    if (item['attr']) {
      if (!item['attr']['data-treeid']) item['attr']['data-treeid'] = $ii;
    } else {
      if (item['$$typeof']) {
        item = { title: item, attr: { 'data-treeid': $ii } };
      } else {
        item['attr'] = { 'data-treeid': $ii };
      }
    }
  }

  var newItem = item['$$id'] ? item : (0, _foritem.resetItem)(item, this);
  return newItem;
}

function reSetArray(data, list) {
  var _this = this;

  if ((0, _util.isArray)(data)) {
    list.data = data.map(function (item) {
      return reSetItemAttr.call(_this, item, list);
    });
  }
  return list;
}

function reSetList(list) {
  if ((0, _util.isObject)(list)) {
    list['show'] = list.hasOwnProperty('show') ? list.show : true;
    return reSetArray.call(this, list.data, list);
  }
}

/***/ })

},[[8,0]]]);