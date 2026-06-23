import { addComment, createPost,deletePost,getAllPosts, getPostById } from "./post.service.js";
import { addCommentSchema, createPostSchema } from "./post.validator.js";




export const createPostController = async (req, res) => {
  try {
    const { error } = createPostSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });

    const post = await createPost(req.body);
    res.status(201).json({ message: "Post created", post });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const getAllPostsController = async (req, res) => {
  try {
    const posts = await getAllPosts(req.query.search);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getPostByIdController = async (req, res) => {
  try {
    const data = await getPostById(req.params.id);
    res.status(200).json(data);
  } catch {
    res.status(404).json({ message: "Post not found" });
  }
};

export const addCommentController = async (req, res) => {
  try {
    const { error } = addCommentSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });

    const comment = await addComment(req.params.id, req.body);
    res.status(201).json({ message: "Comment added", comment });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deletePostController = async (req, res) => {
  try {
    await deletePost(req.query.id);
    res.status(200).json({ message: "Post deleted" });
  } catch (err) {
    res.status(404).json({ message: "Post not found" });
  }
};