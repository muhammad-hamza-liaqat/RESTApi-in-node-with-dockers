const yup = require('yup')
const StatusCodes = require('http-status-codes')

const addUserValidation = (req, res, next) => {
  const schema = yup.object({
    userName: yup.string().required('user_name is required!'),
    email: yup
      .string()
      .email('Enter a valid Email')
      .required('user email is required!'),
    password: yup.string().required('password is required!')
  })
  try {
    schema.validateSync(req.body, { abortEarly: false })
    console.log('validation passed!')
    next()
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.errors })
  }
}

const addCarValidation = (req, res, next) => {
  const schema = yup.object({
    carName: yup.string().required('carName is required!'),
    model: yup.string().required('model is required!')
  })
  try {
    schema.validateSync(req.body, { abortEarly: false })
    next()
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.errors })
  }
}

const loginValidation = (req, res, next) => {
  const schema = yup.object({
    email: yup.string().required('email is required!'),
    password: yup.string().required('password is required!')
  })
  try {
    schema.validateSync(req.body, { abortEarly: false })
    next()
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.errors })
  }
}

module.exports = { addUserValidation, addCarValidation, loginValidation }
