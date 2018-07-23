
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'? '/': '/',
  devServer: {
    port:8080,
    proxy:{
      '/songhengstore':{
        target:'http://172.18.254.19',
        changeOrigin:true,
        pathRewrite: {
          '^/songhengstore' : 'songhengstore'
        },
      }
    }
  }
};