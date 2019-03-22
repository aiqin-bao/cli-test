/**
 * @desc 请求
 */

 import { create as axiosCreate } from 'axios'

 const instance = axiosCreate()

 instance.baseURL = "http://192.168.3.46:3002/"


 //请求拦截器	
 instance.interceptors.request.use(config => {
	 //发送请求之前做什么
	//  类似 注入 header
	 return config;
 }, (error) => {
	 //请求err的逻辑出来 
	 if (error.toString() == 'Error: Network Error') {
		http[$errorHandler]('Network Error', '网络错误')
	  }
	 return Promise.reject(error)
 })

 //请求成功后的拦截器
 instance.interceptors.response.use(response => {
	return new Promise((resolve, reject) => {
		let {code, resultCode , data, message} = response.data
		if(code != 200) { 
			 //错误处理
			reject(code)
		}else{
			resolve(data)
		}
	})
 }, e => {
	if (e.toString().includes('404')) {  //判断接口出错的
		console.warn('Network Error', '网络错误');
	  }
	 return Promise.reject(e)
 })


 const http = {

	get(url, params={}) {
		params['_'] = Date.now()
		return http.send('get', url, params, {})
	},

	post(url, data={}) {
		return http.send('post', url, {}, data)
	},

	send (method, url, params, data) {
		url = url.match(/^(http|https):\/\//) ? url : instance.baseURL + url
		return instance({
			method,
			url,
			params,
			data
		})
	}
	
 }


 export default http;