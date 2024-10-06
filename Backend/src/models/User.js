const { DataTypes } = require('sequelize')
const sequelize = require('../../config/connectDb')

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('user', 'admin'),
    defaultValue: 'user'
  }
},
  {
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ['firstname', 'lastname']
      }
    ]
  },
)

module.exports = User

// "User": {
//   "id": "integer, primary key, autoIncrement",
//   "firstName": "string, required",
//   "lastName": "string, required",
//   "email": "string, required, unique, indexed",
//   "password": "string, required",
//   "role": "string, optional, default: 'customer'",
//   "createdAt": "timestamp",
//   "updatedAt": "timestamp"
// }