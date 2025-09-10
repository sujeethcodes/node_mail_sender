import "dotenv/config";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // await mongoose.connect(process.env.MONGO_URI, {
    await mongoose.connect("mongodb://127.0.0.1:27017/node_mail_sender",{

      useNewUrlParser: true,
      // useUnifiedTopology is not needed in Mongoose 8+
    });
    console.log("DB_RUNNING_SUCCESSFULLY");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
    process.exit(1);
  }
};

export default connectDB;
