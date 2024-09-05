const { HTTPResponse, HTTPError } = require('../helpers/response')
const StatusCodes = require('http-status-codes')
const User = require('../models/user.model')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const hashPassword = require('../helpers/bcrypt')

const defaultPage = async (req, res) => {
  res.end('hello from default route')
}

const getAllUsers = async (req, res) => {
  const users = await User.findAll({})
  let response = new HTTPResponse('Operation completed successfully', users)
  return res.status(StatusCodes.OK).json(response)
}

const registerMe = async (req, res) => {
  let error, response;
  const { userName, email, password } = req.body;
  const user = await User.findOne({ where: { email } })
  if (user) {
    error = new HTTPError("user exists, try login!", StatusCodes.BAD_REQUEST)
    return res.status(StatusCodes.BAD_REQUEST).json(error)
  }
  const makePasswordHash = await hashPassword(password);
  console.log("password hashed------------------>", makePasswordHash);
  const newUser = await User.create({
    user_name: userName,
    email: email,
    password: makePasswordHash
  })
  console.log(newUser, "user created successfully!!!!!!!!")
  response = new HTTPResponse("user created successfully!", newUser)
  return res.status(StatusCodes.OK).json(response)
}

const loginMe = async (req, res) => {
  let error, response;
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) {
    error = new HTTPError("User does not exist, try signing up!", StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
  const passwordMatched = await bcrypt.compare(password, user.password);
  if (!passwordMatched) {
    error = new HTTPError("Incorrect password or email", StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role, userName: user.user_name },
    process.env.JWT_SECRET,
    { expiresIn: "1y" }
  );
  response = new HTTPResponse("Login successful", { name: user.user_name, token: token });
  return res.status(StatusCodes.OK).json(response);
}

module.exports = { defaultPage, getAllUsers, registerMe, loginMe }
