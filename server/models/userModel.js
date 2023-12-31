import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email already exists"],
    },
    studentType: {
      type: String,
      enum: ["undergraduate", "graduate", "alumni"],
      default: "undergraduate",
    },
    major: {
      type: String,
    },
    bio: {
      type: String,
    },
    discord: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    github: {
      type: String,
    },
    role: {
      type: String,
      enum: ["member", "admin", "user"],
      default: "user",
    },
    events: {
      type: Array,
      default: [],
    },
    image: {
      type: String,
    },
    payment: {
      type: String,
      enum: ["semester", "yearly", "unpaid"],
      default: "unpaid",
    },
    projects: {
      type: Array,
      default: [],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
