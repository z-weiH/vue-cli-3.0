module.exports = {
  configureWebpack : {
    externals: {
      vue: "Vue",
      vuex: "Vuex",
      "vue-router": "VueRouter",
    },
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.prod.html',
    },
  }
}