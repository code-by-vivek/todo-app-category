import { createTodo, getTodos, updateTodo, deleteTodo } from "./todo.service.js";

export const createTodoController = async (req, res) => {
  try {
    const todo = await createTodo(req.body);
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getTodosController = async (req, res) => {
  try {
    const { category } = req.query;
    const todos = await getTodos(category);
    res.json(todos);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateTodoController = async (req, res) => {
  try {
    const { id } = req.query;
    const todo = await updateTodo(id, req.body);
    res.json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteTodoController = async (req, res) => {
  try {
    const { id } = req.query;
    const todo = await deleteTodo(id);
    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
