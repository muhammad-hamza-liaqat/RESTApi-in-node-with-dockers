const Order = require('../models/order.model')
const { HTTPResponse } = require('../helpers/response')
const { StatusCodes } = require('http-status-codes')

const addOrderForCar = async (req, res) => {
  let response
  const { orderName, carId, orderDescription } = req.body
  const user = req.user
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
