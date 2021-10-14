import Vue from 'vue'
import App from './App.vue'
//不再提示非打包生产环境运行
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
