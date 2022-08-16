import axios from 'axios'
import state from '@/store/state';
import { Toast } from "vant";
// let baseUrl = ''
// switch (process.env.NODE_ENV) {
//   case 'development':
//     baseUrl = "https://sichuan.95504.net/"  //开发环境url
//     break
//   case 'testing':
//     baseUrl = "https://youtu.95504.net/"  //测试环境url
//     break
//   case 'production':
//     baseUrl = "https://sichuan.95504.net/"   //生产环境url
//     break
// }

/** 请求状态码 */
const RESPONSE_CODE = {
  /** 请求成功 */
  SUCCESS: 200,
  /** ---------------------- */
  // 业务状态码
  /** token过期 */
  TOKEN_EXPIRED: 401,
  /** 接口报错 */
  API_ERROR: 400,
  /** 服务器异常 */
  SERVER_EXCEPTION: 500
}

let instance = axios.create({
  timeout: 1000 * 15,
  headers: { 'Content-Type': 'application/json' },
  // baseURL: baseUrl,
  timeoutErrorMessage: '请求超时',
})

instance.interceptors.request.use(
  config => {
    if (typeof config.data == 'undefined') {
      config.data = {
        jwt: state.jwt,
      }
    } else {
      config.data.jwt = state.jwt
    }
    return config
  }, error => {
    return Promise.reject('err', error)
  }
)

instance.interceptors.response.use((response) => {
  if (response && response.status == RESPONSE_CODE.SUCCESS) {
    if (response.data.code == 200) {
      return Promise.resolve(response.data)
    } else {
      switch (response.data.code) {
        case 400:
          if (response.data.msg.indexOf('40029') > -1) {
            Toast({
              message: '登录已过期，请退出重新进入',
              duration: 2000,
            });
          }
          break;

        default:
          Toast({
            message: response.data.msg,
            duration: 2000,
          });
          break;
      }
      return Promise.resolve(response.data)
    }
  }
}, error => {
  console.log('error', error);
  return Promise.reject(response.data)
})

export default instance;