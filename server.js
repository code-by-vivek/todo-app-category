import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";

// IMPORT ROUTES
import categoryRoutes from "./src/categories/category.routes.js";
import todoRoutes from "./src/todos/todo.routes.js";
import postRoutes from "./src/posts/post.routes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// FIX: Pass router to app.use()
app.use("/api/categories", categoryRoutes);
app.use("/api/todos", todoRoutes);
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Server is Running Successfullyyy!");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
