import express from "express";
import { sendEmailController, getLogsController } from "../controller/mail.js";

const mail = express.Router();

mail.post("/send", sendEmailController);
mail.get("/logs/mongo", getLogsController);

export { mail };
