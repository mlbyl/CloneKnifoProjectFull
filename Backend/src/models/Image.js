const { DataTypes } = require('sequelize')
const sequelize = require('../../config/connectDb')
const Product = require('./Product')

const Image = sequelize.define('Image', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  isMain: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
},
  {
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ['productId', 'isMain'],
        where: {
          isMain: true
        }
      }
    ]
  })

Product.hasMany(Image, { foreignKey: 'productId' })
Image.belongsTo(Product, { foreignKey: 'productId' })

module.exports = Image
