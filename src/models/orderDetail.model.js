const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/postgres.config');

const OrderDetail = sequelize.define(
  'OrderDetail',
  {
    order_detail_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER
    },
    product_id: {
      type: DataTypes.INTEGER
    },
    quantity: {
      type: DataTypes.INTEGER
    }
  },
  {
    tableName: 'order_details',
    timestamps: false
  }
);

module.exports = OrderDetail;
