const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  // 修改打包 模板
  pages: {
    app: {
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.prod.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
    },
  },
  chainWebpack : config => {
    config.plugins.delete('prefetch-app');
  },
  // 配置项目 路径
  publicPath : '/',
  configureWebpack : function(config) {
    // 忽略 使用cdn加速
    config.externals = {
      vue: "Vue",
      vuex: "Vuex",
      "vue-router": "VueRouter",
    };
    // 去除console
    config.plugins.push(
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true,
          },
        }
      })
    );
  },
  // 删除 map文件
  productionSourceMap : false,
}