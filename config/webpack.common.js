const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  /**
   * @description
   * entry - 최초 진입점이자 자바스크립트 파일 경로
   * loader - 로더(Loader)는 웹팩이 웹 애플리케이션을 해석할 때 자바스크립트 파일이 아닌 웹 자원(HTML, CSS, Images, 폰트 등)들을 변환할 수 있도록 도와주는 속성, 엔트리나 아웃풋 속성과는 다르게 module라는 이름을 사용
   */
  entry: `${path.resolve(__dirname, '../src')}/index.tsx`,
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${path.resolve(__dirname, '../src/public')}/index.html`,
    }),
    /**
     * @description
     * react를 자동으로 로드하려면 해당 노드 모듈에 노출되는 변수를 가리킬 수 있습니다.
     */
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
  /**
   * @description
   * 이 옵션은 모듈을 해석하는 방식을 변경 할 수 있습니다.
   * @see https://webpack.kr/configuration/resolve/#root
   */
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
};
