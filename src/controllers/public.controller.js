const { StatusCodes } = require('http-status-codes')
const { HTTPResponse } = require('../helpers/response')
const Customer = require('../models/customer.model')
const Category = require('../models/category.model')
const Order = require('../models/order.model')
const orderDetail = require('../models/orderDetail.model')
const Product = require('../models/product.model')
const testProduct = require('../models/testProduct.model')

const allCustomers = async (req, res) => {
  const customers = await Customer.findAndCountAll()
  let response = new HTTPResponse('Fetched successfully', customers)
  return res.status(StatusCodes.OK).json(response)
}

const allCategories = async (req, res) => {
  const category = await Category.findAndCountAll()
  let response = new HTTPResponse('Fetched successfully', category)
  return res.status(StatusCodes.OK).json(response)
}

const allOrders = async (req, res) => {
  const orders = await Order.findAndCountAll()
  let response = new HTTPResponse('Fetched successfully', orders)
  return res.status(StatusCodes.OK).json(response)
}

const allOrderDetails = async (req, res) => {
  const details = await orderDetail.findAndCountAll()
  let response = new HTTPResponse('Fetched successfully', details)
  return res.status(StatusCodes.OK).json(response)
}

const allProducts = async (req, res) => {
  const products = await Product.findAndCountAll()
  let response = new HTTPResponse('Fetched successfully', products)
  return res.status(StatusCodes.OK).json(response)
}

const allTestProducts = async (req, res) => {
  const testProducts = await testProduct.findAndCountAll()
  let response = new HTTPResponse('Fetched successfully', testProducts)
  return res.status(StatusCodes.OK).json(response)
}

module.exports = {
  allCustomers,
  allCategories,
  allOrders,
  allOrderDetails,
  allProducts,
  allTestProducts
}