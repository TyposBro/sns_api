import { Router } from "express";
import { createPost, updatePost, deletePost, react } from "../Controllers/PostControllers";

const router: Router = Router();

//* CREATE POST
router.post("/", createPost);

// //* GET/FIND A POST
// router.get("/:id", );

// //* GET/FIND TIMELINE POSTS
// router.get("/", createPost);

//^ UPDATE POST
router.put("/:id", updatePost);

//! DELETE POST
router.delete("/:id", deletePost);

//& LIKE/DISLIKE POST
router.put("/:id/react", react);

export default router;
