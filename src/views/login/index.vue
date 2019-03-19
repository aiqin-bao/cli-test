<template>
	<div>
		<div>
			23456789
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

<style>

</style>
