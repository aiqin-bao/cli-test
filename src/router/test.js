
/**
 * @desc 页面后续的路由
 */

const children = []


children.push(
	{
		path: '/test',
		name: 'test',
		component: () => import('@/views/test-page')
	}
)

export default children;