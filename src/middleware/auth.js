const jwt = require('jsonwebtoken')
const { HTTPError } = require('../helpers/response')
const statusCodes = require('http-status-codes')
const User = require('../models/user.model')

const authToken = async (req, res, next) => {
  try {
    const token = req.header('Authorization')
    if (!token) {
      const error = new HTTPError(
        'Token is not attached',
        statusCodes.UNAUTHORIZED
      )
      return res.status(statusCodes.UNAUTHORIZED).json(error)
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const user = await User.findOne({ where: { id: decoded.id } })
    if (!user) {
      const error = new HTTPError('User Deleted', statusCodes.UNAUTHORIZED)
      return res.status(statusCodes.UNAUTHORIZED).json(error)
    }

    req.user = decoded
    console.log('decoded user from jwt------->', decoded)
    next()
  } catch (err) {
    console.log('auth-middleware', err.message)
    const error = new HTTPError(
      'Token is invalid or expired',
      statusCodes.UNAUTHORIZED
    )
    return res.status(statusCodes.UNAUTHORIZED).json(error)
  }
}

module.exports = authToken
