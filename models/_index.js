'use strict'
const env = process.env.NODE_ENV || 'development'
const config = require('../config/database')[env]
const Sequelize = require('sequelize')

const sequelize = new Sequelize(config.database, config.username, config.password, config)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })

const User = require('./users')(Sequelize, sequelize)

sequelize.sync()

const db = {
	Sequelize: Sequelize,
	sequelize: sequelize,
	models: {
		User
	}
}

module.exports = db
