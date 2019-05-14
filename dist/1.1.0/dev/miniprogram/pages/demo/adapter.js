; require("../../runtime.js");
/**auto import common&runtime js**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[228],{

/***/ 24:
/*!**********************************!*\
  !*** ./js/pages/demo/adapter.js ***!
  \**********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//适用于list效果1
var adapterListSs = function adapterListSs(data, opts) {
  var imgClass = opts.imgClass,
      titleClass = opts.titleClass,
      descClass = opts.descClass,
      kvitemClass = opts.kvitemClass,
      hbitemClass = opts.hbitemClass,
      bodyClass = opts.bodyClass;

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
        img: {
          src: img,
          class: imgClass
        },
        body: [{
          k: {
            title: item.title,
            class: titleClass
          },
          v: {
            title: item.desc,
            class: descClass
          },
          kvClass: kvitemClass,
          class: hbitemClass
        }, item.isArrows ? {
          title: [{
            title: '', //作预留
            class: ''
          }, {
            title: ' ',
            class: 'icon-arrows-r color-grey  ml-20-r'
          }]
        } : ''],
        bodyClass: bodyClass,
        tap: 'onTap?abc=xxx'
      });
    });
  }
  return output;
};

//适用于list效果3
var adapterList2Ss = function adapterList2Ss(data, opts) {
  var imgClass = opts.imgClass,
      titleClass = opts.titleClass,
      descClass = opts.descClass,
      hbitemClass = opts.hbitemClass,
      itemliClass = opts.itemliClass,
      bodyClass = opts.bodyClass,
      imgDotClass = opts.imgDotClass;

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
        title: [{
          img: {
            src: img,
            class: imgClass
          }
        }, item.imgdot ? {
          title: ' ',
          class: imgDotClass
        } : ''],
        body: [{
          k: {
            title: item.title,
            class: titleClass
          },
          v: {
            title: '19/03/07',
            class: 'color-grey size12'
          },
          kvClass: 'flex-row-between-center'
        }, item.desc ? {
          k: {
            title: item.desc,
            class: descClass
          },
          v: item.isVoice ? {
            title: ' ',
            class: 'icon-silence color-grey size14 ml-20-r'
          } : '',
          kvClass: 'flex-row-between-center mb-20-r'
        } : ''],
        bodyClass: bodyClass,
        tap: 'onTap?abc=xxx'
      });
    });
  }
  return output;
};

//适用于list效果4
var adapterList3Ss = function adapterList3Ss(data, opts) {
  var imgClass = opts.imgClass,
      titleClass = opts.titleClass,
      bodyClass = opts.bodyClass,
      titledotClass = opts.titledotClass,
      footerdescClass = opts.footerdescClass,
      footerdotClass = opts.footerdotClass,
      footerimgClass = opts.footerimgClass,
      footerClass = opts.footerClass,
      itemliClass = opts.itemliClass,
      liClass = opts.liClass;

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
        img: {
          src: img,
          class: imgClass
        },
        li: [{
          body: [{ title: item.title, class: titleClass }, item.titleDot ? { title: item.titleDot, class: 'icon-dot ml-r-20' } : ''],
          bodyClass: bodyClass,
          footer: [item.footerDesc ? { title: item.footerDesc, class: footerdescClass } : '', img2 ? {
            k: {
              img: { src: img2, class: footerimgClass }
            },
            v: {
              title: ' ',
              class: 'icon-dot-small ss-absolute-tr'
            },
            kvClass: 'ss-relative padding-r-10 ml-10-r'
          } : '', { icon: { class: 'icon-arrows-r color-grey' } }],
          footerClass: footerClass,
          class: itemliClass
        }],
        liClass: liClass
      });
    });
  }
  return output;
};

//适用于list效果5
var adapterList4Ss = function adapterList4Ss(data, opts) {
  var imgClass = opts.imgClass,
      titleClass = opts.titleClass,
      bodyClass = opts.bodyClass,
      itemliClass = opts.itemliClass;

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
        img: {
          src: img,
          class: imgClass
        },
        title: [{
          title: item.title,
          class: titleClass
        }, {
          title: ' ',
          class: 'icon-arrows-r color-grey'
        }],
        titleClass: bodyClass,
        class: itemliClass
      });
    });
  }
  return output;
};

// 适用于list效果6  判断层级
var adapterList5Ss = function adapterList5Ss(data, opts) {
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
        class: 'tag-fff-ff7e11 mr-10-r mb-10-r'
      });
    });
    data2.map(function (item) {
      output.push({
        title: item,
        class: 'tag-fff-ff5552 mr-10-r mb-10-r'
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
      class: 'item-li'
    };
  });
}

//适用于list效果7  参考组团港珠澳专线
var adapterList6Ss = function adapterList6Ss(data, opts) {
  opts = typeof opts == 'undefined' ? {} : opts;
  var _opts = opts,
      imgClass = _opts.imgClass,
      titleClass = _opts.titleClass,
      descClass = _opts.descClass,
      kvitemClass = _opts.kvitemClass,
      hbitemClass = _opts.hbitemClass,
      bodyClass = _opts.bodyClass,
      liClass = _opts.liClass;

  var output = [];
  if (data && data.length > 0) {
    data.map(function (item) {
      output.push({
        title: [{
          img: {
            src: item.productImages,
            class: 'pic-150-r'
          }
        }, {
          title: item.departCityName,
          class: 'dot-left-opacity-5'
        }],
        titleClass: 'ss-relative',
        li: [{
          body: [{
            title: item.propertyIdentity,
            class: 'lhei-38-r title-333 size16 textellipsis-2 fw-bold'
          }, {
            title: item.productProperties.serviceGuaranteeName ? centerlineFunc(item.productProperties.serviceGuaranteeName) : '',
            titleClass: 'color-grey mt-10-r line-li-20'
          }, {
            title: tagFunc(item.productProperties, 'macaohkline'),
            titleClass: 'flex-row mt-10-r'
          }, {
            k: {
              title: '成人结算价',
              class: 'mr-10-r'
            },
            v: {
              title: '实名可见',
              class: 'color-minor'
            },
            kvClass: 'flex-row color-default'
          }],
          bodyClass: 'flex-1',
          footer: [{
            title: {
              title: '',
              class: 'icon-arrows-r mr-8-r-m'
            },
            class: 'color-grey ml-10-r size16'
          }],
          class: 'ml-20-r flex-1 flex-row-between-center size13'
        }],
        tap: 'onTap?abc=xxx'
      });
    });
  }
  return output;
};

//适用于list效果8  参考组团港珠澳专线 澳门套票
var adapterList7Ss = function adapterList7Ss(data, opts) {
  opts = typeof opts == 'undefined' ? {} : opts;
  var _opts2 = opts,
      imgClass = _opts2.imgClass,
      titleClass = _opts2.titleClass,
      descClass = _opts2.descClass,
      kvitemClass = _opts2.kvitemClass,
      hbitemClass = _opts2.hbitemClass,
      bodyClass = _opts2.bodyClass,
      liClass = _opts2.liClass;

  var output = [];
  if (data && data.length > 0) {
    data.map(function (item) {
      output.push({
        title: [{
          img: {
            src: item.productImages,
            class: 'item-header-pic'
          }
        }],
        titleClass: 'item-header',
        body: [{
          title: item.propertyIdentity,
          class: 'lhei-38-r title-333 size16 textellipsis-1 fw-bold'
        }, {
          k: {
            title: '结算价',
            class: 'mr-10-r'
          },
          v: {
            title: '实名可见',
            class: 'color-minor'
          },
          kvClass: 'flex-row color-grey mb-6-r'
        }, {
          title: '测试品牌名称测试品牌名称测试品牌名称测试-测试企业全称测试企业全称测试企业全称测试企业全称测试企业全称',
          class: 'textellipsis-1 color-default'
        }],
        bodyClass: 'ml-20-r size12 item-body',
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
      title: { title: idfTitle, class: 'ss-title' }, idf: idfTitle,
      // title: [
      //   {title: idfTitle, class: 'idfxxx'},
      //   {title: ' ', class: 'icon-arrows-b'}
      // ],
      titleClass: 'ss-title-flex-between'
    }, 'idf', idfTitle));
    data[idfTitle].map(function (item, ii) {
      output.push({
        // title: { title: item.navTitle, class: 'parentxx'}, parent: idfTitle, class: 'li'
        title: [{
          img: {
            src: 'https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg',
            class: 'pic-80-r radius-10-r mtb-14-r'
          }
        }, {
          title: {
            title: item.navTitle,
            class: 'hei-p100 flex-row-center'
          },
          class: data[idfTitle].length - 1 != ii ? 'title-333 size16 textellipsis-1 ml-20-r flex-1 bb-default' : 'title-333 size16 textellipsis-1 ml-20-r flex-1'
        }],
        titleClass: 'ss-focus flex-row',
        parent: idfTitle,
        class: 'li'
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
//       class: 'class'
//     },
//     idf: 'xxxx'
//   },
//   {
//     '@item': {
//       title:
//     }
//   }
// ]

exports.default = {
  adapterListSs: adapterListSs,
  adapterList2Ss: adapterList2Ss,
  adapterList3Ss: adapterList3Ss,
  adapterList4Ss: adapterList4Ss,
  adapterList5Ss: adapterList5Ss,
  adapterList6Ss: adapterList6Ss,
  adapterList7Ss: adapterList7Ss,
  adapterTreeSs: adapterTreeSs
};

/***/ })

},[[24,0]]]);