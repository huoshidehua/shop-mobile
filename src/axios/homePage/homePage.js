import QS from 'qs'
import axios from '../http'
import url from '../base'

/**
 * 获取首页滑动图片的数据 'home/swipeItems'
 */
export function swipeItems() {
	return axios({
		url: url.homePageSwipeItemsUrl,
		method: 'get'
	})
}

/**
 * 获取商品列表
 */
export function goodsList(data) {
	return axios({
		url: url.homeGoodsList,
		method: 'post',
		data: QS.stringify(data)
	})
}
