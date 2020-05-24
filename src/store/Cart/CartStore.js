const addItem = 'addItem';
export default {
	namespaced: true,
	state: {
		/**
		 * 数据格式是 
		 *  {
			   id,qty,price,subTotalPrice
			}
		 */
		cartItemArray: [],
		totalPrice: 0,
		totalNum: 0
	},
	getters: {},
	actions: {},
	mutations: {
		/* 添加到购物车 */
		[addItem](state, item) {
			let esixtItem = state.cartItemArray.filter(i => i.id == item.id);
			if (esixtItem.length == 0) {
				state.cartItemArray.push(item);
			} else {
				state.cartItemArray.map((i) => {
					if (i.id === item.id) {
						i.qty += item.qty;
						i.subTotalPrice += item.subTotalPrice;
					}
					return i;
				})
			}
			state.totalNum += item.qty;
			state.totalPrice += item.subTotalPrice;
		}

	}
}
