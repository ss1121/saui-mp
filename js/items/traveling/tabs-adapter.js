//纯list
const listxFunc = (data, checkedIds, checktype) => {
  // data 数据列表
  // checkedIds 预留选中后的值
  // checktype 单多选
  // 的时候没有item.parentId
  checkedIds = checkedIds || {}
  return data.map( (item, ii) => {
    let itc = JSON.stringify(checkedIds) != "{}" ? checkedIds[item.parentId] ? checkedIds[item.parentId].indexOf(item.id) > -1 ? 'active' : '' : '' : item.status ? 'active' : ''
    return {
      title: item.title,
      attr: {id: item.id, parentId: item.parentId},
      aim: 'onItemCheck?checktype='+checktype+'&id='+item.id+'&parentId='+item.parentId+'&title='+item.title,
      itemClass: itc
    }
  })
}

const tabsFunc = (data, checkedId) => {
  return data.map( (item, ii) => {
    return {
      id: item.id,
      title: {
        title: item.title,
        itemClass: 'item-title'
      },
      content: {
        '@list': {
          $$id: item.id,
          data: listxFunc(item.list, checkedId),
          itemClass: 'item-check nopd',
        }
      }
    }
  })
}

const tabsScreen = (data, checkIds) => {
  checkIds = checkIds || {}
  return data.map( (item, ii) => {
    return {
      title: item.title,
      id: item.id,
      status: JSON.stringify(checkIds) != "{}" ? checkIds[item.id] ? true : false : item.status ? true : ii == 0 ? true : false 
    }
  })
}

const travelingScreen = (data, checked) => {
  return data.map( item => {
    return {
      '@list': {
        type: {
          "is": 'scroll',
          "scroll-y": true,
        },
        id: item.id,
        itemClass: 'item-check ss-item',
        listClass: 'hei-p100 bb-e3e3e3-list-easy-scroll',
        data: listxFunc(item.list, checked, 'radio')
      }
    }
  })
}


module.exports = {
  listxFunc,
  tabsFunc,
  tabsScreen,
  travelingScreen
}