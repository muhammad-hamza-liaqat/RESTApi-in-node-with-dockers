const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/postgres.config');

const TestProduct = sequelize.define(
  'TestProduct',
  {
    testproduct_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    product_name: {
      type: DataTypes.STRING
    },
    category_id: {
      type: DataTypes.INTEGER
    }
  },
  {
    tableName: 'testproducts',
    timestamps: false
  }
);

module.exports = TestProduct;
