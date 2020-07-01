//单个更新，适用于数据过大
const selectionAdapter = (data) => {
  let output = []
  data.map( (item, ii) => {
    output.push({
      img: {
        src: item.logo,
        itemClass: 'pic-60-r'
      },
      title: {
        title: item.cname,
        itemClass:  + data.length != ii + 1 ? 'color-active size14 lhei-60-r ml-40-r ptb-20-r flex-1 bb-default' : 'color-active size14 lhei-60-r ml-40-r ptb-20-r flex-1 '
      },
      itemClass: 'flex-row-start-center ss-focus plr-default',
    })
  })
  return output
}

//全部更新
const selectionAllAdapter = (data, data2) => {
  let output = []
  data.map(item => {
    const kk = data2.filter(itemx => {
      if (itemx.cfrl == item.title) {
        return itemx
      }
    })
    if (kk.length > 0) {
      output.push({
        title: {
          title: item.title,
          itemClass: 'color-active ss-sticky bg-bg plr-default'
        },
        li: selectionAdapter(kk),
        // liClass: 'pl-default-r'
      })
    }
  })
  return output
}

module.exports = {
  selectionAdapter,
  selectionAllAdapter,
}






// const data = [
//   {
//     title: '位置距离',
//     type: 'list',
//     content: [
//       {
//         title: '500米以内'
//       },
//       {
//         title: '1公里以内'
//       },
//       {
//         title: '2公里以内'
//       },
//     ]
//   },
//   {
//     title: '选择目的地',
//     type: 'custom',
//     content: {
//       '@'
//     }
//   }
// ]


// const inst = 



// [
//   {
//     title: '女装',
//     content: [
//       {
//         title: '女装1'
//       },
//       {
//         title: '女装1'
//       },
//       {
//         title: '女装1'
//       },
//     ]
//   },
//   {
//     title: '男装',
//     content: [
//       {
//         title: '男装1'
//       },
//       {
//         title: '男装1'
//       },
//       {
//         title: '男装1'
//       },
//     ]
//   },
//   {
//     title: '童装',
//     content: [
//       {
//         title: '童装1'
//       },
//       {
//         title: '童装1'
//       },
//       {
//         title: '童装1'
//       },
//     ]
//   },
// ]