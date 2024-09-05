const { where } = require('sequelize')
const UserAdditionalInfo = require('../models/userAdditional.modelInfo')
const { HTTPResponse, HTTPError } = require('../helpers/response')
const { StatusCodes } = require('http-status-codes')
const User = require('../models/user.model')

const addAdditionalInformation = async (req, res) => {
  let response
  const { address } = req.body
  const user = req.user
  console.log('address', address)
  let additionalInformation = await UserAdditionalInfo.findOne({
    where: { user_id: user.id }
  })

  if (additionalInformation) {
    additionalInformation = await additionalInformation.update({ address })
    response = new HTTPResponse(
      'Additional information updated successfully',
      additionalInformation
    )
    return res.status(StatusCodes.OK).json(response)
  } else {
    additionalInformation = await UserAdditionalInfo.create({
      user_id: user.id,
      address
    })
    response = new HTTPResponse(
      'Additional information created successfully',
      additionalInformation
    )
    return res.status(StatusCodes.CREATED).json(response)
  }
}

const fetchInformation = async (req, res) => {
  const user = req.user
  let error, response
  const userWithAdditionalInfo = await User.findOne({
    where: { id: user.id },
    attributes: ['id', 'user_name'],
    include: [
      {
        model: UserAdditionalInfo,
        attributes: ['user_id', 'address']
      }
    ]
  })

  if (!userWithAdditionalInfo) {
    error = new HTTPError('User not found', StatusCodes.NOT_FOUND)
    return res.status(StatusCodes.NOT_FOUND).json(response)
  }
  return res.status(StatusCodes.OK).json(userWithAdditionalInfo)
}

module.exports = { addAdditionalInformation, fetchInformation }
