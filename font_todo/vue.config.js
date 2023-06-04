const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 后端接口的地址
        changeOrigin: true, // 是否允许跨域
        pathRewrite: {
          '^/api': '', // 去除请求路径中的 '/api' 前缀
        },
      },
    },
  },
})
