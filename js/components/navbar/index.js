const app = getApp()
Component({
  properties: {
    navbarData: {   //navbarData   由父页面传递的数据，变量名字自命名
      type: Object,
      value: {},
      observer: function (newVal, oldVal) {}
    }
  },
  data: {
    height: '',
    //默认值  默认显示左上角
    navbarData: {
      showCapsule: 1,
      fontSize: '16',
    }
  },
  attached: function () {
    // 定义导航栏的高度   方便对齐
    this.setData({
      height: app.globalData.navheight
    })
  },
  methods: {
  //返回到首页
    _backhome() {
        wx.navigateTo({
            url: '/pages/index/index',
        })
    }
  }

}) 