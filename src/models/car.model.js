const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/postgres.config')

const Car = sequelize.define(
  'Car',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    carName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'cars',
    timestamps: true
  }
)
sequelize
  .sync({ force: false }) 
  .then(() => {
    console.log('car model sync')
  })

module.exports = Car
