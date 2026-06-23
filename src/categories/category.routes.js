import { Router } from "express";
import { createCategoryController,getAllCategoriesController } from "./category.controller.js";

const router = Router();

router.get("/", getAllCategoriesController);
router.post("/", createCategoryController);

export default router;