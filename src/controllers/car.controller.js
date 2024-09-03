const { HTTPResponse } = require("../helpers/response")
const Car = require("../models/car.model")
const StatusCodes = require('http-status-codes')

const getAllCars = async (req, res) => {
    const cars = await Car.findAll({})
    console.log(cars, 'cars: <----')
    let response = new HTTPResponse('Operation completed successfully', cars)
    return res.status(StatusCodes.OK).json(response)
}

module.exports = { getAllCars }