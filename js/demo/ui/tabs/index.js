//index.js
//获取应用实例
const app = getApp()
const Pager = require('components/aotoo/core')


const data = [
  {
    title: 'Tabs 组件',
    id: 'tabs',
    list: [
      { title: 'Normal', attrx: 'normal', littleTitle: '常规 ' },
      { title: 'Scroll', attrx: 'scroll', littleTitle: '滚动 ', isNews: true },
    ]
  },
  {
    title: 'Tabs 仿tab组件，用list组件实现',
    id: 'ftabs',
    list: [
      { title: 'Normal', attrx: 'fnormal', littleTitle: '常规 ' },
      { title: 'Scroll', attrx: 'fscroll', littleTitle: '滚动 ' },
    ]
  },

]

const adapterMenu = (res) => {
  let output = []
  res.map( item => {
    output.push({
      title: {
        title: item.title,
        itemClass: 'bg-title'
      },
      idf: item.id,
      liClass: 'bg-fff list-bb-normal bb-default'
    })
    item.list.map( itemxx => {
      output.push({
        title: [
          !itemxx.isNews
            ? { title: itemxx.title }
            : {
              title: [{title: itemxx.title, itemClass: 'color-minor'}, {title: ' ', itemClass: 'icon-dot-small ss-absolute-r-20-m'}],
              titleClass: 'ss-relative'
            },
          {title: itemxx.littleTitle, itemClass: 'icon-arrows-r color-grey'}
        ],
        titleClass: 'item-border flex-row-between-center',
        parent: item.id,
        itemClass: 'item ss-focus',
        tap: 'onTap?demo='+itemxx.attrx 
      })
    })
  })
  return output
}

Pager({
  data: {
    motto: Pager.tree({
      data: adapterMenu(data),
      type: {
        is: 'scroll'
      },
      listClass: 'hei-p100 bg-fff'
    }),
  },
  onTap: function(e, query, inst) {
    const theTap = query.demo.replace(/_/g,"/")
    if (theTap) {
      switch (theTap) {
        case theTap:
          wx.navigateTo({
            url: './'+theTap+'/index'
          })
        break;
      }
    }
  },
})
