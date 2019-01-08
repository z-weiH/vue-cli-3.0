module.exports = {
  devServer : {
    port : '8100',
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
    },
  }
}