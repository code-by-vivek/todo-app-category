import { Router } from "express";
import { addCommentController, createPostController,deletePostController,getAllPostsController, getPostByIdController } from "./post.controller.js";

const router = Router();

router.post("/", createPostController);
router.get("/", getAllPostsController);
router.get("/:id", getPostByIdController);
router.post("/:id/comments", addCommentController);
router.delete("/", deletePostController);


export default router;