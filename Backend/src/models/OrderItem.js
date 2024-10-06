const { DataTypes } = require('sequelize')
const sequelize = require('../../config/connectDb')
const Product = require('./Product')
const User = require('./User')

const OrderItem = sequelize.define('OrderItem', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id"
    },
    onDelete: "CASCADE"
  },

  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },

  totalPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: "id"
    },
    onDelete: "CASCADE"
  },  // orderId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: Order,
  //     key: "id"
  //   },
  //   onDelete: "CASCADE"
  // },
},
  {
    timestamps: true
  })

// Order.hasMany(OrderItem, { foreignKey: "orderId" })
// OrderItem.belongsTo(Order, { foreignKey: "orderId" })
Product.hasMany(OrderItem, { foreignKey: "productId" })
OrderItem.belongsTo(Product, { foreignKey: "productId" })
User.hasMany(OrderItem, { foreignKey: 'userId' })
OrderItem.belongsTo(User, { foreignKey: 'userId' })


module.exports = OrderItem