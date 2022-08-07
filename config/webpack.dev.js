const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  /**
   * @description
   * devServer.hot - Webpack의 Hot Module Replacement 기능을 활성화합니다.
   * devServer.open - 기본 브라우저 설정
   * devServer.compress - 제공되는 모든 항목에 대해 gzip 압축을 활성화합니다.
   * devServer.historyApiFallback - historyApiFallback은 HTML5의 History API를 사용하는 경우에, 설정해놓은 url 을 포함하는 url에 접근했을때 404 responses를 받게 되는데 이때도 index.html을 서빙해주는 효과
   */
  devServer: {
    open: true,
    hot: true,
    compress: true,
    port: 8080,
    historyApiFallback: true,
    liveReload: true,
  },
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
});
