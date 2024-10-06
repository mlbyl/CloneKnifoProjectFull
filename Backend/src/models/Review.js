const { DataTypes } = require('sequelize')
const sequelize = require('../../config/connectDb')
const Product = require('./Product')
const User = require('./User')

const Review = sequelize.define('Review', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,

  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: false,
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
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    },
    onDelete: 'CASCADE'
  }
},
  {
    timestamps: true,
  })

User.hasMany(Review, { foreignKey: 'userId' })
Product.hasMany(Review, { foreignKey: 'productId' })
Review.belongsTo(User, { foreignKey: 'userId' })
Review.belongsTo(Product, { foreignKey: "productId" })

module.exports = Review

// "Review": {
//   "id": "integer, primary key, autoIncrement",
//   "rating": "integer, required, between 1 and 5",
//   "comment": "text, optional",
//   "productId": "integer, foreign key (Product.id), required, indexed",
//   "userId": "integer, foreign key (User.id), required, indexed",
//   "createdAt": "timestamp",
//   "updatedAt": "timestamp"
// },