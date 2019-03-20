<template>
	<a-body></a-body>
</template>

<script>
import { mapState, mapGetters, mapActions} from 'vuex'
import aBody from '@/components/layout/body'
export default {
	components: {
		aBody
	},

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

<style lang="scss">


</style>
