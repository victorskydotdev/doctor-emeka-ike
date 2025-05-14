const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'none',

	entry: './src/index.js',

	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			chunks: ['main'],
			favicon: './src/media-assets/favicon.png',
		}),
	],

	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: [
					'style-loader', //third loader
					'css-loader', // second loader
					'sass-loader', // first loader
				],
			},

			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},

			// as of Webpack v5, we use asset/resource to copy the image to the dist folder. No need to install any extra loaders.
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name]-[hash][ext]',
				},
			},

			{
				test: /\.html$/,
				use: ['html-loader'], // process the HTML files
			},
		],
	},
};
