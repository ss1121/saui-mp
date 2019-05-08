; require("../../../runtime.js");
/**auto import common&runtime js**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[17],{

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

/***/ 6:
/*!*****************************************!*\
  !*** ./js/components/aotoo/lib/tree.js ***!
  \*****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.tree = tree;
exports.listToTree = listToTree;

var _util = __webpack_require__(/*! ./util */ 0);

var filter = function filter(data, callback) {
  if ((0, _util.isArray)(data)) {
    return data.filter(callback);
  }
};
var idrecode = [];
var treeProps = {};
function valideClassName(clsname, level) {
  var reCls = / *level([\d]* *)?/ig;
  var myLevelCls = 'level' + level;
  if (clsname) {
    if (reCls.test(clsname)) {
      clsname = clsname.replace(reCls, '');
    }
    clsname += ' ' + myLevelCls;
    return clsname;
  }
}

var treeDeep = 1;
function subTree(item, dataAry, deep, index) {
  deep = treeDeep = deep || 1;
  var fromTree = void 0;
  if (this && this.fromTree) {
    fromTree = this.fromTree;
  }
  var nsons = [];
  var sons = filter(dataAry, function (o) {
    return o.parent == item.idf;
  });
  sons.forEach(function (son, ii) {
    var _clsName = son.itemClass || son.class;
    _clsName = valideClassName(_clsName, deep);
    son.itemClass = _clsName;
    if (son.idf && idrecode.indexOf(son.idf) == -1) {
      idrecode.push(son.idf);
      nsons = nsons.concat([subTree.call({ fromTree: fromTree }, son, dataAry, ++deep, ii)]);
      --deep;
    } else {
      nsons = nsons.concat(son);
    }
  });
  if (nsons.length) {
    // item.li = nsons
    // item['__sort'] = (item['__sort']||[]).concat('li')
    var treeid = item.attr && item.attr['data-treeid'] || index;
    // const $id = item.$$id || item.id || `level${deep}-${treeid}`
    var $id = item.$$id || item.id || '' + treeid;
    item['@list'] = {
      $$id: $id,
      data: nsons,
      listClass: item.liClass || 'ul',
      itemClass: treeProps.itemClass || '',
      itemStyle: treeProps.itemStyle || '',
      show: item.hasOwnProperty('show') ? item.show : true,
      fromTree: fromTree
    };
    item['__sort'] = (item['__sort'] || []).concat('@list');
  }
  return item;
}

function owerTree(item) {
  var ary = [];
  item.forEach(function (o) {
    if (Array.isArray(o)) return owerTree(item);
    ary.push(o);
  });
  if (ary.length) {
    return { li: ary };
  }
}

// TreeStructor
// 此处tree的算法与aotoo的tree算法有差异
function tree(dataAry, props, fromTree) {
  var menus = [];
  idrecode = [];
  treeProps = {
    itemClass: props.itemClass || props.class,
    itemStyle: props.itemStyle || props.style
  };
  dataAry.forEach(function (item, ii) {
    treeDeep = 1;
    if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) == 'object' && !Array.isArray(item)) {
      if (item.idf && !item.parent && idrecode.indexOf(item.idf) == -1) {
        var clsName = item.itemClass || item.class;
        clsName = clsName ? clsName.indexOf('level0') == -1 ? clsName + ' level0' : clsName : 'level0';
        item.itemClass = clsName;
        var nItem = subTree.call({ fromTree: fromTree }, item, dataAry, ii);
        nItem.__deep = treeDeep;
        menus.push(nItem);
      }
      if (!item.idf && !item.parent) {
        menus.push(item);
      }
    }
    if (Array.isArray(item)) {
      var _tmp = owerTree(item);
      if (_tmp) {
        menus.push(_tmp);
      }
    }
  });
  return menus;
}

function listToTree(_list, fromTree) {
  var list = (0, _util.clone)(_list);
  if ((0, _util.isObject)(list) && list.data) {
    list.data = tree(list.data, list, fromTree);
  }
  return list;
}

/***/ })

},[[6,0]]]);