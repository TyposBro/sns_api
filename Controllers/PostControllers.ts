import { Request, Response } from "express";
import PostModel from "../Models/PostModel";
import UserModel from "../Models/UserModel";

export const getPost = async (req: Request, res: Response) => {
  const post = await PostModel.findById(req.params.id).catch(() => res.status(500).json({ msg: "Internal Server Error" }));

  res.status(200).json(post);
};

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

export const react = async (req: Request, res: Response) => {
  try {
    const post = await PostModel.findById(req.params.id);

    if (!post?.likes.includes(req.body.userId)) {
      await post?.updateOne({ $push: { likes: req.body.userId } });
      res.sendStatus(200);
    } else {
      await post?.updateOne({ $pull: { likes: req.body.userId } });
      res.sendStatus(200);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const getTimeline = async (req: Request, res: Response) => {
  try {
    const user: any = await UserModel.findById(req.body.userId);
    const userPosts = await PostModel.find({ userId: req.body.userId });
    const friendPosts = await Promise.all(user?.followings?.map((friendId: any) => PostModel.find({ userId: friendId })));

    // TODO: check
    res.status(200).json(userPosts.concat(...friendPosts));
  } catch (error) {
    console.error(error);

    res.sendStatus(500);
  }
};
