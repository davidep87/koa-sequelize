module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    host: process.env.DB_HOST,
    dialect: "",
    operatorsAliases: false
  },
  staging: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: "",
    dialectOptions: { ssl: true },
    pool: {
      max: 10,
      min: 2,
      idle: 10000,
      acquire: 20000,
      evict: 30000,
      handleDisconnects: true,
      autostart: true
    }
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: "",
    dialectOptions: { ssl: true },
    pool: {
      max: 45,
      min: 1,
      idle: 20000,
      acquire: 20000,
      evict: 60000,
      handleDisconnects: true
    }
  }
}
