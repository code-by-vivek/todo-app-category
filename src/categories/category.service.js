import { Category } from "./category.model.js";

// CREATE CATEGORY
export const createCategory = async (data) => {
  return await Category.create(data);
};

// GET ALL CATEGORIES
export const getAllCategories = async () => {
  return await Category.find();
};
