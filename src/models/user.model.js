const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/postgres.config')

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.UUID,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING
    }
  },
  {
    tableName: 'users',
    timestamps: true
  }
)

module.exports = User
