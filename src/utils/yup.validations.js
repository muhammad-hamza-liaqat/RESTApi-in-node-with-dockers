const yup = require('yup')
const StatusCodes = require('http-status-codes')

const addUserValidation = (req, res, next) => {
  console.log("body validation", req.body);
  const schema = yup.object({
    userName: yup.string().required('userName is required!'),
    email: yup
      .string()
      .email('Enter a valid Email')
      .required('user email is required!'),
  });
  try {
    schema.validateSync(req.body, { abortEarly: false });
    console.log("validation passed!")
    next()
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.errors })
  }
}

module.exports = { addUserValidation }
