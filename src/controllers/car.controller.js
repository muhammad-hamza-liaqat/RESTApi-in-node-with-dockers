const { sequelize } = require('../config/postgres.config')
const { HTTPResponse } = require('../helpers/response')
const Car = require('../models/car.model')
const StatusCodes = require('http-status-codes')

const getAllCars = async (req, res) => {
  const cars = await Car.findAll({})
  console.log(cars, 'cars: <----')
  let response = new HTTPResponse('Operation completed successfully', cars)
  return res.status(StatusCodes.OK).json(response)
}

const addingCar = async (req, res) => {
  let error, response
  const { carName, model } = req.body
  const user = req.user

  console.log('userID', user.id)

  const newCar = await Car.create({
    car_name: carName,
    model: model,
    user_id: user.id
  })
  console.log('new car adeed', newCar)
  response = new HTTPResponse('car added succcessfully!', StatusCodes.OK)
  return res.status(StatusCodes.OK).json(response)
}

const getUserCar = async (req, res) => {
  const [results] = await sequelize.query(`
    SELECT *
    FROM users
    INNER JOIN cars ON users.id = cars.user_id;
  `)
  let response = new HTTPResponse('operation successful', results)
  return res.status(StatusCodes.OK).json(response)
}

module.exports = { getAllCars, getUserCar, addingCar }
