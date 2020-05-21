<template>
	<div>
		<van-grid :column-num="2" :gutter="10">
			<van-grid-item v-for="goods in goodsList" :key="goods.id" :to="{name:'detail',params:{id:goods.id}}" replace>
				<template #default>
					<van-image :src="goods.img" fit="cover" />
					<div class="gn">{{goods.goodsName}}</div>
					<span class="gp"><span class="money">￥</span>{{goods.price}}</span>goods.id
				</template>
			</van-grid-item>
		</van-grid>

		<van-divider :style="{ color: '#585858', borderColor: '#585858', padding: '0 16px',bottom:'20px'}">
			底部
		</van-divider>
	</div>
</template>

<script>
	import {
		Grid,
		GridItem,
		Image as VanImage,
		Divider
	} from 'vant';
	export default {
		props: {
			goodsList: Array
		},
		components: {
			[Grid.name]: Grid,
			[GridItem.name]: GridItem,
			[VanImage.name]: VanImage,
			[Divider.name]: Divider
		},
		data() {
			return {}
		},
		methods: {

		},
		mounted() {

		},
		created() {

		}
	}
</script>

<style lang="less">
	.gn {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		width: 10.5rem;
		word-break: break-all;
		font-size: 0.5rem;
		margin-bottom: 1.25rem;
	}

	.gp {
		text-align: left;
		color: red;
		width: 10.5rem;

		.money {
			font-size: 0.7rem;
		}
	}

	.van-grid-item__content {
		padding: 0px;
	}
</style>
