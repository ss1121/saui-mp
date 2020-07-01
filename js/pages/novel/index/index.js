//index.js
//获取应用实例
const app = getApp()
const Pager = require('components/aotoo/core')

Pager({
  data: {
  },
  novelName: null,
  novelSection: null,
  videoAd: null,      // 在页面中定义激励视频广告
  videoAdShow: true,      // 在页面中定义激励视频广告
  isFirst: true,
  onDownload(e) {
    //点击下载
    const file = 'https://7373-ss-1-4vn7o-1259184764.tcb.qcloud.la/novel/'+this.novelName+'/'+this.novelName+this.novelSection+'.docx'
    if (this.videoAdShow) {
      this.videoAdModal()
      this.videoAd.onClose(res => {
        if(!this.videoAd) return
        this.videoAd.offClose()
        // 用户点击了【关闭广告】按钮
        if (res && res.isEnded) {
          // 正常播放结束，可以下发游戏奖励
          this.downFunc(file)
          this.videoAdShow = false
        } else {
          // 播放中途退出，不下发游戏奖励
          wx.showToast({
            title: '下载失败，请看完广告',
            icon: 'none',
            duration: 2000
          })
        }
      })
    }
    else {
      this.downFunc(file)
    }
  },
  downFunc(file) {
    wx.downloadFile({
      url: file, // 文件 ID
      success: res => {
        // 返回临时文件路径
        var tempFilePath = res.tempFilePath
        wx.saveFile({
          tempFilePath: tempFilePath,
          success: function(res) {
            var savedFilePath = res.savedFilePath
            wx.showModal({
              // title: '',
              content: '下载成功，是否打开文档',
              success (res) {
                if (res.confirm) {
                  console.log(savedFilePath, 'savedFilePath', res)
                  wx.openDocument({
                    filePath: savedFilePath,
                    fileType: 'docx',
                    success: function (res) {
                      console.log('打开文档成功')
                    },
                    fail: res => {
                      console.log(res,'fail')
                    }
                  })
                } else if (res.cancel) {
                  console.log('用户点击取消')
                }
              }
            })
          }
        })
      },
      fail: console.error
    })
  },
  videoAdModal: function() {
    // 在页面onLoad回调事件中创建激励视频广告实例
    if (wx.createRewardedVideoAd) {
      this.videoAd = wx.createRewardedVideoAd({
        adUnitId: 'adunit-c070332b96523301'
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
  // getCloudData () {
  //   return 
  // },
  onHide() {
    this.isFirst = true
  },
  onShow: function () {
    if (this.isFirst){
      const option = wx.getLaunchOptionsSync()
      this.novelName = option.query.substring(0, option.query.lastIndexOf('-'))
      this.novelSection =option.query.substring(option.query.lastIndexOf('-')+1)
      this.isFirst = false
    }
  },

  onReady: function () {
  },

  onLoad: function (options) {
    if (this.isFirst){
      this.novelName = options.query.substring(0, options.query.lastIndexOf('-'))
      this.novelSection =options.query.substring(options.query.lastIndexOf('-')+1)
      this.isFirst = false
    }
    // novelName=guihui&novelSection=1
  },
})