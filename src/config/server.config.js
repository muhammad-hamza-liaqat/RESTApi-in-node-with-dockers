const {connectToDatabase} = require('./postgres.config')

const startServer = async (app) => {
  try {
    const dbClient = await connectToDatabase()

    app.listen(process.env.PORT, () => {
      console.warn(`server is running at http://localhost:${process.env.PORT}`)
    })
  } catch (error) {
    console.error('Failed to start the application', error)
  }
}

module.exports = { startServer }
