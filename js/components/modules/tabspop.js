const Pager = require('../aotoo/core/index')
let lib = Pager.lib
const hooks = lib.hooks
const hInst = hooks('hooks-name') // 附带存储storage


function adapter(menus, contents, type, isVal) {
  let output = []
  let autoContent = contents.length ? false : true  // 是否外部传入的数据
  menus.map((item, ii)=>{
    let id = ii + 1

    if (autoContent) {
      contents.push({
        id: 'sw-'+item.id,
        itemClass: !item.status ? 'none' : ''
      })
    } else {
      if (contents[ii] && lib.isObject(contents[ii])) {
        contents[ii].id = 'sw-'+item.id,
        contents[ii].itemClass = type == 'noCut' ? !item.status ? 'tab-item hei-p100 none' : 'tab-item hei-p100' : 'swiper-item'
      } else {
        contents.push({
          id: 'sw-' + item.id,
          itemClass: !item.status ? 'none' : ''
        })
      }
    }
    output.push({
      title: item.title,
      id: 'sc-'+item.id,
      itemClass: item.status && isVal ? 'active hasVal' : item.status ? 'active' : '',
      aim: `onTap?id=${item.id}&title=${item.title}&idx=${ii}`
    })
  })
  return {menus: output, contents: contents}
}

module.exports = function mkTab($$id, opts, type) {

  opts.listClass = 'swiper-content '+(opts.listClass||'')

  let menus = opts.header || []
  let contents = opts.data || []
  let footer = opts.footer || {}
  const getAdapterData = adapter(menus, contents, opts.type, opts.isVal)

  let menusType = {}

  let contentType = {}
  
  if (opts.type === 'noCut') {
    menusType = {
      "is": 'scroll',
      "scroll-y": true,
    }
    contentType = ''
  }
  else {
    menusType = {
      "is": 'scroll',
      "scroll-y": true,
    }

    contentType = {
      is: 'swiper',
      bindchange: 'onSwiperChange',
      circular: false,
      duration: 300,
      vertical: true,
    }
  }

  return {
    $$id: $$id || lib.suid('tabscreen_'),
    listClass: opts.listClass,
    type: contentType,
    header: {
      '@list': {
        id: 'tab-headerx',
        listClass: 'tab-header',
        itemClass: 'tab-item',
        type: menusType,
        data: getAdapterData.menus,
      }
    },
    data: getAdapterData.contents,
    footer: footer,
    methods: {
      // __ready(){ },
      // updateTabs(param) {
      //   const hData = param.header
      //   const data = param.data
      //   const getAdapterData = adapter(hData, data, opts.type)
      //   if (opts.type == 'noCut'){
      //     this.update({'$list.header.@list.data': getAdapterData.menus, '$list.data': getAdapterData.contents})
      //   }
      //   else {
      //     this.update({'$list.header.@list.data': getAdapterData.menus, '$list.data': getAdapterData.contents, "type.current": idx})
      //   }
      // },
      onTap(e, param, inst) {
        let that = this
        let id = 'sw-' + param.id
        let title = param.title
        inst.parent().forEach(item => {
          item.removeClass('active')
          if (item.data.id == 'sc-' + param.id) {
            item.addClass('active')
          }
        })
        
        if (opts.type == 'noCut') {
          inst.parent('swiper-content').forEach(item => {
            item.addClass('none')
            if (item.data.id == id) {
              item.removeClass('none')
              hInst.emit('updateSiblingsData', {inst: item, id: id})
            }
          })
        }
        else {
          const idx = param.idx
          inst.parent('swiper-content').update({"type.current": idx})
          this.isClick = false
        }
      },
      isClick: true, 
      onSwiperChange(e){
        let that = this
        if (this.isClick) {
          const xx = e.detail.currentItemId.substring(3)
          const data = this.find('.tab-header').data[0].getData().data.map(item => {
            item.itemClass = 'item tab-item'
            if (item.id == 'sc-'+xx) {
              if (item.itemClass.indexOf('hasVal') > -1) {
                item.itemClass += ' active hasVal'
              }
              else {
                item.itemClass += ' active'
              }
            }
            return item
          })
          this.find('.tab-header').data[0].update(data)
        }
        else {
          this.isClick = true
        }
      }
    }
  }
}