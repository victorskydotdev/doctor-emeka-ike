const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.config.common.js');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
	mode: 'production',

	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
	},

	plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin()],

	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader, // adding this here for production purpases to extract css into files

					'css-loader', // Translates CSS into CommonJS

					'sass-loader', // Compiles Sass to CSS
				],
			},
		],
	},

	// optimization: {
	// 	runtimeChunk: 'single',
	// 	splitChunks: {
	// 		chunks: 'all',
	// 	},
	// },
});
