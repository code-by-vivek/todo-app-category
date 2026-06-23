import { Todo } from "./todo.model.js";

export const createTodo = async (data) => {
  return await Todo.create(data);
};

export const getTodos = async (category) => {
  const filter = category ? { category } : {};
  return await Todo.find(filter).populate("category");
};

export const updateTodo = async (id, data) => {
  return await Todo.findByIdAndUpdate(id, data, { new: true });
};

export const deleteTodo = async (id) => {
  return await Todo.findByIdAndDelete(id);
};
