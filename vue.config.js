
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'? '/': '/',
  devServer: {
    port:80,
    proxy:{
      '/songhengstore':{
        target:'http://test01.songheng.com',
        changeOrigin:true,
        pathRewrite: {
          '^/songhengstore' : 'songhengstore'
        },
      }
    },
    disableHostCheck: true
  }
};