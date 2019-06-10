; require("../../../runtime.js");
/**auto import common&runtime js**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[16],[
/* 0 */
/*!***************************************************!*\
  !*** ./src/SaUi/js/components/aotoo/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(/*! ./util */ 1);

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
Object.defineProperty(exports, 'formatToUrl', {
  enumerable: true,
  get: function get() {
    return _util.formatToUrl;
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

var _tree = __webpack_require__(/*! ./tree */ 9);

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

var _hooks = __webpack_require__(/*! ./hooks */ 10);

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

var _forlist = __webpack_require__(/*! ./forlist */ 11);

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
var md5 = exports.md5 = __webpack_require__(/*! md5 */ 5);

/***/ }),
/* 1 */
/*!**************************************************!*\
  !*** ./src/SaUi/js/components/aotoo/lib/util.js ***!
  \**************************************************/
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
exports.formatToUrl = formatToUrl;
exports.suid = suid;
exports.resetSuidCount = resetSuidCount;
exports.uuid = uuid;

var _md = __webpack_require__(/*! md5 */ 5);

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
  return objTypeof(obj) == 'object' && !isArray(obj);
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

function formatToUrl(url) {
  var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (isString(url) && isObject(param)) {
    var queryStr = '';
    Object.keys(param).forEach(function (key) {
      queryStr += '&' + key + '=' + param[key];
    });
    if (queryStr) {
      url += '?' + queryStr;
      url = url.replace('?&', '?').replace('&&', '&');
    }
  }
  return url;
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
    var remainder = len - 5;
    var pre = uuid.substr(0, 5);
    var aft = uuid.substr(uuid.length - remainder);
    return pre + aft;
  } else {
    return uuid;
  }
}

/***/ }),
/* 2 */,
/* 3 */
/*!*****************************************************!*\
  !*** ./src/SaUi/js/components/aotoo/lib/foritem.js ***!
  \*****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetItem = resetItem;

var _util = __webpack_require__(/*! ./util */ 1);

var attrKey = ['aim', 'attr', 'class', 'itemClass', 'style', 'itemStyle', 'template', 'tap', 'catchtap', 'longtap', 'catchlongtap', 'longpress', 'catchlongpress', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'data-treeid', 'id', 'treeid', 'src', '$$id', '__sort', 'tempName', 'idf', 'parent', 'show', 'type', 'typeOptions', 'hoverclass', '__actionMask', 'data', 'mode'];

var accessKey = ['title', 'img', 'icon', 'list', 'tree', 'item', 'header', 'body', 'footer', 'dot', 'li', 'k', 'v'];

// function setItemSortIdf(item, context) {
//   if (typeof item == 'string' || typeof item == 'number' || typeof item == 'boolean') return item
//   if (typeof item == 'object') {
//     if (!Array.isArray(item)) {
//       let extAttrs = {}
//       let incAttrs = []
//       item['__sort'] = []

//       if (context) {
//         // item.fromComponent = context.data.fromComponent||context.data.uniqId
//         item.fromComponent = context.data.fromComponent || context.data.uniqId
//       }

//       Object.keys(item).forEach(function (key) {
//         if (accessKey.indexOf(key) > -1 || (key.indexOf('@')==0 && key.length>1)) {
//           incAttrs.push(key)
//         } else {
//           if (key == 'aim') {
//             item.catchtap = item[key]
//           }
//           extAttrs[key] = item[key]
//         }
//       })

//       if (incAttrs.length) {
//         item['__sort'] = incAttrs
//         incAttrs.map(attr => {
//           let oData = item[attr]
//           if (typeof oData == 'object') {
//             if (Array.isArray(oData)) {
//               item[attr] = setSortTemplateName(oData, context)
//             } else {
//               if (/^[^@]/.test(attr)) {
//                 item[attr] = setItemSortIdf(oData, context)
//               }
//             }
//           }
//         })
//       }
//       return item
//     }
//   }
// }

// function setSortTemplateName(data, context) {
//   if (Array.isArray(data) && data.length) {
//     return data.map(item => setItemSortIdf(item, context))
//   }
// }

function resetItem(data, context, loop) {
  if (typeof data == 'string' || typeof data == 'number' || typeof data == 'boolean') return data;
  if ((0, _util.isObject)(data)) {
    var extAttrs = {};
    var incAttrs = [];
    data['__sort'] = [];

    if (context) {
      data.fromComponent = context.data.fromComponent || context.data.uniqId;
      if (data.methods || data.itemMethod) {
        var methods = data.methods || data.itemMethod;
        Object.keys(methods).forEach(function (key) {
          var fun = methods[key];
          if ((0, _util.isFunction)(fun)) {
            fun = fun.bind(context);
            context[key] = fun;
          }
        });
        delete data.methods;
        delete data.itemMethod;
      }
    }

    Object.keys(data).forEach(function (key) {
      if (data[key] || data[key] === 0) {
        if (accessKey.indexOf(key) > -1 || key.indexOf('@') == 0 && key.length > 1) {
          incAttrs.push(key);
        } else {
          if (key == 'aim') {
            data.catchtap = data[key];
            extAttrs['catchtap'] = data[key];
            delete data.aim;
          } else {
            extAttrs[key] = data[key];
          }
        }
      } else {
        delete data[key];
      }
    });

    data['__sort'] = incAttrs;
    // for (var attr in data) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = incAttrs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var attr = _step.value;

        var sonItem = data[attr];
        if ((0, _util.isArray)(sonItem)) {
          // data[attr] = setSortTemplateName(sonItem, context)
          data[attr] = sonItem.filter(function (item) {
            return resetItem(item, context, true);
          });
        } else {
          if (/^[^@]/.test(attr) && sonItem) {
            data[attr] = resetItem(sonItem, context, true);
            // data[attr] = setItemSortIdf(sonItem, context)
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    if (!data.parent && !loop) data.itemDataRoot = true; // 标识该item是最顶层item，class style用作容器描述
  }

  // context.props = extAttrs
  return data;
}

/***/ }),
/* 4 */
/*!*****************************************!*\
  !*** ./node_modules/charenc/charenc.js ***!
  \*****************************************/
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
/* 5 */
/*!*********************************!*\
  !*** ./node_modules/md5/md5.js ***!
  \*********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__(/*! crypt */ 7),
      utf8 = __webpack_require__(/*! charenc */ 4).utf8,
      isBuffer = __webpack_require__(/*! is-buffer */ 8),
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


/***/ }),
/* 6 */,
/* 7 */
/*!*************************************!*\
  !*** ./node_modules/crypt/crypt.js ***!
  \*************************************/
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
/* 8 */
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
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
/* 9 */
/*!**************************************************!*\
  !*** ./src/SaUi/js/components/aotoo/lib/tree.js ***!
  \**************************************************/
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

var _util = __webpack_require__(/*! ./util */ 1);

var _foritem = __webpack_require__(/*! ./foritem */ 3);

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
      type: item.type,
      listClass: item.liClass || 'ul',
      itemClass: treeProps.itemClass || '',
      itemStyle: treeProps.itemStyle || '',
      show: item.hasOwnProperty('show') ? item.show : true,
      fromComponent: fromTree
      // fromTree : fromTree

      // item['__sort'] = (item['__sort'] || []).concat('@list')
    };
  }
  item = (0, _foritem.resetItem)(item);
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
      // item.fromTree = fromTree
      item.fromComponent = fromTree;
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
    list.data = tree.call(this, list.data, list, fromTree);
  }
  return list;
}

/***/ }),
/* 10 */
/*!***************************************************!*\
  !*** ./src/SaUi/js/components/aotoo/lib/hooks.js ***!
  \***************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.hooks = hooks;

var _util = __webpack_require__(/*! ./util */ 1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _hooks = function () {
  function _hooks() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, _hooks);

    this.actions = {};
    this.storeData = {};
    this.storage = props.storage;
  }

  _createClass(_hooks, [{
    key: 'destory',
    value: function destory() {
      this.actions = null;
      this.storeData = null;
      // wx.clearStorageSync()
    }
  }, {
    key: 'getInfo',
    value: function getInfo() {
      return this.storage ? getStorageInfoSync() : this.storeData;
    }
  }, {
    key: 'setItem',
    value: function setItem(key, val) {
      try {
        if (this.storage) {
          wx.setStorageSync(key, val);
        }
        this.storeData[key] = val;
      } catch (error) {
        console.warn(error);
      }
    }
  }, {
    key: 'getItem',
    value: function getItem(key) {
      try {
        var res = void 0;
        if (this.storage) {
          res = wx.getStorageSync(key);
        }
        if (res) {
          this.storeData[key] = res;
        }
        return res;
      } catch (error) {
        console.warn(error);
      }
    }
  }, {
    key: 'append',
    value: function append(key, val) {
      if (this.storeData[key]) {
        var sData = this.getItem(key);
        if ((0, _util.isArray)(sData)) {
          sData = sData.concat(val);
        } else if ((0, _util.isObject)(sData)) {
          if ((0, _util.isObject)(val)) {
            sData = Object.assign(sData, val);
          } else {
            sData[(0, _util.suid)('random_')] = val;
          }
        } else {
          sData = val;
        }
        this.setItem(key, sData);
      } else {
        this.setItem(key, val);
      }
    }
  }, {
    key: 'delete',
    value: function _delete(key) {
      if (this.storage) {
        wx.removeStorageSync(key);
      }
      this.storeData[key] = null;
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.destory();
      wx.clearStorageSync();
    }

    // ========= 下面为钩子方法 ===========

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
function hooks(idf, storage) {
  if ((0, _util.isString)(idf)) {
    if (!myhooks[idf]) {
      myhooks[idf] = new _hooks({ storage: storage });
    }
    return myhooks[idf];
  }
}

/***/ }),
/* 11 */
/*!*****************************************************!*\
  !*** ./src/SaUi/js/components/aotoo/lib/forlist.js ***!
  \*****************************************************/
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

var _util = __webpack_require__(/*! ./util */ 1);

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

  // const newItem = item['$$id'] ? item : resetItem(item, this)
  var newItem = (0, _foritem.resetItem)(item, this);
  return newItem;
}

function reSetArray(data, list) {
  var _this = this;

  var that = this;
  try {
    if (list.methods && (0, _util.isObject)(list.methods)) {
      var methods = list.methods;
      Object.keys(methods).forEach(function (key) {
        var fun = methods[key];
        if ((0, _util.isFunction)(fun)) {
          fun = fun.bind(that);
          that[key] = methods[key];
        }
      });
    }
    delete list.methods;

    if ((0, _util.isArray)(data)) {
      list.data = data.map(function (item) {
        return reSetItemAttr.call(_this, item, list);
      });
    }
    return list;
  } catch (error) {
    console.warn('======= lib.reSetArray =======', error);
  }
}

function reSetList(list) {
  if ((0, _util.isObject)(list)) {
    list['show'] = list.hasOwnProperty('show') ? list.show : true;
    return reSetArray.call(this, list.data, list);
  }
}

/***/ })
],[[0,0]]]);