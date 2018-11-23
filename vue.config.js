const path = require('path')

function resolve(dir) { // 相对于vue.config.js的绝对路径，拼接
  return path.join(__dirname, dir)
}

const appDate = require('./data.json')
const seller = appDate.seller
const goods = appDate.goods
const ratings = appDate.ratings

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    before(app) { // mock数据
      app.get('/api/seller', function(req, res) { // 请求该地址返回的数据
        res.json({
          errno: 0, // 成功标识
          data: seller
        })
      })
      app.get('/api/goods', function(req, res) {
        res.json({
          errno: 0,
          data: goods
        })
      })
      app.get('/api/ratings', function(req, res) {
        res.json({
          errno: 0,
          data: ratings
        })
      })
    }
  },
  chainWebpack(config) { // 地址简写
    config.resolve.alias
    .set('components', resolve('src/components'))
    .set('assets', resolve('src/assets'))
    .set('api', resolve('src/api'))
  }
}
