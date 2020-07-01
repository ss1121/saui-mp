const caseItemFunc = (item) => {
  return {
    $$id: item.type,
    img: {
      src: item.img,
      itemClass: 'item-pic'
    },
    body: [
      {
        title: item.desc,
        itemClass: 'item-desc'
      },
      {
        title: item.title,
        itemClass: 'item-title'
      }
    ],
    footer: [
      {
        img: {
          src: item.content.ewm,
          itemClass: 'item-footer-pic'
        }
      },
      {
        img: {
          src: item.content.ewm,
          itemClass: 'item-footer-pic'
        }
      },
      {
        img: {
          src: item.content.ewm,
          itemClass: 'item-footer-pic'
        }
      },
      {
        img: {
          src: item.content.ewm,
          itemClass: 'item-footer-pic'
        }
      },
      {
        img: {
          src: item.content.ewm,
          itemClass: 'item-footer-pic'
        }
      },
      {
        title: item.content.title,
        itemClass: 'item-footer-title'
      },
      {
        title: item.content.desc,
        itemClass: 'item-footer-desc'
      },
      {
        title: [
          {
            '@form': {
              data: [{
                input: {
                  id: 'case-share',
                  type: 'button',
                  value: '分享',
                  'open-type': 'share',
                  itemClass: 'item-btn share',
                }
              }]
            }
          },
          {
            title: '保存',
            aim: 'onSavePic?src='+item.content.ewm,
            itemClass: 'item-btn ml-40-r'
          }
        ],
        titleClass: 'flex-row-center mt-80-r'
      }
    ],
    footerClass: 'item-footer',
    bodyClass: 'itme-body',
    aim: ' ',      //$id 可以通过数据 不一定用ii
    itemClass: 'case-item',
    // itemStyle: 'transform: translate(0, 0)',
  }
}

const caseListFunc = (data) => {
  let output = []
  data.map( (item, ii) => {
    output.push({
      $$id: item.type,
      img: {
        src: item.img,
        itemClass: 'item-pic'
      },
      aim: 'openOther?type='+item.type+'&id='+ ii,      //$id 可以通过数据 不一定用ii
      itemClass: 'case-item',
    })
  })
  //margin无效 scroll-list时
  // output.push({
  //   title: ' ',
  //   itemClass: 'hei-10-r'
  // })
  return output
}



module.exports = {
  caseListFunc,
  caseItemFunc
}