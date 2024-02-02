import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);

    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    // console.log(process.env.MONGO_URL)
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
