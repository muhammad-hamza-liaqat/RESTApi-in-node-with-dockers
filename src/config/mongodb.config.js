const connectionDb = require('mongoose')
connectionDb
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(`connected to =>${process.env.MONGODB_URI}`)
  })
  .catch(error => {
    console.log('DB not connected! error: ', error)
  })
module.exports = connectionDb
