const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
    proxy: {
      '/features.json': {
        target: 'https://d2iv4x4t7ozxv2.cloudfront.net',
        changeOrigin: true,
        secure: false,
      },
    },
  },
};

