/**
 * 接口域名的管理
 */
let baseUrl = {
    /** 基础域名 */
    base: ''
}
switch (process.env.NODE_ENV) {
    case 'development':
        baseUrl.base = "https://youtu.95504.net/"  //开发环境url
        baseUrl.login = "https://open.weixin.qq.com/"  //开发环境url
        break
    case 'testing':
        baseUrl.base = "https://youtu.95504.net/"   //测试环境url
        baseUrl.login = "https://open.weixin.qq.com/"   //测试环境url
        break
    case 'production':
        baseUrl.base = "https://sichuan.95504.net/"   //生产环境url
        baseUrl.login = "https://open.weixin.qq.com/"   //生产环境url
        break
}
export default baseUrl;