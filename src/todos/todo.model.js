import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    priority: { type: String, enum: ["low", "medium", "high"], default: "low" },
    completed: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
