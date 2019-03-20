<template>
	<div class="side-box">
		side
	</div>
</template>

<script>
import {mapState } from 'vuex'
export default {

	data() {
		return {

		}
	},
	computed: {
		...mapState(['navs'])
	}

}
</script>

<style lang="scss">
	.side-box {
		max-width: 200px;
		background: #48576a;
		position: absolute;
		top: 55px;
		left: 0;
		right: 0;
		bottom: 0;
	}

</style>
