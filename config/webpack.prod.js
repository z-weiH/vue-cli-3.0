const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  // 配置项目 路径
  publicPath : '/',
  configureWebpack : {
    // 忽略 使用cdn加速
    externals: {
      vue: "Vue",
      vuex: "Vuex",
      "vue-router": "VueRouter",
    },
    optimization: {
      minimizer: [
        // 去除console
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_debugger: true,
              drop_console: true,
            },
          }
        })
      ]
    }
  },
  // 修改打包 模板
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.prod.html',
    },
  },
  // 删除 map文件
  productionSourceMap : false,
}