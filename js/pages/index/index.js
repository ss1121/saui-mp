//index.js
//获取应用实例
const app = getApp()
const Pager = require('components/aotoo/core')

import getData from './data'
import {adapterList} from './modal'

const bg = 'https://7373-ss-1-4vn7o-1259184764.tcb.qcloud.la/20140404161957_hRCjn.jpeg'

const indexSwiperData = (type) => {
  return [
    {
      title: {
        title: '今日推荐',
        itemClass: 'item-title',
        // itemStyle: `--bgpic: ${bg};`
        itemStyle: `background-image: url(${bg});`
      },
      body: [{
        title: '仿携程酒店列表'
      }],
      bodyClass: 'item-content',
      itemClass: 'recommend-item',
      aim: 'onOtherPage?to=items&name=traveling'
    },
    {
      '@list': {
        data: adapterList(getData.data, type),
        listClass: type ? 'index-list ss-grid-4' : '',
        itemClass: type ? 'item-grid' : 'index-item'
      }
    },
    {
      '@list': {
        data: adapterList(getData.data2, type),
        listClass: type ? 'index-list ss-grid-4' : '',
        itemClass: type ? 'item-grid' : 'index-item'
      }
    }
  ]
}
const getNowDate = () => {
  var day = new Date();
  day.setTime(day.getTime());
  return day.getFullYear()+"年" + (day.getMonth()+1) + "月" + day.getDate() +"日 "+ day.getHours() +":"+ day.getMinutes();
}


Pager({
  data: {
    nvabarData: {
      fontSize: '14',
      showCapsule: 0, //是否显示左上角图标   1表示显示    0表示不显示
      showImg: '/images/logo-2.png',
    },
    height: app.globalData.navheight * 2 + 20 ,
    nowDate: getNowDate(),
    indexSwiper: Pager.list({
      // type: {
      //   is: 'scroll',
      //   'scroll-y': true
      // },
      data: indexSwiperData(),
      listClass: 'pages-list',
      itemClass: 'z-1'
    }),
    indexBottom: Pager.list({
      data: [
        {title: '赞赏', itemStyle: '--color: #E22553; --icon: "\\e60d"', tap: 'onOtherPage?to=admire'},
        {title: '留言', itemStyle: '--color: #F36622; --icon: "\\e60a"', tap: 'onOtherPage?to=messages'},
        {title: '风格', itemStyle: '--color: #AC20D4; --icon: "\\e83e"', tap: 'onChangeStyle?cur=0'},
        {'@form': {data:[{input: {id: 'xxx', type: 'button', value: '联系', 'open-type': 'contact', itemClass: 'btn-text'}}], listClass: 'form-inst'}, itemStyle: '--color: #02A99C; --icon: "\\e621"'}
      ],
      listClass: 'fixed-bar',
      itemClass: 'ss-item'
    })
  },

  onChangeStyle: function(e, params, inst) {
    const $indexSwiper = this.getElementsById('indexSwiper')
    if(params.cur == 0){
      $indexSwiper.update({'$list.type': {is: 'swiper', circular: false, duration: 300, 'indicator-dots': true, current: 0}, '$list.listClass': 'swiper', '$list.data': indexSwiperData('block')})
      inst.update({'tap': 'onChangeStyle?cur=1', itemStyle: '--color: #2567FF; --icon: "\\e83e"'})
    }
    else{
      $indexSwiper.reset()
      inst.update({'tap': 'onChangeStyle?cur=0'})
    }
  },

  onOtherPage: function(e, params, inst) {
    // const theTap = query.demo.replace(/_/g,"/")
    const theTap = params.to
    const name = params.name
    switch (theTap) {
      case theTap:
        wx.navigateTo({
          url: name ? '../../'+theTap+'/'+name+'/index' : '../'+theTap+'/index'
        })
      break;
    }
  },

  onShow: function () {},

  onReady: function () {
    
    // this.modalFunc('tipsX', 'update', adapterModal.adapterItemUpdate(getData.actionSideData))
  },

  onClickTips: function() {
    this.modalFunc('tipsX', 'update')
  },

  modalFunc(id, type, data) {
    const that = this
    const $actionSide = this.getElementsById(id)
    that.setData({isScrollx: false})
    $actionSide.hooks.once('hide', function(){
      that.setData({isScrollx: true})
    })
    $actionSide.reset().mid({
     title: [
      {
          "@list": data,
          listClass: 'index-swiper-modal'
        },
        {
          title: ' ',
          itemClass: 'custom-closeIt'
        }
     ]
    }, '200000')
  },

  onClickCase: function() {
    wx.navigateTo({
      url: '../case/index'
    })
  },
  onClickMessage: function() {
    wx.navigateTo({
      url: '../messages/index'
    })
  },

  onClickCommunication: function() {
    // if (this.videoAdLongStatus) {
    //   this.adLongView()
    //   this.videoAdLong.onClose(res => {
    //     if(!this.videoAdLong) return
    //     this.videoAdLong.offClose()
    //     // 用户点击了【关闭广告】按钮
    //     if (res && res.isEnded) {
    //       // 正常播放结束，可以下发游戏奖励
    //       this.modalFunc('tipsX', '', adapterModal.adapterItemSwiper())
    //       this.videoAdLongStatus = false
    //     } else {
    //       // 播放中途退出，不下发游戏奖励
    //       wx.showToast({
    //         title: '提交失败，请看完广告，再提交评论',
    //         icon: 'none',
    //         duration: 2000
    //       })
    //     }
    //   })
    // }
    // else {
    //   this.modalFunc('tipsX', '', {adapterModal}.adapterItemSwiper())
    // }
    this.modalFunc('tipsX', '', adapterModal.adapterItemSwiper())
  },

  videoAdLong: null,      // 在页面中定义激励视频广告
  videoAdLongStatus: true,
  adLongView: function() {
    // 在页面onLoad回调事件中创建激励视频广告实例
    if (wx.createRewardedVideoAd) {
      this.videoAdLong = wx.createRewardedVideoAd({
        adUnitId: 'adunit-276da26fc6bb6256'
      })
      this.videoAdLong.onLoad(() => {})
      this.videoAdLong.onError((err) => {})
      this.videoAdLong.onClose((res) => {})
    }

    // 用户触发广告后，显示激励视频广告
    if (this.videoAdLong) {
      this.videoAdLong.show().catch(() => {
        // 失败重试
        this.videoAdLong.load()
          .then(() => this.videoAdLong.show())
          .catch(err => {
            console.log('激励视频 广告显示失败')
          })
      })
    }
  },

  onOpenOther: function() {
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
  },
  
  onLoad: function () {
  },

  onShareAppMessage: function () {
    /**
    * 用户点击右上角分享
    */
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
  }
})
