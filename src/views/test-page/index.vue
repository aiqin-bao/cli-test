<template>
	<div>
		<div>{{tips}}</div>
		<div> state - {{token }}</div>
		<div>
			<div v-for="item of navs" :key="item.num">
				<div>
					  {{item.state}}-{{item.num}}
				</div>
			</div>
		</div>
		<el-button type="primary" @click="testClick">
			测试action
		</el-button>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions} from 'vuex'
export default {

	data() {
		return {
			tips: '测试页面'
		}
	},
	computed: {
		...mapState(['token', 'navs']),
		...mapGetters(['isToken'])
	},
	methods: {
		testClick() {
			this.addNum('点击')
		},
		...mapActions(['addNum'])
	}

}
</script>

<style>

</style>
