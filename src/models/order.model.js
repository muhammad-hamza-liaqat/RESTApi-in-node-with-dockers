const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/postgres.config');

const Order = sequelize.define(
  'Order',
  {
    order_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    customer_id: {
      type: DataTypes.INTEGER
    },
    order_date: {
      type: DataTypes.DATE
    }
  },
  {
    tableName: 'orders',
    timestamps: false
  }
);

module.exports = Order;
