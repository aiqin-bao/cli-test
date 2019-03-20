<template>
	<div class="content-box">
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
export default {

}
</script>

<style lang="scss">
	.content-box {
		position: absolute;
		top: 55px;
		left: 200px;
		right: 0;
		bottom: 0;
		background: #eee;
		.content {
			background: #fff;
			position: absolute;
			left: 15px;
			right: 15px;
			bottom: 15px;
			top: 15px;
		}
	}

</style>
