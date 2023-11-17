const { defineConfig } = require('@vue/cli-service')

const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = defineConfig({
  transpileDependencies: true,

  // parallel:false,
  // outputDir:'dist',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',

})
