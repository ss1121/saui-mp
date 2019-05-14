//index.js
//获取应用实例
const app = getApp()
const Pager = require('components/aotoo/core')

const tabData = {
  scroll: true,
  multipy: true,
  data: [
    {
      title: '选项一',
      content: '如果使用scroll, scroll标签对flex是不支持的'
    },
    {
      title: '选项二',
      content: '我是内容部分。B'
    },
    {
      title: '选项三',
      content: '我是内容部分。C'
    },
    {
      title: '选项三',
      content: '我是内容部分。C'
    },
    {
      title: '选项三',
      content: '我是内容部分。C'
    },
    {
      title: '选项三',
      content: '我是内容部分。C'
    },
    {
      title: '选项三',
      content: '我是内容部分。C'
    },
    {
      title: '选项三',
      content: '我是内容部分。C'
    },
    {
      title: '选项三',
      content: '我是内容部分。C'
    },
    {
      title: '选项三',
      content: '我是内容部分。C'
    },
    {
      title: '选项三',
      content: '我是内容部分。C'
    },
    {
      title: '选项三',
      content: '我是内容部分。C'
    },
    {
      title: '选项三',
      content: '我是内容部分。C'
    },
  ],
  listClass: 'tabs-default-scroll hei-p100 bg-fff'
}


Pager({
  data: {
    motto: tabData
  }
  // onLoad(){
  //   setTimeout(() => {
  //     this.setData({
  //       motto: tabData
  //     })
  //   }, 3000);
  // }
})
