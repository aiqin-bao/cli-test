export default {
	token: '12345678',
	navs: [
		{
			path: '/work/home',
			titile: '工作台',
			icon: '',
			children: []
		},
		{
			path: '/work/org',
			title: '机构管理',
			icon: '',
			children: [
				{
					path: '/work/org/message',
					title: '机构管理信息'
				},
				{
					path: '/work/org/money',
					title: '机构管理信息'
				},
			]
		}
	],
}