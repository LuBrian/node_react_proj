var path = require('path')
var webpack = require('webpack')

module.exports = {
	entry : {
		app:'./src/app.js'
	},
	output:{
		filename:'build/bundle.js',
		sourceMapFilename: 'build/bundle.map',
		path: path.resolve(__dirname, 'public')
	},
	devtool : '#source-map',
	module : {
		rules:[
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader:'babel-loader',
				query:{
					presets:['react','es2015']
				}
			}
		]

	}


}