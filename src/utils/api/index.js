/**
 * @desc 请求的api
 */


 import http from '../ajax'


const {get, post, send } = http




 export const getList = params => {
	 return get('/admin', params)
 }