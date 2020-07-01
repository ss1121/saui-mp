//index.js
//获取应用实例
const app = getApp()
const Pager = require('components/aotoo/core')
let lib = Pager.lib
const hooks = lib.hooks
const hInst = hooks('hooks-name') // 附带存储storage


let mkTabScreen = require('components/modules/tabspop')

//模拟数据
import data from './data'

//适配方法
import {listxFunc, tabsFunc, tabsScreen, travelingScreen} from './tabs-adapter'

Pager({
  data: {
    pScreenList: Pager.list({
      data: [
        {
          $$id: 's1',
          title: {
            title: '欢迎度排序',
            itemClass: 'item-title item-icon-arrow',
          },
          aim: 'onItem?id=s1'
        },
        {
          $$id: 's2',
          title: {
            title: '位置距离',
            itemClass: 'item-title item-icon-arrow',
          },
          aim: 'onItem?id=s2'
        },
        {
          $$id: 's3',
          title: {
            title: '价格/星级',
            itemClass: 'item-title item-icon-arrow',
          },
          aim: 'onItem?id=s3'
        },
        {
          $$id: 's4',
          title: {
            title: '筛选',
            itemClass: 'item-title item-icon-arrow',
          },
          aim: 'onItem?id=s4'
        },
      ],
      header: {
        $$id: 'screen-mask',
        itemClass: 'ss-scrore-list-pop',
        itemStyle: 'top: 180rpx;  height: calc(100vh - 180rpx)',
        aim: 'onClosePop'
      },
      footer: {
        $$id: 'screen-pop',
        itemClass: 'ss-scrore-pop'
      },
      itemClass: 'ss-scrore-item',
      listClass: 'ss-scrore-list color-333',
    }),
    tipsX: {
      $$id: 'tipsX'
    },
  },
  videoAd: null,      // 在页面中定义激励视频广告
  videoAdShow: true,      // 在页面中定义激励视频广告
  onShowModal: function() {
    const that = this
    const $actionSide = this.getElementsById('tipsX')
    $actionSide.reset().mid({
     title: [
      {
        '@item': {
          title: [
            {
              title: '解决办法',
              itemClass: 'm-title-fs'
            }
          ],
          body: [
            {
              title: '纯粹的css=>《flex》。左边的高度可以根据右边的内容的高度页伸缩',
              itemClass: 'color-active mb-20-r size16',
              tap: 'onOpenOther'
            }
          ],
          titleClass: 'color-fff item-header',
          bodyClass: 'item-body wid-p86 flex-column ss-left display-bg-minor',
          itemClass: 'item-wrapper item-wrapper-1 hei-p100 wid-p100'
        },
        itemClass: 'index-swiper-modal'
      }
        
     ]
    }, '200000')
  },
  onShowDifPic: function() {
    if (this.videoAdShow) {
      this.videoAdModal()
      this.videoAd.onClose(res => {
        if(!this.videoAd) return
        this.videoAd.offClose()
        // 用户点击了【关闭广告】按钮
        if (res && res.isEnded) {
          // 正常播放结束，可以下发游戏奖励
          this.onShowModal('difpic')
          this.videoAdShow = false
        } else {
          // 播放中途退出，不下发游戏奖励
          wx.showToast({
            title: '查看失败，请看完广告',
            icon: 'none',
            duration: 2000
          })
        }
      })
    }
    else {
      this.onShowModal('difpic')
    }
  },
  videoAdModal: function() {
    // 在页面onLoad回调事件中创建激励视频广告实例
    if (wx.createRewardedVideoAd) {
      this.videoAd = wx.createRewardedVideoAd({
        adUnitId: 'adunit-0c409d585b8ce18c'
      })
      this.videoAd.onLoad(() => {})
      this.videoAd.onError((err) => {})
      // this.videoAd.onClose((res) => {})
    }

    // 用户触发广告后，显示激励视频广告
    if (this.videoAd) {
      this.videoAd.show().catch(() => {
        // 失败重试
        this.videoAd.load()
          .then(() => this.videoAd.show())
          .catch(err => {
            console.log('激励视频 广告显示失败')
          })
      })
    }
  },
  curInstId: null,        //当前展开的pop是属于哪个title的
  isChecked: false,       //是否选中值了
  setStorage: {},         //目前有四个tabs标签（id分别为s1, s2, s3, s4），所以简单设置成  setStorage: {s1: [], s2: [], s3: [], s4: []}
  setTitles: null,
  curStatus: [false, false , false , false],
  isSetTabs: false,
  onItem: function(e, param, inst) {
    const $scoreMask = this.getElementsById('screen-mask')
    const $curPop = this.getElementsById('screen-pop')
    const $id = param.id
    const idx = $id.substring(1) - 1
    this.curInstId = $id
    inst.siblings().data.map(item => {
      if (this.setStorage[item.data.$item.$$id] == undefined) {
        item.removeClass('active')
      }
    })
    if (!this.curStatus[idx]) {
      inst.addClass('active')
      $scoreMask.addClass('active')
      this.getItem($curPop, $id)
      this.curStatus[idx] = true
    }
    else {
      if (this.setStorage[$id]) {
        inst.addClass('active')
      }
      else {
        inst.removeClass('active')
      }
      $curPop.reset()
      $scoreMask.removeClass('active')
      this.curStatus[idx] = false
    }
  },
  getItem: function($curPopInst, $id) {
    switch ($id) {
      case 's1':
        this.getListItem($curPopInst, $id, data.listx)
        break;
      case 's2':
        this.getTabsItem('tabscreen1', $curPopInst, $id, data.location, 'noCut')
        break;
      case 's3':
        this.getTab3Item($curPopInst, $id)
        break;
      case 's4':
        this.getTabsItem('tabscreen2', $curPopInst, $id, data.location2)
        break;
      default:
        break;
    }
  },
  getListItem:  function (popInst, id, data) {
    const getData = this.setStorage[id]
    popInst.update({
      '@list': {
        data: listxFunc(data, getData, 'radio'),
        itemClass: 'item-check',
        listClass: 'screen-list bg-fff ss-left bb-e3e3e3-list-easy'
      },
      itemClass: 'ss-scrore-pop ani-slideDown active'
    })
  },
  getTab3Item:  function (popInst, id, data) {
    const getData = this.setStorage[id]
    popInst.update({
      '@list': {
        listClass: 'page-price',
        data: [
          {
            title: {title: '价格', itemClass: 'fw-bold size16'},
            itemClass: 'price-wrap'
          },
          {
            title: [
              {title: [{title: '星级', itemClass: 'fw-bold size16'}, {title: '(可多选)'}], titleClass: 'flex-row-start-center'},
              {title: {title: '国内星级、钻级说明', itemClass: 'color-primary'}, itemClass: 'icon-arrows-r flex-row-start-center'}
            ],
            body: [
              {title: {title: '二星(钻)及以下', itemClass: 'size14-lh color-active mb-5-r'}, dot: [{title: '经济'}], itemClass: 'item-grid padding-r-10 ss-center size12-lh color-grey'},
              {title: {title: '三星(钻)', itemClass: 'size14-lh color-active mb-5-r'}, dot: [{title: '舒适'}], itemClass: 'item-grid padding-r-10 ss-center size12-lh color-grey'},
              {title: {title: '四星(钻)', itemClass: 'size14-lh color-active mb-5-r'}, dot: [{title: '高档'}], itemClass: 'item-grid padding-r-10 ss-center size12-lh color-grey'},
              {title: {title: '五星(钻)', itemClass: 'size14-lh color-active mb-5-r'}, dot: [{title: '豪华'}], itemClass: 'item-grid padding-r-10 ss-center size12-lh color-grey'},
              {title: {title: '顶级星(钻)', itemClass: 'size14-lh color-active mb-5-r'}, dot: [{title: '豪华'}], itemClass: 'item-grid padding-r-10 ss-center size12-lh color-grey'},
            ],
            bodyClass: 'ss-grid-4',
            titleClass: 'flex-row-between-center mb-30-r'
          }
        ],
        footer: {
          dot: [
            {
              title: '重置',
              itemClass: 'btn-fff-grey btn-br-small',
              aim: 'onClearPop'
            },
            {
              title: '确定',
              itemClass: 'btn-primary btn-br-small',
              aim: 'onSavePop'
            }
          ],
          itemClass: 'tabs-column-btn box-shadow-top'
        },
      },
      itemClass: 'ss-scrore-pop ani-slideDown active'
    })
  },
  getTabsItem: function(InstName, popInst, id, data, type) {
    const $isInst = this.getElementsById(InstName)      //判断弹出层里的实例是否存在，存在的话 就直接更新实例的数据
    const getData = this.setStorage[id]
    // if (!$isInst) {
      popInst.update({
        '@list': mkTabScreen(InstName, {
          type: type,
          isVal: getData ? true : false,
          header: tabsScreen(data, getData),
          data: travelingScreen(data, getData),
          footer: {
            dot: [
              {
                title: '重置',
                itemClass: 'btn-fff-grey btn-br-small',
                aim: 'onClearPop?id='+ id
              },
              {
                title: '确定',
                itemClass: 'btn-primary btn-br-small',
                aim: 'onSavePop?id='+ id
              }
            ],
            itemClass: 'tabs-column-btn box-shadow-top'
          },
        }),
        itemClass: 'ss-scrore-pop tabs-column-uilist-btn ani-slideDown active'
      })
    // }
    // else {
    //   console.log($isInst.children, 'isInstisInstisInstisInst')
    //   popInst.addClass(' ani-slideDown active')
    //   $isInst.updateTabs({header: tabsScreen(data, getData), data: travelingScreen(data, getData)})
    // }
  },
  onItemCheck: function(e, param, inst){
    //点击选项
    const $title = param.title
    if (param.checktype == "radio") {
      this.setTitles = $title
      inst.siblings().removeClass('active')
      inst.addClass('active')
      this.setStorage[`${this.curInstId}`] = {}
      this.setStorage[`${this.curInstId}`][`${param.parentId}`] = []
      this.setStorage[`${this.curInstId}`][`${param.parentId}`].push(param.id)
      if (this.curInstId == 's1') {
        this.onClosePop('', '', inst, $title)
      }
      else if (this.curInstId == 's2') {
        inst.parent('.swiper-content').activePage.getElementsById('tab-headerx').forEach(item => {
          item.removeClass('active hasVal')
          if (item.getData().id == 'sc-'+param.parentId) {
            item.addClass('active hasVal')
          }
        })
      }
    }
  },
  onClearPop: function(e, param, inst){
    //清空按钮
    this.isSetTabs = true
    inst.parent('.swiper-content').updateTabs({header: tabsScreen(data.location), data: travelingScreen(data.location)})
  },
  onSavePop: function(e, param, inst){
    //确定按钮 
    const $id = param.id
    this.onClosePop('', '', inst, this.isSetTabs || this.setTitles)
  },
  onClosePop: function(e, param, inst, val){
    //关闭弹出层
    const $scoreMask = this.getElementsById('screen-mask')
    const $curPop = this.getElementsById('screen-pop')
    const x = this.getElementsById(this.curInstId)
    if (typeof val == 'boolean') {
      this.setStorage[this.curInstId] = {}
      x.reset()
    }
    else {
      val ? x.update({'title.title': val, itemClass: 'item ss-scrore-item active'}) : !this.setStorage[this.curInstId] ? x.removeClass('active') : ''
    }
    $curPop.reset()   //关闭弹出层
    $scoreMask.removeClass('active')
    let idx = this.curInstId.substring(1) - 1
    this.curStatus = [false, false , false , false]
  },
  updateSetData: function(inst, id) {
    if (this.setStorage[this.curInstId] && this.setStorage[this.curInstId][id]) {
      const data = inst.data['@list'].data.map(item => {
        item.itemClass = ''
        this.setStorage[this.curInstId][id].indexOf(item.attr.id) > -1 ? item.itemClass += 'active' : ''
        return item
      })
      inst.parent().find({id: id}).update(data)
    }
  },
  onReady: function() {
    let that = this
    hInst.once('updateSiblingsData', function (params) {
      const inst = params.inst
      const id = params.id.substr(3)
      that.updateSetData(inst, id)
    })
  },
  onLoad: function() {
 
  }
})