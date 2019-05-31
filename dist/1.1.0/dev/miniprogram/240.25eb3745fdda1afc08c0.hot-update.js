; require("../../runtime.js");
/**auto import common&runtime js**/
webpackHotUpdate(240,{

/***/ 80:
/*!******************************!*\
  !*** ./js/pages/my/index.js ***!
  \******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _adapter = __webpack_require__(/*! ../nav/adapter */ 26);

var _adapter2 = _interopRequireDefault(_adapter);

var _data = __webpack_require__(/*! ../nav/data */ 27);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//index.js
//获取应用实例
var app = getApp();
var Pager = __webpack_require__(/*! components/aotoo/core */ 20);
// import createActionSide from 'components/actionside'

//nav 底部导航


Pager({
  data: {
    moto: Pager.item({
      title: [{
        title: '如有建议，问题，可加此交流群',
        itemClass: 'size16 mb-10-r'
      }, {
        img: 'https://7373-ss-1-4vn7o-1259184764.tcb.qcloud.la/qq.jpg?sign=d732bb8f8afff56c23168fb065e1f686&t=1557884675'
      }, {
        title: '您的赞赏，是对作者最大的支持！！',
        itemClass: 'size16 mb-10-r mt-40-r'
      }, {
        img: 'https://7373-ss-1-4vn7o-1259184764.tcb.qcloud.la/pay.jpeg?sign=d4eba9ce1c8e12ee8709452c1a608e2f&t=1558523193',
        tap: 'onImg?src=https://7373-ss-1-4vn7o-1259184764.tcb.qcloud.la/pay.jpeg?sign=d4eba9ce1c8e12ee8709452c1a608e2f&t=1558523193'
      }],
      itemClass: 'flex-column-start-center padding-default bg-fff ss-my scroll-wrap-nav'
    }),
    nav: Pager.list({
      data: (0, _adapter2.default)(_data2.default, 1),
      listClass: 'list-nav'
    })
  },

  onLongPress: function onLongPress(e, inst) {
    Pager.alert('我是长按响应');
  },
  onImg: function onImg(e) {
    var current = e.currentTarget.dataset._query.src;
    wx.previewImage({
      current: current,
      urls: [current]
    });
  },
  onNav: function onNav(e, query, inst) {
    var theTap = query.nav.replace(/_/g, "/");
    if (theTap) {
      switch (theTap) {
        case theTap:
          wx.redirectTo({
            url: '../' + theTap + '/index'
          });
          break;
      }
    }
  },

  onShow: function onShow() {},

  onReady: function onReady() {},

  onLoad: function onLoad() {},

  getUserInfo: function getUserInfo(e) {}
});

/***/ })

})