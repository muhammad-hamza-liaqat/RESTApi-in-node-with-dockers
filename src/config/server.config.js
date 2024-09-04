const { connectToDatabase, sequelize } = require('./postgres.config')
const associationDefined = require('./association')

const startServer = async app => {
  try {
    const sequelize = await connectToDatabase()

    associationDefined()
    app.listen(process.env.PORT, () => {
      console.warn(`Server is running at http://localhost:${process.env.PORT}`)
    })
  } catch (error) {
    console.error('Failed to start the server:', error)
    process.exit(1)
  }
}

module.exports = { startServer }
