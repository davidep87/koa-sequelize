require('dotenv').config()
const koa = require('koa')
const api = require('./api/index')
const pino = require('koa-pino-logger')
const app = new koa()

let hostname = process.env.LOCAL_HOST

switch (process.env.NODE_ENV) {
  case 'production':
    hostname = process.env.PRODUCTION_HOST
    break;
  case 'staging':
    hostname = process.env.STAGING_HOST
    break;
}

app.context.errors = require('./config/errors')
app.context.db = require('./models/_index')

process.env.TZ = 'Europe/Rome'

app.use(pino({ level: 'info' }))
app.use(api.routes())
app.listen(process.env.PORT)

console.log(`[Koa-Sequelize] API is running on ${hostname} port: ${process.env.PORT}`)
