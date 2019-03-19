<template>
	<div>
		<div>
			23456789
		</div>
		<button @click="handler">
			点击跳转
		</button>
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
