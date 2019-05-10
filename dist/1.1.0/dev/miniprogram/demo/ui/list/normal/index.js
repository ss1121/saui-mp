; require("../../../../runtime.js");
/**auto import common&runtime js**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[44],{

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

/***/ 10:
/*!****************************************************************!*\
  !*** /Users/sslin/lgh/xiaochengxu/node_modules/crypt/crypt.js ***!
  \****************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),

/***/ 11:
/*!********************************************************************!*\
  !*** /Users/sslin/lgh/xiaochengxu/node_modules/is-buffer/index.js ***!
  \********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ 12:
/*!****************************************************!*\
  !*** ./js/components/aotoo/core/behaviors/item.js ***!
  \****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemComponentBehavior = exports.itemBehavior = undefined;

var _common = __webpack_require__(/*! ./common */ 2);

var lib = __webpack_require__(/*! ../../lib */ 1);
var itemBehavior = exports.itemBehavior = function itemBehavior(app, mytype) {
  mytype = mytype || 'item';
  return Behavior({
    behaviors: [(0, _common.commonBehavior)(app, mytype), (0, _common.commonMethodBehavior)(app, mytype)],
    properties: {
      item: {
        type: Object | String,
        observer: function observer(params) {
          if (!this.init) {
            if (params) {
              if (params.$$id) {
                this.setData({ $item: lib.resetItem(params, this) });
              } else {
                this.update(params);
              }
            }
          }
        }
      },
      id: String
    },
    data: {
      $item: {}
    },
    lifetimes: {
      created: function created() {
        this.$$is = 'item';
      },
      attached: function attached() {
        //节点树完成，可以用setData渲染节点，但无法操作节点
        var xitem = lib.resetItem(this.properties.item);
        if (xitem) {
          this.setData({
            "$item": xitem
          });
        }
      },
      ready: function ready() {
        //组件布局完成，这时可以获取节点信息，也可以操作节点
        var activePage = this.activePage = app.activePage;
        var $id = this.data.item['$$id'] || this.properties.id || this.data.item['id'];
        if ($id) {
          var itemKey = activePage['eles'][$id];
          if (itemKey) {
            activePage['elements'][itemKey] = this;
          } else {
            activePage['elements'][$id] = this;
          }
        }
      }
    },
    methods: {
      attr: function attr(params) {
        return this.data.$item.attr;
      },
      reset: function reset() {
        this.setData({ $item: JSON.parse(this.originalDataSource) });
        return this;
      },
      update: function update(param, callback) {
        if (lib.isObject(param)) {
          var target = {};
          Object.keys(param).forEach(function (key) {
            if (key.indexOf('$item.') == -1) {
              var nkey = '$item.' + key;
              target[nkey] = param[key];
            } else {
              target[key] = param[key];
            }
          });
          param = target;

          this.setData(param);
          var _item = lib.resetItem(this.data.$item, this);
          var cb = lib.isFunction(callback) ? callback : null;
          this.setData({
            // item: _item,
            $item: _item
          }, cb);
        }
        return this;
      }
    }
  });
};

var itemComponentBehavior = exports.itemComponentBehavior = function itemComponentBehavior(app, mytype) {
  return Behavior({
    behaviors: [itemBehavior(app, mytype)],
    definitionFilter: function definitionFilter(defFields, definitionFilterArr) {
      // 监管组件的setData
      defFields.methods = defFields.methods || {};
      defFields.methods._setData = function (data, opts, callback) {
        if (lib.isFunction(opts)) {
          callback = opts;
          opts = {};
        }
        if (this.init) {
          if (data && lib.isObject(data)) {
            var myitem = data.$item || data.item || data.dataSource || {};
            data.$item = lib.resetItem(myitem, this);
          }
        }
        var originalSetData = this._originalSetData; // 原始 setData
        originalSetData.call(this, data, callback); // 做 data 的 setData
      };
    },

    lifetimes: {
      created: function created() {
        this._originalSetData = this.setData; // 原始 setData
        this.setData = this._setData; // 封装后的 setData
      },
      ready: function ready() {
        //组件布局完成，这时可以获取节点信息，也可以操作节点
        this.mount();
      }
    }
  });
};

/***/ }),

/***/ 13:
/*!****************************************************!*\
  !*** ./js/components/aotoo/core/behaviors/tree.js ***!
  \****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.treeComponentBehavior = exports.treeBehavior = undefined;

var _list = __webpack_require__(/*! ./list */ 5);

var lib = __webpack_require__(/*! ../../lib */ 1);

var treeBehavior = exports.treeBehavior = function treeBehavior(app, mytype) {
  mytype = mytype || 'tree';
  return Behavior({
    behaviors: [(0, _list.listComponentBehavior)(app, mytype)],
    lifetimes: {
      created: function created() {
        this.$$is = 'tree';
        var uniqId = this.uniqId;
        this.children = {};
        app['_vars'][uniqId] = this; // fromTree == uniqId
      },
      ready: function ready() {
        var activePage = this.activePage;
        var uniqId = this.uniqId;
        activePage.hooks.on('destory', function () {
          app['_vars'][uniqId] = null;
        });
      }
    }
  });
};

var treeComponentBehavior = exports.treeComponentBehavior = function treeComponentBehavior(app, mytype) {
  mytype = mytype || 'tree';
  return Behavior({
    behaviors: [treeBehavior(app, mytype)]
  });
};

/***/ }),

/***/ 14:
/*!****************************************************!*\
  !*** ./js/components/aotoo/core/behaviors/base.js ***!
  \****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseBehavior = undefined;

var _common = __webpack_require__(/*! ./common */ 2);

var baseBehavior = exports.baseBehavior = function baseBehavior(app, mytype) {
  mytype = mytype || 'tree';
  return Behavior({
    behaviors: [(0, _common.commonBehavior)(app, mytype), (0, _common.commonMethodBehavior)(app, mytype)]
  });
};

/***/ }),

/***/ 15:
/*!*****************************************************!*\
  !*** ./js/components/aotoo/core/behaviors/index.js ***!
  \*****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__(/*! ./common */ 2);

Object.defineProperty(exports, "commonBehavior", {
  enumerable: true,
  get: function get() {
    return _common.commonBehavior;
  }
});
Object.defineProperty(exports, "commonMethodBehavior", {
  enumerable: true,
  get: function get() {
    return _common.commonMethodBehavior;
  }
});
Object.defineProperty(exports, "resetStoreEvts", {
  enumerable: true,
  get: function get() {
    return _common.resetStoreEvts;
  }
});

var _item = __webpack_require__(/*! ./item */ 12);

Object.defineProperty(exports, "itemBehavior", {
  enumerable: true,
  get: function get() {
    return _item.itemBehavior;
  }
});
Object.defineProperty(exports, "itemComponentBehavior", {
  enumerable: true,
  get: function get() {
    return _item.itemComponentBehavior;
  }
});

var _list = __webpack_require__(/*! ./list */ 5);

Object.defineProperty(exports, "listBehavior", {
  enumerable: true,
  get: function get() {
    return _list.listBehavior;
  }
});
Object.defineProperty(exports, "listComponentBehavior", {
  enumerable: true,
  get: function get() {
    return _list.listComponentBehavior;
  }
});

var _tree = __webpack_require__(/*! ./tree */ 13);

Object.defineProperty(exports, "treeBehavior", {
  enumerable: true,
  get: function get() {
    return _tree.treeBehavior;
  }
});
Object.defineProperty(exports, "treeComponentBehavior", {
  enumerable: true,
  get: function get() {
    return _tree.treeComponentBehavior;
  }
});

var _base = __webpack_require__(/*! ./base */ 14);

Object.defineProperty(exports, "baseBehavior", {
  enumerable: true,
  get: function get() {
    return _base.baseBehavior;
  }
});

/***/ }),

/***/ 16:
/*!****************************************!*\
  !*** ./js/components/aotoo/core/ui.js ***!
  \****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alert = alert;
function alert(text) {
  wx.showModal({
    content: text,
    showCancel: false
  });
}

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

/***/ }),

/***/ 18:
/*!*******************************************!*\
  !*** ./js/components/aotoo/core/index.js ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _behaviors = __webpack_require__(/*! ./behaviors */ 15);

var _ui = __webpack_require__(/*! ./ui */ 16);

var _utils = __webpack_require__(/*! ./utils */ 17);

var lib = __webpack_require__(/*! ../lib */ 1);


function pageDataElement(data) {
  var nData = void 0;
  var eles = {};
  var acts = {};
  if (lib.isObject(data)) {
    if (data['$$id']) {
      var $id = data['$$id'];
      eles[$id] = $id;
      if (data.methods) {
        var _methods = data.methods;
        if (lib.isObject(_methods)) {
          acts[$id] = Object.assign(acts, _methods);
          delete data.methods;
        }
      }
    } else {
      nData = {};
      Object.keys(data).forEach(function (key) {
        var item = data[key];
        if (lib.isObject(item)) {
          if (item['$$id']) {
            var _$id = item['$$id'];
            eles[_$id] = key;

            if (item.methods) {
              if (lib.isObject(item.methods)) {
                acts[_$id] = Object.assign(acts, methods);
                delete item.methods;
              }
            }

            if (item.data && lib.isArray(item.data)) {
              item.data = item.data.map(function (sub) {
                if (lib.isObject(sub) && sub['$$id']) {
                  var obj = pageDataElement(sub);
                  eles = Object.assign(eles, obj.eles); // tree/@list 模式适用,  tree/li模式需要区分是否为idf项
                  acts = Object.assign(acts, obj.acts);
                }
                return sub;
              });
            }
          }
        }
        nData[key] = item;
      });
    }
  }
  nData = nData || data;
  return { eles: eles, acts: acts, nData: nData };
}

function mergeActions(inst, acts) {
  if (lib.isObject(acts)) {
    Object.entries(acts).forEach(function (item) {
      var mtdKey = item[0];
      var mtdFun = item[1];
      if (lib.isFunction(mtdFun)) {
        inst[mtdKey] = mtdFun;
      }
    });
  }
}

var activePage = void 0;
core.getElementsById = function (id) {
  if (activePage) {
    return activePage.getElementsById(id);
  }
};

function core(params) {
  if (lib.isObject(params)) {
    var app = getApp(params.appConfig);
    app.hooks = lib.hooks('aotoo');

    if (params.data) {
      var myData = params.data;

      var _pageDataElement = pageDataElement(myData),
          eles = _pageDataElement.eles,
          acts = _pageDataElement.acts,
          nData = _pageDataElement.nData;

      params.data = nData;
      app['_vars'] = {};
    }

    var oldLoad = params.onLoad;
    params.onLoad = function () {
      var _this = this,
          _arguments = arguments;

      this.vars = {};
      this.elements = {};
      this.eles = eles || {}; // 存放id映射表
      this.acts = acts || {};
      this.uniqId = lib.suid('page');
      this.hooks = lib.hooks(this.uniqId);

      this.getElementsById = function (key) {
        return this.elements[key] || this.selectComponent('#' + key);
      };
      app.activePage = activePage = this;
      if (typeof oldLoad == 'function') {
        setTimeout(function () {
          oldLoad.apply(_this, _arguments);
        }, 150);
      }
    };

    var oldReady = params.onReady;
    params.onReady = function () {
      var _this2 = this,
          _arguments2 = arguments;

      var that = this;

      var elements = this.eles;
      var actions = this.acts;
      var actionIds = Object.keys(actions);
      actionIds.forEach(function ($$id) {
        var defineMethods = actions[$$id];
        if (elements[$$id]) {
          var instId = elements[$$id];
          if (that.elements[instId]) {
            var $component = that.elements[instId];
            mergeActions($component, defineMethods);
          }
        }
      });

      this.hooks.emit('onReady');

      if (typeof oldReady == 'function') {
        setTimeout(function () {
          oldReady.apply(_this2, _arguments2);
        }, 150);
      }
    };

    var oldUnload = params.onUnload;
    params.onUnload = function () {
      app.activePage = undefined;
      activePage = null;
      (0, _behaviors.resetStoreEvts)();
      app.hooks.emit('destory');
      this.hooks.emit('destory');
      lib.resetSuidCount();
      this.hooks.destory();

      if (typeof oldUnload == 'function') {
        oldUnload.apply(this, arguments);
      }
    };

    Page(params);
  }
}

core.item = function (data, prefix) {
  if (data) {
    if (lib.isString(data) || lib.isNumber(data)) {
      data = { title: data };
    }

    if (lib.isObject(data)) {
      data['$$id'] = data['$$id'] || prefix || lib.suid('item__');
    }

    data.show = data.hasOwnProperty('show') ? data.show : true;
  }
  return data;
};

core.list = function (list, prefix) {
  if ((typeof list === "undefined" ? "undefined" : _typeof(list)) == 'object') {
    if (lib.isArray(list)) {
      list = { data: list };
    }
    list['$$id'] = list['$$id'] || prefix || lib.suid('list__');
    list['show'] = list.hasOwnProperty('show') ? list.show : true;
    return list;
  }
};

core.tree = function (data) {
  return core.list(data, lib.suid('tree__'));
};

function setItem(item) {
  var $item = item;
  if (!item.hasOwnProperty('show')) {
    $item = core.item(item);
  }
  $item = lib.resetItem($item);
  return $item;
}

core.lib = lib;
core.alert = _ui.alert;
core.post = _utils.post;
core.upload = _utils.upload;
core.setItem = setItem;
core.commonBehavior = _behaviors.commonBehavior;
core.commonMethodBehavior = _behaviors.commonMethodBehavior;
core.baseBehavior = _behaviors.baseBehavior;
core.itemBehavior = _behaviors.itemBehavior;
core.itemComponentBehavior = _behaviors.itemComponentBehavior;
core.listBehavior = _behaviors.listBehavior;
core.listComponentBehavior = _behaviors.listComponentBehavior;
core.treeBehavior = _behaviors.treeBehavior;
core.treeComponentBehavior = _behaviors.treeComponentBehavior;
core.hooks = lib.hooks;
module.exports = core;

/***/ }),

/***/ 19:
/*!************************************!*\
  !*** ./js/demo/ui/list/adapter.js ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//适用于list效果1
var adapterListSs = function adapterListSs(data, opts) {
  var _ref = opts || {},
      imgClass = _ref.imgClass,
      titleClass = _ref.titleClass,
      descClass = _ref.descClass,
      titleGClass = _ref.titleGClass,
      itemClass = _ref.itemClass,
      bodyClass = _ref.bodyClass;

  var output = [];
  if (data && data.length > 0) {
    data.map(function (item) {
      var img = void 0,
          img2 = null;
      if (_typeof(item.img) == 'object') {
        img = item.img[0];
        img2 = item.img[1];
      } else {
        img = item.img;
      }
      output.push({
        img: { src: img, itemClass: imgClass || 'mtb-20-r list-img' },
        body: [{
          title: item.desc ? [{ title: item.title, itemClass: titleClass || 'list-title-1' }, { title: item.desc, itemClass: descClass || 'list-desc-1' }] : { title: item.title, itemClass: 'list-title-1 ' + titleClass },

          titleClass: titleGClass,
          itemClass: itemClass
        }, item.isArrows ? { title: ' ', itemClass: 'icon-arrows-r color-grey ml-20-r'
          // { title: [ { title: ' ',  itemClass: '' }, //作预留 { title: ' ', itemClass: 'icon-arrows-r color-grey ml-20-r' } ], }
        } : ''],
        bodyClass: 'ml-20-r ptb-20-r flex-1 ' + bodyClass,
        tap: 'onTap?abc=xxx'
      });
    });
  }
  return output;
};

//适用于list效果3
var adapterList2Ss = function adapterList2Ss(data, opts) {
  var _ref2 = opts || {},
      imgClass = _ref2.imgClass,
      titleClass = _ref2.titleClass,
      descClass = _ref2.descClass,
      bodyClass = _ref2.bodyClass,
      imgDotClass = _ref2.imgDotClass;

  var output = [];
  if (data && data.length > 0) {
    data.map(function (item) {
      var img = void 0,
          img2 = null;
      if (_typeof(item.img) == 'object') {
        img = item.img[0];
        img2 = item.img[1];
      } else {
        img = item.img;
      }
      output.push({
        title: item.imgdot ? [{
          img: { src: img, itemClass: imgClass || 'list-img' }
        }, { title: ' ', itemClass: imgDotClass }] : { img: { src: img, itemClass: 'mtb-20-r ' + imgClass || false } },
        body: [{
          title: [{ title: item.title, itemClass: titleClass || 'list-title-1' }, { title: '19/03/07', itemClass: 'color-grey size12' }],
          titleClass: 'flex-row-between-center'
        }, item.desc ? {
          title: item.isVoice ? [{ title: item.desc, itemClass: descClass || 'list-desc-1' }, { title: ' ', itemClass: 'icon-silence color-grey size14 ml-20-r' }] : { title: item.desc, itemClass: descClass || 'list-desc-1' },
          titleClass: 'flex-row-between-center'
        } : ''],
        titleClass: 'ss-relative mtb-20-r',
        bodyClass: 'ml-20-r ptb-20-r flex-1 ' + bodyClass,
        tap: 'onTap?abc=xxx'
      });
    });
  }
  return output;
};

//适用于list效果4
var adapterList3Ss = function adapterList3Ss(data, opts) {}
// const {imgClass, titleClass, bodyClass, titledotClass, footerdescClass, footerdotClass, footerimgClass, footerClass, itemliClass, liClass} = opts
// let output = []
// if (data && data.length > 0){
//   data.map ( item => {
//     let img, img2 = null
//     if (typeof item.img == 'object'){
//       img = item.img[0]
//       img2 = item.img[1]
//     }else{
//       img = item.img
//     }
//     output.push({
//       img: {
//         src: img,
//         itemClass: imgClass
//       },
//       li: [{
//         body: [
//           {title: item.title, itemClass: titleClass},
//           item.titleDot ? {title: item.titleDot, itemClass: 'icon-dot ml-r-20'} : ''
//         ],
//         bodyClass: bodyClass,
//         footer: [
//           item.footerDesc ? {title: item.footerDesc, itemClass: footerdescClass} : '',
//           img2 ? 
//           {
//             k: {
//               img: {src: img2, itemClass: footerimgClass}
//             },
//             v: {
//               title: ' ',
//               itemClass: 'icon-dot-small ss-absolute-tr'
//             },
//             kvClass: 'ss-relative padding-r-10 ml-10-r'
//           }
//           : '',
//           {icon: {itemClass: 'icon-arrows-r color-grey'}}
//         ],
//         footerClass: footerClass,
//         itemClass: itemliClass
//       }],
//       liClass: liClass
//     })
//   })
// }
// return output


//适用于list效果5
;var adapterList4Ss = function adapterList4Ss(data, opts) {}
// const {imgClass, titleClass, bodyClass, itemliClass} = opts
// let output = []
// if (data && data.length > 0){
//   data.map ( item => {
//     let img, img2 = null
//     if (typeof item.img == 'object'){
//       img = item.img[0]
//       img2 = item.img[1]
//     }else{
//       img = item.img
//     }
//     output.push({
//       img: {
//         src: img,
//         itemClass: imgClass
//       },
//       title: [
//         {
//           title: item.title,
//           itemClass: titleClass
//         },
//         {
//           title: ' ',
//           itemClass: 'icon-arrows-r color-grey'
//         }
//       ],
//       titleClass: bodyClass,
//       itemClass: itemliClass
//     })
//   })
// }
// return output


// 适用于list效果6  判断层级
;var adapterList5Ss = function adapterList5Ss(data, opts) {
  var imgClass = opts.imgClass,
      titleClass = opts.titleClass,
      bodyClass = opts.bodyClass,
      titledotClass = opts.titledotClass,
      footerdescClass = opts.footerdescClass,
      footerdotClass = opts.footerdotClass,
      footerimgClass = opts.footerimgClass,
      footerClass = opts.footerClass,
      itemliClass = opts.itemliClass,
      liClass = opts.liClass,
      type = opts.type;

  var output = [];
  if (data && data.length > 0) {
    data.map(function (item) {
      if (item.list && item.list.length > 0) {
        output.push({
          li: adapterList4Ss(item.list, opts)
        });
      }
    });
  }
  return output;
};

function tagFunc(data, type) {
  var output = [];
  var reg = new RegExp(" ", "g");
  if (type == 'macaohkline') {
    var data1 = data.productFeaturesName ? data.productFeaturesName.trim().replace(reg, ',').split(',') : [];
    var data2 = data.themeFeaturesName ? data.themeFeaturesName.trim().replace(reg, ',').split(',') : [];
    data1.map(function (item) {
      output.push({
        title: item,
        itemClass: 'tag-fff-primary mr-10-r mb-10-r'
      });
    });
    data2.map(function (item) {
      output.push({
        title: item,
        itemClass: 'tag-fff-minor mr-10-r mb-10-r'
      });
    });
  }
  return output;
}

function centerlineFunc(data) {
  data = data.trim().split(' ');
  return data.map(function (item) {
    return {
      title: item,
      itemClass: 'item-li'
    };
  });
}

//适用于list效果7  参考组团港珠澳专线
var adapterList6Ss = function adapterList6Ss(data, opts) {
  var _ref3 = opts || {},
      imgClass = _ref3.imgClass,
      titleClass = _ref3.titleClass;

  var output = [];
  if (data && data.length > 0) {
    data.map(function (item) {
      output.push({
        title: [{
          img: {
            src: item.productImages,
            itemClass: imgClass || 'list-img-lg'
          }
        }, {
          title: item.departCityName,
          itemClass: 'dot-left-opacity-5'
        }],
        titleClass: 'ss-relative',
        body: [{
          title: item.propertyIdentity,
          itemClass: titleClass || 'list-title-minor'
        }, {
          title: item.productProperties.serviceGuaranteeName ? centerlineFunc(item.productProperties.serviceGuaranteeName) : '',
          titleClass: 'color-grey mt-10-r line-li-20 xx'
        }, {
          title: tagFunc(item.productProperties, 'macaohkline'),
          titleClass: 'flex-row mt-10-r'
        }, {
          title: [{ title: '成人结算价', itemClass: 'mr-10-r' }, { title: '实名可见', itemClass: 'color-minor' }],
          titleClass: 'flex-row color-default'
        }],
        bodyClass: 'ml-20-r flex-1 size13',
        dot: [{
          title: ' ',
          itemClass: 'color-grey ml-10-r size16 icon-arrows-r flex-row-center hei-p100'
        }],
        tap: 'onTap?abc=xxx'
      });
    });
  }
  return output;
};

//适用于list效果8  参考组团港珠澳专线 澳门套票
var adapterList7Ss = function adapterList7Ss(data, opts) {
  var _ref4 = opts || {},
      imgClass = _ref4.imgClass,
      titleClass = _ref4.titleClass,
      descClass = _ref4.descClass,
      kvitemClass = _ref4.kvitemClass,
      hbitemClass = _ref4.hbitemClass,
      bodyClass = _ref4.bodyClass,
      liClass = _ref4.liClass;

  var output = [];
  if (data && data.length > 0) {
    data.map(function (item) {
      output.push({
        title: [{
          img: {
            src: item.productImages,
            itemClass: 'item-header-pic'
          }
        }],
        titleClass: 'item-header',
        body: [{
          title: item.propertyIdentity,
          itemClass: titleClass || 'list-title-minor'
        }, {
          title: [{ title: '结算价', itemClass: 'mr-10-r' }, { title: '实名可见', itemClass: 'color-minor' }],
          titleClass: 'flex-row color-grey mb-6-r'
        }, {
          title: '测试品牌名称测试品牌名称测试品牌名称测试-测试企业全称测试企业全称测试企业全称测试企业全称测试企业全称',
          itemClass: 'textellipsis-1 color-default'
        }],
        bodyClass: 'size12 item-body',
        tap: 'onTap?abc=xxx'
      });
    });
  }
  return output;
};

//适用于tree 效果 
var adapterTreeSs = function adapterTreeSs(data) {
  var output = [];

  var _loop = function _loop(idfTitle) {
    output.push(_defineProperty({
      title: { title: idfTitle, itemClass: 'ss-title' }, idf: idfTitle,
      // title: [
      //   {title: idfTitle, itemClass: 'idfxxx'},
      //   {title: ' ', itemClass: 'icon-arrows-b'}
      // ],
      titleClass: 'ss-title-flex-between'
    }, 'idf', idfTitle));
    data[idfTitle].map(function (item, ii) {
      output.push({
        // title: { title: item.navTitle, itemClass: 'parentxx'}, parent: idfTitle, itemClass: 'li'
        title: [{
          img: {
            src: 'https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg',
            itemClass: 'pic-80-r radius-10-r mtb-14-r'
          }
        }, {
          title: {
            title: item.navTitle,
            itemClass: 'hei-p100 flex-row-center'
          },
          itemClass: data[idfTitle].length - 1 != ii ? 'title-333 size16 textellipsis-1 ml-20-r flex-1 bb-default' : 'title-333 size16 textellipsis-1 ml-20-r flex-1'
        }],
        titleClass: 'ss-focus flex-row',
        parent: idfTitle,
        itemClass: 'li'
      });
    });
  };

  for (var idfTitle in data) {
    _loop(idfTitle);
  }
  return output;
};
// {
//   "F": [
//     { navTitle: 'xxxx' },
//     { navTitle: 'xxxx' },
//   ]
// }

// [
//   {
//     title: {
//       title: 'xxx',
//       itemClass: 'class'
//     },
//     idf: 'xxxx'
//   },
//   {
//     '@item': {
//       title:
//     }
//   }
// ]

module.exports = {
  adapterListSs: adapterListSs,
  adapterList2Ss: adapterList2Ss,
  adapterList3Ss: adapterList3Ss,
  adapterList4Ss: adapterList4Ss,
  adapterList5Ss: adapterList5Ss,
  adapterList6Ss: adapterList6Ss,
  adapterList7Ss: adapterList7Ss,
  adapterTreeSs: adapterTreeSs
};

/***/ }),

/***/ 2:
/*!******************************************************!*\
  !*** ./js/components/aotoo/core/behaviors/common.js ***!
  \******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetStoreEvts = resetStoreEvts;
var lib = __webpack_require__(/*! ../../lib */ 1);

var storeEvts = {};
function resetStoreEvts(params) {
  storeEvts = {};
}

function rightEvent(dsetEvt) {
  if (lib.isString(dsetEvt)) {
    var $id = lib.md5(dsetEvt);

    if (storeEvts[$id]) {
      return storeEvts[$id];
    }

    var rightEvt = void 0;
    if (dsetEvt.indexOf('?') > -1) {
      var myQuery = {};
      var params = dsetEvt.split('@@');
      var evtType = params[0];
      dsetEvt = params[1];
      var evts = dsetEvt.split(',');
      evts.forEach(function (item) {
        if (item) {
          var its = item.split('=');
          var itName = its.splice(0, 1);
          var itQuery = its.join('=');
          var evtObj = lib.formatQuery(itQuery);
          myQuery[itName] = { fun: evtObj.url, param: evtObj.query };
        }
      });
      rightEvt = myQuery[evtType];
    } else {
      dsetEvt = dsetEvt.replace('@@', '?').replace(/,/g, '&');
      var evtObj = lib.formatQuery(dsetEvt);
      var _evtType = evtObj.url;
      var evtQuery = evtObj.query;
      var evtSelect = evtQuery[_evtType];
      var selObj = lib.formatQuery(evtSelect);
      var selFun = selObj.url;
      var selParam = selObj.query;
      rightEvt = { fun: selFun, param: selParam };
    }
    storeEvts[$id] = rightEvt;
    return rightEvt || {};
  }
}

var commonBehavior = exports.commonBehavior = function commonBehavior(app, mytype) {
  mytype = mytype || 'behavior';
  return Behavior({
    properties: {
      id: {
        type: String // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
        // value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
        // observer: function () { }  // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
      },
      fromComponent: {
        type: String,
        value: ''
      }
    },
    externalClasses: ['class-name'],
    relations: {},
    pageLifetimes: {
      // 页面被展示
      // console.log(app.globalData.currentPage);
      show: function show() {},
      // 页面被隐藏
      hide: function hide() {},
      // 页面尺寸变化
      resize: function resize(size) {}
    },
    lifetimes: {
      // 初始化，啥数据都没有，但可以给this设置一些预定义值，可以在后面的生命周期调用
      created: function created(params) {
        this.uniqId = lib.suid(mytype);
        this.hooks = lib.hooks(this.uniqId);
        this.$$type = mytype;
        this.init = true; // 第一次进入
        this.mounted = false;
      },
      //节点树完成，可以用setData渲染节点，但无法操作节点
      attached: function attached() {
        //节点树完成，可以用setData渲染节点，但无法操作节点
        var properties = this.properties;
        var props = properties.item || properties.list || properties.dataSource;
        var id = properties.id;
        this.mountId = props.$$id ? false : id; // 如果$$id，则交给
        props['show'] = props.hasOwnProperty('show') ? props.show : true;
        this.setData({ uniqId: this.uniqId });
      },

      //组件布局完成，这时可以获取节点信息，也可以操作节点
      ready: function ready(params) {
        var that = this;
        this.init = false;
        this.mounted = true;
        this.hooks.emit('ready');
        this.activePage = app.activePage;
        this.originalDataSource = JSON.stringify(this.data.item || this.data.list || this.data.dataSource);
        if (this.data.fromTree) {
          this.treeInst = app['_vars'][this.data.fromTree];
        }
        if (this.data.fromComponent) {
          this.componentInst = app['_vars'][this.data.fromComponent];
        }
      },

      //组件实例被移动到树的另一个位置
      moved: function moved() {},

      //组件实例从节点树中移除
      detached: function detached() {}
    },
    methods: {
      getData: function getData() {
        return this.data.$item || this.data.$list || this.data.$dataSource || {};
      },

      _getAppVars: function _getAppVars(key) {
        var id = key || this.data.fromComponent;
        if (id) {
          return app['_vars'][id] || {};
        }
        return {};
      },

      _preGetAppVars: function _preGetAppVars(key, params, son) {
        var fn = params.fn;

        var inst = this._getAppVars(key);
        if (lib.isEmpty(inst)) {
          return son || {};
        } else {
          if (inst[fn]) return inst;
          if (inst.data.fromComponent) {
            return this._preGetAppVars(inst.data.fromComponent, params, inst);
          } else {
            return inst;
          }
        }
      },

      generateUpdate: function generateUpdate(_keyid, cb) {
        var that = this;
        if (_keyid) {
          var keyId = _keyid + '.';
          this.update = function (param) {
            if (lib.isObject(param)) {
              var target = {};
              Object.keys(param).forEach(function (key) {
                if (key.indexOf(keyId) == -1) {
                  var nkey = keyId + key;
                  target[nkey] = param[key];
                } else {
                  target[key] = param[key];
                }
              });
              param = target;
              this.setData(param, function () {
                if (lib.isFunction(cb)) cb.call(that);
              });
            }
          };
        }
        return this;
      },
      mount: function mount(id) {
        var that = this;
        this.mountId = id || this.mountId;
        if (!this.init) {
          if (this.mountId) {
            this.activePage['elements'][this.mountId] = this;
          }
          app['_vars'][this.uniqId] = this;
          this.activePage.hooks.on('destory', function () {
            app['_vars'][that.uniqId] = null;
          });
        } else {
          this.hooks.on('ready', function () {
            that.mount(id);
          });
        }
      },
      show: function show(params) {
        lib.isFunction(this.update) && this.update({ show: true });
      },
      hide: function hide(params) {
        lib.isFunction(this.update) && this.update({ show: false });
      },
      toggle: function toggle(cb) {
        var data = this.getData();
        var toggleShow = data.show ? false : true;
        if (lib.isFunction(this.update)) {
          this.update({ show: toggleShow }, function () {
            if (lib.isFunction(cb)) cb(toggleShow);
          });
        }
      }
    }
  });
};

var commonMethodBehavior = exports.commonMethodBehavior = function commonMethodBehavior(app, mytype) {
  return Behavior({
    behaviors: [],
    methods: {
      // aim: function (e) {
      //   if (this.treeInst) {
      //     this.treeInst.aim.call(this.treeInst, e)
      //     return false
      //   }
      //   const that = this
      //   const activePage = this.activePage
      //   const target = e.currentTarget
      //   const currentDset = target.dataset
      //   const parentInstance = this._getAppVars()
      //   let query
      //   let theAim = currentDset.aim

      //   if (theAim) {
      //     const aimObj = lib.formatQuery(theAim)
      //     theAim = aimObj.url
      //     query = aimObj.query
      //     e.currentTarget.dataset.aim = theAim
      //     e.currentTarget.dataset._query = query
      //   }

      //   const evtFun = activePage['aim']
      //   const isEvt = lib.isFunction(evtFun)
      //   let vals = this.hooks.emit('beforeAim', {ctx: this, event: e, aim: theAim, param: query})
      //   if (parentInstance && lib.isFunction(parentInstance['aim'])) {
      //     parentInstance['aim'].call(parentInstance, e)
      //   } else {
      //     if (vals) {
      //       vals.forEach(function(val) {
      //         if (val !== 0 && isEvt) evtFun.call(activePage, e, query, that) // 返回值为0则不透传
      //       })
      //     } else {
      //       if (isEvt) evtFun.call(activePage, e, query, that)
      //     }
      //   }
      // },

      _rightEvent: function _rightEvent(e) {
        var is = this.$$is;
        var currentTarget = e.currentTarget;
        var dataset = currentTarget.dataset;
        var dsetEvt = e.type + '@@' + dataset['evt'];
        if (is == 'list' || is == 'tree') {
          var _mytype = this.data.$list.type;
          if (_mytype && (_mytype.is == 'scroll' || _mytype.is == 'swiper')) {
            dsetEvt = 'bind' + dsetEvt;
          }
        }
        var tmp = rightEvent(dsetEvt);
        e.currentTarget.dataset._query = tmp.param;
        return tmp;
      },

      itemMethod: function itemMethod(e) {
        itemReactFun.call(this, e);

        // if (this.treeInst) {
        //   this.treeInst.itemMethod(e)
        //   return false
        // }
        // const that = this
        // const currentTarget = e.currentTarget
        // const dataset = currentTarget.dataset
        // const activePage = this.activePage
        // const parentInstance = this._getAppVars()

        // const oType = e.type
        // const nType = oType

        // let dsetEvt = nType + '@@' + dataset['evt']
        // const {fun, param} = rightEvent(dsetEvt)
        // e.currentTarget.dataset._query = param
        // const evtFun = activePage[fun]
        // const thisFun = this[fun]
        // const isEvt = lib.isFunction(evtFun)
        // let vals = this.hooks.emit('beforeBind', {ctx: this, event: e, funName: fun, param})
        // if (parentInstance && lib.isFunction(parentInstance[fun])) {
        //   parentInstance[fun].call(parentInstance, e, param)
        // } else {
        //   if (vals) {
        //     vals.forEach(function (val) {
        //       if (val !== 0 && isEvt) evtFun.call(activePage, e, param, that) // 返回值为0则不透传
        //     })
        //   } else {
        //     if (lib.isFunction(thisFun)) {
        //       thisFun(e, param, this)
        //     } else {
        //       if (isEvt) evtFun.call(activePage, e, param, that)
        //     }
        //   }
        // }
      },

      catchItemMethod: function catchItemMethod(e) {
        itemReactFun.call(this, e, 'catch');
      }
    }
  });
};

function itemReactFun(e, prefix) {
  if (this.treeInst) {
    this.treeInst[prefix ? 'catchItemMethod' : 'itemMethod'].call(this.treeInst, e, prefix);
    return false;
  }
  var that = this;
  var currentTarget = e.currentTarget;
  var dataset = currentTarget.dataset;
  var activePage = this.activePage;

  var oType = e.type;
  var nType = prefix ? prefix + oType : oType;

  var dsetEvt = nType + '@@' + dataset['evt'];
  var rEvt = rightEvent(dsetEvt);
  var fun = rEvt.fun,
      param = rEvt.param;


  var parentInstance = this._preGetAppVars(null, rEvt);
  if (lib.isEmpty(parentInstance)) {
    parentInstance = undefined;
  }

  e.currentTarget.dataset._query = param;
  var evtFun = activePage[fun];
  var thisFun = this[fun];
  var isEvt = lib.isFunction(evtFun);
  var vals = this.hooks.emit('beforeBind', { ctx: this, event: e, funName: fun, param: param });
  if (parentInstance && lib.isFunction(parentInstance[fun])) {
    parentInstance[fun].call(parentInstance, e, param, that);
  } else {
    if (vals) {
      vals.forEach(function (val) {
        if (val !== 0 && isEvt) evtFun.call(activePage, e, param, that); // 返回值为0则不透传
      });
    } else {
      if (lib.isFunction(thisFun)) {
        thisFun.call(this, e, param, this);
      } else {
        if (isEvt) evtFun.call(activePage, e, param, that);
      }
    }
  }
}

/***/ }),

/***/ 20:
/*!*********************************!*\
  !*** ./js/demo/ui/list/data.js ***!
  \*********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//list
var listDatax = [{
  title: '你在搞笑是吧 title1',
  img: 'https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg',
  desc: 'Ant Design,is refined by Ant UED Team',
  content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  isVoice: false, //是否静音
  imgdot: false //是否静音
}, {
  title: '你在搞笑是吧 title2',
  img: 'https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg',
  desc: '高效能磁悬浮声波马达 高密度无锈无金属植毛刷头 个性定制多种刷牙模式 刷牙姿势识别与报告生成',
  content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  isVoice: true, //是否静音
  imgdot: true //是否静音
}, {
  title: '你在搞笑是吧 title3',
  img: 'https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg',
  desc: '',
  content: '',
  isVoice: false, //是否静音
  imgdot: false //是否静音
}];

var listData2x = [{
  title: '朋友圈', parents: '1',
  isArrows: true, //效果6 是否需要箭头
  img: ['https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg', 'https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg']
}, {
  title: '扫一扫', parents: "2",
  isArrows: true, //效果6 是否需要箭头
  img: ['https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg', 'https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg']
}, {
  title: '摇一摇', parents: "2",
  isArrows: true, //效果6 是否需要箭头
  img: ['https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg', 'https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg'],
  footerDesc: '王者荣耀'
}];

var listData4x = [{
  title: '你在搞笑是吧 title1',
  img: 'https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg',
  desc: 'Ant Design,is refined by Ant UED Team',
  isArrows: true //效果6 是否需要箭头
}, {
  title: '你在搞笑是吧 title2',
  img: 'https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg',
  desc: '高效能磁悬浮声波马达 高密度无锈无金属植毛刷头 个性定制多种刷牙模式 刷牙姿势识别与报告生成',
  isArrows: true //效果6 是否需要箭头
}, {
  title: '你在搞笑是吧 title3',
  img: 'https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg',
  desc: '',
  isArrows: true //效果6 是否需要箭头
}];

var listData5x = [{
  list: [{
    title: '朋友圈', parents: '1',
    img: ['https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg', 'https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg']
  }]
}, {
  list: [{
    title: '扫一扫', parents: "2",
    img: ['https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg', 'https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg']
  }, {
    title: '摇一摇', parents: "2",
    img: ['https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg', 'https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg'],
    footerDesc: '王者荣耀'
  }]
}];

var listData1xx = {
  "F": [{
    "isSearchPoi": 1,
    "releaseTimes": 1,
    "sortIndex": 100,
    "customLevel": 1,
    "idLinks": "6429 20887 6435",
    "operatType": 5,
    "parentId": 20887,
    "isSinglePoi": 1,
    "navTitleLinks": "广东省,佛山市,",
    "isMultiPoi": 2,
    "poiType": 1,
    "id": 6435,
    "poiId": 440600,
    "isSelectedPoi": 1,
    "navTitle": "佛山市"
  }],
  "G": [{
    "isSearchPoi": 1,
    "releaseTimes": 60,
    "sortIndex": 120,
    "customLevel": 1,
    "idLinks": "6429 20887 6430",
    "operatType": 5,
    "parentId": 20887,
    "isSinglePoi": 1,
    "navTitleLinks": "广东省,广州市,",
    "isMultiPoi": 2,
    "poiType": 1,
    "id": 6430,
    "poiId": 440100,
    "isSelectedPoi": 1,
    "navTitle": "广州市"
  }],
  "H": [{
    "isSearchPoi": 1,
    "releaseTimes": 4,
    "sortIndex": 70,
    "customLevel": 1,
    "idLinks": "6429 20887 6440",
    "operatType": 5,
    "parentId": 20887,
    "isSinglePoi": 1,
    "navTitleLinks": "广东省,惠州市,",
    "isMultiPoi": 2,
    "poiType": 1,
    "id": 6440,
    "poiId": 441300,
    "isSelectedPoi": 1,
    "navTitle": "惠州市"
  }, {
    "isSearchPoi": 1,
    "releaseTimes": 0,
    "sortIndex": 55,
    "customLevel": 1,
    "idLinks": "6429 20887 6443",
    "operatType": 5,
    "parentId": 20887,
    "isSinglePoi": 1,
    "navTitleLinks": "广东省,河源市,",
    "isMultiPoi": 2,
    "poiType": 1,
    "id": 6443,
    "poiId": 441600,
    "isSelectedPoi": 1,
    "navTitle": "河源市"
  }],
  "J": [{
    "isSearchPoi": 1,
    "releaseTimes": 0,
    "sortIndex": 80,
    "customLevel": 1,
    "idLinks": "6429 20887 6436",
    "operatType": 5,
    "parentId": 20887,
    "isSinglePoi": 1,
    "navTitleLinks": "广东省,江门市,",
    "isMultiPoi": 2,
    "poiType": 1,
    "id": 6436,
    "poiId": 440700,
    "isSelectedPoi": 1,
    "navTitle": "江门市"
  }, {
    "isSearchPoi": 1,
    "releaseTimes": 0,
    "sortIndex": 25,
    "customLevel": 1,
    "idLinks": "6429 20887 6450",
    "operatType": 5,
    "parentId": 20887,
    "isSinglePoi": 1,
    "navTitleLinks": "广东省,揭阳市,",
    "isMultiPoi": 2,
    "poiType": 1,
    "id": 6450,
    "poiId": 445200,
    "isSelectedPoi": 1,
    "navTitle": "揭阳市"
  }]
};

var listData2xx = [{
  "departCityName": "香港",
  "productProperties": {
    "productFeatures": "5",
    "productFeaturesName": "慢游 ",
    "themeFeaturesName": "温泉 ",
    "playLineName": "珠海+澳门+香港 ",
    "themeFeatures": "23",
    "serviceGuarantee": "1 2 3 4",
    "serviceGuaranteeName": "天天出发 保证成团 无购物 无自费 ",
    "playLine": "1"
  },
  "propertyIdentity": "新界+离岛 3天2晚 跟团游 + 88004",
  "productSubTitle": "+ 88004",
  "departCityCode": "810100",
  "productTitle": "新界+离岛 3天2晚 跟团游",
  "productImages": "https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg",
  "productCategoryId": 140,
  "productCode": "00019705",
  "topStatus": 1,
  "days": "3天2晚",
  "id": 18580,
  "shopId": 45
}, {
  "departCityName": "香港",
  "productProperties": {
    "productFeatures": "5",
    "productFeaturesName": "慢游 ",
    "themeFeaturesName": "温泉 ",
    "playLineName": "珠海+澳门+香港 ",
    "themeFeatures": "23",
    "serviceGuarantee": "1 2 3 4",
    "serviceGuaranteeName": "天天出发 保证成团 无购物 无自费 ",
    "playLine": "1"
  },
  "propertyIdentity": "澳门半岛 5天4晚 跟团游 + 88006",
  "productSubTitle": "+ 88006",
  "departCityCode": "810100",
  "productTitle": "澳门半岛 5天4晚 跟团游",
  "productImages": "https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg",
  "productCategoryId": 140,
  "productCode": "00019709",
  "topStatus": 1,
  "days": "5天4晚",
  "id": 18584,
  "shopId": 45
}, {
  "departCityName": "珠海",
  "productProperties": {
    "productFeatures": "1",
    "productFeaturesName": "轻奢 ",
    "themeFeaturesName": "亲子 ",
    "playLineName": "澳门+香港 ",
    "themeFeatures": "20",
    "serviceGuarantee": "1",
    "serviceGuaranteeName": "天天出发 ",
    "playLine": "2"
  },
  "propertyIdentity": "香港 2天1晚 跟团游 测试港珠澳专线 + 88001",
  "productSubTitle": "测试港珠澳专线 + 88001",
  "departCityCode": "440400",
  "productTitle": "香港 2天1晚 跟团游",
  "productImages": "https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg",
  "productCategoryId": 140,
  "productCode": "00019699",
  "topStatus": 1,
  "days": "2天1晚",
  "id": 18574,
  "shopId": 45
}];

exports.default = {
  listDatax: listDatax,
  listData2x: listData2x,
  listData1xx: listData1xx,
  listData4x: listData4x,
  listData5x: listData5x,
  listData2xx: listData2xx
};

/***/ }),

/***/ 21:
/*!**************************************************************************!*\
  !*** /Users/sslin/lgh/xiaochengxu/node_modules/path-browserify/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on wxs?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ 27)))

/***/ }),

/***/ 216:
/*!*****************************************!*\
  !*** ./js/demo/ui/list/normal/index.js ***!
  \*****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(/*! ../data */ 20);

var _data2 = _interopRequireDefault(_data);

var _adapter = __webpack_require__(/*! ../adapter */ 19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//index.js
//获取应用实例
var app = getApp();
var Pager = __webpack_require__(/*! components/aotoo/core */ 18);

var gatherList = [{ title: { title: '效果一', itemClass: 'bg-title' }, liClass: 'bg-fff bb-default', idf: 'g1' }, {
  '@list': {
    listClass: 'bb-e3e3e3-list-hbody',
    itemClass: 'plr-20-r ss-focus flex-row',
    data: (0, _adapter.adapterListSs)(_data2.default.listDatax)
  },
  parent: 'g1'
}, { title: { title: '效果二', itemClass: 'bg-title' }, liClass: 'bg-fff bb-default', idf: 'g2' }, {
  '@list': {
    listClass: 'bb-e3e3e3-list-hbody',
    itemClass: 'plr-20-r ss-focus flex-row',
    data: (0, _adapter.adapterListSs)(_data2.default.listData4x, {
      titleGClass: 'hei-p100 flex-column-between',
      itemClass: 'hei-p100',
      bodyClass: 'next-p100-first flex-row-between-center'
    })
  },
  parent: 'g2'
}, { title: { title: '效果三', itemClass: 'bg-title' }, liClass: 'bg-fff bb-default', idf: 'g3' }, {
  '@list': {
    listClass: 'bb-e3e3e3-list-hbody',
    itemClass: 'plr-20-r ss-focus flex-row',
    data: (0, _adapter.adapterListSs)(_data2.default.listData2x, {
      bodyClass: 'flex-row-between-center'
    })
  },
  parent: 'g3'
}];

Pager({
  data: {
    motto: Pager.tree({
      type: {
        is: "scroll"
      },
      data: gatherList
    })
  }
});

/***/ }),

/***/ 27:
/*!********************************************************************!*\
  !*** /Users/sslin/lgh/xiaochengxu/node_modules/process/browser.js ***!
  \********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


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

/***/ 4:
/*!********************************************************************!*\
  !*** /Users/sslin/lgh/xiaochengxu/node_modules/charenc/charenc.js ***!
  \********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),

/***/ 5:
/*!****************************************************!*\
  !*** ./js/components/aotoo/core/behaviors/list.js ***!
  \****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listComponentBehavior = exports.listBehavior = undefined;

var _common = __webpack_require__(/*! ./common */ 2);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var lib = __webpack_require__(/*! ../../lib */ 1);
var reSetItemAttr = lib.reSetItemAttr,
    reSetList = lib.reSetList;


function updateSelf(params) {
  var _this = this;

  if (params) {
    var list = params;
    var listProps = function () {
      var props = {};
      Object.keys(list).forEach(function (key) {
        if (key != 'data') props[key] = list[key];
      });
      return props;
    }();

    if (list.itemMethod && lib.isObject(list.itemMethod)) {
      Object.keys(list.itemMethod).forEach(function (fn) {
        _this[fn] = list.itemMethod[fn];
      });
      delete list.itemMethod;
    }

    var mylist = list;
    var fromTree = this.data.fromTree;
    mylist = fromTree ? lib.listToTree(mylist, fromTree) : reSetList.call(this, list);
    this.setData({
      $list: mylist,
      props: listProps
    });
  }
}

var listBehavior = exports.listBehavior = function listBehavior(app, mytype) {
  mytype = mytype || 'list';
  return Behavior({
    behaviors: [(0, _common.commonBehavior)(app, mytype), (0, _common.commonMethodBehavior)(app, mytype)],
    properties: {
      list: {
        type: Object,
        observer: function observer(params) {
          if (!this.init) {
            updateSelf.call(this, params);
          }
        }
      },
      fromTree: {
        type: Boolean | String, // 来自tree，tree的结构依赖list生成
        value: false // 来自tree实例的 uniqId
      }
    },
    data: {
      $list: {}
    },
    lifetimes: {
      created: function created() {
        this.$$is = 'list';
      },
      attached: function attached() {
        //节点树完成，可以用setData渲染节点，但无法操作节点
        var properties = this.properties;
        var list = properties.list;
        updateSelf.call(this, list);
      },

      ready: function ready() {
        //组件布局完成，这时可以获取节点信息，也可以操作节点
        var fromTree = this.data.$list.fromTree; // 来自tree实例的 uniqId
        var activePage = this.activePage;
        if (this.data.$list['$$id']) {
          var $id = this.data.$list['$$id'];
          if (lib.isString(fromTree)) {
            var treeInst = app['_vars'][fromTree];
            treeInst['children'][$id] = this; // $id由tree算法定义 一般值为 level1 level2...
          } else {
            var listKey = activePage['eles'][$id];
            if (listKey) {
              activePage['elements'][listKey] = this;
            } else {
              activePage['elements'][$id] = this;
            }
          }
        }
        app['_vars'][this.uniqId] = this;
      }
    },
    methods: {
      reset: function reset() {
        this.setData({ $list: JSON.parse(this.originalDataSource) });
        return this;
      },

      update: function update(param, callback) {
        var _this2 = this;

        var cb = lib.isFunction(callback) ? callback : null;
        if (lib.isObject(param)) {
          var target = {};
          Object.keys(param).forEach(function (key) {
            var nkey = key;
            if (key.indexOf('$list.') == -1) {
              nkey = '$list.' + key;
            }
            target[nkey] = reSetItemAttr.call(_this2, param[key], _this2.data.props);
          });
          param = target;
          this.setData(param, cb);
        }
        if (lib.isArray(param)) {
          var _target = Object.assign({ data: param }, this.data.props);
          var mylist = reSetList.call(this, _target);
          this.setData({ $list: mylist }, cb);
        }
        return this;
      },

      __newItem: function __newItem(params) {
        var _this3 = this;

        if (lib.isArray(params)) {
          return params.map(function (param) {
            return reSetItemAttr.call(_this3, param, _this3.data.props);
          });
        } else {
          return reSetItemAttr.call(this, params, this.data.props);
        }
      },

      findIndex: function findIndex(params) {
        var bywhat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'attr';

        var $selectIndex = void 0;
        if (params) {
          var $list = this.data.$list;
          var $data = $list.data;

          var _loop = function _loop(ii) {
            var item = $data[ii];
            var attr = item.attr;
            var treeid = attr['data-treeid'] || attr['treeid'];

            if (bywhat == 'attr') {
              if (lib.isObject(params)) {
                Object.keys(params).forEach(function (key, jj) {
                  if (jj == 0) {
                    // 只匹配params的第一个参数
                    if (item[key] == params[key]) $selectIndex = ii;
                  }
                });
                if ($selectIndex) return 'break';
              }

              if (lib.isString(params)) {
                if (treeid == params) {
                  $selectIndex = ii;
                  return 'break';
                }
              }
            }

            if (bywhat == 'class') {
              if (lib.isString(params)) {
                var cls = item.itemClass || item.class;
                if (cls.indexOf(params) > -1) {
                  $selectIndex = $selectIndex ? $selectIndex.concat(ii) : [ii];
                }
              }
            }
          };

          for (var ii = 0; ii < $data.length; ii++) {
            var _ret = _loop(ii);

            if (_ret === 'break') break;
          }
        }
        return $selectIndex;
      },

      find: function find(params, bywhat) {
        var _this4 = this;

        var index = this.findIndex(params, bywhat);
        if (index || index === 0) {
          if (lib.isArray(index)) {
            return index.map(function (idx) {
              return _this4.data.$list.data[idx];
            });
          }
          var res = this.data.$list.data[index];
          res.__realIndex = index;
          return res;
        }
      },

      findAndUpdate: function findAndUpdate(treeid, cb) {
        var res = this.find(treeid);
        var index = res.__realIndex;
        var isFun = lib.isFunction(cb);
        var result = void 0;
        if (res) {
          if (!isFun) return res;
          result = cb(res);
          if (result) {
            this.update(_defineProperty({}, 'data[' + index + ']', result));
          }
        }
      },

      attr: function attr(treeid) {
        if (lib.isString(treeid)) {
          return this.find(treeid).attr;
        }
      },

      append: function append(params) {
        if (params) {
          var $list = this.data.$list;
          var $data = $list.data;
          $list.data = $data.concat(this.__newItem(params));
          this.setData({ $list: $list });
        }
      },

      prepend: function prepend(params) {
        if (params) {
          var $list = this.data.$list;
          var $data = $list.data;
          $list.data = [].concat(this.__newItem(params)).concat($data);
          this.setData({ $list: $list });
        }
      },

      delete: function _delete(treeid) {
        if (lib.isString(treeid)) {
          var $list = this.data.$list;
          var $data = $list.data;
          var $selectIndex = this.findIndex(treeid);
          if ($selectIndex || $selectIndex == 0) {
            $data.splice($selectIndex, 1);
            this.setData({ $list: $list });
          }
        }
        return this;
      },

      insert: function insert(treeid, pay) {
        if (lib.isString(treeid)) {
          if (pay) {
            pay = this.__newItem(pay);
            var $list = this.data.$list;
            var $data = $list.data;
            var $selectIndex = this.findIndex(treeid);
            if ($selectIndex || $selectIndex == 0) {
              $data.splice($selectIndex, 0, pay);
              this.setData({ $list: $list });
            }
          }
        }
        return this;
      },

      _scrollMethod: function _scrollMethod(e) {
        return listReactFun.call(this, e, 'scroll');

        // if (this.treeInst) {
        //   this.treeInst._scrollMethod(e)
        //   return
        // }

        // const $list = this.data.$list
        // const mytype = $list.type
        // const {fun, param} = this._rightEvent(e)

        // if (mytype && mytype.is == 'scroll') {
        //   this.hooks.emit('bindscroll', e)
        //   this.hooks.emit('bindscrolltoupper', e)
        //   this.hooks.emit('bindscrolltolower', e)
        // }

        // const activePage = this.activePage
        // const parentInstance = this.componentInst
        // const evtFun = activePage[fun]
        // const thisFun = this[fun]
        // const isEvt = lib.isFunction(evtFun)

        // if (parentInstance && lib.isFunction(parentInstance[fun])) {
        //   parentInstance[fun].call(parentInstance, e, param)
        // } else {
        //   if (lib.isFunction(thisFun)) {
        //     thisFun(e, param, this)
        //   } else {
        //     if (isEvt) evtFun.call(activePage, e, param, that)
        //   }
        // }
      },

      _swiperMethod: function _swiperMethod(e) {
        return listReactFun.call(this, e, 'swiper');
      }
    }
  });
};

function listReactFun(e) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "list";

  if (this.treeInst) {
    return type == 'swiper' ? this.treeInst._swiperMethod.call(this.treeInst, e, type) : this.treeInst._scrollMethod.call(this.treeInst, e, type);
  }

  var $list = this.data.$list;
  var mytype = $list.type;

  if (type == 'swiper') {
    this.hooks.emit('bindchange', e);
    this.hooks.emit('bindtransition', e);
    this.hooks.emit('bindanimationfinish', e);
  }

  if (type == 'scroll') {
    this.hooks.emit('bindscroll', e);
    this.hooks.emit('bindscrolltoupper', e);
    this.hooks.emit('bindscrolltolower', e);
  }

  var activePage = this.activePage;
  var parentInstance = this.componentInst;

  var _rightEvent = this._rightEvent(e),
      fun = _rightEvent.fun,
      param = _rightEvent.param;

  var evtFun = activePage[fun];
  var thisFun = this[fun];
  var isEvt = lib.isFunction(evtFun);
  if (lib.isEmpty(parentInstance)) {
    parentInstance = undefined;
  }

  if (parentInstance && lib.isFunction(parentInstance[fun])) {
    parentInstance[fun].call(parentInstance, e, param);
  } else {
    if (lib.isFunction(thisFun)) {
      thisFun.call(this, e, param, this);
    } else {
      if (isEvt) evtFun.call(activePage, e, param, parentInstance || that);
    }
  }
}

var listComponentBehavior = exports.listComponentBehavior = function listComponentBehavior(app, mytype) {
  mytype = mytype || 'list';
  return Behavior({
    behaviors: [listBehavior(app, mytype)]
  });
};

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

/***/ }),

/***/ 9:
/*!************************************************************!*\
  !*** /Users/sslin/lgh/xiaochengxu/node_modules/md5/md5.js ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__(/*! crypt */ 10),
      utf8 = __webpack_require__(/*! charenc */ 4).utf8,
      isBuffer = __webpack_require__(/*! is-buffer */ 11),
      bin = __webpack_require__(/*! charenc */ 4).bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message))
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ })

},[[216,0]]]);