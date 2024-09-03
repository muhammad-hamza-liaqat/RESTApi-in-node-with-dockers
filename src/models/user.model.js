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
    userName: {
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
    }
  },
  {
    tableName: 'users',
    timestamps: true
  }
)
sequelize
  .sync({ force: false }) 
  .then(() => {
    console.log('Database & tables created!')
  })

module.exports = User
