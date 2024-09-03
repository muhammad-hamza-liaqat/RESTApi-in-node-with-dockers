const User = require('../model/user.model')
const { HTTPResponse, HTTPError } = require('../utils/response')
const StatusCodes = require('http-status-codes')

const defaultPage = async (req, res) => {
  res.end('welcome to the user enrollment system')
}

const getAllUsers = async (req, res) => {
  const users = await User.find({})
  console.log(users, 'users: <----')
  let response = new HTTPResponse('Operation completed successfully', users)
  return res.status(StatusCodes.OK).json(response)
}

const addUser = async (req, res) => {
  const { name, email } = req.body
  const newUser = await User.create({ ...req.body })
  console.log('new user created', newUser)
  let response = new HTTPResponse(StatusCodes.CREATED, newUser)
  return res.status(StatusCodes.CREATED).json(response)
}

const deleteUserById = async (req, res) => {
  let error, response
  const user = await User.findByIdAndDelete(req.params.id)
  console.log(`${req.params.id} to be deleted!`)
  if (!user) {
    error = new HTTPError('user not found', StatusCodes.NOT_FOUND)
    return res.status(StatusCodes.NOT_FOUND).json(error)
  }
  response = new HTTPResponse('user deleted successfully!', StatusCodes.OK)
  return res.status(StatusCodes.OK).json(response)
}

module.exports = { defaultPage, getAllUsers, addUser, deleteUserById }
