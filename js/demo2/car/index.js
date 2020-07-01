//index.js
//获取应用实例
const app = getApp()
const Pager = require('../../components/aotoo/core/index.js')
const lib = Pager.lib
let mkTab = require('../modules/indexlist')

//模拟数据
import getCarData from './data'

const adapterData = (data) => {
  let output = []
  let xx = false
  data.map( item => {
    if (!xx){
      output.unshift({
        title: {
          title: item.cfrl,
          itemClass: 'color-primary ss-sticky bg-bg'
        },
        idf: item.cfrl
      })
      xx = item.cfrl
    }
    else {
      item.cfrl != xx ? xx = false : xx
    }
    output.push({
      img: {
        src: item.logo,
        itemClass: 'pic-80-r'
      },
      title: {
        title: item.cname,
        itemClass: 'color-active size18 lhei-60-r ml-40-r'
      },
      parent: item.cfrl,
      itemClass: 'flex-row-start-center',
    })
  })
  output.sort((a,b) => {
    return a.title.title.charCodeAt(0) - b.title.title.charCodeAt(0);
  });
  return output
}

Pager({
  data: {
    tabConfig: mkTab('car', adapterData(getCarData)),
  },
  onReady: function() {
    setTimeout(() => {
      wx.hideLoading()
    }, 1000);
  },
  onLoad: function() {
    wx.showLoading({
      title: '加载中',
    })
  }
})