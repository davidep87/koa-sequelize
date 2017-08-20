const fs = require('fs')
const hostname = process.env.NODE_ENV == 'production' ? 'http://www.example.com' : 'http://localhost'
const maxAge = `${process.env.NODE_ENV === 'production' ? 3600 * 24 * 7 : 0}`

const config = {
  secret: '@_t3st1ng_@',
  env: {
      doc: "The applicaton environment.",
      format: ["production", "dev", "development", "test"],
      default: "dev",
      env: "NODE_ENV",
      arg: "node_env"
  },
  server: {
      hostname,
      port: 31338,
      maxAge
  },
  loglevel: {
      doc: "Log level: { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }",
      format: ["error", "warn", "info", "verbose", "debug", "silly"],
      default: 'error',
      env: "LOGLEVEL",
      arg: "loglevel"
  },
  ssl: {
    active: false,
    key:  fs.readFileSync('config/ssl/server.key'),
    cert: fs.readFileSync('config/ssl/server.crt')
  },
  cors: {
    headers: {
      "Cache-Control": `max-age=${maxAge}` ,
      "Access-Control-Allow-Origin": `${hostname}` ,
      "X-Content-Type-Options": "nosniff",
      "X-XSS-Protection": "1;mode=block" ,
      "X-Frame-Options": "deny" ,
      "X-WebKit-CSP": "default-src 'self'" ,
      "X-Frame-Options": "SAMEORIGIN" ,
      "X-Powered-By": "MDSLab"
    },
  },
  auth:{
    firebase: {
  		serverToken : '',
  	},
    social: {
      facebook: {
        clientID: '',
        clientSecret: ''
      },
      google: {
        clientID: '',
        clientSecret: ''
      },
    }
  }
}

module.exports = config
