const { connectDB } = require('./mongodb.config')

const startServer = async app => {
  try {
    await connectDB()
    console.log(`Connected to MongoDB at ${process.env.MONGODB_URI}`)

    app.listen(process.env.PORT, () => {
      console.warn(`Server is running at http://localhost:${process.env.PORT}`)
    })
  } catch (err) {
    console.error(
      'Error connecting to the database or starting the server:',
      err
    )
    process.exit(1)
  }
}
module.exports = { startServer }
