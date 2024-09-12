const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/postgres.config');

const Category = sequelize.define(
  'Category',
  {
    category_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    }
  },
  {
    tableName: 'categories',
    timestamps: false
  }
);

module.exports = Category;
