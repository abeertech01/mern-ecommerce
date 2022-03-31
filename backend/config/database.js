const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const data = await mongoose.connect(process.env.DB_URI);
    console.log(`Mongodb connected with server: ${data.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDatabase;
