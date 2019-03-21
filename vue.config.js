
const path = require('path')
const webpack = require('webpack')
const cwd = process.cwd()

module.exports = {
	devServer: {
		host: '0.0.0.0',
		hot: true,
		open: true,
		port: 3006,
		noInfo: false
	},
	chainWebpack: config => {
		config.plugin('provide')
		.use(webpack.ProvidePlugin, [{
			API: path.resolve(cwd, 'src/utils/api/index.js')
		}])
	}	
	
}