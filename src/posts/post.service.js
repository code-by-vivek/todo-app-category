import { Post } from "./post.model.js";
import { Comment } from "../comments/comment.model.js";

export const createPost = async (data) => {
  return await Post.create(data);
};

export const getAllPosts = async (search) => {
  const filter = search ? { title: { $regex: search, $options: "i" } } : {};

  const posts = await Post.find(filter);

  const postsWithCount = await Promise.all(
    posts.map(async (post) => {
      const count = await Comment.countDocuments({ postId: post._id });
      return { ...post.toObject(), commentCount: count };
    })
  );

  return postsWithCount;
};

export const getPostById = async (id) => {
  const post = await Post.findById(id);
  const comments = await Comment.find({ postId: id });

  return { post, comments };
};

export const addComment = async (id, data) => {
  return await Comment.create({ postId: id, ...data });
};

export const deletePost = async (id) => {
  await Comment.deleteMany({ postId: id });
  return await Post.findByIdAndDelete(id);
};