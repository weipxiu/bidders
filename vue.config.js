
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'? '/': '/',
  devServer: {
    port:8080,
    proxy:{
      '/api':{
        target:'https://api.douban.com',
        changeOrigin:true,
        pathRewrite: {
          '^/api' : ''
        },
      }
    }
  }
};