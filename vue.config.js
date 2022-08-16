const { defineConfig } = require('@vue/cli-service')
console.log(process.env.NODE_ENV);
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/activity/detail-daily/',
  assetsDir: 'static',
  configureWebpack: {
    resolve: {
      alias: {
        "assets": "@/assets",
        "components": "@/components",
        "request": "@/request",
        "views": "@/views",
      }
    }
    // devServer: {
    //   proxy: {
    //     'connect/oauth2': {//请求前缀，有这个前缀(紧跟端口号)的才会走代理
    //       target: 'https://open.weixin.qq.com/',
    //       pathRewrite: { "^connect/oauth2": "" },//pathRewrite的key写一个正则的匹配条件,匹配以test开头的路径，把test替换为空字符串
    //       ws: true,//用于支持websocket
    //       changeOrigin: true//是否对告诉真实服务器真实的源，false不改变源(真实的源) true(改变源)-----用于控制请求头中的host值
    //     }
    //   }
    // }
  },
})
