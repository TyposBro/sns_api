import { Router } from "express";
import { getPost, createPost, getTimeline, updatePost, deletePost, react } from "../Controllers/PostControllers";

const router: Router = Router();

//* CREATE POST
router.post("/", createPost);

// //* GET/FIND A POST
router.get("/:id", getPost);

// //* GET/FIND TIMELINE POSTS
router.get("/", getTimeline);

//^ UPDATE POST
router.put("/:id", updatePost);

//! DELETE POST
router.delete("/:id", deletePost);

//& LIKE/DISLIKE POST
router.put("/:id/react", react);

export default router;
