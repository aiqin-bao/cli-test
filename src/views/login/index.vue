<template>
	<div>
		<div class="header">
			登录页面
		</div>
		<div class="btn-login">
			<el-button @click="handler" type="primary">
				点击登录
			</el-button>
		</div>
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
	.btn-login {
		display: flex;
		justify-content: center;
		margin-top: 40px;
	}

</style>
