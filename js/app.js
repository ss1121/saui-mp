//app.js
const ald = require('./utils/ald-stat.js')
require('./envconfigs')()
App({
  onLaunch: function () {
    const {options} = wx.CONFIG.env

    // 是否初始化云端开发
    if (options.cloud) {
      if (!wx.cloud) {
        console.error('请使用 2.2.3 或以上的基础库以使用云能力')
      } else {
        wx.cloud.init({env: 'ss-1-4vn7o', traceUser: true })
        wx.isCloud = true
      }
    }

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
        console.log(res)
      }
    })
    //系统信息
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.navheight = res.statusBarHeight
      }
    })
  },
  globalData: {
    userInfo: null,
    navheight: 23,
    openid: null
  }
})