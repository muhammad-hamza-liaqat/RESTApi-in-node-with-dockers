const yup = require('yup')
const StatusCodes = require('http-status-codes')

const addUserValidation = (req, res, next) => {
  const schema = yup.object({
    userName: yup.string().required('userName is required!'),
    email: yup
      .string()
      .email('Enter a valid Email')
      .required('user email is required!')
  })
  try {
    schema.validateSync(req.body, { abortEarly: false })
    next()
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.errors })
  }
}

module.exports = { addUserValidation }
