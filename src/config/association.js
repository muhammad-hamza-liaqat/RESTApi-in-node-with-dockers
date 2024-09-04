const User = require('../models/user.model')
const Car = require('../models/car.model')

const associationDefined = () => {
    console.log("association file called!..................!")
  User.hasMany(Car, { foreignKey: 'user_id' })
  Car.belongsTo(User, { foreignKey: 'user_id' })
}

module.exports = associationDefined