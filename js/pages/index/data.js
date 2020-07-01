const data = [
  {
    title: '实际项目',
    id: 'items',
    list: [
      { title: 'Hotel', attrx: 'traveling', from: 'items', littleTitle: '携程酒店', icon: '\\e62c'},
      { title: 'Case', attrx: 'case', from: 'items', littleTitle: '仿APPStore', icon: '\\e67e'},
      { title: 'Canvas', attrx: 'pic', littleTitle: '制作图片', icon: '\\e93b'},
      { title: 'Car', attrx: 'car', littleTitle: '汽车品牌', from: 'demo2', icon: '\\e62a'},
    ]
  },
  {
    title: 'Navigation 导航组件',
    id: 'navigation',
    list: [
      { title: 'Tabs', attrx: 'ui/tabs', littleTitle: '标签页', from: 'demo', icon: '\\e65f'},
      { title: 'Screen', attrx: 'ui/screen', littleTitle: '筛选', from: 'demo', icon: '\\e695'},
      { title: 'Cityselection', attrx: 'selection', littleTitle: '选择城市', from: 'demo2', icon: '\\e649'},
      { title: 'Address', attrx: 'address', littleTitle: '通讯录', from: 'demo2', isNews: true, icon: '\\e6ff'},
    ]
  },
  {
    title: 'Basic 基础组件',
    id: 'basic',
    list: [
      { title: 'Button', attrx: 'ui/button', littleTitle: '按钮 ', from: 'demo', icon: '\\e690'},
      { title: 'Utility', attrx: 'ui/utility', littleTitle: '工具类 ', from: 'demo', icon: '\\e747'},
      { title: 'Tag', attrx: 'ui/tag', littleTitle: '标签 ', from: 'demo', icon: '\\e796'},
      { title: 'Article', attrx: 'ui/article', littleTitle: '文章 ', from: 'demo', icon: '\\e67d'},
    ]
  },
  {
    title: 'List 列表',
    id: 'list',
    list: [
      { title: 'Image-text', attrx: 'ui/list', littleTitle: '图文列表 ', from: 'demo', icon: '\\e622'},
      { title: 'slip', attrx: 'ui/slip', littleTitle: '左滑删除 ', from: 'demo', icon: '\\e61b'},
      { title: 'Waiting', littleTitle: '敬请期待'},
      { title: 'Waiting', littleTitle: '敬请期待'},
    ]
  }
]
const data2 = [
  {
    title: 'Feedback 操作反馈',
    id: 'feedback',
    list: [
      { title: 'Modal', attrx: 'ui/modal', littleTitle: '弹出层 ', from: 'demo', icon: '\\e607'},
      { title: 'Toast', attrx: 'ui/toast', littleTitle: '提示 ', from: 'demo', icon: '\\e635'},
      { title: 'Score', attrx: 'ui/score', littleTitle: '评分 ', from: 'demo', icon: '\\e661'},
      { title: 'Waiting', littleTitle: '敬请期待'},
    ]
  },
  {
    title: 'Form 表单',
    id: 'form',
    list: [
      { title: 'Input', attrx: 'form/input', littleTitle: '文本类 ', from: 'demo',icon: '\\e731'},
      { title: 'Number', attrx: 'form/number', littleTitle: '数字类 ', from: 'demo',icon: '\\e731'},
      { title: 'Icon', attrx: 'form/icon', littleTitle: 'icon替代标题 ', from: 'demo',icon: '\\e731'},
      { title: 'Switch', attrx: 'form/switch', littleTitle: '开关 ', from: 'demo',icon: '\\e731'},
      { title: 'Union', attrx: 'form/union', littleTitle: '联动 ', from: 'demo',icon: '\\e731'},
      { title: 'Checkbox', attrx: 'form/checkbox', littleTitle: '多选择框 ', from: 'demo',icon: '\\e731'},
      { title: 'Radio', attrx: 'form/radio', littleTitle: '单选择框 ', from: 'demo',icon: '\\e731'},
      { title: 'Slider', attrx: 'form/slider', littleTitle: '滑动选取器 ', from: 'demo',icon: '\\e731'},
      { title: 'Single-picker', attrx: 'form/singlepicker', littleTitle: '单层弹层选择器 ', from: 'demo',icon: '\\e731'},
      { title: 'Multipy-picker', attrx: 'form/multipypicker', littleTitle: '多层弹层选择器 ', from: 'demo',icon: '\\e731'},
      { title: 'Dropdown', attrx: 'form/dropdown', littleTitle: '下拉菜单 ', from: 'demo',icon: '\\e731'},
    ]
  }
]

const actionSideData = [
  {
    title: 'DEMO 更新', 
    id: 'demo',
    list: [
      {title: '导航组件', desc: '选择城市', type: 'demo'},
      {title: '导航组件', desc: '筛选', type: 'demo'},
      {title: '操作反馈', desc: '评分', type: 'demo'},
    ]
  },
  {
    title: '框架 更新', 
    id: 'xm',
    list: [
      {title: '1 ', desc: '支持小程序云开发,通过配置项简单设置',  type: 'xm'},
      {title: '2 ', desc: '内核优化，解决组件数据污染的问题',  type: 'xm'},
      {title: '3 ', desc: '优化wxs中的通用touch响应事件',  type: 'xm'},
    ]
  },
]


export default {
  data,
  data2,
  actionSideData
}