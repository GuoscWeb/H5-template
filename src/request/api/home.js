import request from '../index'
import baseUrl from '../baseUrl'

const API_URL = {
  /** JWT登录 */
  JWT_LOGIN: `${baseUrl.base}fuel_support/wxoa/plant/login`,
  /** 获取平台数据 */
  GET_PLATFORM_DATA: `${baseUrl.base}fuel_support/wxoa/Plant/index`,
}
/** JWT登录 */
export const jwtLogin = (params) => {
  return request.post(API_URL.JWT_LOGIN, params)
}
export const getPlatformData = (params) => {
  return request.post(API_URL.GET_PLATFORM_DATA, params)
}