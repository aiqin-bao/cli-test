import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
	state: {
		token: '1234567890-',
		navs: [{state: 1, num: 345}, {state: 2, num: 456}]
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