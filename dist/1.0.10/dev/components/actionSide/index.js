; require("../../runtime.js");
/**aotoo commonfile**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[3],{

/***/ 55:
/*!*******************************************!*\
  !*** ./js/components/actionSide/index.js ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * 作者： 天天修改
 * github: webkixi
 * 小程序的模板真是又长又臭
 */
var app = getApp();
var Core = __webpack_require__(/*! ../aotoo/core */ 0);
var lib = Core.lib;

function cls(param) {
  return param && (param.class || param.itemClass) || '';
}

function sty(param) {
  return param && (param.style || param.itemStyle) || '';
}

function content(param, myclass) {
  var beforAim = false;
  if (lib.isObject(param)) {
    delete param.class;
    delete param.itemClass;
    delete param.style;
    delete param.itemStyle;
    if (!myclass) {
      beforAim = true;
      if (param.dot) {
        // param.dot = [].concat(param.dot).concat({title: 'co', class: 'closeIt'})
        param.dot = [].concat(param.dot).concat({ icon: { class: 'icon-guanbida closeIt', aim: 'closeIt' } });
      } else {
        // param.dot = [{title: 'co', class: 'closeIt'}]
        param.dot = [{ icon: { class: 'icon-guanbida closeIt', aim: 'closeIt' } }];
      }
    }
  } else {
    if (!myclass) {
      beforAim = true;
      // param = { dot: [{title: 'co', class: 'closeIt'}] }
      param = { dot: [{ icon: { class: 'icon-guanbida closeIt', aim: 'closeIt' } }] };
    }
  }

  return param;
}

function paramCb(param, cb) {
  if (lib.isFunction(param)) {
    cb = param;
    param = null;
  }
  return { param: param, cb: cb };
}

// 基于item的组件
Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
    addGlobalClass: true
  },
  behaviors: [Core.itemComponentBehavior(app, 'actionSide')],
  lifetimes: {
    attached: function attached() {
      //节点树完成，可以用setData渲染节点，但无法操作节点
      var properties = this.properties;
      var item = properties.item;
      item.itemClass = 'actionSide';
      item.__actionMask = 'actionMask';
      this.setData({ $item: item });
    },
    ready: function ready() {
      var that = this;
      this.hooks.on('beforeAim', function (param) {
        var event = param.event;

        var dataset = event.currentTarget.dataset;
        var aim = dataset.aim;
        if (aim && aim == 'closeIt') {
          that.hide();
          return 0;
        }
      });
    }
  },
  methods: {
    // closeIt: function(event, param, ctx) {
    //   const dataset = event.currentTarget.dataset
    //   const aim = dataset.aim
    //   if (aim && aim == 'closeIt') {
    //     this.hide()
    //     return 0
    //   }
    // },
    show: function show(p, c) {
      var _paramCb = paramCb(p, c),
          param = _paramCb.param,
          cb = _paramCb.cb;

      var myContent = content.call(this, param) || {};
      this.update(_extends({
        'itemClass': 'actionSide moveit'
      }, myContent), cb);
    },
    hide: function hide(param) {
      var itemClass = this.data.$item.itemClass;
      var fromLeft = itemClass.indexOf('actionSide-left') > -1;
      var fromBot = itemClass.indexOf('actionSide-bot') > -1;
      var fromTop = itemClass.indexOf('actionSide-top') > -1;
      var itCls = fromLeft ? 'actionSide-left' : fromBot ? 'actionSide-bot' : fromTop ? 'actionSide-top' : 'actionSide';
      this.update({
        itemClass: itCls,
        __actionMask: 'actionMask'
      });
    },
    right: function right(p, c) {
      var _paramCb2 = paramCb(p, c),
          param = _paramCb2.param,
          cb = _paramCb2.cb;

      var myclass = lib.isString(param) ? param : cls(param);
      var myStyle = sty(param);
      var myContent = content.call(this, param, myclass) || {};
      this.update(_extends({
        itemClass: 'actionSide ' + myclass + ' moveit',
        itemStyle: myStyle,
        __actionMask: myclass ? 'actionMask show' : 'actionMask'
      }, myContent), cb);
    },
    left: function left(p, c) {
      var _paramCb3 = paramCb(p, c),
          param = _paramCb3.param,
          cb = _paramCb3.cb;

      var myclass = lib.isString(param) ? param : cls(param);
      var myStyle = sty(param);
      var myContent = content.call(this, param, myclass) || {};
      console.log(myclass);
      this.update(_extends({
        itemClass: 'actionSide-left ' + myclass + ' moveit',
        itemStyle: myStyle,
        __actionMask: myclass ? 'actionMask show' : 'actionMask'
      }, myContent), cb);
    },
    bot: function bot(p, c) {
      var _paramCb4 = paramCb(p, c),
          param = _paramCb4.param,
          cb = _paramCb4.cb;

      var myclass = lib.isString(param) ? param : cls(param);
      var myStyle = sty(param);
      var myContent = content.call(this, param, myclass) || {};
      this.update(_extends({
        itemClass: 'actionSide-bot ' + myclass + ' moveit',
        itemStyle: myStyle,
        __actionMask: myclass ? 'actionMask show' : 'actionMask'
      }, myContent), cb);
    },
    top: function top(p, c) {
      var _paramCb5 = paramCb(p, c),
          param = _paramCb5.param,
          cb = _paramCb5.cb;

      var myclass = lib.isString(param) ? param : cls(param);
      var myStyle = sty(param);
      var myContent = content.call(this, param, myclass) || {};
      this.update(_extends({
        itemClass: 'actionSide-top ' + myclass + ' moveit',
        itemStyle: myStyle,
        __actionMask: myclass ? 'actionMask show' : 'actionMask'
      }, myContent), cb);
    }
  }
});

/***/ })

},[[55,0,1]]]);