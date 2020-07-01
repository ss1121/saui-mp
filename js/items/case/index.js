//index.js
//获取应用实例
const app = getApp()
const Pager = require('components/aotoo/core')

import {data} from './data'
import {caseListFunc, caseItemFunc} from './adapter'

Pager({
  data: {
    nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '我的案例', //导航栏 中间的标题
    },
    height: app.globalData.navheight * 2 + 20 ,
    caseList: Pager.list({
      data: caseListFunc(data),
      // data: [],
      listClass: 'case-list',
    }),
    caseClose: Pager.item({
      title: {
        title: ' ',
        itemClass: 'icon-close',
      },
      itemStyle:  'top: ' + (app.globalData.navheight * 2 - 10) + 'rpx',
      itemClass: 'case-close',
      aim: 'onClose'
    }),
    curId: '',
    scrollTopx: 0
  },
  storeCurY: 0,
  isScroll: true,
  getIcloudData: [], 
  onScroll: function(e) {
    if (this.isScroll) {
      this.storeCurY = e.detail.scrollTop
    }
  },
  
  openOther: function(e, param, inst) {
    const $caseClose = this.getElementsById('caseClose')
    const theTap = param['type']
    this.data.curId = theTap
    // const id = param['id']
    // const db = wx.cloud.database()
    // db.collection('appstore').where({
    //   type: theTap
    // }).get({
    //   success: res => {
    //     const $caseItem = this.getElementsById(theTap) //获取实例，可以通过进入数据更新等
    //     $caseItem.update(caseListFunc(res.data, true)[0])
    //     setTimeout(() => {
    //       this.data.curId = theTap
    //       // inst.parent('.case-list').addClass('active')
    //       this.setData({
    //         height: 0
    //       })
    //       inst.addClass('active')
    //       $caseClose.addClass('active')
    //     }, 200);
    //   }
    // })
    switch (theTap) {
      case 'saui':
        wx.navigateToMiniProgram({
          appId: 'wx715dc8d465af1816',//小程序appid
          path: 'pages/index/index',//跳转关联小程序app.json配置里面的地址
          //**重点**要打开的小程序版本，有效值 develop（开发版），trial（体验版），release（正式版） 
          envVersion: 'release',
          success(res) {
            console.log(res)
            // 打开成功
          }
        })
      break;
      case theTap:
        const $caseItem = this.getElementsById(theTap) //获取实例，可以通过进入数据更新等
        data.map(item => {
          if (item.type == theTap) {
            $caseItem.update(caseItemFunc(item))
          }
        })
        inst.parent('.case-list').addClass('active')
        this.setData({
          height: 0
        })
        inst.addClass('active')
        $caseClose.addClass('active')
    }
    this.isScroll = false

  },

  onClose: function(e, param, inst) {
    const $caseBg = this.getElementsById('caseBg')
    const id = this.data.curId
    const $curInst = this.getElementsById(id)
    $curInst.parent('.case-list').removeClass('active')
    $curInst.reset()
    inst.reset()
    this.setData({
      height: app.globalData.navheight * 2 + 20,
      scrollTopx: this.storeCurY
    })
    this.isScroll = true
  },

  onShow: function () {},

  onReady: function () {
    // const $caseList = this.getElementsById('caseList') //获取实例，可以通过进入数据更新等
    // $caseList.update(caseListFunc(this.getIcloudData.length > 0 ? this.getIcloudData : data))
  },
  
  onLoad: function () {
    // const db = wx.cloud.database()
    // db.collection('appstore').get({
    //   success: res => {
    //     this.getIcloudData = res.data
    //   },
    //   fail: res => {
    //     console.log('======fail')
    //   }
    // })
  },

  onSavePic: function(e, param) {
    // const $modal = this.getElementsById('modal')
    var url = param.src;
    wx.saveImageToPhotosAlbum({
      filePath:url,
      success(res) { 
        // $modal.onHide()
        wx.showToast({
            title: '图片保存成功',
            icon: 'none',
            duration: 2000
        })
      },
      fail(res){
        console.log('fail', res);
      }
    })
  },
})