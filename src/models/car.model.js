const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/postgres.config')
const User = require('./user.model')
const Car = sequelize.define(
  'Car',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    car_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
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
    }
  },
  {
    tableName: 'cars',
    timestamps: true
  }
)

module.exports = Car
