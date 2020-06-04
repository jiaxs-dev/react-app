/**
 * @Author: jiaxiansun@dongao.com
 * @Date: 2020/1/20
 * @Time: 14:31
 * @Description: 登陆接口
 * @Copyright: www.dongao.com@2020
 */

import {reqget} from "../utils/axiosFun";

export const checkLogin = (params) => {
  return reqget("/es-admin/privilege/login/checkLogin", params);
}
