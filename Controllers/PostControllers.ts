import { Request, Response } from "express";
import PostModel from "../Models/PostModel";

export const createPost = async (req: Request, res: Response) => {
  const newPost = PostModel.create(req.body).catch(() => res.status(500).json({ msg: "Internal server error. Try later." }));

  res.status(200).json(newPost);
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const post = await PostModel.findById(req.params.id);
    if (req.body.userId === post?.userId) {
      await post?.updateOne({ $set: req.body });
      res.sendStatus(200);
    } else {
      res.status(403).json({ msg: "Unauthorized." });
    }
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const post = await PostModel.findById(req.params.id);
    if (req.body.userId === post?.userId) {
      await post?.deleteOne();
      res.sendStatus(200);
    } else {
      res.status(403).json({ msg: "Unauthorized." });
    }
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};
