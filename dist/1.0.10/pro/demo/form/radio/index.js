require("../../../runtime.js"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[32],{153:function(t,e,a){"use strict";getApp();var r=a(0);r.lib;r({data:{motto:{data:[{title:"RADIO表单元素",input:[{name:"test_radio",type:"radio",title:"请选择",value:"3",values:["1","2","3","4"],titles:["A","B","C","D"],itemClass:"mt-8-r"},{name:"test_radio1",type:"radio",title:"请选择",value:"2",values:["1","2","3","4"],titles:["A","B","C","D"],itemClass:"mt-8-r",error:"出错信息",desc:"红字是出错提示，这里是提示信息"}]},{title:"动态表单",input:[{id:"test_text",type:"text",title:"标题",placeholder:"响应单选框选中的内容",itemClass:"mt-8-r"},{name:"test_radio1",type:"radio",title:"请选择",value:"1",values:["1","2","3","4"],titles:["A","B","C","D"],itemClass:"mt-8-r",desc:"点击选择触发响应事件",bindchange:"bbb"},{id:"btn_error",type:"button",value:"是否出错",tap:"setError"},{id:"btn_rmv_error",type:"button",value:"清除信息",tap:"rmvError"},{id:"btn_prt_value",type:"button",value:"打印值",tap:"prtValue"}]}]}},bbb:function(t,e,a){if(e)switch(e.inputData.value){case"1":a.value("test_text",{value:"您选中了A"});break;case"2":a.value("test_text",{value:"您选中了B"});break;case"3":a.value("test_text",{value:"您选中了C"});break;case"4":a.value("test_text",{value:"您选中了D"})}},setError:function(t,e,a){var r=a.value("test_radio1");r&&"3"==r.value?(a.removeWarn("test_radio1"),a.addDesc("test_radio1","您选择了正确答案，试试选择其他答案")):(a.removeDesc("test_radio1"),a.addWarn("test_radio1","请选择正确的选项"))},rmvError:function(t,e,a){a.removeDesc("test_radio1"),a.removeWarn("test_radio1")},prtValue:function(t,e,a){console.log(a.value("test_radio1").value)}})}},[[153,0,1]]]);