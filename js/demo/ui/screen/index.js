//index.js
//获取应用实例
const app = getApp()
const Pager = require('components/aotoo/core')
const lib = Pager.lib

//模拟数据
import data from './data'

//适配方法
import adapter from './tabs-adapter'


const screenListData = [
  {
    title: {
      title: '筛选',
      itemClass: 'item-arrow'
    },
    dot: [{
      '@component': {
        is: 'tab2',
        $$id: 'test-tabs',
        data: [],
        listClass: 'tabs-column color-active'
      },
      '@list': {
        $$id: 'tabs-btn',
        data: [
          {
            title: '重置',
            itemClass: 'btn-fff-grey btn-br-small',
            aim: 'onClearPop'
          },
          {
            title: '确定',
            itemClass: 'btn-primary btn-br-small ',
            aim: 'onSavePop'
          }
        ],
        listClass: 'tabs-column-btn disN box-shadow-top'
      },
      itemClass: 'ss-scrore-list-pop',
      aim: 'onClosePop'
    }],
    tap: 'onScrennItem?btn=true&id=1',
    attr: {idx: 1, isChecked: false}
  },
  {
    title: '价格星级'
  },
  {
    title: {
      title: '智能排序',
      itemClass: 'item-arrow'
    },
    dot: [{
      '@list': {
        $$id: 'listx',
        data: [],
        // data: adapter.listxFunc(data.listx, '', 'radio'),
        itemClass: 'item-check',
        listClass: 'bg-fff ss-left'
      },
      itemClass: 'ss-scrore-list-pop',
      aim: 'onClosePop'
    }],
    tap: 'onScrennItem?id=3',
    attr: {idx: 3, isChecked: false}
  }
]

Pager({
  data: {
    screenList: Pager.list({
      data: screenListData,
      itemClass: 'item-li',
      listClass: 'ss-scrore-list color-333',
    })
  },
  storeData: {},
  onClearPop: function(e, param, inst){
    //清空按钮
    const $tabs = this.getElementsById('test-tabs')
    wx.removeStorageSync('saveScreenData')
    this.storeData = {}
    //reset()传值的时候，是值为准，否则是为最原始的数据 。这里是因为最初tabs是空的，但是清空按钮只是重置选中后的数据
    $tabs.reset(adapter.tabsFunc(data.tabsData))
  },
  onSavePop: function(e, param, inst){
    //确定按钮 
    wx.setStorageSync('saveScreenData', this.storeData)
    this.onClosePop(e, param, inst)
  },
  onClosePop: function(e, param, inst){
    //关闭弹出层
    inst.parent('item-li').removeClass('active')
    if (wx.getStorageSync('saveScreenData') == undefined || wx.getStorageSync('saveScreenData') == '') {
      this.storeData = {}
    }
  },
  onScrennItem: function (e, param, inst) {
    //点击筛选列表  头部
    inst.siblings().removeClass('active')
    inst.addClass('active')
    const $screenList = this.getElementsById('screenList')
    const $screenPop = this.getElementsById('screenPop')
    const $id = param['id']
    
    if ($id ==  1){
      const $testtabs = this.getElementsById('test-tabs')
      const $tabsbtn = this.getElementsById('tabs-btn')
      $testtabs.update({
        data: wx.getStorageSync('saveScreenData') != undefined
          ? adapter.tabsFunc(data.tabsData, wx.getStorageSync('saveScreenData')) : adapter.tabsFunc(data.tabsData)
      })
      $tabsbtn.removeClass('disN')
    }
    else {
      const $listx = this.getElementsById('listx')
      $listx.update({
        data: wx.getStorageSync('saveScreenListData') != undefined 
          ? adapter.listxFunc(data.listx, wx.getStorageSync('saveScreenListData'), 'radio')
          :adapter.listxFunc(data.listx, '', 'radio')
      })
    }
  },
  onItemCheck: function(e, query, inst){
    //点击选项
    const $screenList = this.getElementsById('screenList')
    const $tabsIns = this.getElementsById('test-tabs')
    const $id = e.currentTarget.dataset.id
    if (query.checktype == "radio") {
      inst.siblings().removeClass('active')
      inst.addClass('active')
      wx.setStorageSync('saveScreenListData', $id)
      this.onClosePop(e, query, inst)
    }
    else {
      //多选
      const that = this
      const parentId = inst.getData().attr['parentId']
      if (inst.getData().itemClass.indexOf('active') < 0){
        inst.addClass('active')
        if (!that.storeData[parentId] || that.storeData[parentId].length === 0){
          that.storeData[parentId] = []
          that.storeData[parentId].push(inst.getData().attr['id'])
          $tabsIns.tabsMenusChecked(e, query, inst)
        }
        else {
          that.storeData[parentId].push(inst.getData().attr['id'])
        }
      }
      else {
        inst.removeClass('active')
        const index = that.storeData[parentId].indexOf(inst.getData().attr['id'])
        that.storeData[parentId].splice(index, 1)
        that.storeData[parentId].length === 0 ? $tabsIns.tabsMenusCheckedDel() : ''
      }
    }
  },
  onUpateContent: function(id){
    //点击menus 更新右边部分
    const $updateId = this.getElementsById(id)
    const $data = $updateId.getData().data
    // console.log(this.storeData.id != 'undefined') 打印结果： true ？？？  'undefined' 跟 undefined 不用引号？？？
    if (this.storeData[id] != undefined) {
      $data.map(item => {
        if (this.storeData[id].indexOf(item.attr.idx) > -1){
          item.itemClass += ' active'
        } 
        return item
      })
      setTimeout(() => {
        $updateId.update({data: $data})
      }, 20);
    }
  },
  onReady: function(){
    wx.removeStorageSync('saveScreenData')
    wx.removeStorageSync('saveScreenListData')
    const $screenList = this.getElementsById('screenList')
    const $tabs = this.getElementsById('test-tabs')
    const that = this
    
    $tabs.hooks.on('updateContent', function(param){
      const id = param.id
      that.onUpateContent(id)
    })
  },
})