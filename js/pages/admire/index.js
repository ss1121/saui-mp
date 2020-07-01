//index.js
//获取应用实例
const app = getApp()
const Pager = require('components/aotoo/core')


Pager({
  data: {
    messagesList: Pager.list({}),
    gtextarea: '',
    nimingStatus: false    //是否匿名
  },
  videoAd: null,      // 在页面中定义激励视频广告
  videoAdShow: true,      // 在页面中定义激励视频广告
  clicked: false,
  onShow: function () {},

  onReady: function () {
    this.getAllList()
  },
  
  onLoad: function () {
    // this.adModal()
  },

  inputEdit: function(e) {
    const value = e.detail.value || ''
    this.setData({gtextarea: value})
  },

  onSub: function(e, parma, inst) {
    if (!this.clicked) {
      this.clicked = true
      const value = this.data.gtextarea
      if (this.videoAdShow) {
        this.videoAdModal()
        this.videoAd.onClose(res => {
          if(!this.videoAd) return
          this.videoAd.offClose()
          // 用户点击了【关闭广告】按钮
          if (res && res.isEnded) {
            // 正常播放结束，可以下发游戏奖励
            this.uploadingData(value)
            this.videoAdShow = false
          } else {
            // 播放中途退出，不下发游戏奖励
            wx.showToast({
              title: '提交失败，请看完广告，再提交评论',
              icon: 'none',
              duration: 2000
            })
          }
        })
      }
      else {
        this.uploadingData(value)
      }
    }
  },

  uploadingData: function(value) {
    const db = wx.cloud.database()
    const that = this
    if (value) {
      db.collection('messages').add({
        data: {
          from: this.data.nimingStatus ? '匿名' : app.globalData.userInfo.nickName,
          logo: this.data.nimingStatus ? '/images/logo-2.png' : app.globalData.userInfo.avatarUrl,
          logot: app.globalData.userInfo ? app.globalData.userInfo.avatarUrl : '',
          fromt: app.globalData.userInfo ? app.globalData.userInfo.nickName : '',
          content: value,
          date: new Date().toLocaleDateString(),
          datet: new Date()
        },
        success: res => {
          // 在返回结果中会包含新创建的记录的 _id
          wx.showToast({
            title: '提交成功',
          })
          that.getAllList()
          that.setData({
            'gtextarea': ''
          })
          this.clicked = false
          console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
        },
        fail: err => {
          wx.showToast({
            icon: 'none',
            title: '提交失败'
          })
          this.clicked = false
          console.error('[数据库] [新增记录] 失败：', err)
        }
      })
    }
    else {
      wx.showToast({
        title: '内容为空，请输入内容再提交',
        icon: 'none',
        duration: 2000
      })
    }
  },

  getAllList: function(data) {
    const db = wx.cloud.database()
    const that = this
    db.collection('messages').orderBy('datet', 'desc').get({
      success: res => {
        // $messagesList.update()
        that.getAllListDate(res.data)
      },
      fail: err => {
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
  },

  getAllListDate: function (data) {
    const $messagesList = this.getElementsById('messagesList')
    let output = []
    data.map( item => {
      output.push({
        img: {
          src:  this.data.nimingStatus ? '/images/logo-2.png' : item.logo,
          itemClass: 'item-logo'
        },
        body: [
          {
            title: [
              {
                title: this.data.nimingStatus ? '匿名' : item.from
              },
              {
                title: item.date,
                itemClass: 'color-grey'
              },
            ],
            titleClass: 'item-top'
          },
          {
            title: item.content,
            itemClass: 'item-bottom'
          }
        ],
        itemClass: 'message-item',
        bodyClass: 'flex-1'
      })
    })
    return $messagesList.update(output)
  },

  checkboxChange: function(e){
    const value = e.detail.value.length > 0 ? true : false
    this.setData({nimingStatus: value})
  },

  videoAdModal: function() {
    // 在页面onLoad回调事件中创建激励视频广告实例
    if (wx.createRewardedVideoAd) {
      this.videoAd = wx.createRewardedVideoAd({
        adUnitId: 'adunit-276da26fc6bb6256'
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
  }
})
