import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
//插件
import './plugins/element.js'
import './plugins/mPlugins.js'
import '@/assets/css/reset.css'
//权限
import '@/permission.js';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
