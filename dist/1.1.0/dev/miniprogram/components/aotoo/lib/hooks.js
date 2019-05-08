; require("../../../runtime.js");
/**auto import common&runtime js**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[15],{

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

/***/ 7:
/*!******************************************!*\
  !*** ./js/components/aotoo/lib/hooks.js ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.hooks = hooks;

var _util = __webpack_require__(/*! ./util */ 0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _hooks = function () {
  function _hooks(key) {
    _classCallCheck(this, _hooks);

    this.actions = {};
    this.storeData = {};
  }

  _createClass(_hooks, [{
    key: 'destory',
    value: function destory() {
      this.actions = null;
      this.storeData = null;
    }
  }, {
    key: 'setItem',
    value: function setItem(key, val) {
      this.storeData[key] = val;
    }
  }, {
    key: 'getItem',
    value: function getItem(key) {
      return this.storeData[key];
    }
  }, {
    key: 'append',
    value: function append(key, val) {
      if (this.storeData[key]) {
        var sData = this.storeData[key];
        if ((0, _util.isArray)(sData)) {
          sData = sData.concat(val);
        } else if ((0, _util.isObject)(sData)) {
          if ((0, _util.isObject)(val)) {
            sData = Object.assign(sData, val);
          } else {
            sData[(0, _util.suid)('random_')] = val;
          }
        } else {
          this.setItem(key, val);
        }
      } else {
        this.setItem(key, val);
      }
    }
  }, {
    key: 'delete',
    value: function _delete(key) {
      this.storeData[key] = null;
    }
  }, {
    key: 'on',
    value: function on(key, cb) {
      var myActions = this.actions;
      var hooksActionUniqId = (0, _util.suid)('hooks_action_');
      if (cb) {
        cb['hooksActionUniqId'] = hooksActionUniqId;
      }
      if ((0, _util.isString)(key)) {
        if (myActions[key]) {
          myActions[key] = [].concat(myActions[key]).concat(cb);
        } else {
          myActions[key] = [cb];
        }
      }
    }
  }, {
    key: 'off',
    value: function off(key, fun) {
      if ((0, _util.isString)(key)) {
        if (fun) {
          var hooksActionUniqId = fun.hooksActionUniqId;
          if (hooksActionUniqId) {
            var theFuns = this.actions[key];
            var selectFunIndex = void 0;
            if (theFuns) {
              theFuns.forEach(function ($f, ii) {
                if ($f['hooksActionUniqId'] == hooksActionUniqId) {
                  selectFunIndex = ii;
                }
              });
              if (selectFunIndex) {
                theFuns.splice(selectFunIndex, 1);
              }
            }
          }
        } else {
          delete this.actions[key];
        }
      }
    }
  }, {
    key: 'emit',
    value: function emit(key, param) {
      var _this = this;

      var ctx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if ((0, _util.isString)(key)) {
        if (this.actions[key]) {
          var vals = [];
          var funs = this.actions[key];
          funs.forEach(function (fun) {
            if ((0, _util.isFunction)(fun)) {
              var res = fun.call(ctx, param);
              if (res) vals.push(res);else {
                vals.push(undefined);
              }
              if (fun.onlyonetime) {
                _this.off(key, fun);
              }
              // vals.push(fun.call(ctx, param))
            }
          });
          if (vals.length) {
            return vals;
          }
        }
      }
    }
  }, {
    key: 'one',
    value: function one(key, cb) {
      if (key && typeof cb == 'function') {
        cb.onlyonetime = true;
      }
      this.on(key, cb);
    }
  }]);

  return _hooks;
}();

var myhooks = {};
function hooks(idf) {
  if ((0, _util.isString)(idf)) {
    if (!myhooks[idf]) {
      myhooks[idf] = new _hooks();
    }
    return myhooks[idf];
  }
}

/***/ })

},[[7,0]]]);