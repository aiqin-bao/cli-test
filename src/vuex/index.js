import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'

Vue.use(Vuex)


export default new Vuex.Store({
	state,
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