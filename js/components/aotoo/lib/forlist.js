import {
  isString,
  isObject,
  isArray,
  isNumber,
  isFunction,
  formatQuery,
  suid,
  resetSuidCount,
  clone
} from './util'

import {
  resetItem
} from "./foritem";

export function reSetItemAttr(item, list){
  if (typeof item == 'boolean') return item
  if (typeof item == 'string' || typeof item == 'number') {
    item = {title: item}
  }

  const clsIndex = suid('index-') // 将data-index置入每条数据的class中，这样不用去动结构
  const $ii = clsIndex

  if (list.itemMethod ){
    var itm = list.itemMethod
    if (typeof itm == 'object') {
      Object.keys(itm).forEach(evt=>{
        item[evt] = itm[evt]
      })
    }
  }

  let itmc = list.itemClass || list.class || ''
  let myClass = item['itemClass'] || item['class'] || item['className'] || ''
  item['itemClass'] = myClass ? itmc + ' ' + myClass : itmc

  if (list.itemStyle || list.style) {
    var itsy = list.itemStyle || list.style
    if (item['style'] || item['itemStyle']) {
      var myStyle = item['style'] || item['itemStyle']
      item['style'] = myStyle
    } else {
      item['style'] = itsy
    }
  }

  // if (this.$$is=='tree' && isObject(item)) {
  if (isObject(item)) {
    if (item['attr']) {
      if (!item['attr']['data-treeid']) item['attr']['data-treeid'] = $ii
    } else {
      if (item['$$typeof']) {
        item = {title: item, attr: {'data-treeid': $ii}}
      } else {
        item['attr'] = {'data-treeid': $ii}
      }
    }
  }

  const newItem = item['$$id'] ? item : resetItem(item, this)
  return newItem
}

function reSetArray(data, list) {
  if (isArray(data)) {
    list.data = data.map(item => reSetItemAttr.call(this, item, list))
  }
  return list
}

export function reSetList(list) {
  if (isObject(list)) {
    list['show'] = list.hasOwnProperty('show') ? list.show : true
    return reSetArray.call(this, list.data, list)
  }
}