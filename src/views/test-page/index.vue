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
		addData(r) {
			console.warn(r, '---2');
			
		},
		async getPostData() {
			let r = await API.testPost({name: '测试'})
			console.warn(r, '---1');	
			this.addData(r)
		},
		...mapActions(['addNum'])
	},
	created() {
		this.getPostData()	
	}

}
</script>

<style>

</style>
