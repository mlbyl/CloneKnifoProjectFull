require('dotenv').config()
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  timezone: '+04:00',
  logging:false
})
sequelize.authenticate()
  .then(() => { console.log('Database succesfully connected') })
  .catch((error) => { console.log('Connection error :', error) })


module.exports = sequelize