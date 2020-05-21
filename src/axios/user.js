import QS from 'qs'
import axios from './http'
import url from './base'

/**
 * post方法，对应post请求
 * @desc注册请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function userRejister(data) {
    return axios({
        url: url.userRegisterUrl,
        method: 'post',
        data: QS.stringify(data)
    })
}
/**
 * get方法，对应get请求
 * @desc登录请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function userInfo() {
    return axios({
        url: `/profile/all`,
        method: 'get'
    })
}
/**
 * 城市列表
 */
export function cityList(){
	
	return axios({
		url:url.addrUrl,
		method:'get'
	})
}