import mongoose from "mongoose";

const emailLogSchema = new mongoose.Schema(
  {
    toEmail: { type: String, required: true },
    subject: { type: String, required: true },
    body: { type: String, required: true },
    status: { type: String, enum: ["success", "failed"], default: "failed" },
    delivered: { type: Boolean, default: false },
    errorText: { type: String, default: "" },
  },
  { timestamps: true } // createdAt, updatedAt auto
);

export default mongoose.model("EmailLog", emailLogSchema);
