import { Router } from "express";
import {
  createTodoController,
  getTodosController,
  updateTodoController,
  deleteTodoController
} from "./todo.controller.js";

const router = Router();

router.get("/", getTodosController);
router.post("/", createTodoController);
router.put("/", updateTodoController);     // /api/todos?id=123
router.delete("/", deleteTodoController);  // /api/todos?id=123

export default router;
