const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/postgres.config');

const Customer = sequelize.define(
  'Customer',
  {
    customer_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact_name: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    postal_code: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    },
    password:{
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "user"
    }
  },
  {
    tableName: 'customers',
    timestamps: false
  }
);

module.exports = Customer;
