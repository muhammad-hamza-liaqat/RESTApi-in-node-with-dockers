const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/postgres.config')

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('user', 'admin'),
      allowNull: true,
      defaultValue: 'user'
    }
  },
  {
    tableName: 'users',
    timestamps: false
    // timestamps: true
  }
)

module.exports = User
