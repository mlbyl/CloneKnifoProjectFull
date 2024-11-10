

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
    dialectModule: require('pg'),
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