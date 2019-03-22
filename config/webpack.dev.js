module.exports = {
  // 修改打包 模板
  pages: {
    app: {
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
    },
  },
  chainWebpack : config => {
    // 注意 -app表示 针对具体页面
    config.plugins.delete('prefetch-app');
  },
  devServer : {
    // 端口
    port : '8100',
    disableHostCheck : true,
    // 跨域
    //proxy : 'http://192.168.30.14:7030', // 用这个也可以解决控制台报错问题
    proxy : {
      // 这里不能使用 *通配符 
      '/*' : {
        // 关闭所有websocket连接 解决控制台一直报/sockjs-node/info?连接问题
        ws : false,
        changeOrigin: true,

        target : 'http://192.168.30.14:7030',
      },
    },
  },
}