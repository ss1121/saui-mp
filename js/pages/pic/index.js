//index.js
//获取应用实例
const app = getApp()
const Pager = require('components/aotoo/core')

let Canvas = require('../../utils/canvas.js');

// const wishData = [
//   { title: '祝你2020鼠年大吉，有鼠不尽的收获，鼠不尽的幸福，鼠不尽的钞票，鼠不尽的美好生活..' },
//   { title: '在新年的这一天，让我的祝福像雪花飘送，让我的问候像绵绵春雨，片片花香，默默祝福，句句心语，声声关怀，将快乐的音符送给你！' },
//   { title: '2020春节到，迎来新的生活，换上新的心情，踏上新的旅程，开启新的希望，承载新的梦想，收获新的成功，享受新的幸福。祝你新年快乐！' },
//   { title: '鼠年希望您有“鼠”不尽的收获，“鼠”不尽的幸福，“鼠”不尽的钞票，“鼠”不尽的美满生活。' },
// ]

const data = [
  {title: 'https://7373-ss-1-4vn7o-1259184764.tcb.qcloud.la/1.png', id: 'share_canvas', code: 'https://7373-ss-1-4vn7o-1259184764.tcb.qcloud.la/saui-al.png'},
  {title: 'https://7373-ss-1-4vn7o-1259184764.tcb.qcloud.la/2.jpeg', id: 'share_canvas_2', code: 'https://7373-ss-1-4vn7o-1259184764.tcb.qcloud.la/saui-al.png'},
  {title: 'https://7373-ss-1-4vn7o-1259184764.tcb.qcloud.la/3.jpg', id: 'share_canvas_3', code: 'https://7373-ss-1-4vn7o-1259184764.tcb.qcloud.la/saui-al.png'}
]

const BaseHeight = 320;


Pager({
  data: {
    height: app.globalData.navheight * 2 + 20 ,
    nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '制作新年祝福图', //导航栏 中间的标题
    },
    swiper: {
      indicatorDots: true,
      'next-margin': 0,
      'easing-function': 'easeInCubic',
      'indicator-color': '#000'
      // data: ['share_canvas', 'share_canvas_2', 'share_canvas_3']
    },
    isLogin: null,
    canvasWidth: 0,
    canvasHeight: BaseHeight,
    imageWidth: 0,
    imageHeight: 0,
    offsetY: 20,
    offsetX: 0,
    hero: null,
    canvasText: '祝你2020鼠年大吉，有鼠不尽的收获，鼠不尽的幸福，鼠不尽的钞票，鼠不尽的美好生活..',
    canvasData: null,
    // canvasData: {
    //   title: '新年快乐！',
    //   bgPic: [{title: '../../images/1.jpeg'}]
    // },
    curIdx: 0,
    showSave: false,
    logoSrc: app.globalData.userInfo ? app.globalData.userInfo.avatarUrl : '/images/logo.png',
    wishData: [
      { title: '祝你2020鼠年大吉，有鼠不尽的收获，鼠不尽的幸福，鼠不尽的钞票，鼠不尽的美好生活..' },
      { title: '在新年的这一天，让我的祝福像雪花飘送，让我的问候像绵绵春雨，片片花香，默默祝福，句句心语，声声关怀，将快乐的音符送给你！' },
      { title: '2020春节到，迎来新的生活，换上新的心情，踏上新的旅程，开启新的希望，承载新的梦想，收获新的成功，享受新的幸福。祝你新年快乐！' },
      { title: '鼠年希望您有“鼠”不尽的收获，“鼠”不尽的幸福，“鼠”不尽的钞票，“鼠”不尽的美满生活。' },
    ]
  },
  videoAd: null,      // 在页面中定义激励视频广告
  videoAdShow: true,      // 在页面中定义激励视频广告
  drawInfluence: function (ctx, text, idx) {
    ctx.setFontSize(14);
    ctx.setFillStyle("#fff");
    let y = this.data.offsetY + 10;
    const cWidth = this.data.canvasWidth * .8
    const w = this.data.canvasWidth - cWidth
    Canvas.drawTextVertical(ctx, text, w, idx == 0 ? this.data.canvasHeight * .5 : idx == 1 ? this.data.canvasHeight * .72 : this.data.canvasHeight * .78 , cWidth);
    // Canvas.drawTextVertical(ctx, text, x, y);
  },

  videoAdModal: function() {
    // 在页面onLoad回调事件中创建激励视频广告实例
    if (wx.createRewardedVideoAd) {
      this.videoAd = wx.createRewardedVideoAd({
        adUnitId: 'adunit-d5c9507a1f468013'
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

  saveShareImageAD() {
    if (this.videoAdShow) {
      this.videoAdModal()
      this.videoAd.onClose(res => {
        if(!this.videoAd) return
        this.videoAd.offClose()
        // 用户点击了【关闭广告】按钮
        if (res && res.isEnded) {
          // 正常播放结束，可以下发游戏奖励
          this.saveShareImage()
          this.videoAdShow = false
        } else {
          // 播放中途退出，不下发游戏奖励
          wx.showToast({
            title: '制作失败，请看完广告',
            icon: 'none',
            duration: 2000
          })
        }
      })
    }
    else {
      this.saveShareImage()
    }
  },

  saveShareImage: function () {
    wx.showLoading({
      title: '正在保存图片..',
    });
    let that = this;
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: that.data.canvasWidth,
      height: that.data.canvasHeight,
      canvasId:  this.data.curIdx == 0 ? 'share_canvas' : this.data.curIdx == 1 ? 'share_canvas_2' : 'share_canvas_3',
      success: function (res) {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success(res) {
            wx.showToast({
              title: '保存到相册成功',
              duration: 1500,
            })
            setTimeout(function () {
              wx.navigateBack({
              });
            }, 1800);
          },
          fail(res) {
            wx.showToast({
              title: '保存到相册失败',
              icon: 'fail'
            })
          },
          complete(res) {
            console.log(res)
          }
        })
      }
    })
    
  },

  onRefresh: function() {
    const rand = Math.floor( Math.random() * this.data.wishData.length );
    this.setData({
      canvasText: this.data.wishData[rand].title,
      logoSrc: app.globalData.userInfo ? app.globalData.userInfo.avatarUrl : '/images/logo.png'
    });
    // const id  = this.data.curIdx == 0 ? 'share_canvas' : this.data.curIdx == 1 ? 'share_canvas_2' : 'share_canvas_3'
    this.drawImageSS(data[this.data.curIdx], this.data.curIdx)
  },

  onSwiper: function(e) {
    this.setData({
      curIdx: e.detail.current
    })
  },

  drawImageSS: function (param, idx) {
    var that = this;
    let ctx = wx.createCanvasContext(param.id);
    wx.downloadFile({
      url: param.title,
      success: function (res) {
        const path = res.tempFilePath;
        wx.getImageInfo({
          src: path,
          success: function (res) {
            ctx.drawImage(path, 0, 0, that.data.canvasWidth, that.data.canvasHeight)
            wx.downloadFile({
              url: param.code,
              success: function (res) {
                const path = res.tempFilePath;
                wx.getImageInfo({
                  src: path,
                  success: function (res) {
                    ctx.drawImage(path, that.data.canvasWidth * .84, that.data.canvasHeight * .9, 40, 40)
                    if (that.data.logoSrc.indexOf('https') >= 0){
                      wx.downloadFile({
                        url: that.data.logoSrc,
                        success: function (res) {
                          const path = res.tempFilePath;
                          wx.getImageInfo({
                            src: path,
                            success: function (res) {
                              ctx.save(); // 先保存状态 已便于画完圆再用
                              ctx.beginPath(); //开始绘制
                              if (idx == 0) {
                                ctx.arc(that.data.canvasWidth * 0.455 + 17, that.data.canvasHeight * 0.41 + 17, 17, 0, Math.PI * 2)
                                ctx.clip();//画了圆 再剪切 原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限
                                ctx.drawImage(path, that.data.canvasWidth * 0.455, that.data.canvasHeight * 0.41, 34, 34)
                              }
                              else {
                                ctx.arc(10 + 17, 10 + 17, 17, 0, Math.PI * 2)
                                ctx.clip();//画了圆 再剪切 原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限
                                ctx.drawImage(path, 10, 10, 34, 34)
                              }
                              ctx.restore(); //恢复之前保存的绘图上下文 恢复之前保存的绘图上下午即状态 可以继续绘制
                              that.drawInfluence(ctx, that.data.canvasText, idx);
                              ctx.draw();
                            }
                          });
                        }, fail: function (res) {
                          console.log(res)
                        }
                      })
                    }
                    else {
                      if (idx == 0){
                        ctx.drawImage(that.data.logoSrc, that.data.canvasWidth * 0.455, that.data.canvasHeight * 0.41, 34, 34)
                      }
                      else {
                        ctx.drawImage(that.data.logoSrc, 10, 10, 34, 34)
                      }
                      that.drawInfluence(ctx, that.data.canvasText, idx);
                      ctx.draw();
                    }
                  }
                });
              }, fail: function (res) {
                console.log(res)
              }
            })
          }
        });
      }, fail: function (res) {
        console.log(res)
      }
    })    
    // wx.downloadFile({
    //   url: this.data.logoSrc,
    //   success: function (res) {
    //     var path = res.tempFilePath;
    //     wx.getImageInfo({
    //       src: path,
    //       success: function (res) {
    //         ctx.drawImage(path, 0, 0, res.width, res.height)
    //       }
    //     });
    //   }, fail: function (res) {
    //     console.log(res)
    //   }
    // })
  },

  onReady: function () {
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
  
  onLoad: function () {
    this.adModal()
    this.getAllList()
    this.onGetOpenid()
    this.setData({
      swiper: {
        data: data
      },
    });
    try {
      var res = wx.getSystemInfoSync();
      this.setData({
        canvasWidth: res.screenWidth * .78,
        canvasHeight: (res.screenHeight - this.data.height) * .78
      })
    } catch (e) {
      // Do something when catch error
    }
    for(let i= 0;  i < data.length; i++){
      this.drawImageSS(data[i], i);
    }
  },
  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        app.globalData.openid = res.result.openid
        this.setData({
          'isLogin': app.globalData.userInfo,
          'logoSrc': app.globalData.userInfo ? app.globalData.userInfo.avatarUrl : '/images/logo.png'
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
  },
  getAllList: function(data) {
    const db = wx.cloud.database()
    const that = this
    db.collection('newyear').get({
      success: res => {
        if (res.data.length > 0){
          this.setData({
            wishData: res.data
          })
        }
      },
      fail: err => {
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
  },

  getWXuserInfo: function() {
    let that = this;
    if (app.globalData.userInfo == null){
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res => {
                // 可以将 res 发送给后台解码出 unionId
                this.setData({
                  'isLogin': res.userInfo
                })
                app.globalData.userInfo = res.userInfo
                this.setData({
                  logoSrc: res.userInfo.avatarUrl
                })
                for(let i= 0;  i < data.length; i++){
                  this.drawImageSS(data[i], i);
                }
                const db = wx.cloud.database()
                db.collection('users').where({_openid: app.globalData.openid}).get({
                  success: function(res) {
                    if (res.data.length === 0){
                      that.onAddUsers()
                    }
                  },
                })
                this.onToMiniProgram()
                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                if (this.userInfoReadyCallback) {
                  this.userInfoReadyCallback(res)
                }
              } 
            })
          }
        }
      })
    }
    else {
      wx.showToast({
        icon: 'none',
        title: '已登录成功，无需重新登录'
      })
      this.onToMiniProgram()
    }
  },
  onAddUsers: function (data) {
    // wx.cloud.init()
    const db = wx.cloud.database()
    db.collection('users').add({
      data: {
        count: 1
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })
  },

  onUpgrades: function(){
    this.onToMiniProgram()
  },
  onToMiniProgram: function() {
    wx.navigateToMiniProgram({
      appId: 'wx18a2ac992306a5a4',
      path: 'pages/apps/largess/detail?id=gSgwF7dUdOqgPc1CLmE7uw%3D%3D',
      // extraData: {
      //   foo: 'bar'
      // },
      envVersion: 'release',
      success(res) {
        console.log(res)
        // 打开成功
      }
    })
  },
  // videoAdModal: function() {
  //   // 在页面onLoad回调事件中创建激励视频广告实例
  //   if (wx.createRewardedVideoAd) {
  //     this.videoAd = wx.createRewardedVideoAd({
  //       adUnitId: 'adunit-0c409d585b8ce18c'
  //     })
  //     this.videoAd.onLoad(() => {})
  //     this.videoAd.onError((err) => {})
  //     // this.videoAd.onClose((res) => {})
  //   }

  //   // 用户触发广告后，显示激励视频广告
  //   if (this.videoAd) {
  //     this.videoAd.show().catch(() => {
  //       // 失败重试
  //       this.videoAd.load()
  //         .then(() => this.videoAd.show())
  //         .catch(err => {
  //           console.log('激励视频 广告显示失败')
  //         })
  //     })
  //   }
  // },

  // adModal: function() {
  //   // 在页面中定义插屏广告
  //   let interstitialAd = null

  //   // 在页面onLoad回调事件中创建插屏广告实例
  //   if (wx.createInterstitialAd) {
  //     interstitialAd = wx.createInterstitialAd({
  //       adUnitId: 'adunit-7248d31d9572f228'
  //     })
  //     interstitialAd.onLoad(() => {})
  //     interstitialAd.onError((err) => {})
  //     interstitialAd.onClose(() => {})
  //   }

  //   // 在适合的场景显示插屏广告
  //   if (interstitialAd) {
  //     interstitialAd.show().catch((err) => {
  //       console.error(err)
  //     })
  //   }
  // },

  onShareAppMessage: function (res) {
    /**
    * 用户点击右上角分享
    */
    let title = 'SAUI-制作新年海报';
    let path= app.getNowPage();
    return {
      title: title,  // 转发标题（默认：当前小程序名称）
      path: path, // 转发路径（当前页面 path ），必须是以 / 开头的完整路径
      success(e) {
        // shareAppMessage: ok,
        // shareTickets 数组，每一项是一个 shareTicket ，对应一个转发对象
        // 需要在页面onLoad()事件中实现接口
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
