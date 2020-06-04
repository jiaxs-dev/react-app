/**
 * @Author: jiaxiansun@dongao.com
 * @Date: 2020/1/21
 * @Time: 10:36
 * @Description: 公共js
 * @Copyright: www.dongao.com@2020
 */

/**
 * 存储localStorage
 */
const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
const getStore = name => {
  if (!name) return;
  return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
const removeStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
}

/**
 * 设置cookie
 * 有效时间为分钟
 **/
function setCookie(name, value, minute) {
  let date = new Date();
  date.setTime(date.getTime() + minute * 60 * 1000);
  console.log(date.toGMTString())
  document.cookie = name + '=' + value + ';expires=' + date.toGMTString();
};

/**
 * 获取cookie
 **/
function getCookie(name) {
  let reg = RegExp(name + '=([^;]+)');
  let arr = document.cookie.match(reg);
  if (arr) {
    return arr[1];
  } else {
    return '';
  }
};

/**
 * 删除cookie
 **/
function removeCookie(name) {
  setCookie(name, "", -1);
};

/**
 * 字符串截取
 * @param str
 * @param length
 * @returns {string}
 */
function substr(str, length) {
  return str.length > length ? str.substring(0, length) : str;
}

function utc2local(str) {
  return undefined == str || "" == str ? "--" : new Date(str).toLocaleString();
}

function utc2local_d(str) {
  return undefined == str || "" == str ? "--" : new Date(str).format("yyyy-MM-dd");
}

function utc2local_s(str) {
  return undefined == str || "" == str ? "--" : new Date(str).format("yyyy-MM-dd hh:mm:ss");
}

/**
 *对Date的扩展，将 Date 转化为指定格式的String
 *月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 *年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 *例子：
 *(new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 *(new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
 */
Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

function valueCheck(value) {
  return value == undefined || "" == value ? "无" : value
}

function isNotBlank(str) {
  return null != str && undefined != str && "" != str ? true : false
}

export {
  isNotBlank,
  substr,
  setStore,
  getStore,
  removeStore,
  setCookie,
  getCookie,
  removeCookie,
  utc2local,
  utc2local_d,
  utc2local_s,
  valueCheck
}
