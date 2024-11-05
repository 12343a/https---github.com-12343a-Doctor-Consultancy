// const mongoose = require("mongoose");
// const colors = require("colors");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);
//   } catch (error) {
//     console.log(`Mongodb Server Issue ${error}`.bgRed.white);
//   }
// };

// module.exports = connectDB;








const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Check if the MONGO_URL is defined
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL is not defined in .env file");
    }
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
