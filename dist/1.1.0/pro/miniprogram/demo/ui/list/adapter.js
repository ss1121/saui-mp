require("../../../runtime.js"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[40],{21:function(t,e,s){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var l=function(t,e){};t.exports={adapterListSs:function(t,e){var s=e||{},l=s.imgClass,r=s.titleClass,a=s.descClass,o=s.titleGClass,m=s.itemClass,n=s.bodyClass,c=[];return t&&t.length>0&&t.map(function(t){var e=void 0;"object"==i(t.img)?(e=t.img[0],t.img[1]):e=t.img,c.push({img:{src:e,itemClass:l||"mtb-20-r list-img"},body:[{title:t.desc?[{title:t.title,itemClass:r||"list-title-1"},{title:t.desc,itemClass:a||"list-desc-1"}]:{title:t.title,itemClass:"list-title-1 "+r},titleClass:o,itemClass:m},t.isArrows?{title:" ",itemClass:"icon-arrows-r color-grey ml-20-r"}:""],bodyClass:"ml-20-r ptb-20-r flex-1 "+n,tap:"onTap?abc=xxx"})}),c},adapterList2Ss:function(t,e){var s=e||{},l=s.imgClass,r=s.titleClass,a=s.descClass,o=s.bodyClass,m=s.imgDotClass,n=[];return t&&t.length>0&&t.map(function(t){var e=void 0;"object"==i(t.img)?(e=t.img[0],t.img[1]):e=t.img,n.push({title:t.imgdot?[{img:{src:e,itemClass:l||"list-img"}},{title:" ",itemClass:m}]:{img:{src:e,itemClass:"mtb-20-r "+l||!1}},body:[{title:[{title:t.title,itemClass:r||"list-title-1"},{title:"19/03/07",itemClass:"color-grey size12"}],titleClass:"flex-row-between-center"},t.desc?{title:t.isVoice?[{title:t.desc,itemClass:a||"list-desc-1"},{title:" ",itemClass:"icon-silence color-grey size14 ml-20-r"}]:{title:t.desc,itemClass:a||"list-desc-1"},titleClass:"flex-row-between-center"}:""],titleClass:"ss-relative mtb-20-r",bodyClass:"ml-20-r ptb-20-r flex-1 "+o,tap:"onTap?abc=xxx"})}),n},adapterList3Ss:function(t,e){},adapterList4Ss:l,adapterList5Ss:function(t,e){e.imgClass,e.titleClass,e.bodyClass,e.titledotClass,e.footerdescClass,e.footerdotClass,e.footerimgClass,e.footerClass,e.itemliClass,e.liClass,e.type;var s=[];return t&&t.length>0&&t.map(function(t){t.list&&t.list.length>0&&s.push({li:void t.list})}),s},adapterList6Ss:function(t,e){var s=e||{},i=s.imgClass,l=s.titleClass,r=[];return t&&t.length>0&&t.map(function(t){r.push({title:[{img:{src:t.productImages,itemClass:i||"list-img-lg"}},{title:t.departCityName,itemClass:"dot-left-opacity-5"}],titleClass:"ss-relative",body:[{title:t.propertyIdentity,itemClass:l||"list-title-minor"},{title:t.productProperties.serviceGuaranteeName?function(t){return(t=t.trim().split(" ")).map(function(t){return{title:t,itemClass:"item-li"}})}(t.productProperties.serviceGuaranteeName):"",titleClass:"color-grey mt-10-r line-li-20 xx"},{title:function(t,e){var s=[],i=new RegExp(" ","g");if("macaohkline"==e){var l=t.productFeaturesName?t.productFeaturesName.trim().replace(i,",").split(","):[],r=t.themeFeaturesName?t.themeFeaturesName.trim().replace(i,",").split(","):[];l.map(function(t){s.push({title:t,itemClass:"tag-fff-primary mr-10-r mb-10-r"})}),r.map(function(t){s.push({title:t,itemClass:"tag-fff-minor mr-10-r mb-10-r"})})}return s}(t.productProperties,"macaohkline"),titleClass:"flex-row mt-10-r"},{title:[{title:"成人结算价",itemClass:"mr-10-r"},{title:"实名可见",itemClass:"color-minor"}],titleClass:"flex-row color-default"}],bodyClass:"ml-20-r flex-1 size13",dot:[{title:" ",itemClass:"color-grey ml-10-r size16 icon-arrows-r flex-row-center hei-p100"}],tap:"onTap?abc=xxx"})}),r},adapterList7Ss:function(t,e){var s=e||{},i=(s.imgClass,s.titleClass),l=(s.descClass,s.kvitemClass,s.hbitemClass,s.bodyClass,s.liClass,[]);return t&&t.length>0&&t.map(function(t){l.push({title:[{img:{src:t.productImages,itemClass:"item-header-pic"}}],titleClass:"item-header",body:[{title:t.propertyIdentity,itemClass:i||"list-title-minor"},{title:[{title:"结算价",itemClass:"mr-10-r"},{title:"实名可见",itemClass:"color-minor"}],titleClass:"flex-row color-grey mb-6-r"},{title:"测试品牌名称测试品牌名称测试品牌名称测试-测试企业全称测试企业全称测试企业全称测试企业全称测试企业全称",itemClass:"textellipsis-1 color-default"}],bodyClass:"size12 item-body",tap:"onTap?abc=xxx"})}),l},adapterTreeSs:function(t){var e=[],s=function(s){e.push(function(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}({title:{title:s,itemClass:"ss-title"},idf:s,titleClass:"ss-title-flex-between"},"idf",s)),t[s].map(function(i,l){e.push({title:[{img:{src:"https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg",itemClass:"pic-80-r radius-10-r mtb-14-r"}},{title:{title:i.navTitle,itemClass:"hei-p100 flex-row-center"},itemClass:t[s].length-1!=l?"title-333 size16 textellipsis-1 ml-20-r flex-1 bb-default":"title-333 size16 textellipsis-1 ml-20-r flex-1"}],titleClass:"ss-focus flex-row",parent:s,itemClass:"li"})})};for(var i in t)s(i);return e}}}},[[21,0]]]);