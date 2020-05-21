import Mock from 'mockjs'
import base from '../axios/base'

const Random = Mock.Random

// mock需要给三个参数,url(与axios请求是传的url一致,我这个是本地启动的项目就直接用本地域名了)
// 请求类型: get post...其他看文档
// 数据处理函数,函数需要return数据 http://localhost:8080/test/city
Mock.mock(`${base.url}${base.addrUrl}`, 'get', () => {
	let citys = []
	for (let i = 0; i < 10; i++) {
		let obj = {
			id: i + 1,
			city: Random.city(),
			color: Random.color()
		}
		citys.push(obj)
	}
	return {
		cityList: citys
	}
})
// post请求,带参数,参数会在data中返回,会返回url,type,body三个参数,可以把data打印出来看看
Mock.mock(`${base.url}${base.cityInfoUrl}`, 'post', (data) => {
	// 请求传过来的参数在body中,传回的是json字符串,需要转义一下
	const info = JSON.parse(data.body)
	return {
		img: Random.image('200x100', '#4A7BF7', info.name)
	}
})

/**
 * 模拟请求获取 首页图片数据
 */
Mock.mock(`${base.url}${base.homePageSwipeItemsUrl}`, 'get', () => {
	let swipeItems = []
	for (let i = 0; i < 3; i++) {
		let obj = {
			id: i + 1,
			img: "https://i.picsum.photos/id/" + Random.integer(40, 50) + "/400/200.jpg",
			text: 'pic' + (i + 1)
		}
		swipeItems.push(obj)
	}
	return swipeItems;
})


/**
 * 模拟请求获取 首页商品列表  //Random.image('200x200', '#00ffff', 'pic' + (i + 1)),
 */
Mock.mock(`${base.url}${base.homeGoodsList}`, 'post', () => {

	let homeGoodsList = []
	for (let i = 0; i < 12; i++) {
		let obj = {
			id: i + 1,
			goodsName: Random.string(50, 100),
			desc: Random.string(),
			barcode: Random.string(13, 13),
			//img: Random.dataImage('200x200', 'pic' + (i + 1)),
			img: "https://i.picsum.photos/id/" + Random.integer(200, 250) + "/200/200.jpg",
			price: Random.integer(100, 1000),
			inv: Random.integer(100, 1000),
			limitNum: Random.integer(100, 1000)
		}
		homeGoodsList.push(obj)
	}
	return homeGoodsList;
})
