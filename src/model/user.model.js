const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema(
  {
    userName: {
      type: String
    },
    email: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const User = mongoose.model('User', userSchema)
module.exports = User
