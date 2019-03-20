<template>
	<div>
		<div class="header">
			测试header
		</div>
		<el-button @click="handler" type="primary">
				点击跳转
			</el-button>
	</div>

</template>

<script>
export default {

	data() {
		return {
			
		}
	},
	methods: {
		handler() {
			this.$router.push({
				name: 'test'
			})	
		}
	}
}
</script>

<style style="scss">
	.header {
		background: #f3f3f4;
		line-height: 44px;
		text-align: center;
	}

</style>
