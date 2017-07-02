const router = require('koa-router')()
const body = require('koa-body')()

const { example } = require('./example')

router
  .get('/api/example', example)
  

module.exports = router
