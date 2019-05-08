; require("../../../runtime.js");
/**auto import common&runtime js**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[11],{

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

function _up(params) {
  var _this = this;

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
      _this.when = function () {};
      var every = params.filePath.map(function (one) {
        return new Promise(function (rs, rj) {
          var nParams = {};
          Object.keys(params).forEach(function (key) {
            if (key == 'filePath') {
              nParams[key] = one;
            } else {
              nParams[key] = params[key];
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
      // const nEvery = every.splice(1)
      // nEvery.reduce((p, n) => {
      //   return p.then(r=>{

      //   })
      // }, every[0])
    } else {
      wx.uploadFile(params);
    }
  });
}

function upload(url, data) {
  var param = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

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
    console.log('url\u548CfilePath\u53C2\u6570\u4E3A\u5FC5\u586B\u9879\uFF0Curl\u8BF7\u586B\u5199\u670D\u52A1\u5668\u5730\u5740, filePath\u8BF7\u586B\u5199\u4E0A\u4F20\u56FE\u7247\u5730\u5740');
  }
}

/***/ })

},[[17,0]]]);