const Order = require('../models/order.model')
const { HTTPResponse, HTTPError } = require('../helpers/response')
const { StatusCodes } = require('http-status-codes')
const Car = require('../models/car.model')

const addOrderForCar = async (req, res) => {
  let response, error
  const { orderName, carId, orderDescription } = req.body
  const user = req.user
  const car = await Car.findByPk(carId)

  if (!car) {
    error = new HTTPError('Invalid Car ID', StatusCodes.BAD_REQUEST)
    return res.status(StatusCodes.BAD_REQUEST).json(error)
  }

  if (car.user_id !== user.id) {
    error = new HTTPError(
      `pass the valid car_id for ${user.userName}`,
      StatusCodes.CONFLICT
    )
    return res.status(StatusCodes.CONFLICT).json(error)
  }

  const newOrder = await Order.create({
    order_name: orderName,
    car_id: carId,
    order_description: orderDescription,
    user_id: user.id
  })
  response = new HTTPResponse('order placed', newOrder)
  return res.status(StatusCodes.OK).json(response)
}

module.exports = { addOrderForCar }
