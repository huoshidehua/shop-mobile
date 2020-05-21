const switchTab = 'switchTab';
export default {
	namespaced: true,
	state: {
		active: 0
	},
	getters: {},
	actions: {},
	mutations: {
		/* 切换tabFooter的时候设置active */
		[switchTab](state, active) {
			state.active = active;
		}
	}
}
