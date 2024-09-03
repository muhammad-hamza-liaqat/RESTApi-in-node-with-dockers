// const connectionDb = require('mongoose')
// connectionDb
//   .connect(process.env.MONGODB_URI)
//   .then(() => {
//     console.log(`connected to =>${process.env.MONGODB_URI}`)
//   })
//   .catch(error => {
//     console.log('DB not connected! error: ', error)
//   })
// module.exports = connectionDb

const mongoose = require('mongoose');

const connectDB = () => {
  return mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};


module.exports = { connectDB };
