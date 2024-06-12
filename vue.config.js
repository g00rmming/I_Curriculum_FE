const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  // 기본 경로를 명시적으로 설정합니다.
  publicPath: '/',
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/')
      }
    }
  }
});
