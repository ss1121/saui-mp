//index.js
//获取应用实例
const app = getApp()
const Pager = require('components/aotoo/core')

import getData from './data'
import adapterModal from './modal'
// import inputTips from '../tips/inputtips'


const adapterMenu = (res) => {
  let output = []
  let bodyData = []
  const bodyFunc = (data, id) => {
    return data.map( item => {
      return {
        title: {
          title: item.title,
          itemClass: !item.isNews || 'icon-dot-small-before-tr color-minor' 
        },
        body: [{
          title: item.littleTitle,
          itemClass: 'icon-arrows-r color-default size12'
        }],
        itemClass: 'ss-focus hei-104-r ss-sizing-border item-border flex-row-between-center color-000',
        tap: id == 'form' ? 'onTap?demo='+id+'/'+item.attrx
            : item.from == 'demo2' ? 'onTap?demo2='+item.attrx
            : 'onTap?demo=ui/'+item.attrx 
      }
    })
  }
  res.map( item => {
    output.push({
      title: {
        title: item.title,
        itemClass: 'size16 fw-bold color-000 plr-default bb-default lhei-88-r'
      },
      body: bodyFunc(item.list, item.id),
      bodyClass: 'list-bb'
    })
  })
  return output
}

Pager({
  data: {
    isScrollx: true,
    headLogo: Pager.item({
      title: [
        {
          img: {
            src: '/images/logo.png',
            itemClass: 'logo-size border-radius-p100 m-auto'
          },
        },
        {
          title: 'SaUI',
          itemClass: 'size22 color-fff mt-10-r fw-bold'
        },
      ],
      body: [
        {
          title: [
            {
              title: 'SaUI是基于Aotoo而写的UI框架。',
              itemClass: 'fw-bold'
            },
            {
              title: '详细了解Aotoo：www.agzgz.com',
            }
          ],
          titleClass: 'size12 color-active'
        },
        {
          title: '赞赏作者',
          itemClass: 'index-btn',
          tap: 'onClickCommunication'
        }
      ],
      itemClass: 'index-header plr-default',
      titleClass: 'ss-center padding-30-r',
      bodyClass: 'flex-row-between-center display-bg-list-default m-auto box-shadow hei-152-r ss-sizing-border'
    }),
    menuData: Pager.list({
      data: adapterMenu(getData.data),
      listClass: 'ss-tree-list bg-default',
    }),
    tipsX: {
      $$id: 'tipsX'
    },
    tipFixed: Pager.item({
      title: ' ',
      itemClass: 'tip-fixed',
      aim: 'onClickTips'
    }),
    case: Pager.item({
      title: '例',
      itemClass: 'tip-fixed case',
      aim: 'onClickCase'
    }),
    messages: Pager.item({
      title: '言',
      itemClass: 'tip-fixed message',
      aim: 'onClickMessage'
    })
  },

  onTap: function(e, query, inst) {
    // const theTap = query.demo.replace(/_/g,"/")
    const theTap = query.demo
    const theTap2 = query.demo2
    console.log(theTap2, theTap, query)
    if (theTap) {
      switch (theTap) {
        case theTap:
          wx.navigateTo({
            url: '../../demo/'+theTap+'/index'
          })
        break;
      }
    }
    else {
      switch (theTap2) {
        case theTap2:
          wx.navigateTo({
            url: '../../demo2/'+theTap2+'/index'
          })
        break;
      }
    }
  },

  onShow: function () {},

  onReady: function () {
    
    // this.modalFunc('tipsX', 'update', adapterModal.adapterItemUpdate(getData.actionSideData))
  },

  adModal: function() {
    // 在页面中定义插屏广告
    let interstitialAd = null

    // 在页面onLoad回调事件中创建插屏广告实例
    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-7248d31d9572f228'
      })
      interstitialAd.onLoad(() => {})
      interstitialAd.onError((err) => {})
      interstitialAd.onClose(() => {})
    }

    // 在适合的场景显示插屏广告
    if (interstitialAd) {
      interstitialAd.show().catch((err) => {
        console.error(err)
      })
    }
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
      type == 'update' ?
        {
          '@item': {
            title: [
              {
                title: '最新更新',
                itemClass: 'm-title-fs'
              },
              {
                title: '持续的更新，只为了更好的累积',
                itemClass: 'm-desc-fs'
              }
            ],
            body: [
              {
                title: '1.重磅推出SAUI原生小程序版,扫码或点击',
                itemClass: 'color-active mb-20-r',
                tap: 'onOpenOther'
              },
              {
                img: '/images/saui-al.jpg',
                itemClass: 'pic-382-r m-auto',
                tap: 'onOpenOther'
              },
              {
                title: [
                  {title: '2.如有建议，可点击'},
                  {
                    '@form': {
                      data: [{
                        input: {
                          id: 'xxx',
                          type: 'button',
                          value: '联系客服',
                          'open-type': 'contact',
                          itemClass: 'size16 btn-text'
                        }
                      }]
                    }
                  }
                ],
                titleClass: 'flex-row',
                itemClass: 'color-active mb-20-r mt-20-r'
              }
            ],
            titleClass: 'color-fff item-header',
            bodyClass: 'item-body wid-p86 flex-column ss-left display-bg-minor',
            itemClass: 'item-wrapper item-wrapper-1 hei-p100 wid-p100'
          },
          itemClass: 'index-swiper-modal'
        }
      : {
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
    if (this.videoAdLongStatus) {
      this.adLongView()
      this.videoAdLong.onClose(res => {
        if(!this.videoAdLong) return
        this.videoAdLong.offClose()
        // 用户点击了【关闭广告】按钮
        console.log(res, 'res')
        if (res && res.isEnded) {
          // 正常播放结束，可以下发游戏奖励
          this.modalFunc('tipsX', '', adapterModal.adapterItemSwiper())
          this.videoAdLongStatus = false
        } else {
          // 播放中途退出，不下发游戏奖励
          wx.showToast({
            title: '请看完广告，方可进入',
            icon: 'none',
            duration: 2000
          })
        }
      })
    }
    else {
      this.modalFunc('tipsX', '', adapterModal.adapterItemSwiper())
    }
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
    setTimeout(() => {
      this.adModal()
    }, 500);
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
