import axios from 'axios'
import base from './base'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
axios.interceptors.request.use(function(config) {
	if(!(config.url.startsWith("http") || config.url.startsWith("https"))){
		config.url = `${base.url}${config.url}`
	}
  return config
}, function(error) {
  return Promise.reject(error)
})
// 响应拦截器
axios.interceptors.response.use(function(response) {
  return response
}, function(error) {
  return Promise.reject(error)
})

export default axios