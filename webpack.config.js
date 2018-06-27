const path = require('path');

var xrPolyfill = {
  entry: './src/XRPolyfill.js',
  output: {
    filename: 'webxr-polyfill.js',
    path: path.resolve(__dirname, 'dist')
  },
	module: {
		rules: [
			{
			test: /\.js$/,
			include: [
				path.resolve(__dirname, "polyfill"),
			],
			use: {
				loader: 'babel-loader',
				options: {
				presets: ['env']
				}
			}
			}
		]
  },
  resolve: {
	extensions: ['.js']
  }  
};

module.exports = [xrPolyfill]
