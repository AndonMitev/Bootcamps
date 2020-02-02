const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log(`MongoDB connected: ${connection.host}`.magenta.bold);
  } catch (error) {
    console.log(`Failed to connect to db ${error}`);
  }
};

module.exports = connectDB;
