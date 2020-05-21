<template>
	<div>
		<van-tabbar v-model="$store.state.TabFooter.active" @change="switchTab" safe-area-inset-bottom placeholder>
			<van-tabbar-item icon="home-o">首页</van-tabbar-item>
			<van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
			<van-tabbar-item icon="user-o">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	import {
		Tabbar,
		TabbarItem
	} from 'vant';
	import {
		mapState,
		mapGetters,
		mapMutations,
		mapActions
	} from "vuex";

	export default {
		components: {
			[Tabbar.name]: Tabbar,
			[TabbarItem.name]: TabbarItem
		},
		computed: {
			...mapState('TabFooter', ['active']),
			...mapGetters('TabFooter', [])

		},
		methods: {
			...mapMutations("TabFooter", ['switchTab']),
			...mapActions("TabFooter", [])
		}
	}
</script>

<style>
</style>
