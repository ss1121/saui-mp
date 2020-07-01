/*
 *
 * 相关文档链接:
 * 微信文本内容安全接口文档https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/sec-check/security.msgSecCheck.html
 * access_token获取调用凭证文档
https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/access-token/auth.getAccessToken.html
 *
 * request-promise使用文档: https://github.com/request/request-promise
 *
 */
 
const APPID = "wx6dfd3ea360d61f4d";
const APPSECRET = "2024e24206ffd3bd438af5ca6e4bc397";
 
const msgCheckURL = `https://api.weixin.qq.com/wxa/msg_sec_check?access_token=`;
// 向下面的这个地止发送请求,携带appid和appsecret参数,获取token认证
const tokenURL = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${APPID}&secret=${APPSECRET}`
// 云函数入口文件
const cloud = require('wx-server-sdk')
 
cloud.init()
 
// 引入request-promise
const rp = require('request-promise');
 
// 云函数入口函数
exports.main = async(event, context) => {
  try {
    let tokenResponse = await rp(tokenURL);
    // 获取token值,因为返回的结果是字符串,需要用JSON.parse转化为json对象
    let getAccessToken = JSON.parse(tokenResponse).access_token;
    // 请求微信内容安全接口,post请求,返回最终的校验结果
    let checkResponse = await rp({
      method: 'POST',
      url: `${msgCheckURL}${getAccessToken}`,
      body: {
        content: event.content // 这里的event.content是小程序端传过来的值,content是要向内容接口校验的内容
      },
      json: true
    })
 
    // 有必要根据错误码,确定内容是否违规
    if (checkResponse.errcode == 87014) {
      return {
        code: 500,
        msg: "内容含有违法违规内容",
        data: checkResponse
      }
    } else {
      return {
        code: 200,
        msg: "内容OK",
        data: checkResponse
      }
    }
  } catch (err) {
    if (err.errcode == 87014) {
      return {
        code: 500,
        msg: '内容含有违法违规内容',
        data: err
      }
    } else {
      return {
        code: 502,
        msg: '调用msgCheckURL接口异常',
        data: err
      }
    }
  }
}