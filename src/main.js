import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mock.js'
import axios from './axios/http'
import {
	Lazyload
} from 'vant';

Vue.use(Lazyload);

// 将axios挂载到Vue实例,在组件中可以直接使用
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
