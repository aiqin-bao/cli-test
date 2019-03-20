<template>
	<div class="body">
		<app-header></app-header>
		<div class="main">
			<app-side></app-side>
			<app-body></app-body>
		</div>
	</div>
</template>
<script>
import appHeader from './app-header';
import appSide from './app-side';
import appBody from './app-body';
export default {
	components: {
		appHeader,
		appSide,
		appBody
	}
}
</script>

<style lang="scss">
	.body {
		.main {
			display: flex;

		}
	}

</style>
