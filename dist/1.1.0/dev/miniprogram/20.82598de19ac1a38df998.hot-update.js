; require("../../../runtime.js");
/**auto import common&runtime js**/
webpackHotUpdate(20,{

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
exports.uuid = uuid;

var _md = __webpack_require__(/*! md5 */ 9);

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function uuid(prefix, len) {
  var mydate = new Date();
  var randomNum = mydate.getDay() + mydate.getHours() + mydate.getMinutes() + mydate.getSeconds() + mydate.getMilliseconds() + Math.round(Math.random() * 10000);
  var uuid = (prefix || 'uuid') + (0, _md2.default)(randomNum);
  if (len && typeof len == 'number' && len > 6) {
    var remainder = len - 4;
    var pre = uuid.substr(0, 4);
    var aft = uuid.substr(uuid.length - remainder);
    return pre + aft;
  } else {
    return uuid;
  }
}

/***/ }),

/***/ 1:
/*!******************************************!*\
  !*** ./js/components/aotoo/lib/index.js ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(/*! ./util */ 0);

Object.defineProperty(exports, 'isString', {
  enumerable: true,
  get: function get() {
    return _util.isString;
  }
});
Object.defineProperty(exports, 'isObject', {
  enumerable: true,
  get: function get() {
    return _util.isObject;
  }
});
Object.defineProperty(exports, 'isArray', {
  enumerable: true,
  get: function get() {
    return _util.isArray;
  }
});
Object.defineProperty(exports, 'isNumber', {
  enumerable: true,
  get: function get() {
    return _util.isNumber;
  }
});
Object.defineProperty(exports, 'isFunction', {
  enumerable: true,
  get: function get() {
    return _util.isFunction;
  }
});
Object.defineProperty(exports, 'formatQuery', {
  enumerable: true,
  get: function get() {
    return _util.formatQuery;
  }
});
Object.defineProperty(exports, 'suid', {
  enumerable: true,
  get: function get() {
    return _util.suid;
  }
});
Object.defineProperty(exports, 'uuid', {
  enumerable: true,
  get: function get() {
    return _util.uuid;
  }
});
Object.defineProperty(exports, 'resetSuidCount', {
  enumerable: true,
  get: function get() {
    return _util.resetSuidCount;
  }
});
Object.defineProperty(exports, 'clone', {
  enumerable: true,
  get: function get() {
    return _util.clone;
  }
});
Object.defineProperty(exports, 'isEmpty', {
  enumerable: true,
  get: function get() {
    return _util.isEmpty;
  }
});

var _tree = __webpack_require__(/*! ./tree */ 6);

Object.defineProperty(exports, 'tree', {
  enumerable: true,
  get: function get() {
    return _tree.tree;
  }
});
Object.defineProperty(exports, 'listToTree', {
  enumerable: true,
  get: function get() {
    return _tree.listToTree;
  }
});

var _hooks = __webpack_require__(/*! ./hooks */ 7);

Object.defineProperty(exports, 'hooks', {
  enumerable: true,
  get: function get() {
    return _hooks.hooks;
  }
});

var _foritem = __webpack_require__(/*! ./foritem */ 3);

Object.defineProperty(exports, 'resetItem', {
  enumerable: true,
  get: function get() {
    return _foritem.resetItem;
  }
});

var _forlist = __webpack_require__(/*! ./forlist */ 8);

Object.defineProperty(exports, 'reSetItemAttr', {
  enumerable: true,
  get: function get() {
    return _forlist.reSetItemAttr;
  }
});
Object.defineProperty(exports, 'reSetList', {
  enumerable: true,
  get: function get() {
    return _forlist.reSetList;
  }
});
var md5 = exports.md5 = __webpack_require__(/*! md5 */ 9);

/***/ }),

/***/ 17:
/*!*******************************************!*\
  !*** ./js/components/aotoo/core/utils.js ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.post = post;
exports.upload = upload;

var _path = __webpack_require__(/*! path */ 21);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lib = __webpack_require__(/*! ../lib */ 1);

function post(url, data) {
  var param = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return new Promise(function (resolve, reject) {
    var postParam = {
      url: url, // 仅为示例，并非真实的接口地址
      method: 'POST',
      data: data || {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function success(res) {
        resolve(res);
      },

      error: function error(e) {
        reject('网络出错');
      }
    };
    postParam = Object.assign(postParam, param);
    postParam.fail = postParam.error;
    if (postParam.url) wx.request(postParam);
  });
}

function getImgRealPath(obj) {
  if (lib.isString(obj)) return obj;
  if (lib.isObject(obj)) {
    return obj.img && obj.img.src ? obj.img.src : obj.src ? obj.src : obj.img;
  }
}

function _up(params) {
  return new Promise(function (resolve, reject) {
    var oldSuccess = params.success;
    var oldError = params.error;
    params.success = function (res) {
      if (typeof oldSuccess == 'function') {
        oldSuccess(res);
      }
      resolve(res);
    };

    params.error = function (err) {
      if (typeof oldError == 'function') {
        oldError(err);
      }
      reject(err);
    };

    params.fail = params.error;

    if (Array.isArray(params.filePath)) {
      var every = params.filePath.map(function (one) {
        one = getImgRealPath(one);
        return new Promise(function (rs, rj) {
          var nParams = {};
          Object.keys(params).forEach(function (key) {
            if (key == 'filePath') {
              nParams[key] = one;
            } else {
              if (key == 'formData') {
                var basename = _path2.default.basename(one);
                var extname = _path2.default.extname(basename);
                if (basename.length > 10) {
                  nParams[key] = Object.assign(params[key], { name: lib.uuid('upimg_', 12) + extname }); // 重命名上传文件名
                } else {
                  nParams[key] = params[key];
                }
              } else {
                nParams[key] = params[key];
              }
            }
          });
          nParams.success = function (res) {
            rs(res);
          };
          nParams.error = function (err) {
            rj(err);
          };
          wx.uploadFile(nParams);
        });
      });
      Promise.all(every).then(function (res) {
        return resolve(res);
      });
    } else {
      params.filePath = getImgRealPath(params.filePath);
      wx.uploadFile(params);
    }
  });
}

function upload(url, data) {
  var param = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (lib.isObject(url)) param = url;
  var postParam = {
    url: url, // 仅为示例，并非真实的接口地址
    type: 'img',
    name: 'file',
    filePath: '',
    header: {
      'content-type': 'application/json' // 默认值
    },
    data: data || {}
    // success(res) {},
    // error: function (e) {}
  };
  postParam = Object.assign(postParam, param);
  postParam.formData = postParam.data;
  delete postParam.data;
  if (postParam.url && postParam.filePath) {
    return _up(postParam);
  } else {
    return Promise.reject('url\u548CfilePath\u53C2\u6570\u4E3A\u5FC5\u586B\u9879\uFF0Curl\u8BF7\u586B\u5199\u670D\u52A1\u5668\u5730\u5740, filePath\u8BF7\u586B\u5199\u4E0A\u4F20\u56FE\u7247\u5730\u5740');
  }
}

/***/ })

})