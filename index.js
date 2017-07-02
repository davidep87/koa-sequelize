const http2 = require('http2')
const koa = require('koa')
const api = require('koa-router')()
const apiRoutes = require('./api/index')
const config = require('./config/index')
const app = new koa()

app.context.db = require('./config/database')

api.use(apiRoutes.routes())
app.use(api.routes())

config.ssl.active? http2.createServer(config.ssl, app.callback()).listen(config.server.port) : app.listen(config.server.port)

console.log(`[Koa2-Js] API is running on ${config.server.hostname} port: ${config.server.port}`)
