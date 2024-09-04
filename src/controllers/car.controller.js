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

const addCar = async (req, res) => {
  const newUser = await Car.create({
    ...req.body,
    user_id: '04fcc8fe-1991-4a4d-bb39-8cb69b6716ca'
  })
  let response = new HTTPResponse(StatusCodes.CREATED, newUser)
  return res.status(StatusCodes.CREATED).json(response)
}

const getUserCar = async (req, res) => {
  const [results] = await sequelize.query(`
    SELECT *
    FROM users
    INNER JOIN cars ON users.id = cars.user_id;
  `)
  let response = new HTTPResponse("operation successful", results);
  return res.status(StatusCodes.OK).json(response);
}

module.exports = { getAllCars, addCar, getUserCar }
