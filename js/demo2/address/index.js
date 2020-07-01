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
        title: item.cfrl,
        idf: item.cfrl
      })
      xx = item.cfrl
    }
    else {
      item.cfrl != xx ? xx = false : xx
    }
    output.push({
      img: item.logo,
      title: item.cname,
      parent: item.cfrl
    })
  })
  output.sort((a,b) => {
    return a.title.charCodeAt(0) - b.title.charCodeAt(0);
  });
  return output
}

Pager({
  data: {
    tabConfig: mkTab('address', adapterData(getCarData), {
      tap(e, param, inst){
        console.log('====== hhhh');
      },
      longpress(e, param, inst){
        console.log('====== 7777');
      }
    }),
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


