require("../../runtime.js"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[225],{86:function(e,t,a){"use strict";var i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(85));getApp();var s=a(0),r=s.lib;s({data:{motto:s.item({title:"示例",itemClass:"padding-20-r"}),actionSide1:i.actionSide1,actionSide2:i.actionSide2,actionSide3:i.actionSide3},onLoad:function(e){var t=s.getElementsById("motto");if(e&&r.isObject(e)&&e.demo)switch(e.demo){case"string":t.reset().update(i.stringData);break;case"link":t.reset().update(i.aimData);break;case"icon":t.reset().update(i.iconData);break;case"longpress":t.reset().update(i.longpressData);break;case"titles":t.reset().update(i.titlesData);break;case"pic":t.reset().update(i.onepicData);break;case"pics":t.reset().update(i.picsData);break;case"sort":t.reset().update(i.sortData);break;case"list":t.reset().update(i.listData);break;case"tree":t.reset().update(i.treeData);break;case"actionSide":t.reset().update({title:"","@list":i.buttonForAs});break;case"component":t.reset().update({"@component":{is:"button",title:"一个按钮",class:"button primary"}});break;case"tab":t.reset().update({"@component":{is:"tab",data:i.tabData}})}},aim:function(e,t,a){var r=e.currentTarget.dataset,n=r.aim,c=r._query,l=this.getElementsById("actionSide1"),o=this.getElementsById("actionSide2"),d=this.getElementsById("actionSide3"),p=this.getElementsById("mytree");this.getElementsById("mytree2");switch(n){case"inner-response":s.alert("点我干什么!");break;case"open_diytour":!function(){var e=c&&c.direction||"right";l.reset()[e](i.diytourData)}();break;case"open_diytourx":!function(){var e=c&&c.direction||"right";l.reset()[e](i.diytour2Data)}();break;case"as-full":!function(){var e=c&&c.direction||"right";l.reset()[e]({title:[{title:"弹窗1",class:"h2"},{title:"支持多弹窗，灵活属性设置可以实现多种弹窗效果",class:"h6",style:"margin: 0 0 50rpx 0;"},{title:"打开第二个弹窗",aim:"open-as2?abc=123"}]})}();break;case"open-as2":o.reset().right({title:[{title:"弹窗2",class:"h2"},{title:"支持多弹窗，灵活属性设置可以实现多种弹窗效果",class:"h6",style:"margin: 0 0 50rpx 0;"},{title:"打开第三个弹窗",aim:"open-as3"}]});break;case"open-as3":d.right({title:[{title:"弹窗3",class:"h2"},{title:"支持多弹窗，灵活属性设置可以实现多种弹窗效果",class:"h6",style:"margin: 0 0 50rpx 0;"},{title:"关闭所有弹窗",aim:"close-as-full"}]});break;case"open-bar":!function(){var e=c&&c.direction||"right";l[e]({class:"bar",title:[{title:"弹窗1",class:"h2"},{title:"支持多弹窗，灵活属性设置可以实现多种弹窗效果",class:"h6",style:"margin: 0 0 50rpx 0;"},{title:"打开第二个弹窗",aim:"open-as2"}]})}();break;case"close-as-full":l.hide(),o.hide(),d.hide();break;case"tree-append":p.append({title:{title:"hahah",class:"h6 block"},parent:"level_4"});break;case"tree-prepend":p.prepend({title:{title:"ni mei",class:"h6 block"}})}},"tree-hide":function(e,t,a){var i=this.getElementsById("mytree"),s=e.currentTarget.dataset.treeid;i.children[s].toggle()},onLongPress:function(e,t,a){s.alert("我是长按响应")},onTap:function(e,t,a){s.alert("haha")},"mytree-delete":function(e,t,a){var i=this.getElementsById("mytree"),s=e.currentTarget.dataset;i.delete(s.treeid)},hideLevel1:function(e,t,a){this.getElementsById("mytree").children.level3.hide()}})}},[[86,0,1]]]);