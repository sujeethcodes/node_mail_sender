import express from "express";
import { mail } from "./routes/mail.js";

const router = express.Router();

router.use("/", mail);


export default router;
