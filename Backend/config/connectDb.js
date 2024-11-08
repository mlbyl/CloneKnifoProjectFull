// require('dotenv').config()
// const { Sequelize } = require('sequelize')

// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   dialect: 'postgres',
//   timezone: '+04:00',
//   logging:false
// })
// sequelize.authenticate()
//   .then(() => { console.log('Database succesfully connected') })
//   .catch((error) => { console.log('Connection error :', error) })


// module.exports = sequelize



const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.POSTGRES_DATABASE,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT || 5432, // Default to 5432 if no port is provided
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true, // *mostly optional for dev environment, required to connect vercel's postgresDB
        rejectUnauthorized: false, // optional based on your environment
      },
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((error) => {
    console.log("Database connection error:", error);
  });

module.exports = sequelize;