const { DataTypes } = require('sequelize')
const sequelize = require('../../config/connectDb')
const Brand = require('./Brand')

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  brandId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Brand,
      key: 'id'
    },
    onDelete: 'CASCADE'
  }

}, {
  timestamps: true,
  indexes: [
    {
      unique: true,
      fields: ['name', 'brandId']
    }
  ]
})


Brand.hasMany(Product, { foreignKey: 'brandId' })
Product.belongsTo(Brand, { foreignKey: 'brandId' })

module.exports = Product
