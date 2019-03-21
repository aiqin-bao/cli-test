<template>
	<div>
		<div>content</div>
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
	},
	created() {
		console.warn(API);
	}

}
</script>

<style>

</style>
