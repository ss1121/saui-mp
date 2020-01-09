//index.js
//获取应用实例
const app = getApp()
const Pager = require('components/aotoo/core')

import {data} from './data'
import {caseListFunc, detailFunc} from './adapter'

Pager({
  data: {
    nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '我的案例', //导航栏 中间的标题
    },
    height: app.globalData.navheight * 2 + 20 ,
    caseList: Pager.list({
      data: caseListFunc(data),
      type: {
        is: 'scroll',
        'scroll-y': true,
      },
      listClass: 'case-list',
    }),
    caseClose: Pager.item({
      title: {
        title: ' ',
        itemClass: 'icon-close',
      },
      itemClass: 'case-close',
      aim: 'onClose'
    }),
    curId: '',
  },
  
  openOther: function(e, param, inst) {
    const $caseClose = this.getElementsById('caseClose')
    // const $caseBg = this.getElementsById('caseBg')
    const theTap = param['type']
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
        this.data.curId = theTap
        inst.parent('case-list').addClass('active')
        this.setData({
          height: 0
        })
        inst.addClass('active')
        $caseClose.addClass('active')
    }
  },

  onClose: function(e, param, inst) {
    const $caseBg = this.getElementsById('caseBg')
    const id = this.data.curId
    const $curInst = this.getElementsById(id)
    $curInst.parent('case-list').removeClass('active')
    $curInst.removeClass('active')
    inst.removeClass('active')
    this.setData({
      height: app.globalData.navheight * 2 + 20
    })
  },

  onShow: function () {},

  onReady: function () {
  },
  
  onLoad: function () {
    this.adModal()
  },

  adModal: function() {
    // 在页面中定义激励视频广告
    let videoAd = null

    // 在页面onLoad回调事件中创建激励视频广告实例
    if (wx.createRewardedVideoAd) {
      videoAd = wx.createRewardedVideoAd({
        adUnitId: 'adunit-0c409d585b8ce18c'
      })
      videoAd.onLoad(() => {})
      videoAd.onError((err) => {})
      videoAd.onClose((res) => {})
    }

    // 用户触发广告后，显示激励视频广告
    if (videoAd) {
      videoAd.show().catch(() => {
        // 失败重试
        videoAd.load()
          .then(() => videoAd.show())
          .catch(err => {
            console.log('激励视频 广告显示失败')
          })
      })
    }
  },

  onShareAppMessage: function (res) {
    /**
    * 用户点击右上角分享
    */
    console.log(res)
    let title=this.data.show.name;
    let path=app.getNowPage();
    return {
      title: title,  // 转发标题（默认：当前小程序名称）
      path: path, // 转发路径（当前页面 path ），必须是以 / 开头的完整路径
      success(e) {
        // shareAppMessage: ok,
        // shareTickets 数组，每一项是一个 shareTicket ，对应一个转发对象
        // 需要在页面onLoad()事件中实现接口
        console.log('分享成功');
        wx.showShareMenu({
            // 要求小程序返回分享目标信息
            withShareTicket: true
        });
        var shareTickets = e.shareTickets;
        if (shareTickets.length == 0) {
          return false;
        }
        wx.getShareInfo({
          shareTicket: shareTickets[0],
          success: function(res){
            console.log('立即分享获得信息',res);
            var encryptedData = res.encryptedData;
            var iv = res.iv;
          }
        })
      },
      fail(e) {
        console.log('分享失败');
      }
    }
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
