require("../../runtime.js"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[244],{24:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(s){return typeof s}:function(s){return s&&"function"==typeof Symbol&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s};var i=function(s,t){var e=t.imgClass,i=t.titleClass,a=t.bodyClass,r=t.itemliClass,o=[];return s&&s.length>0&&s.map(function(s){var t=void 0;"object"==l(s.img)?(t=s.img[0],s.img[1]):t=s.img,o.push({img:{src:t,class:e},title:[{title:s.title,class:i},{title:" ",class:"icon-arrows-r color-grey"}],titleClass:a,class:r})}),o};t.default={adapterListSs:function(s,t){var e=t.imgClass,i=t.titleClass,a=t.descClass,r=t.kvitemClass,o=t.hbitemClass,c=t.bodyClass,n=[];return s&&s.length>0&&s.map(function(s){var t=void 0;"object"==l(s.img)?(t=s.img[0],s.img[1]):t=s.img,n.push({img:{src:t,class:e},body:[{k:{title:s.title,class:i},v:{title:s.desc,class:a},kvClass:r,class:o},s.isArrows?{title:[{title:"",class:""},{title:" ",class:"icon-arrows-r color-grey  ml-20-r"}]}:""],bodyClass:c,tap:"onTap?abc=xxx"})}),n},adapterList2Ss:function(s,t){var e=t.imgClass,i=t.titleClass,a=t.descClass,r=(t.hbitemClass,t.itemliClass,t.bodyClass),o=t.imgDotClass,c=[];return s&&s.length>0&&s.map(function(s){var t=void 0;"object"==l(s.img)?(t=s.img[0],s.img[1]):t=s.img,c.push({title:[{img:{src:t,class:e}},s.imgdot?{title:" ",class:o}:""],body:[{k:{title:s.title,class:i},v:{title:"19/03/07",class:"color-grey size12"},kvClass:"flex-row-between-center"},s.desc?{k:{title:s.desc,class:a},v:s.isVoice?{title:" ",class:"icon-silence color-grey size14 ml-20-r"}:"",kvClass:"flex-row-between-center mb-20-r"}:""],bodyClass:r,tap:"onTap?abc=xxx"})}),c},adapterList3Ss:function(s,t){var e=t.imgClass,i=t.titleClass,a=t.bodyClass,r=(t.titledotClass,t.footerdescClass),o=(t.footerdotClass,t.footerimgClass),c=t.footerClass,n=t.itemliClass,m=t.liClass,p=[];return s&&s.length>0&&s.map(function(s){var t=void 0,f=null;"object"==l(s.img)?(t=s.img[0],f=s.img[1]):t=s.img,p.push({img:{src:t,class:e},li:[{body:[{title:s.title,class:i},s.titleDot?{title:s.titleDot,class:"icon-dot ml-r-20"}:""],bodyClass:a,footer:[s.footerDesc?{title:s.footerDesc,class:r}:"",f?{k:{img:{src:f,class:o}},v:{title:" ",class:"icon-dot-small ss-absolute-tr"},kvClass:"ss-relative padding-r-10 ml-10-r"}:"",{icon:{class:"icon-arrows-r color-grey"}}],footerClass:c,class:n}],liClass:m})}),p},adapterList4Ss:i,adapterList5Ss:function(s,t){t.imgClass,t.titleClass,t.bodyClass,t.titledotClass,t.footerdescClass,t.footerdotClass,t.footerimgClass,t.footerClass,t.itemliClass,t.liClass,t.type;var e=[];return s&&s.length>0&&s.map(function(s){s.list&&s.list.length>0&&e.push({li:i(s.list,t)})}),e},adapterList6Ss:function(s,t){var e=t=void 0===t?{}:t,l=(e.imgClass,e.titleClass,e.descClass,e.kvitemClass,e.hbitemClass,e.bodyClass,e.liClass,[]);return s&&s.length>0&&s.map(function(s){l.push({title:[{img:{src:s.productImages,class:"pic-150-r"}},{title:s.departCityName,class:"dot-left-opacity-5"}],titleClass:"ss-relative",li:[{body:[{title:s.propertyIdentity,class:"lhei-38-r title-333 size16 textellipsis-2 fw-bold"},{title:s.productProperties.serviceGuaranteeName?function(s){return(s=s.trim().split(" ")).map(function(s){return{title:s,class:"item-li"}})}(s.productProperties.serviceGuaranteeName):"",titleClass:"color-grey mt-10-r line-li-20"},{title:function(s,t){var e=[],l=new RegExp(" ","g");if("macaohkline"==t){var i=s.productFeaturesName?s.productFeaturesName.trim().replace(l,",").split(","):[],a=s.themeFeaturesName?s.themeFeaturesName.trim().replace(l,",").split(","):[];i.map(function(s){e.push({title:s,class:"tag-fff-ff7e11 mr-10-r mb-10-r"})}),a.map(function(s){e.push({title:s,class:"tag-fff-ff5552 mr-10-r mb-10-r"})})}return e}(s.productProperties,"macaohkline"),titleClass:"flex-row mt-10-r"},{k:{title:"成人结算价",class:"mr-10-r"},v:{title:"实名可见",class:"color-minor"},kvClass:"flex-row color-default"}],bodyClass:"flex-1",footer:[{title:{title:"",class:"icon-arrows-r mr-8-r-m"},class:"color-grey ml-10-r size16"}],class:"ml-20-r flex-1 flex-row-between-center size13"}],tap:"onTap?abc=xxx"})}),l},adapterList7Ss:function(s,t){var e=t=void 0===t?{}:t,l=(e.imgClass,e.titleClass,e.descClass,e.kvitemClass,e.hbitemClass,e.bodyClass,e.liClass,[]);return s&&s.length>0&&s.map(function(s){l.push({title:[{img:{src:s.productImages,class:"item-header-pic"}}],titleClass:"item-header",body:[{title:s.propertyIdentity,class:"lhei-38-r title-333 size16 textellipsis-1 fw-bold"},{k:{title:"结算价",class:"mr-10-r"},v:{title:"实名可见",class:"color-minor"},kvClass:"flex-row color-grey mb-6-r"},{title:"测试品牌名称测试品牌名称测试品牌名称测试-测试企业全称测试企业全称测试企业全称测试企业全称测试企业全称",class:"textellipsis-1 color-default"}],bodyClass:"ml-20-r size12 item-body",tap:"onTap?abc=xxx"})}),l},adapterTreeSs:function(s){var t=[],e=function(e){t.push(function(s,t,e){return t in s?Object.defineProperty(s,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[t]=e,s}({title:{title:e,class:"ss-title"},idf:e,titleClass:"ss-title-flex-between"},"idf",e)),s[e].map(function(l,i){t.push({title:[{img:{src:"https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg",class:"pic-80-r radius-10-r mtb-14-r"}},{title:{title:l.navTitle,class:"hei-p100 flex-row-center"},class:s[e].length-1!=i?"title-333 size16 textellipsis-1 ml-20-r flex-1 bb-default":"title-333 size16 textellipsis-1 ml-20-r flex-1"}],titleClass:"ss-focus flex-row",parent:e,class:"li"})})};for(var l in s)e(l);return t}}}},[[24,0]]]);