const { connectToDatabase } = require("./postgres.config")

const startServer = async (app) => {
  try {
    const sequelize = await connectToDatabase();
    // sync models 
    await sequelize.sync()

    app.listen(process.env.PORT, () => {
      console.warn(`Server is running at http://localhost:${process.env.PORT}`);
    });

  } catch (error) {
    console.error('Failed to start the server:', error);
    process.exit(1);
  }
};

module.exports = { startServer };
