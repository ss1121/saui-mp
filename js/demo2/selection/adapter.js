const selectionAllAdapter = (data, data2) => {
  let output = []
  let output2 = []
  let xx = false
  data.map( item => {
    output2.push({
      title: {
        title: item.cname,
        itemClass: 'color-active size18 lhei-60-r ml-40-r'
      },
      // parent: item.cfrl,
      itemClass: 'ptb-20-r bb-default flex-row-start-center',
    })
    if (!xx){
      output.unshift({
        title: {
          title: item.cfrl.toUpperCase(),
          itemClass: 'color-primary ss-block ss-sticky padding-20-r bg-fff'
        },
        id: item.cfrl.toUpperCase(),
        li: output2
        // idf: item.cfrl
      })
      xx = item.cfrl
    }
    else {
      item.cfrl != xx ? xx = false : xx
    }
  })
  output.sort((a,b) => {
    return a.title.title.charCodeAt(0) - b.title.title.charCodeAt(0);
  });
  return output
}

module.exports = {
  selectionAllAdapter,
}