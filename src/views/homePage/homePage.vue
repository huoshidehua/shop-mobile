<template>
	<div class="homePage">
		<van-button type="default" block round icon="search">搜索商品</van-button>
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item v-for="img in swipeItems" :key="img.id">
				<img v-lazy="img.img" />
			</van-swipe-item>
		</van-swipe>

		<GoodsDisplay :goodsList="goodsList"></GoodsDisplay>

		<TabFooter></TabFooter>
	</div>
</template>

<script>
	import {
		Button,
		Swipe,
		SwipeItem
	} from 'vant';
	/* 导入请求 */
	import {
		swipeItems,
		goodsList
	} from "@/axios/homePage/homePage";

	import GoodsDisplay from '@/components/GoodsDisplay'
	import TabFooter from '@/components/TabFooter'


	export default {
		components: {
			[Button.name]: Button,
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem,
			GoodsDisplay,
			TabFooter
		},
		data() {
			return {
				swipeItems: [],
				goodsList: []
			}
		},
		created() {
			swipeItems().then(res => {
				console.log("222", res)
				this.swipeItems = res.data;
			});
			goodsList({}).then(res => {
				this.goodsList = res.data;
			})
		}
	}
</script>

<style lang="less">
	.homePage {
		padding: 0.25rem 0 0.125rem 0;
	}

	.my-swipe {
		margin-top: 0.25rem;

		/* padding: 0rem; */
		.van-swipe-item {
			color: #fff;
			font-size: 20px;
			/* line-height: 150px; */
			text-align: center;
			background-color: #ffffff;
		}
	}
</style>
