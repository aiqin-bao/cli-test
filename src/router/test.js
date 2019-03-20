
/**
 * @desc 页面后续的路由
 */
import View from '@/views/index'
const children = []


children.push(
	{
		path: '/test',
		name: 'test',
		component: () => import('@/views/test-page')
	}
)



export default {
	path: '/index',
	component: View,
	children,
};