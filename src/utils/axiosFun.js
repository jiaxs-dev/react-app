/**
 * @Author: jiaxiansun@dongao.com
 * @Date: 2020/5/15
 * @Time: 14:15
 * @Description: axios方法封装
 * @Copyright: www.dongao.com@2020
 */

import axios from "axios"
import qs from 'qs'
import {getCookie} from "./commonFun";

let reqget = (url, params) => {
  let token = getCookie("token");
  if (undefined ==params) {
    params = {
      token: token
    }
  } else {
    params["token"] = token;
  }
  return axios({
    method: "get",
    url: url,
    traditional: true,
    params: params,
    paramsSerializer: params => {
      return qs.stringify(params, {indices: false, skipNulls: false})
    }
  }).then(res => res.data)
    .catch(error => {
      console.log("请求" + url + "出错，错误如下：" + error)
    });
}


let reqpost = (url, params) => {
  let token = getCookie("token");
  if (undefined ==params) {
    params = {
      token: token
    }
  } else {
    params["token"] = token;
  }
  return axios({
    method: "post",
    url: url,
    traditional: true,
    data: params
  }).then(res => res.data)
    .catch(error => {
      console.log("请求" + url + "出错，错误如下：" + error)
    });
}


export {
  reqget,
  reqpost
}
