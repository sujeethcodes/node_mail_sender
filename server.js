import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import router from "./router.js";

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

const PORT = process.env.PORT || 5000;

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
