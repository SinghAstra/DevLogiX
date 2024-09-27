import { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    emailVerified: { type: Date },
    image: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);