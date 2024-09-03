const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.PORT_DB,
    logging: false
  }
)

const connectToDatabase = async () => {
  // try {
  //   await sequelize.authenticate();
  //   console.log('Connected to PostgreSQL database with Sequelize');
  //   return sequelize;
  // } catch (error) {
  //   console.error('Sequelize connection error:', error);
  //   throw error;
  // }
  try {
    await sequelize.authenticate()
    console.log('Connection to PostgreSQL database established successfully.')

    await sequelize.sync({ alter: true })
    console.log('Database & tables synchronized successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
    throw error
  }
}

module.exports = { sequelize, connectToDatabase }
