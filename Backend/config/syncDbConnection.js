const sequelize = require('./connectDb')

const syncConnection = () => {
  sequelize.sync({ force: false, logging: false })
    .then(() => { console.log('Database succesfully synchronized') })
    .catch((error) => { console.log('Synchronization error :', error) })
}
module.exports = syncConnection