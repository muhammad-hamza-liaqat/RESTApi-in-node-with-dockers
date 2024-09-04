const yup = require('yup')
const StatusCodes = require('http-status-codes')

const addUserValidation = (req, res, next) => {
  console.log('body validation', req.body)
  const schema = yup.object({
    user_name: yup.string().required('userName is required!'),
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

// const deleteUserValidations = (req, res, next) => {
//   const schema = yup.object({
//     id: yup
//       .string()
//       .required('ID is required!')
//       .test({
//         name: 'isValidObjectId',
//         message: 'Invalid ID format',
//         test: value => mongoose.isValidObjectId(value)
//       })
//   })
//   try {
//     schema.validateSync(req.params, { abortEarly: false })
//     console.log('validation passed!')
//     next()
//   } catch (error) {
//     res.status(StatusCodes.BAD_REQUEST).json({ error: error.errors })
//   }
// }


const addCarValidation = (req, res, next) => {
  const schema = yup.object({
    car_name: yup.string().required('carName is required!'),
    model: yup.string().required('model is required!')
  })
  try {
    schema.validateSync(req.body, { abortEarly: false })
    next()
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.errors })
  }
}

module.exports = { addUserValidation, addCarValidation }
