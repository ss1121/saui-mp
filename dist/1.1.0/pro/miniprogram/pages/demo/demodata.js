require("../../runtime.js"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[233,231,232],{24:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var l=function(t,e){var i=e.imgClass,l=e.titleClass,a=e.bodyClass,r=e.itemliClass,o=[];return t&&t.length>0&&t.map(function(t){var e=void 0;"object"==s(t.img)?(e=t.img[0],t.img[1]):e=t.img,o.push({img:{src:e,class:i},title:[{title:t.title,class:l},{title:" ",class:"icon-arrows-r color-grey"}],titleClass:a,class:r})}),o};e.default={adapterListSs:function(t,e){var i=e.imgClass,l=e.titleClass,a=e.descClass,r=e.kvitemClass,o=e.hbitemClass,c=e.bodyClass,m=[];return t&&t.length>0&&t.map(function(t){var e=void 0;"object"==s(t.img)?(e=t.img[0],t.img[1]):e=t.img,m.push({img:{src:e,class:i},body:[{k:{title:t.title,class:l},v:{title:t.desc,class:a},kvClass:r,class:o},t.isArrows?{title:[{title:"",class:""},{title:" ",class:"icon-arrows-r color-grey  ml-20-r"}]}:""],bodyClass:c,tap:"onTap?abc=xxx"})}),m},adapterList2Ss:function(t,e){var i=e.imgClass,l=e.titleClass,a=e.descClass,r=(e.hbitemClass,e.itemliClass,e.bodyClass),o=e.imgDotClass,c=[];return t&&t.length>0&&t.map(function(t){var e=void 0;"object"==s(t.img)?(e=t.img[0],t.img[1]):e=t.img,c.push({title:[{img:{src:e,class:i}},t.imgdot?{title:" ",class:o}:""],body:[{k:{title:t.title,class:l},v:{title:"19/03/07",class:"color-grey size12"},kvClass:"flex-row-between-center"},t.desc?{k:{title:t.desc,class:a},v:t.isVoice?{title:" ",class:"icon-silence color-grey size14 ml-20-r"}:"",kvClass:"flex-row-between-center mb-20-r"}:""],bodyClass:r,tap:"onTap?abc=xxx"})}),c},adapterList3Ss:function(t,e){var i=e.imgClass,l=e.titleClass,a=e.bodyClass,r=(e.titledotClass,e.footerdescClass),o=(e.footerdotClass,e.footerimgClass),c=e.footerClass,m=e.itemliClass,n=e.liClass,p=[];return t&&t.length>0&&t.map(function(t){var e=void 0,d=null;"object"==s(t.img)?(e=t.img[0],d=t.img[1]):e=t.img,p.push({img:{src:e,class:i},li:[{body:[{title:t.title,class:l},t.titleDot?{title:t.titleDot,class:"icon-dot ml-r-20"}:""],bodyClass:a,footer:[t.footerDesc?{title:t.footerDesc,class:r}:"",d?{k:{img:{src:d,class:o}},v:{title:" ",class:"icon-dot-small ss-absolute-tr"},kvClass:"ss-relative padding-r-10 ml-10-r"}:"",{icon:{class:"icon-arrows-r color-grey"}}],footerClass:c,class:m}],liClass:n})}),p},adapterList4Ss:l,adapterList5Ss:function(t,e){e.imgClass,e.titleClass,e.bodyClass,e.titledotClass,e.footerdescClass,e.footerdotClass,e.footerimgClass,e.footerClass,e.itemliClass,e.liClass,e.type;var i=[];return t&&t.length>0&&t.map(function(t){t.list&&t.list.length>0&&i.push({li:l(t.list,e)})}),i},adapterList6Ss:function(t,e){var i=e=void 0===e?{}:e,s=(i.imgClass,i.titleClass,i.descClass,i.kvitemClass,i.hbitemClass,i.bodyClass,i.liClass,[]);return t&&t.length>0&&t.map(function(t){s.push({title:[{img:{src:t.productImages,class:"pic-150-r"}},{title:t.departCityName,class:"dot-left-opacity-5"}],titleClass:"ss-relative",li:[{body:[{title:t.propertyIdentity,class:"lhei-38-r title-333 size16 textellipsis-2 fw-bold"},{title:t.productProperties.serviceGuaranteeName?function(t){return(t=t.trim().split(" ")).map(function(t){return{title:t,class:"item-li"}})}(t.productProperties.serviceGuaranteeName):"",titleClass:"color-grey mt-10-r line-li-20"},{title:function(t,e){var i=[],s=new RegExp(" ","g");if("macaohkline"==e){var l=t.productFeaturesName?t.productFeaturesName.trim().replace(s,",").split(","):[],a=t.themeFeaturesName?t.themeFeaturesName.trim().replace(s,",").split(","):[];l.map(function(t){i.push({title:t,class:"tag-fff-ff7e11 mr-10-r mb-10-r"})}),a.map(function(t){i.push({title:t,class:"tag-fff-ff5552 mr-10-r mb-10-r"})})}return i}(t.productProperties,"macaohkline"),titleClass:"flex-row mt-10-r"},{k:{title:"成人结算价",class:"mr-10-r"},v:{title:"实名可见",class:"color-minor"},kvClass:"flex-row color-default"}],bodyClass:"flex-1",footer:[{title:{title:"",class:"icon-arrows-r mr-8-r-m"},class:"color-grey ml-10-r size16"}],class:"ml-20-r flex-1 flex-row-between-center size13"}],tap:"onTap?abc=xxx"})}),s},adapterList7Ss:function(t,e){var i=e=void 0===e?{}:e,s=(i.imgClass,i.titleClass,i.descClass,i.kvitemClass,i.hbitemClass,i.bodyClass,i.liClass,[]);return t&&t.length>0&&t.map(function(t){s.push({title:[{img:{src:t.productImages,class:"item-header-pic"}}],titleClass:"item-header",body:[{title:t.propertyIdentity,class:"lhei-38-r title-333 size16 textellipsis-1 fw-bold"},{k:{title:"结算价",class:"mr-10-r"},v:{title:"实名可见",class:"color-minor"},kvClass:"flex-row color-grey mb-6-r"},{title:"测试品牌名称测试品牌名称测试品牌名称测试-测试企业全称测试企业全称测试企业全称测试企业全称测试企业全称",class:"textellipsis-1 color-default"}],bodyClass:"ml-20-r size12 item-body",tap:"onTap?abc=xxx"})}),s},adapterTreeSs:function(t){var e=[],i=function(i){e.push(function(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}({title:{title:i,class:"ss-title"},idf:i,titleClass:"ss-title-flex-between"},"idf",i)),t[i].map(function(s,l){e.push({title:[{img:{src:"https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg",class:"pic-80-r radius-10-r mtb-14-r"}},{title:{title:s.navTitle,class:"hei-p100 flex-row-center"},class:t[i].length-1!=l?"title-333 size16 textellipsis-1 ml-20-r flex-1 bb-default":"title-333 size16 textellipsis-1 ml-20-r flex-1"}],titleClass:"ss-focus flex-row",parent:i,class:"li"})})};for(var s in t)i(s);return e}}},25:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={listDatax:[{title:"你在搞笑是吧 title1",img:"https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg",desc:"Ant Design,is refined by Ant UED Team",content:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",isVoice:!1,imgdot:!1},{title:"你在搞笑是吧 title2",img:"https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg",desc:"高效能磁悬浮声波马达 高密度无锈无金属植毛刷头 个性定制多种刷牙模式 刷牙姿势识别与报告生成",content:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",isVoice:!0,imgdot:!0},{title:"你在搞笑是吧 title3",img:"https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg",desc:"",content:"",isVoice:!1,imgdot:!1}],listData2x:[{title:"朋友圈",parents:"1",img:["https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg","https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg"]},{title:"扫一扫",parents:"2",img:["https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg","https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg"]},{title:"摇一摇",parents:"2",img:["https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg","https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg"],footerDesc:"王者荣耀"}],listData1xx:{F:[{isSearchPoi:1,releaseTimes:1,sortIndex:100,customLevel:1,idLinks:"6429 20887 6435",operatType:5,parentId:20887,isSinglePoi:1,navTitleLinks:"广东省,佛山市,",isMultiPoi:2,poiType:1,id:6435,poiId:440600,isSelectedPoi:1,navTitle:"佛山市"}],G:[{isSearchPoi:1,releaseTimes:60,sortIndex:120,customLevel:1,idLinks:"6429 20887 6430",operatType:5,parentId:20887,isSinglePoi:1,navTitleLinks:"广东省,广州市,",isMultiPoi:2,poiType:1,id:6430,poiId:440100,isSelectedPoi:1,navTitle:"广州市"}],H:[{isSearchPoi:1,releaseTimes:4,sortIndex:70,customLevel:1,idLinks:"6429 20887 6440",operatType:5,parentId:20887,isSinglePoi:1,navTitleLinks:"广东省,惠州市,",isMultiPoi:2,poiType:1,id:6440,poiId:441300,isSelectedPoi:1,navTitle:"惠州市"},{isSearchPoi:1,releaseTimes:0,sortIndex:55,customLevel:1,idLinks:"6429 20887 6443",operatType:5,parentId:20887,isSinglePoi:1,navTitleLinks:"广东省,河源市,",isMultiPoi:2,poiType:1,id:6443,poiId:441600,isSelectedPoi:1,navTitle:"河源市"}],J:[{isSearchPoi:1,releaseTimes:0,sortIndex:80,customLevel:1,idLinks:"6429 20887 6436",operatType:5,parentId:20887,isSinglePoi:1,navTitleLinks:"广东省,江门市,",isMultiPoi:2,poiType:1,id:6436,poiId:440700,isSelectedPoi:1,navTitle:"江门市"},{isSearchPoi:1,releaseTimes:0,sortIndex:25,customLevel:1,idLinks:"6429 20887 6450",operatType:5,parentId:20887,isSinglePoi:1,navTitleLinks:"广东省,揭阳市,",isMultiPoi:2,poiType:1,id:6450,poiId:445200,isSelectedPoi:1,navTitle:"揭阳市"}]},listData4x:[{title:"你在搞笑是吧 title1",img:"https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg",desc:"Ant Design,is refined by Ant UED Team",isArrows:!0},{title:"你在搞笑是吧 title2",img:"https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg",desc:"高效能磁悬浮声波马达 高密度无锈无金属植毛刷头 个性定制多种刷牙模式 刷牙姿势识别与报告生成",isArrows:!0},{title:"你在搞笑是吧 title3",img:"https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg",desc:"",isArrows:!0}],listData5x:[{list:[{title:"朋友圈",parents:"1",img:["https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg","https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg"]}]},{list:[{title:"扫一扫",parents:"2",img:["https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg","https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg"]},{title:"摇一摇",parents:"2",img:["https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg","https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg"],footerDesc:"王者荣耀"}]}],listData2xx:[{departCityName:"香港",productProperties:{productFeatures:"5",productFeaturesName:"慢游 ",themeFeaturesName:"温泉 ",playLineName:"珠海+澳门+香港 ",themeFeatures:"23",serviceGuarantee:"1 2 3 4",serviceGuaranteeName:"天天出发 保证成团 无购物 无自费 ",playLine:"1"},propertyIdentity:"新界+离岛 3天2晚 跟团游 + 88004",productSubTitle:"+ 88004",departCityCode:"810100",productTitle:"新界+离岛 3天2晚 跟团游",productImages:"https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg",productCategoryId:140,productCode:"00019705",topStatus:1,days:"3天2晚",id:18580,shopId:45},{departCityName:"香港",productProperties:{productFeatures:"5",productFeaturesName:"慢游 ",themeFeaturesName:"温泉 ",playLineName:"珠海+澳门+香港 ",themeFeatures:"23",serviceGuarantee:"1 2 3 4",serviceGuaranteeName:"天天出发 保证成团 无购物 无自费 ",playLine:"1"},propertyIdentity:"澳门半岛 5天4晚 跟团游 + 88006",productSubTitle:"+ 88006",departCityCode:"810100",productTitle:"澳门半岛 5天4晚 跟团游",productImages:"https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg",productCategoryId:140,productCode:"00019709",topStatus:1,days:"5天4晚",id:18584,shopId:45},{departCityName:"珠海",productProperties:{productFeatures:"1",productFeaturesName:"轻奢 ",themeFeaturesName:"亲子 ",playLineName:"澳门+香港 ",themeFeatures:"20",serviceGuarantee:"1",serviceGuaranteeName:"天天出发 ",playLine:"2"},propertyIdentity:"香港 2天1晚 跟团游 测试港珠澳专线 + 88001",productSubTitle:"测试港珠澳专线 + 88001",departCityCode:"440400",productTitle:"香港 2天1晚 跟团游",productImages:"https://img.alicdn.com/imgextra/i1/2549841410/TB2ay__kaagSKJjy0FhXXcrbFXa_!!2549841410.jpg_430x430q90.jpg",productCategoryId:140,productCode:"00019699",topStatus:1,days:"2天1晚",id:18574,shopId:45}]}},31:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.diytour2Data=e.diytourData=e.tabData=e.listDiytour=e.actionSide3=e.actionSide2=e.actionSide1=e.buttonForAs=e.treeData=e.listData=e.sortData=e.picsData=e.onepicData=e.titlesData=e.longpressData=e.iconData=e.aimData=e.stringData=void 0;var s=a(i(25)),l=a(i(24));function a(t){return t&&t.__esModule?t:{default:t}}e.stringData={title:[{title:"字符串",class:"h2"},{title:"自定义字符串",class:"h6",style:"margin: 0 0 50rpx 0;"},{title:"据悉，一年前该机构的研究就展示出相比于传统娱乐行业，互联网及其各种平台是如何让更多内容创作者赚取了更多利润。而这次研究直接关注了许多小的自媒体。该群体不同于阿里安娜·格兰德(Ariana Grande)或德韦恩·约翰逊(Dwayne Johnson)等主流明星，后者主要通过Instagram品牌赞助、YouTube收入分成等方式获得了大量收入。而在互联网蓬勃发展之前，很多自媒体根本赚不到钱"}]},e.aimData={title:[{title:"aim指令",class:"h2"},{title:"aim指令能够很灵活的为结构设置tap事件",class:"h6",style:"margin: 0 0 50rpx 0;"},{title:"点我试试",aim:"inner-response"}]},e.iconData={title:[{title:"ICON",class:"h2",style:"margin: 0 0 50rpx 0; display: block;"},{icon:"icon-rili"},{icon:{class:"icon-mingpian",style:"font-size: 32px; margin-left: 5px;"}}]},e.longpressData={title:[{title:"longpress",class:"h2",style:"margin: 0 0 50rpx 0; display: block;"},{title:"长按我",class:"button primary",style:"width: 200rpx;",aim:"xxx"}],longpress:"onLongPress?b=1&c=2&d=3",tap:"onTap?abc=xxx"},e.titlesData={title:[{title:"标题数组",class:"h2",style:"margin: 0 0 50rpx 0; display: block;"},{title:"标题一",class:"h1",aim:"x"},{title:"标题二",class:"h2",aim:"x"},{title:"标题三",class:"h3",aim:"x"},{title:"标题四",class:"h4",aim:"x"},{title:"标题五",class:"h5",aim:"x"},{title:"标题六",class:"h6",aim:"x"}]},e.onepicData={title:{title:"一张图片",class:"h2",style:"margin: 0 0 50rpx 0; display: block;"},img:{src:"https://img13.360buyimg.com/n7/jfs/t1/3/15/4536/138660/5b997bf8Ed72ebce7/819dcf182d743897.jpg",aim:"http://www.agzgz.com",mode:"widthFix"}},e.picsData={title:{title:"一组图片",class:"h2",style:"margin: 0 0 50rpx 0; display: block;"},img:[{src:"https://img13.360buyimg.com/n7/jfs/t1/3/15/4536/138660/5b997bf8Ed72ebce7/819dcf182d743897.jpg",aim:"x",style:"width: 80vw; display: block; margin-top: 1vh;"},{src:"https://img13.360buyimg.com/n7/jfs/t1/3/15/4536/138660/5b997bf8Ed72ebce7/819dcf182d743897.jpg",aim:"x",style:"width: 60vw; display: block; margin-top: 1vh;"},{src:"https://img13.360buyimg.com/n7/jfs/t1/3/15/4536/138660/5b997bf8Ed72ebce7/819dcf182d743897.jpg",aim:"x",style:"width: 40vw; display: block; margin-top: 1vh;"}]},e.sortData={title:[{title:"自定义排序",class:"h2"},{title:"通过上下移动属性值来调整位置",class:"h6",style:"margin: 0 0 50rpx 0;"}],body:[{img:{src:"https://img13.360buyimg.com/n7/jfs/t1/3/15/4536/138660/5b997bf8Ed72ebce7/819dcf182d743897.jpg",aim:"x",style:"width: 80vw; display: block; margin-top: 1vh;"},title:"图片标题",class:"h4",k:{title:"属性key：",class:"h6"},v:{title:"属性key的属性描述",class:"h6"}},{title:{title:"--------- ",style:"display: block; margin: 40rpx 0 50rpx 0; color: #fcfcfc;"}},{title:"图片标题",k:{title:"属性key：",class:"h6"},v:{title:"属性key的属性描述",class:"h6"},img:{src:"https://img13.360buyimg.com/n7/jfs/t1/3/15/4536/138660/5b997bf8Ed72ebce7/819dcf182d743897.jpg",aim:"x",style:"width: 80vw; display: block; margin-top: 1vh;"},class:"h4"}]},e.listData={itemClass:"x",title:[{"@item":{title:[{title:"效果1",class:"item-titlex"},{title:"ss",class:"item-descx"}],class:"bg-title-f3f3f3"}},{"@list":{listClass:"bb-e3e3e3-list-hbody",itemClass:"plr-20-r ss-focus flex-row",data:l.default.adapterListSs(s.default.listDatax,{imgClass:"pic-120-r radius-10-r mtb-20-r",titleClass:"title-333 size16 textellipsis-1",descClass:"color-grey textellipsis-1 size14",bodyClass:"ml-20-r ptb-20-r flex-1"})}},{"@list":{listClass:"bb-e3e3e3-list-hbody",itemClass:"plr-20-r ss-focus flex-row",data:l.default.adapterListSs(s.default.listData4x,{imgClass:"pic-120-r radius-10-r mtb-20-r",titleClass:"title-333 size16 textellipsis-1",descClass:"color-grey textellipsis-1 size14",kvitemClass:"hei-p100 flex-column-between",hbitemClass:"hei-p100",bodyClass:"ml-20-r ptb-20-r flex-1 flex-row-between-center"})}},{"@item":{title:[{title:"效果2",class:"item-titlex"},{title:"ss",class:"item-descx"}],class:"bg-title-f3f3f3"}},{"@list":{itemClass:"padding-20-r item-normal-row",data:l.default.adapterListSs(s.default.listData2x,{imgClass:"pic-120-r radius-10-r",titleClass:"title-333 size16 textellipsis-1",descClass:"color-grey textellipsis-1 size14",kvitemClass:"hkv-around"})}},{"@item":{body:[{title:[{title:"",class:"icon-1 mr-10-r size16 color-primary"},{title:"效果3",class:"item-titlex"}]},{title:"ss",class:"item-descx"}],bodyClass:"bg-title-body-f3f3f3"}},{"@list":{itemClass:"plr-20-r ss-focus flex-row",data:l.default.adapterList2Ss(s.default.listDatax,{imgClass:"pic-80-r radius-10-r mtb-20-r",titleClass:"title-333 size16 textellipsis-1",descClass:"color-grey textellipsis-1 size14",bodyClass:"flex-1 pt-20-r ml-20-r bb-default",imgDotClass:"icon-dot-small ss-absolute-tr"})}},{"@item":{body:[{title:[{title:"",class:"icon-2 mr-10-r size16 color-primary"},{title:"效果4",class:"item-titlex"}]},{title:"ss",class:"item-descx"}],bodyClass:"bg-title-body-f3f3f3"}},{"@list":{itemClass:"plr-20-r ss-focus flex-row bb-e3e3e3-item-line",data:l.default.adapterList3Ss(s.default.listData2x,{imgClass:"pic-80-r radius-10-r mtb-20-r",titleClass:"title-333 size16 textellipsis-1",bodyClass:"flex-row-center",footerdescClass:"color-grey size14",footerimgClass:"pic-40-r",footerClass:"flex-row-center",itemliClass:"flex-row-between-center hei-p100",liClass:"hei-120-r ml-20-r flex-1 item-line"})}},{"@item":{body:[{title:[{title:"",class:"icon-2 mr-10-r size16 color-primary"},{title:"效果5",class:"item-titlex"}]},{title:"ss",class:"item-descx"}],bodyClass:"bg-title-body-f3f3f3"}},{"@list":{data:l.default.adapterList4Ss(s.default.listData2x,{imgClass:"pic-80-r radius-10-r mtb-20-r",titleClass:"title-333 size16 textellipsis-1",bodyClass:"flex-row-between-center hei-120-r ml-20-r flex-1 item-line",itemliClass:"plr-20-r ss-focus flex-row bb-e3e3e3-item-line"})}},{"@item":{body:[{title:[{title:"",class:"icon-2 mr-10-r size16 color-primary"},{title:"效果6",class:"item-titlex"}]},{title:"ss",class:"item-descx"}],bodyClass:"bg-title-body-f3f3f3"}},{"@list":{listClass:"bg-f3f3f3",itemClass:"mb-20-r bg-fff",data:l.default.adapterList5Ss(s.default.listData5x,{imgClass:"pic-80-r radius-10-r mtb-20-r",titleClass:"title-333 size16 textellipsis-1",bodyClass:"flex-row-between-center hei-120-r ml-20-r flex-1 item-line",itemliClass:"plr-20-r ss-focus flex-row bb-e3e3e3-item-line"})}},{"@item":{body:[{title:[{title:"",class:"icon-2 mr-10-r size16 color-primary"},{title:"效果7",class:"item-titlex"}]},{title:"ss",class:"item-descx"}],bodyClass:"bg-title-body-f3f3f3"}},{title:{title:"点击有惊喜",aim:"open_diytour?direction=bot",class:"padding-20-r"}},{"@item":{body:[{title:[{title:"",class:"icon-2 mr-10-r size16 color-primary"},{title:"效果8",class:"item-titlex"}]},{title:"ss",class:"item-descx"}],bodyClass:"bg-title-body-f3f3f3"}},{title:{title:"点击有惊喜2",aim:"open_diytourx?direction=bot",class:"padding-20-r"}}]},e.treeData={title:[{title:"树结构",class:"h2"},{title:"支持4层树，树结构需特定数据结构",class:"h6",style:"margin: 0 0 50rpx 0;"},{"@item":{body:[{title:[{title:"",class:"icon-2 mr-10-r size16 color-primary"},{title:"效果1",class:"item-titlex"}]},{title:"ss",class:"item-descx"}],bodyClass:"bg-title-body-f3f3f3"}},{"@tree":{$$id:"mytree",data:[{title:{title:"层级一",class:"h6"},idf:"level_1"},{title:{title:"content",class:"h6"},parent:"level_1"},{title:{title:"层级二",class:"h6"},parent:"level_1",idf:"level_2",aim:"abc"},{title:{title:"点击删除本行",class:"h6",style:"text-decoration: underline;"},parent:"level_2",tap:"mytree-delete"},{title:{title:"content",class:"h6"},parent:"level_2"},{title:{title:"层级三，点我折叠",class:"h6"},parent:"level_2",idf:"level_3",tap:"tree-hide"},{title:{title:"content",class:"h6"},parent:"level_3"},{title:{title:"content",class:"h6"},parent:"level_3"},{title:{title:"层级四",class:"h6"},parent:"level_3",idf:"level_4"},{title:{title:"content",class:"h6"},parent:"level_4"},{title:{title:"content",class:"h6"},parent:"level_4"},{title:{title:"content",class:"h6"},parent:"level_4"}]}},{"@item":{title:[{title:"append",class:"button primary",aim:"tree-append"},{title:"prepend",class:"button primary",aim:"tree-prepend"}]}},{"@item":{body:[{title:[{title:"",class:"icon-2 mr-10-r size16 color-primary"},{title:"效果2",class:"item-titlex"}]},{title:"ss",class:"item-descx"}],bodyClass:"bg-title-body-f3f3f3 mt-20-r"}},{"@tree":{$$id:"mytree2",listClass:"ss-tree-hierarchy",data:l.default.adapterTreeSs(s.default.listData1xx)}}]},e.buttonForAs={data:[{title:[{title:"fullscreen-right",class:"item"},{title:"全屏侧弹窗-右侧",aim:"as-full",class:"item icon-arrows-r"}]},{title:[{title:"fullscreen-left",class:"item"},{title:"全屏侧弹窗-左侧",aim:"as-full?direction=left",class:"item icon-arrows-r"}]},{title:[{title:"fullscreen-bottom",class:"item"},{title:"全屏侧弹窗-底弹",aim:"as-full?direction=bot",class:"item icon-arrows-r"}]},{title:[{title:"fullscreen-top",class:"item"},{title:"全屏侧弹窗-顶弹",aim:"as-full?direction=top",class:"item icon-arrows-r"}]},{title:[{title:"bar-right",class:"item"},{title:"弹半框-右侧",aim:"open-bar",class:"item icon-arrows-r"}]},{title:[{title:"bar-left",class:"item"},{title:"弹半框-左侧",aim:"open-bar?direction=left",class:"item icon-arrows-r"}]},{title:[{title:"bar-bot",class:"item"},{title:"弹半框-底侧",aim:"open-bar?direction=bot",class:"item icon-arrows-r"}]},{title:[{title:"bar-top",class:"item"},{title:"弹半框-顶侧",aim:"open-bar?direction=top",class:"item icon-arrows-r"}]}],itemClass:"li item-normal",listClass:"ul"},e.actionSide1={id:"actionSide1",title:[{title:"打开新侧弹",aim:"open_as2"}]},e.actionSide2={id:"actionSide2",title:"侧弹2"},e.actionSide3={id:"actionSide3",title:"侧弹3"},e.listDiytour={id:"listDiytour",title:"侧弹3"},e.tabData={data:[{title:"aaa",content:"aaa-content"},{title:"bbb",content:"bbb-content"},{title:"ccc",content:"ccc-content"}]},e.diytourData={"@list":{listClass:"bs-e3e3e3-list",itemClass:"ss-focus flex-row item padding-normal",data:l.default.adapterList6Ss(s.default.listData2xx)}},e.diytour2Data={"@list":{listClass:"list-pic-column pic-2",itemClass:"ss-focus item-li",data:l.default.adapterList7Ss(s.default.listData2xx)}}}},[[31,0]]]);