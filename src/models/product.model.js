const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/postgres.config');

const Product = sequelize.define(
  'Product',
  {
    product_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER
    },
    unit: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.DECIMAL(10, 2)
    }
  },
  {
    tableName: 'products',
    timestamps: false
  }
);

module.exports = Product;
