// https://cli.vuejs.org/config/#vue-config-js
module.exports = {
    lintOnSave: true,
    chainWebpack: config => {
      config
        .module
        .rule("raw")
        .test(/\.md$/)
        .use("raw-loader")
        .loader("raw-loader")
        .end()
    }
  }