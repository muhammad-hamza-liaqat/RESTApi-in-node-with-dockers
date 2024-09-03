const { Client } = require('pg')

const connectToDatabase = async () => {
  const client = new Client({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT_DB
  })

  try {
    await client.connect()
    console.log('Connected to PostgreSQL database')
    return client
  } catch (err) {
    console.error('Connection error', err.stack)
    throw err
  }
}

module.exports = { connectToDatabase }
