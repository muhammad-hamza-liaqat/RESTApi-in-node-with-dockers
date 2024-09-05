const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../config/postgres.config')
const User = require('./user.model')
const Car = require('./car.model')

const Order = sequelize.define(
  'Order',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    order_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    },
    car_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Car,
        key: 'id'
      }
    },
    order_date: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW
    },
    order_description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    tableName: 'orders',
    timestamps: true
  }
)

// relationship
// Order.belongsTo(User, { foreignKey: 'user_id' })
// Order.belongsTo(Car, { foreignKey: 'car_id' })

module.exports = Order
