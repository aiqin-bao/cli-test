import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
	state: {
		token: '1234567890-',
		navs: [
			{
				path: '/work',
				name: '工作台',
				icon: '',
				children: []
			},
			{
				path: '/org',
				name: '机构管理',
				icon: '',
				children: [
					{
						path: '/base-message',
						icon: '',
						name: '机构的基本信息',
						children: []
					}
				]
			}
		]
	},
	mutations: {
		setToken(state, data) {
			state.token = data
		}
	},
	actions: {

		addNum({commit}, num="测试") {
			commit('setToken', num)
		}
	},
	getters: {		
		isToken: (state) => {
			return state.token
		}
	}

})