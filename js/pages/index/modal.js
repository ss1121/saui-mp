// const swiperType = {
//   is: 'swiper',
//   "indicator-dots": true,
//   "indicator-color": "#999",
//   "indicator-active-color	": "#ccc",
//   // "previous-margin": "30rpx",
//   // "next-margin": "30rpx",
//   circular: false,
//   duration: 300,
//   "display-multiple-items": 1
// }

// function itemSwiper(data, listClass) {
//   return {
//     // type: swiperType,
//     data: data,
//     // itemClass: 'd-swiper-title',
//     // listClass: 'd-swiper-ul ds-li-' + listClass
//     listClass: listClass
//   }
// }


// function adapterItemUpdate (data) {
//   let output = []
//   data.map ( item => {
//     output.push({
//       title: {
//         title: item.title,
//         itemClass: 'color-minor fw-bold'
//       },
//       idf: item.id,
//       // liClass: 'bg-fff list-bb bb-default'
//     })
//     item.list.map( itemxx => {
//       output.push({
//         title: [
//           {title: itemxx.title, itemClass: 'mr-10-r'},
//           {title: itemxx.desc}
//         ],
//         titleClass: item.id == 'demo' ? 'flex-row-between-center size12' : 'flex-row size12',
//         parent: item.id,
//         itemClass: 'item',
//       })
//     })
//   })
//   return [{
//     '@tree': {
//       data: output,
//       listClass: 'item-body color-grey wid-p86 flex-column lhei-60-r ss-left display-bg-minor',
//       itemClass: 'bb-e3e3e3-item'
//     }
//   }]
// }

// function adapterItemSwiper (data) {
//   const modalx = itemSwiper(
//     [
//       {
//         title: [
//           {
//             title: '赞赏',
//             itemClass: 'm-title-fs'
//           },
//           {
//             title: '你的赞赏，是对作者最大的支持',
//             itemClass: 'm-desc-fs'
//           }
//         ],
//         body: [
//           {
//             img: '/images/pay.jpg',
//             itemClass: 'pic-382-r'
//           },
//           {
//             title: [
//               {title: '2.如有建议，可点击'},
//               {
//                 '@form': {
//                   data: [{
//                     input: {
//                       id: 'xxx',
//                       type: 'button',
//                       value: '联系客服',
//                       'open-type': 'contact',
//                       itemClass: 'size16 btn-text'
//                     }
//                   }]
//                 }
//               }
//             ],
//             titleClass: 'flex-row',
//             itemClass: 'color-active mb-20-r mt-20-r'
//           }
//         ],
//         titleClass: 'color-fff item-header',
//         bodyClass: 'item-body display-bg-minor flex-column ss-left',
//         itemClass: 'item-wrapper item-wrapper-2'
//       }
//     ],
//     'index-swiper-modal item-hei'
//   )
//   return modalx
// }

const dealData = (data, type, ii) => {
  //处理列表里的列表数据
  const color = ['#2d85f0', '#f4433c', '#ffbc32', '#0aa858', '#2d85f0', '#f4433c', '#ffbc32', '#0aa858', '#2d85f0', '#f4433c', '#ffbc32', '#0aa858']
  
  return data.map( (itemx, jj) => {
    if (type === 'block') {
      return {
        title: {
          title: itemx.littleTitle,
          itemClass: 'item-pic'
        },
        itemStyle:  `--bg-color: ${color[ii]}`,
        aim: itemx.attrx ? itemx.from ? 'onOtherPage?to='+itemx.from+'&name='+itemx.attrx : 'onOtherPage?to='+itemx.attrx : ' '
      }
    }
    else {
      if (itemx.attrx){
        return {
          // img: {
          //   src: 'https://7373-ss-1-4vn7o-1259184764.tcb.qcloud.la/20140404161957_hRCjn.jpeg?sign=360d0c6b4fe02ab0b59d15a19190fb81&t=1584674925',
          //   itemClass: 'item-pic mb-10-r'
          // },
          title: {
            title: ' ',
            itemClass: 'itemx-icon',
            itemStyle: `--icon2: '${itemx.icon}'; --bg-color2: ${color[jj]}`
          },
          body: [
            {
              title: itemx.littleTitle,
              itemClass: 'color-000'
            },
            {
              title: '展示',
              itemClass: 'btn-work btn-small'
            }
          ],
          bodyClass: 'flex-row-between-center flex-1',
          itemClass: 'item-li',
          itemStyle:  `--bg-color: #fff`,
          aim: itemx.from ? 'onOtherPage?to='+itemx.from+'&name='+itemx.attrx : 'onOtherPage?to='+itemx.attrx
        }
      }
    }
  })
}
const adapterList = (data, type) => {
  let output = []
  data.map((item, ii) => {
    if (type === 'block'){
      output = output.concat(dealData(item.list, type, ii))
    }
    else{
      output.push({
        title: {title: item.title, itemClass: 'title-lg'},
        li: dealData(item.list),
        liClass: 'ii-list'
      })
    }
  })
  return output
}

module.exports = {
  adapterList
  // itemSwiper,
  // adapterItemUpdate,
  // adapterItemSwiper
}