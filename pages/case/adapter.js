const caseListFunc = (data) => {
  let output = []
  data.map( item => {
    output.push({
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
              // title: '分享',
              // aim: 'onShareAppMessage',
              // itemClass: 'item-btn share'
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
      tap: 'openOther?type='+item.type,
      itemClass: 'case-item',
      // itemStyle: 'transform: translate(0, 0)',
    })
  })
  output.unshift({
    title: [
      {
        title: 'SAUI',
        itemClass: 'item-title'
      },
      {
        img: '/images/logo-2.png',
        itemClass: 'item-pic'
      }
    ],
    titleClass: 'flex-row-between-center',
    itemClass: 'case-head'
  })
  //margin无效
  output.push({
    title: ' ',
    itemClass: 'hei-10-r'
  })
  return output
}

const detailFunc = (item) => {
  return {
    title: {
      '@item': {
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
        bodyClass: 'itme-body',
        tap: 'openOther?type='+item.type,
        itemClass: 'case-item'
      }
    }
  }
}

module.exports = {
  caseListFunc,
  detailFunc
}