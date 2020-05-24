import Vue from 'vue'
import Vuex from 'vuex'
import TabFooter from '@/store/TableFooter/TabFooterStore.js'
import Cart from '@/store/Cart/CartStore.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		TabFooter,
		Cart
	}
})
