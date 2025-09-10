import "dotenv/config";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI,{

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
