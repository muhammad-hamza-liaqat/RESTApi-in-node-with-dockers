const { sequelize } = require('../config/postgres.config')
const { HTTPResponse } = require('../helpers/response')
const Car = require('../models/car.model')
const StatusCodes = require('http-status-codes')

const getUserAllCars = async (req, res) => {
  let error, response;
  const user = req.user;
  // console.log(`finding the cars for ${user?.userName} against _id ${user.id}:`);
  const cars = await Car.findAll({where: { user_id: user.id}})
   response = new HTTPResponse('Operation completed successfully', cars)
  return res.status(StatusCodes.OK).json(response)
}

const addingCar = async (req, res) => {
  let response
  const { carName, model } = req.body
  const user = req.user
  console.log('userID', user.id)
  const newCar = await Car.create({
    car_name: carName,
    model: model,
    user_id: user.id
  })
  console.log('new car adeed', newCar)
  response = new HTTPResponse('car added succcessfully!', newCar)
  return res.status(StatusCodes.OK).json(response)
}

module.exports = {  getUserAllCars, addingCar }
