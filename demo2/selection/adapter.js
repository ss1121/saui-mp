const selectionAllAdapter = (data, data2) => {
  let output = []
  let xx = false
  data.map( item => {
    if (!xx){
      output.unshift({
        title: {
          title: item.cfrl,
          itemClass: 'color-primary ss-block ss-sticky ptb-20-r bg-fff ml-20-r'
        },
        idf: item.cfrl
      })
      xx = item.cfrl
    }
    else {
      item.cfrl != xx ? xx = false : xx
    }
    output.push({
      img: {
        src: item.logo,
        itemClass: 'pic-80-r'
      },
      title: {
        title: item.cname,
        itemClass: 'color-active size18 lhei-60-r ml-40-r'
      },
      parent: item.cfrl,
      itemClass: 'ptb-20-r bb-default flex-row-start-center',
    })
  })
  output.sort((a,b) => {
    return a.title.title.charCodeAt(0) - b.title.title.charCodeAt(0);
  });
  return output
}

module.exports = {
  selectionAllAdapter,
}