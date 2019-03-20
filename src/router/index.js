import Vue from 'vue'
import Router from 'vue-router'
import Login from './login'
import Test from './test'


Vue.use(Router)

const defaultRouter = {
	path: '/',
	redirect: { name: 'home' }
}

const routes = [
	defaultRouter, 
	Login,
	Test
]


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
