const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.config.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
	mode: 'development',

	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
});
