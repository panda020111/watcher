
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
// var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
// var pathToReactRouter = path.resolve(node_modules, 'react-router/umd/ReactRouter.min.js');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
  },
  module: {
    loaders: [{
    test: /\.js$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
    loader: 'babel', // 加载模块 "babel" 是 "babel-loader" 的缩写
    query: {
      presets: ['es2015']
    },
    exclude: /node_modules/
  }]
}
};