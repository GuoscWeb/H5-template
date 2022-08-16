import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import https from '@/request/api/index'
import utils from "@/utils/index"
import 'amfe-flexible';
import vConsole from '@/utils/vConsole'
import VueClipboard from 'vue-clipboard2'
import dayjs from 'dayjs'
Vue.use(VueClipboard)

Vue.prototype.$https = https
Vue.prototype.$utils = utils
Vue.prototype.$dayjs = dayjs

Vue.config.productionTip = false

const ua = navigator.userAgent;
if (ua.match("wxworklocal")) {
  Vue.prototype.$isApp = true
} else {
  Vue.prototype.$isApp = false
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
