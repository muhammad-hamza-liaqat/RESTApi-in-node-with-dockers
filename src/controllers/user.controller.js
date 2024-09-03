const { HTTPResponse } = require('../helpers/response')
const StatusCodes = require('http-status-codes')
const User = require('../models/user.model')

const defaultPage = async (req, res) => {
  res.end('hello from default route')
}

const getAllUsers = async (req, res) => {
  const users = await User.find({})
  console.log(users, 'users: <----')
  let response = new HTTPResponse('Operation completed successfully', users)
  return res.status(StatusCodes.OK).json(response)
}

const addUser = async (req, res) => {
  const newUser = await User.create({ ...req.body })
  console.log('new user created', newUser)
  let response = new HTTPResponse(StatusCodes.CREATED, newUser)
  return res.status(StatusCodes.CREATED).json(response)
}

module.exports = { defaultPage, getAllUsers, addUser }
