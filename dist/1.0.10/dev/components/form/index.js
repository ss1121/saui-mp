; require("../../runtime.js");
/**aotoo commonfile**/
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[23],{

/***/ 76:
/*!*************************************!*\
  !*** ./js/components/form/index.js ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _inputAttributs;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 作者： 天天修改
 * github: webkixi
 * 小程序的模板真是又长又臭
 */
var app = getApp();
var Core = __webpack_require__(/*! ../aotoo/core */ 0);
var lib = Core.lib;

/**
 * data: [
 *  {
 *    title, 
 *    input[
 *      placeholder,
 *      id,
 *      name,
 *      value,
 *      disabled,
 *      type,
 *      attr
 *    ], 
 *    desc, 
 *    itemClass, 
 *    required, 
 *    show, 
 *    union
 *   },
 *   ...
 *   ...
 * ],
 * $$id: 'some id',
 * show: true
 */

var CLASS_NAMES = ['itemClass', 'class'],
    TYPE_TEXT = ['text', 'password', 'select', 'tel', 'date', 'span', 'textarea'],
    TYPE_PLHOLDER = ['text', 'password'],
    TYPE_RADIO = ['radio', 'checkbox'],
    TYPE_BUTTON = ['button', 'submit'];

var containerAttributs = { // attrs
  uid: undefined, // 索引
  title: undefined,
  desc: undefined,
  itemClass: 'input-item',
  itemStyle: undefined,
  required: undefined,
  show: true,
  union: undefined
};

var inputAttributs = (_inputAttributs = {
  uid: undefined, // input的唯一id
  uAddress: undefined, // input在$validInputs中的寻址地址
  title: undefined,
  desc: undefined,
  error: undefined,
  eye: undefined, // 密码键盘的显示密码的眼睛
  readonly: false,
  test: undefined, // 校验
  show: true,
  attr: undefined,

  maxlength: undefined,
  placeholder: undefined,
  id: undefined,
  name: undefined,
  value: undefined,
  type: 'text',
  disabled: false,
  union: undefined
}, _defineProperty(_inputAttributs, 'attr', undefined), _defineProperty(_inputAttributs, 'itemClass', 'input-item-input'), _defineProperty(_inputAttributs, 'class', undefined), _defineProperty(_inputAttributs, 'itemStyle', undefined), _defineProperty(_inputAttributs, 'style', undefined), _defineProperty(_inputAttributs, 'titles', undefined), _defineProperty(_inputAttributs, 'descs', undefined), _defineProperty(_inputAttributs, 'values', undefined), _defineProperty(_inputAttributs, 'checked', undefined), _defineProperty(_inputAttributs, 'plain', undefined), _defineProperty(_inputAttributs, 'size', undefined), _defineProperty(_inputAttributs, 'loading', undefined), _defineProperty(_inputAttributs, 'form-type', undefined), _defineProperty(_inputAttributs, 'open-type', undefined), _defineProperty(_inputAttributs, 'hover-class', undefined), _defineProperty(_inputAttributs, 'hover-stop-propagation', undefined), _defineProperty(_inputAttributs, 'hover-start-time', undefined), _defineProperty(_inputAttributs, 'hover-stay-time', undefined), _defineProperty(_inputAttributs, 'lang', 'en'), _defineProperty(_inputAttributs, 'session-from', undefined), _defineProperty(_inputAttributs, 'send-message-title', undefined), _defineProperty(_inputAttributs, 'send-message-path', undefined), _defineProperty(_inputAttributs, 'send-message-img', undefined), _defineProperty(_inputAttributs, 'app-parameter', undefined), _defineProperty(_inputAttributs, 'show-message-card', undefined), _defineProperty(_inputAttributs, 'bindgetuserinfo', undefined), _defineProperty(_inputAttributs, 'bindcontact', undefined), _defineProperty(_inputAttributs, 'bindgetphonenumber', undefined), _defineProperty(_inputAttributs, 'binderror', undefined), _defineProperty(_inputAttributs, 'bindopensetting', undefined), _defineProperty(_inputAttributs, 'bindlaunchapp', undefined), _defineProperty(_inputAttributs, 'tap', undefined), _defineProperty(_inputAttributs, 'min', undefined), _defineProperty(_inputAttributs, 'max', undefined), _defineProperty(_inputAttributs, 'step', undefined), _defineProperty(_inputAttributs, 'color', undefined), _defineProperty(_inputAttributs, 'selected-color', undefined), _defineProperty(_inputAttributs, 'activeColor', undefined), _defineProperty(_inputAttributs, 'backgroundColor', undefined), _defineProperty(_inputAttributs, 'block-size', undefined), _defineProperty(_inputAttributs, 'block-color', undefined), _defineProperty(_inputAttributs, 'show-value', undefined), _defineProperty(_inputAttributs, 'mode', undefined), _defineProperty(_inputAttributs, 'bindcancel', undefined), _defineProperty(_inputAttributs, 'bindinput', undefined), _defineProperty(_inputAttributs, 'bindfocus', undefined), _defineProperty(_inputAttributs, 'bindblur', undefined), _defineProperty(_inputAttributs, 'bindconfirm', undefined), _defineProperty(_inputAttributs, 'bindchange', undefined), _defineProperty(_inputAttributs, 'bindchanging', undefined), _defineProperty(_inputAttributs, 'bindcolumnchange', undefined), _defineProperty(_inputAttributs, 'cursor-spacing', undefined), _defineProperty(_inputAttributs, 'confirm-type', undefined), _defineProperty(_inputAttributs, 'confirm-hold', undefined), _defineProperty(_inputAttributs, 'confirm-hold', undefined), _defineProperty(_inputAttributs, 'adjust-position', undefined), _inputAttributs);

var inputAttributsAccessKeys = Object.keys(inputAttributs);
var containerAttributsAccessKeys = Object.keys(containerAttributs);

function resetUIitem(params) {
  var cls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'input-item-title';

  if (params) {
    if (lib.isString(params)) {
      params = { title: params };
    }
    if (lib.isObject(params)) {
      params.itemClass = cls + ' ' + (params.itemClass || '');
    }
    if (lib.isArray(params)) {
      params = {
        title: params,
        itemClass: cls
      };
    }
    return params;
  }
}

// 依照依赖规范输出配置
function normAsset(params) {
  var normAst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var nInput = {};
  Object.keys(params).forEach(function (key) {
    return normAst.includes(key) ? nInput[key] = params[key] : '';
  });
  return nInput;
}

function resetPickersValues(params, e) {
  if (lib.isArray(params.values)) {
    var titles = params.titles ? params.titles : [];
    var value = params.value ? params.value : [];
    var values = params.values;
    var len = values.length;

    var _loop = function _loop(ii) {
      var columnVals = values[ii];
      if (!lib.isArray(columnVals)) {
        console.log('picker类型的组件要求input.values为二维数组! 类似[[], []]');
        return 'break';
      }
      var _titles = [];
      var _select = 0;
      columnVals.forEach(function (item, jj) {
        if (item.select) _select = jj;
        if (typeof item == 'string' || typeof item == 'number') {
          item = { title: item.toString() };
        }
        if (item.title) {
          _titles.push(item.title);
        }
      });
      if (e && (value[ii] || value[ii] == 0)) {
        _select = value[ii];
      }
      value[ii] = _select;
      titles[ii] = _titles;
    };

    for (var ii = 0; ii < len; ii++) {
      var _ret = _loop(ii);

      if (_ret === 'break') break;
    }
    params.value = value;
    params.titles = titles;
  }
  return params;
}

// let _watcher = {}

// 规范input的属性
function normInput(params, profile) {
  var that = this;
  if (lib.isObject(params)) {
    params.disabled = params.hasOwnProperty('disabled') ? params.disabled : false;
    params.uid = params.hasOwnProperty('uid') ? params.uid : lib.suid('input_input_');
    params.uAddress = [profile.uid, params.uid].join('.'); // 0 => item的uid, 1=>input的uid

    if (params.union) {
      var union = params.union;
      if (union.target || union.id) {
        var selfId = params.id || params.name;
        var target = union.target || union.id;
        var cb = union.callback;
        if (typeof cb == 'function') {
          var tmp = {
            id: selfId,
            address: '',
            assets: {},
            inputData: {},
            setData: function setData() {
              that.setData.apply(that, arguments);
            },
            save: function save(param) {
              if (param && lib.isObject(param)) {
                this.setData(_defineProperty({}, tmp.address, param));
              } else {
                that.setData(_defineProperty({}, tmp.address, tmp.inputData));
              }
            }
          };
          this.hooks.on('change', function (param) {
            var id = param.id,
                point = param.point; // point为观察的点的inputData

            if (id == target) {
              var res = that.getAddressInfo(params.uAddress);
              tmp.assets = that.getAddressInfo(params.uAddress).inputData;
              tmp.inputData = tmp.assets;
              tmp.address = res.address;
              cb.call(tmp, { value: point.value });
            }
          });
          // _watcher = Object.assign(_watcher, tmp)
        }
      }
    }

    if (params.title) {
      params.title = resetUIitem(params.title);
    }

    if (params.desc) {
      params.desc = resetUIitem(params.desc, 'input-item-desc');
    }

    if (params.error) {
      params.error = resetUIitem(params.error, 'input-item-error');
    }

    if (params.type == 'password') {
      params.eye = params.hasOwnProperty('eye') ? params.eye : true;
    }

    if (params.type == 'picker') {
      params = resetPickersValues(params);
    }

    if (params.type == 'dropdown') {
      if (lib.isObject(params.titles)) {
        params.eye = 'icon-arrows-b';
        params.titles.show = false;
        if (lib.isArray(params.titles.data)) {
          params.titles.type = {
            is: 'scroll',
            'scroll-y': true,
            bindscroll: 'inputItemDropdownScroll?abc=123'
          };
          params.titles.listClass = "input-item-dropdown-options";
          params.titles.itemClass = "input-item-dropdown-options-item";
          params.titles.data = params.titles.data.map(function (item, ii) {
            if (typeof item == 'string') {
              item = { title: item };
            }
            if (item.parent) {
              item.aim = 'inputItemDropdown?address=' + params.uAddress + '&index=' + ii + '&value=' + item.value + '&text=' + item.title;
            } else {
              item.tap = 'inputItemDropdown?address=' + params.uAddress + '&index=' + ii + '&value=' + item.value + '&text=' + item.title;
            }
            return item;
          });
        }
      }
    }
    return normAsset(params, inputAttributsAccessKeys);
  }
}

// 规范input容器的属性
function normInputProfile(params) {
  if (params) {
    if (params.title) {
      params.title = resetUIitem(params.title, 'profile-item-title');
    }

    if (params.desc) {
      params.desc = resetUIitem(params.desc, 'profile-item-desc');
    }

    return normAsset(params, containerAttributsAccessKeys);
  }
}

// 规范input容器的属性
function normContainer(params) {
  return normAsset(params, containerAttributsAccessKeys);
}

function getTypeName(item) {
  if (TYPE_RADIO.indexOf(item.type) > -1) {
    return lib.isString(item.name) ? item.name || item.id : lib.isArray(item.name) ? item.name[0] : '';
  } else {
    if (item.type) {
      return item.id || item.name;
    }
  }
}

/**
 * 
 * @param {*} data 
 * @param {*} index 
 * 数据模型
 * {title: '', input: []/{}, desc: ''}
 */
function getItemAllocation(data, index) {
  var _this = this;

  var itemProfile = {};
  if (lib.isObject(data)) {

    // 容器属性
    Object.keys(data).forEach(function (key) {
      if (key != 'input') {
        // 设置样式
        if (CLASS_NAMES.indexOf(key) > -1) {
          itemProfile['itemClass'] = data[key] ? 'inputItem ' + data[key] : 'inputItem';
        } else {
          itemProfile[key] = data[key];
        }
      }
    });
    itemProfile.uid = itemProfile.hasOwnProperty('uid') ? itemProfile.uid : lib.suid('input_profile_');
    itemProfile = Object.assign({}, containerAttributs, normInputProfile(itemProfile));

    var assets = [];
    var inputs = [].concat(data.input || []);
    inputs.forEach(function (item) {
      if (lib.isObject(item)) {
        assets.push(Object.assign({}, inputAttributs, normInput.call(_this, item, itemProfile)));
      }
    });

    // map id to state.allocation
    var itemAllocation = {};
    assets.forEach(function (item) {
      var _name = getTypeName(item);
      if (_name) itemAllocation[_name] = item;
    });

    return {
      itemAllocation: itemAllocation,
      assets: assets,
      itemProfile: itemProfile
    };
  }
}

// 表单资源集合，所有的表单元素的浅层资源类
function createAllocation(data) {
  var _this2 = this;

  var allocation = {};
  var nData = [];
  data.forEach(function (item, ii) {
    if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) == 'object') {
      var _getItemAllocation$ca = getItemAllocation.call(_this2, item, ii),
          itemAllocation = _getItemAllocation$ca.itemAllocation,
          assets = _getItemAllocation$ca.assets,
          itemProfile = _getItemAllocation$ca.itemProfile;

      allocation = Object.assign(allocation, itemAllocation);
      var nItem = { profile: itemProfile, input: assets };
      nItem.uid = itemProfile.uid || lib.suid('input_item_');
      if (nItem) nData.push(nItem);
    }
  });
  return { allocation: allocation, data: nData };
}

function createProps(params) {
  var props = {};
  if (params) {
    Object.keys(params).forEach(function (key) {
      if (key != 'data') {
        props[key] = params[key];
      }
    });
  }
  props = normContainer(props);
  props.show = props.hasOwnProperty('show') ? props.show : true;
  return props;
}

function initForm(params) {
  var dataSource = params;
  var props = this.props = createProps(dataSource || {});

  var _createAllocation$cal = createAllocation.call(this, dataSource.data || []),
      allocation = _createAllocation$cal.allocation,
      data = _createAllocation$cal.data;

  this.allocation = allocation;
  dataSource.data = this.validInputs = data;
  this.setData({
    $dataSource: dataSource,
    $validInputs: this.validInputs,
    $props: props
  });
}

// 基于item的组件
Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
    addGlobalClass: true
  },
  properties: {
    dataSource: {
      type: Object,
      observer: function observer(params) {
        if (this.mounted) {
          if (params) {
            initForm.call(this, params);
          }
        }
      }
    }
  },
  data: {
    $dataSource: {}
  },
  behaviors: [Core.baseBehavior(app, 'form')],
  lifetimes: {
    created: function created() {
      this.generateUpdate('$dataSource');
      this.$$is = 'form';
    },
    attached: function attached() {
      //节点树完成，可以用setData渲染节点，但无法操作节点
      var properties = this.properties;
      var dataSource = properties.dataSource;
      initForm.call(this, dataSource);
    },
    ready: function ready() {
      var ds = this.data.$dataSource;
      // if (ds.$$id) this.mount((ds.$$id))
      this.mount(ds.$$id);
      this.parentInstance = this._getAppVars();
      if (lib.isEmpty(this.parentInstance)) {
        this.parentInstance = undefined;
      } else {
        this.parentInstance.form = this;
      }
    }
  },
  methods: {
    find: function find(uid) {
      var rightIt = void 0;
      var rightIndex = void 0;
      var $validInputs = this.data.$validInputs;
      if (uid) {
        if (uid.indexOf('.') == -1) {
          $validInputs.forEach(function (item, ii) {
            if (item.uid == uid) {
              rightIndex = ii;
              rightIt = item;
            }
          });
          if (rightIt) {
            return { index: rightIndex, info: rightIt };
          }
        }

        if (uid.indexOf('.') > -1) {
          this.getAddressInfo(uid);
        }
      }
    },
    // address 取值来自input的data-address
    // address 为uid字符串，包含item.uid和input.uid，以 . 为分隔符
    getAddressInfo: function getAddressInfo(address) {
      var findAddress = void 0;
      var findIt = void 0;
      var itemIndex = void 0;
      var inputIndex = void 0;
      var itemData = void 0;
      var inputData = void 0;
      var itemProfile = void 0;
      var $validInputs = this.data.$validInputs;
      if (address && $validInputs.length) {
        var _address$split = address.split('.'),
            _address$split2 = _slicedToArray(_address$split, 2),
            profile_uid = _address$split2[0],
            input_uid = _address$split2[1];

        var res = this.find(profile_uid);
        if (res) {
          itemData = [res.info];
          itemIndex = res.index;
          itemProfile = res.info.profile;
        }
        if (input_uid && itemData.length) {
          inputData = itemData[0].input.filter(function (ipt, jj) {
            if (ipt.uid == input_uid) {
              inputIndex = jj;
              return true;
            }
          });
        }

        if (inputData) {
          findAddress = '$validInputs[' + itemIndex + '].input[' + inputIndex + ']';
          findIt = inputData;
        } else {
          if (itemData) {
            findAddress = '$validInputs[' + itemIndex + ']';
            findIt = itemData;
          }
        }
        if (findAddress) {
          return { address: findAddress, inputData: findIt[0], profile: itemProfile };
        }
      }
    },
    addWarn: function addWarn(id, message) {
      this.value(id, { error: message });
    },
    addDesc: function addDesc(id, message) {
      this.value(id, { desc: message });
    },
    removeWarn: function removeWarn(id) {
      this.value(id, { error: null });
    },
    removeDesc: function removeDesc(id) {
      this.value(id, { desc: null });
    },
    empty: function empty(params) {
      var allocation = this.allocation;
      var willEmpty = {};
      Object.keys(allocation).forEach(function (id) {
        willEmpty[id] = { value: '' };
      });
      this.value(willEmpty);
    },
    profile: function profile(id, val) {
      var allocation = this.allocation;
      if (id) {
        if (lib.isString(id)) {
          var ipData = allocation[id];
          var address = ipData['uAddress'];
          var profileId = address.split('.')[0];
          var res = this.find(profileId);
          if (res && val) {
            if (lib.isObject(val)) {
              res.info.profile = Object.assign(res.info.profile, val);
              this.setData(_defineProperty({}, '$validInputs[' + res.index + ']', res.info));
            }
          }
        }
      }
    },
    value: function value(id, val) {
      var _this3 = this;

      var allocation = this.allocation;
      if (id) {
        if (val) {
          if (lib.isString(id)) {
            if (allocation[id] && val) {
              var ipData = allocation[id];
              var address = ipData['uAddress'];
              var willUpdate = void 0;
              var res = this.getAddressInfo(address);
              if (res) {
                if (lib.isString(val)) {
                  res.inputData.value = val;
                  var resault = res.inputData;
                  res.inputData = resault = normInput.call(this, resault, res.profile);
                  willUpdate = _defineProperty({}, res.address, resault);
                } else {
                  if (lib.isObject(val)) {
                    var _resault = Object.assign({}, res.inputData, val);
                    res.inputData = _resault = normInput.call(this, _resault, res.profile);
                    willUpdate = _defineProperty({}, res.address, _resault);
                  }
                }
                allocation[id] = res.inputData;
                this.setData(willUpdate);
              }
            }
          }
          if (lib.isObject(id)) {
            var _willUpdate3 = {};
            Object.keys(id).forEach(function ($id) {
              var myval = id[$id];
              var ipData = allocation[$id];
              if (ipData) {
                var _address = ipData['uAddress'];
                var _res = _this3.getAddressInfo(_address);
                if (_res) {
                  if (lib.isString(myval)) {
                    _res.inputData.value = myval;
                    _willUpdate3[_res.address] = _res.inputData;
                  } else {
                    if (lib.isObject(myval)) {
                      var _resault2 = Object.assign({}, _res.inputData, myval);
                      _willUpdate3[_res.address] = _resault2;
                    }
                  }
                  allocation[$id] = _res.inputData;
                }
              }
            });
            this.setData(_willUpdate3);
          }
        } else {
          return allocation[id];
        }
      } else {
        return allocation;
      }
    },

    // 下拉菜单的列表项为scroll-view
    // 滚动式触发以下方法
    inputItemDropdownScroll: function inputItemDropdownScroll(e, param) {
      // console.log(e);
      // console.log(param);
    },
    // dropdown
    // e evtent
    // param 经过 core itemMethod解析过后的数据，包含?abc=xxx等query信息
    inputItemDropdown: function inputItemDropdown(e) {
      var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var mytype = e.type;
      var dataset = e.currentTarget.dataset;
      var detail = e.detail;
      var address = param.address,
          index = param.index,
          value = param.value,
          text = param.text;

      var res = this.getAddressInfo(address || dataset.address);
      if (res) {
        if (dataset.eye) {
          var state = !res.inputData.titles.show;
          res.inputData.titles.show = state;
          res.inputData.eye = state ? 'icon-arrows-t' : 'icon-arrows-b';
        } else {
          if (text) {
            res.inputData.titles.show = false;
          }
          setAllocation.call(this, res, { value: value || '' });
          res.inputData.value = text || '';
          res.param = param;
        }
        runFormBindFun.call(this, 'bindchange', res, e);
        runFormBindFun.call(this, 'bindinput', res, e);
        runFormBindFun.call(this, 'bindblur', res, e);
      }
    },

    inputItemMethod: function inputItemMethod(e) {
      var mytype = e.type;
      var dataset = e.currentTarget.dataset;
      var detail = e.detail;

      var address = dataset.address;
      var res = this.getAddressInfo(address);
      var activePage = this.activePage;

      var _rightEvent = this._rightEvent(e),
          fun = _rightEvent.fun,
          param = _rightEvent.param;

      if (res) {
        var id = res.inputData.id || res.inputData.name;
      }
      switch (mytype) {
        case 'confirm':
          runFormBindFun.call(this, 'bindconfirm', res, e);
          break;

        case 'focus':
          if (res.inputData.type == 'dropdown') {
            res.inputData.titles.show = true;
            res.inputData.eye = 'icon-arrows-t';
          }
          runFormBindFun.call(this, 'bindfocus', res, e);
          break;

        case 'blur':
          if (res.inputData.type == 'dropdown') {
            // res.inputData.titles.show = false
            // res.inputData.eye = 'icon-arrows-b'
          }
          setAllocation.call(this, res, { value: detail.value });
          runFormBindFun.call(this, 'bindblur', res, e);
          break;

        case 'input':
          setAllocation.call(this, res, { value: detail.value });
          if (!res.inputData.readonly) {
            res.inputData.value = detail.value;
          }
          runFormBindFun.call(this, 'bindinput', res, e);
          break;

        case 'tap':
          var targetFun = this.parentInstance && this.parentInstance[fun] || activePage[fun];
          if (lib.isFunction(targetFun)) {
            var tapctx = this.parentInstance || activePage;
            targetFun.call(tapctx, e, param, this);
          }
          break;

        default:
          break;
      }
    },

    openCloseEey: function openCloseEey(e) {
      var dataset = e.currentTarget.dataset;
      var address = dataset.address;
      var res = this.getAddressInfo(address);
      // console.log(res.address, res.inputData);
      if (res) {
        res.inputData.type = res.inputData.type == 'password' ? 'text' : 'password';
        res.inputData.eye && (res.inputData.eye = typeof res.inputData.eye == 'boolean' ? 'icon-close-eye mr-10-r size16 color-227ce1' : true);
        this.setData(_defineProperty({}, res.address, res.inputData));
      }
    },

    rcChange: function rcChange(e) {
      var dataset = e.currentTarget.dataset;
      var detail = e.detail;
      var res = this.getAddressInfo(dataset.address);
      if (res) {
        var type = res.inputData.type;
        res.inputData.value = detail.value;
        setAllocation.call(this, res, { value: detail.value });
        // this.setData({[res.address]: res.inputData})
        runFormBindFun.call(this, 'bindchange', res, e);
        runFormBindFun.call(this, 'bindchanging', res, e);
      }
    },

    pickersChange: function pickersChange(e) {
      // console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
      var dataset = e.currentTarget.dataset;
      var detail = e.detail;
      var res = this.getAddressInfo(dataset.address);
      if (res && e.type != 'cancel') {
        var type = res.inputData.type;
        var column = detail.column;
        var value = detail.value;
        if (column || column === 0) {
          res.inputData.value[column] = value;
        } else {
          res.inputData.value = value;
        }
        setAllocation.call(this, res, { value: res.inputData.value });
        if (column || column === 0) {
          runFormBindFun.call(this, 'bindcolumnchange', res, e, 'pickers');
        } else {
          runFormBindFun.call(this, 'bindchange', res, e, 'pickers');
        }
      } else {
        runFormBindFun.call(this, 'bindcancel', res, e, 'cancel');
      }
    }
  }
});

function setAllocation(res, val) {
  var id = res.inputData.id || res.inputData.name;
  var itemInput = this.allocation[id];
  if (itemInput) {
    if (lib.isObject(val)) {
      this.allocation[id] = Object.assign({}, itemInput, val);
      if (val.value) {
        if (itemInput.value != val.value) {
          itemInput = this.allocation[id];
          this.hooks.emit('change', { id: id, point: itemInput });
        }
      }
    }
  }
}

function runFormBindFun(fn, res, e, from) {
  var activePage = this.activePage;
  if (lib.isString(res.inputData[fn])) {
    var funName = res.inputData[fn];
    var fun = activePage[funName];
    if (lib.isFunction(fun)) {
      var resData = '';
      var result = fun(e, res, this);
      if (result) {
        resData = result.inputData ? result.inputData : result;
        if (from == 'pickers') {
          resData = resetPickersValues(resData, e);
        }
        from == 'cancel' ? '' : this.setData(_defineProperty({}, res.address, resData));
      } else {
        /** 什么都不做 ? */
      }
    } else {
      from == 'cancel' ? '' : this.setData(_defineProperty({}, res.address, res.inputData));
    }
  } else {
    var selfUpdate = ['picker', 'pickers', 'dropdown', 'checkbox', 'radio'];
    if (selfUpdate.indexOf(res.inputData['type']) > -1) {
      from == 'cancel' ? '' : this.setData(_defineProperty({}, res.address, res.inputData));
    }
  }
}

/***/ })

},[[76,0,1]]]);