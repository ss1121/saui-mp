; require("../../runtime.js");
/**auto import common&runtime js**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[218],{

/***/ 23:
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

/***/ }),

/***/ 24:
/*!*******************************!*\
  !*** ./js/pages/demo/data.js ***!
  \*******************************/
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
  img: ['https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg', 'https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg']
}, {
  title: '扫一扫', parents: "2",
  img: ['https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg', 'https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg']
}, {
  title: '摇一摇', parents: "2",
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

/***/ 29:
/*!***********************************!*\
  !*** ./js/pages/demo/demodata.js ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diytour2Data = exports.diytourData = exports.tabData = exports.listDiytour = exports.actionSide3 = exports.actionSide2 = exports.actionSide1 = exports.buttonForAs = exports.treeData = exports.listData = exports.sortData = exports.picsData = exports.onepicData = exports.titlesData = exports.longpressData = exports.iconData = exports.aimData = exports.stringData = undefined;

var _data = __webpack_require__(/*! ./data */ 24);

var _data2 = _interopRequireDefault(_data);

var _adapter = __webpack_require__(/*! ./adapter */ 23);

var _adapter2 = _interopRequireDefault(_adapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stringData = exports.stringData = {
  title: [{ title: '字符串', class: 'h2' }, { title: '自定义字符串', class: 'h6', style: 'margin: 0 0 50rpx 0;' }, {
    title: '据悉，一年前该机构的研究就展示出相比于传统娱乐行业，互联网及其各种平台是如何让更多内容创作者赚取了更多利润。而这次研究直接关注了许多小的自媒体。该群体不同于阿里安娜·格兰德(Ariana Grande)或德韦恩·约翰逊(Dwayne Johnson)等主流明星，后者主要通过Instagram品牌赞助、YouTube收入分成等方式获得了大量收入。而在互联网蓬勃发展之前，很多自媒体根本赚不到钱'
  }]
};

var aimData = exports.aimData = {
  title: [{ title: 'aim指令', class: 'h2' }, { title: 'aim指令能够很灵活的为结构设置tap事件', class: 'h6', style: 'margin: 0 0 50rpx 0;' }, { title: '点我试试', aim: 'inner-response' }]
};

var iconData = exports.iconData = {
  title: [{ title: 'ICON', class: 'h2', style: 'margin: 0 0 50rpx 0; display: block;' }, { icon: 'icon-rili' }, { icon: { class: 'icon-mingpian', style: 'font-size: 32px; margin-left: 5px;' } }]
};

var longpressData = exports.longpressData = {
  title: [{ title: 'longpress', class: 'h2', style: 'margin: 0 0 50rpx 0; display: block;' }, { title: '长按我', class: 'button primary', style: "width: 200rpx;", aim: 'xxx' }],
  longpress: 'onLongPress?b=1&c=2&d=3',
  tap: 'onTap?abc=xxx'
};

var titlesData = exports.titlesData = {
  title: [{ title: '标题数组', class: 'h2', style: 'margin: 0 0 50rpx 0; display: block;' }, { title: '标题一', class: 'h1', aim: 'x' }, { title: '标题二', class: 'h2', aim: 'x' }, { title: '标题三', class: 'h3', aim: 'x' }, { title: '标题四', class: 'h4', aim: 'x' }, { title: '标题五', class: 'h5', aim: 'x' }, { title: '标题六', class: 'h6', aim: 'x' }]
};

var onepicData = exports.onepicData = {
  title: { title: '一张图片', class: 'h2', style: 'margin: 0 0 50rpx 0; display: block;' },
  img: {
    src: 'https://img13.360buyimg.com/n7/jfs/t1/3/15/4536/138660/5b997bf8Ed72ebce7/819dcf182d743897.jpg',
    aim: 'http://www.agzgz.com',
    mode: 'widthFix'
  }
};

var picsData = exports.picsData = {
  title: { title: '一组图片', class: 'h2', style: 'margin: 0 0 50rpx 0; display: block;' },
  img: [{ src: 'https://img13.360buyimg.com/n7/jfs/t1/3/15/4536/138660/5b997bf8Ed72ebce7/819dcf182d743897.jpg', aim: 'x', style: 'width: 80vw; display: block; margin-top: 1vh;' }, { src: 'https://img13.360buyimg.com/n7/jfs/t1/3/15/4536/138660/5b997bf8Ed72ebce7/819dcf182d743897.jpg', aim: 'x', style: 'width: 60vw; display: block; margin-top: 1vh;' }, { src: 'https://img13.360buyimg.com/n7/jfs/t1/3/15/4536/138660/5b997bf8Ed72ebce7/819dcf182d743897.jpg', aim: 'x', style: 'width: 40vw; display: block; margin-top: 1vh;' }]
};

var sortData = exports.sortData = {
  title: [{ title: '自定义排序', class: 'h2' }, { title: '通过上下移动属性值来调整位置', class: 'h6', style: 'margin: 0 0 50rpx 0;' }],
  body: [{
    img: { src: 'https://img13.360buyimg.com/n7/jfs/t1/3/15/4536/138660/5b997bf8Ed72ebce7/819dcf182d743897.jpg', aim: 'x', style: 'width: 80vw; display: block; margin-top: 1vh;' },
    title: '图片标题',
    class: 'h4',
    k: { title: '属性key：', class: 'h6' },
    v: { title: '属性key的属性描述', class: 'h6' }
  }, { title: { title: '--------- ', style: 'display: block; margin: 40rpx 0 50rpx 0; color: #fcfcfc;' } }, {
    title: '图片标题',
    k: { title: '属性key：', class: 'h6' },
    v: { title: '属性key的属性描述', class: 'h6' },
    img: { src: 'https://img13.360buyimg.com/n7/jfs/t1/3/15/4536/138660/5b997bf8Ed72ebce7/819dcf182d743897.jpg', aim: 'x', style: 'width: 80vw; display: block; margin-top: 1vh;' },
    class: 'h4'
  }]
};

var listData = exports.listData = {
  itemClass: 'x',
  title: [{
    '@item': {
      title: [{
        title: '效果1',
        class: 'item-titlex'
      }, {
        title: 'ss',
        class: 'item-descx'
      }],
      class: 'bg-title-f3f3f3'
    }
  }, {
    '@list': {
      listClass: 'bb-e3e3e3-list-hbody',
      itemClass: 'plr-20-r ss-focus flex-row',
      data: _adapter2.default.adapterListSs(_data2.default.listDatax, {
        imgClass: 'pic-120-r radius-10-r mtb-20-r',
        titleClass: 'title-333 size16 textellipsis-1',
        descClass: 'color-grey textellipsis-1 size14',
        bodyClass: 'ml-20-r ptb-20-r flex-1'
      })
    }
  }, {
    '@list': {
      listClass: 'bb-e3e3e3-list-hbody',
      itemClass: 'plr-20-r ss-focus flex-row',
      data: _adapter2.default.adapterListSs(_data2.default.listData4x, {
        imgClass: 'pic-120-r radius-10-r mtb-20-r',
        titleClass: 'title-333 size16 textellipsis-1',
        descClass: 'color-grey textellipsis-1 size14',
        kvitemClass: 'hei-p100 flex-column-between',
        hbitemClass: 'hei-p100',
        bodyClass: 'ml-20-r ptb-20-r flex-1 flex-row-between-center'
      })
    }
  }, {
    '@item': {
      title: [{
        title: '效果2',
        class: 'item-titlex'
      }, {
        title: 'ss',
        class: 'item-descx'
      }],
      class: 'bg-title-f3f3f3'
    }
  }, {
    '@list': {
      itemClass: 'padding-20-r item-normal-row',
      data: _adapter2.default.adapterListSs(_data2.default.listData2x, {
        imgClass: 'pic-120-r radius-10-r',
        titleClass: 'title-333 size16 textellipsis-1',
        descClass: 'color-grey textellipsis-1 size14',
        kvitemClass: 'hkv-around'
      })
    }
  }, {
    '@item': {
      body: [{
        title: [{ title: '', class: 'icon-1 mr-10-r size16 color-primary' }, { title: '效果3', class: 'item-titlex' }]
      }, {
        title: 'ss',
        class: 'item-descx'
      }],
      bodyClass: 'bg-title-body-f3f3f3'
    }
  }, {
    '@list': {
      itemClass: 'plr-20-r ss-focus flex-row',
      data: _adapter2.default.adapterList2Ss(_data2.default.listDatax, {
        imgClass: 'pic-80-r radius-10-r mtb-20-r',
        titleClass: 'title-333 size16 textellipsis-1',
        descClass: 'color-grey textellipsis-1 size14',
        bodyClass: 'flex-1 pt-20-r ml-20-r bb-default',
        imgDotClass: 'icon-dot-small ss-absolute-tr'
      })
    }
  }, {
    '@item': {
      body: [{
        title: [{ title: '', class: 'icon-2 mr-10-r size16 color-primary' }, { title: '效果4', class: 'item-titlex' }]
      }, {
        title: 'ss',
        class: 'item-descx'
      }],
      bodyClass: 'bg-title-body-f3f3f3'
    }
  }, {
    '@list': {
      itemClass: 'plr-20-r ss-focus flex-row bb-e3e3e3-item-line',
      data: _adapter2.default.adapterList3Ss(_data2.default.listData2x, {
        imgClass: 'pic-80-r radius-10-r mtb-20-r',
        titleClass: 'title-333 size16 textellipsis-1',
        bodyClass: 'flex-row-center',
        footerdescClass: 'color-grey size14',
        footerimgClass: 'pic-40-r',
        footerClass: 'flex-row-center',
        itemliClass: 'flex-row-between-center hei-p100',
        liClass: 'hei-120-r ml-20-r flex-1 item-line'
      })
    }
  }, {
    '@item': {
      body: [{
        title: [{ title: '', class: 'icon-2 mr-10-r size16 color-primary' }, { title: '效果5', class: 'item-titlex' }]
      }, {
        title: 'ss',
        class: 'item-descx'
      }],
      bodyClass: 'bg-title-body-f3f3f3'
    }
  }, {
    '@list': {
      // itemClass: 'plr-20-r ss-focus flex-row',
      data: _adapter2.default.adapterList4Ss(_data2.default.listData2x, {
        imgClass: 'pic-80-r radius-10-r mtb-20-r',
        titleClass: 'title-333 size16 textellipsis-1',
        bodyClass: 'flex-row-between-center hei-120-r ml-20-r flex-1 item-line',
        itemliClass: 'plr-20-r ss-focus flex-row bb-e3e3e3-item-line'
      })
    }
  }, {
    '@item': {
      body: [{
        title: [{ title: '', class: 'icon-2 mr-10-r size16 color-primary' }, { title: '效果6', class: 'item-titlex' }]
      }, {
        title: 'ss',
        class: 'item-descx'
      }],
      bodyClass: 'bg-title-body-f3f3f3'
    }
  }, {
    '@list': {
      listClass: 'bg-f3f3f3',
      itemClass: 'mb-20-r bg-fff',
      data: _adapter2.default.adapterList5Ss(_data2.default.listData5x, {
        imgClass: 'pic-80-r radius-10-r mtb-20-r',
        titleClass: 'title-333 size16 textellipsis-1',
        bodyClass: 'flex-row-between-center hei-120-r ml-20-r flex-1 item-line',
        itemliClass: 'plr-20-r ss-focus flex-row bb-e3e3e3-item-line'
      })
    }
  }, {
    '@item': {
      body: [{
        title: [{ title: '', class: 'icon-2 mr-10-r size16 color-primary' }, { title: '效果7', class: 'item-titlex' }]
      }, {
        title: 'ss',
        class: 'item-descx'
      }],
      bodyClass: 'bg-title-body-f3f3f3'
    }
  }, {
    title: { title: '点击有惊喜', aim: 'open_diytour?direction=bot', class: 'padding-20-r' }
  }, {
    '@item': {
      body: [{
        title: [{ title: '', class: 'icon-2 mr-10-r size16 color-primary' }, { title: '效果8', class: 'item-titlex' }]
      }, {
        title: 'ss',
        class: 'item-descx'
      }],
      bodyClass: 'bg-title-body-f3f3f3'
    }
  }, {
    title: { title: '点击有惊喜2', aim: 'open_diytourx?direction=bot', class: 'padding-20-r' }
  }]
};

var treeData = exports.treeData = {
  title: [{ title: '树结构', class: 'h2' }, { title: '支持4层树，树结构需特定数据结构', class: 'h6', style: 'margin: 0 0 50rpx 0;' }, {
    '@item': {
      body: [{
        title: [{ title: '', class: 'icon-2 mr-10-r size16 color-primary' }, { title: '效果1', class: 'item-titlex' }]
      }, {
        title: 'ss',
        class: 'item-descx'
      }],
      bodyClass: 'bg-title-body-f3f3f3'
    }
  }, {
    '@tree': {
      $$id: 'mytree',
      data: [{ title: { title: '层级一', class: 'h6' }, idf: 'level_1' }, { title: { title: 'content', class: 'h6' }, parent: 'level_1' }, { title: { title: '层级二', class: 'h6' }, parent: 'level_1', idf: 'level_2', aim: 'abc' },
      // {title: {title: 'content222', class: 'h6'}, parent: 'level_2', aim: 'xx-delete'},
      { title: { title: '点击删除本行', class: 'h6', style: 'text-decoration: underline;' }, parent: 'level_2', tap: 'mytree-delete' }, { title: { title: 'content', class: 'h6' }, parent: 'level_2' }, { title: { title: '层级三，点我折叠', class: 'h6' }, parent: 'level_2', idf: 'level_3', tap: 'tree-hide' }, { title: { title: 'content', class: 'h6' }, parent: 'level_3' }, { title: { title: 'content', class: 'h6' }, parent: 'level_3' }, { title: { title: '层级四', class: 'h6' }, parent: 'level_3', idf: 'level_4' }, { title: { title: 'content', class: 'h6' }, parent: 'level_4' }, { title: { title: 'content', class: 'h6' }, parent: 'level_4' }, { title: { title: 'content', class: 'h6' }, parent: 'level_4' }]
    }
  }, { '@item': {
      title: [{ title: 'append', class: 'button primary', aim: 'tree-append' }, { title: 'prepend', class: 'button primary', aim: 'tree-prepend' }]
    } }, {
    '@item': {
      body: [{
        title: [{ title: '', class: 'icon-2 mr-10-r size16 color-primary' }, { title: '效果2', class: 'item-titlex' }]
      }, {
        title: 'ss',
        class: 'item-descx'
      }],
      bodyClass: 'bg-title-body-f3f3f3 mt-20-r'
    }
  }, {
    '@tree': {
      $$id: 'mytree2',
      listClass: 'ss-tree-hierarchy',
      // itemClass: 'ss-tree-hierarchy',
      data: _adapter2.default.adapterTreeSs(_data2.default.listData1xx)
    }
  }]
};

var buttonForAs = exports.buttonForAs = {
  data: [{ title: [{ title: 'fullscreen-right', class: 'item' }, { title: '全屏侧弹窗-右侧', aim: 'as-full', class: 'item icon-arrows-r' }] }, { title: [{ title: 'fullscreen-left', class: 'item' }, { title: '全屏侧弹窗-左侧', aim: 'as-full?direction=left', class: 'item icon-arrows-r' }] }, { title: [{ title: 'fullscreen-bottom', class: 'item' }, { title: '全屏侧弹窗-底弹', aim: 'as-full?direction=bot', class: 'item icon-arrows-r' }] }, { title: [{ title: 'fullscreen-top', class: 'item' }, { title: '全屏侧弹窗-顶弹', aim: 'as-full?direction=top', class: 'item icon-arrows-r' }] }, { title: [{ title: 'bar-right', class: 'item' }, { title: '弹半框-右侧', aim: 'open-bar', class: 'item icon-arrows-r' }] }, { title: [{ title: 'bar-left', class: 'item' }, { title: '弹半框-左侧', aim: 'open-bar?direction=left', class: 'item icon-arrows-r' }] }, { title: [{ title: 'bar-bot', class: 'item' }, { title: '弹半框-底侧', aim: 'open-bar?direction=bot', class: 'item icon-arrows-r' }] }, { title: [{ title: 'bar-top', class: 'item' }, { title: '弹半框-顶侧', aim: 'open-bar?direction=top', class: 'item icon-arrows-r' }] }],
  itemClass: 'li item-normal',
  listClass: 'ul'

  // 弹窗
};var actionSide1 = exports.actionSide1 = {
  id: 'actionSide1',
  title: [{ title: '打开新侧弹', aim: 'open_as2' }]
};

var actionSide2 = exports.actionSide2 = {
  id: 'actionSide2',
  title: '侧弹2'
};

var actionSide3 = exports.actionSide3 = {
  id: 'actionSide3',
  title: '侧弹3'
};

var listDiytour = exports.listDiytour = {
  id: 'listDiytour',
  title: '侧弹3'
};

var tabData = exports.tabData = {
  data: [{ title: 'aaa', content: 'aaa-content' }, { title: 'bbb', content: 'bbb-content' }, { title: 'ccc', content: 'ccc-content' }]
};

var diytourData = exports.diytourData = {
  '@list': {
    listClass: 'bs-e3e3e3-list',
    itemClass: 'ss-focus flex-row item padding-normal',
    data: _adapter2.default.adapterList6Ss(_data2.default.listData2xx)
  }
};

var diytour2Data = exports.diytour2Data = {
  '@list': {
    listClass: 'list-pic-column pic-2',
    itemClass: 'ss-focus item-li',
    data: _adapter2.default.adapterList7Ss(_data2.default.listData2xx)
  }
};

/***/ })

},[[29,0]]]);