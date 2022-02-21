import { Router } from "express";
import { getUserById, updateUser, deleteUser, follow, unfollow } from "../Controllers/UserController";

const router: Router = Router();

//* GET/FIND USER
router.get("/:id", getUserById);

//^ UPDATE USER
router.put("/:id", updateUser);

//! DELETE USER
router.delete("/:id", deleteUser);

//& FOLLOW A USER
router.put("/:id/follow", follow);

//~ UNFOLLOW A USER
router.put("/:id/unfollow", unfollow);

export default router;
