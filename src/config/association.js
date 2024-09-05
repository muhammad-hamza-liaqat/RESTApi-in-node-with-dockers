const User = require('../models/user.model')
const Car = require('../models/car.model')
const Order = require('../models/order.model')

const associationDefined = () => {
  console.log('association file called!..................!')

  // user has many cars, car belongs to user
  User.hasMany(Car, { foreignKey: 'user_id' })
  Car.belongsTo(User, { foreignKey: 'user_id' })

  // user has many orders, Order belongs to user
  User.hasMany(Order, { foreignKey: "user_id" })
  Order.belongsTo(User, { foreignKey: "user_id" })

  // car has many orders, order belongs to car
  Car.hasMany(Order, { foreignKey: "car_id" })
  Order.belongsTo(Car, { foreignKey: "car_id" })
}

module.exports = associationDefined
