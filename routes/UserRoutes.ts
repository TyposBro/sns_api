import { Router } from "express";
import { getUserById, updateUser, deleteUser } from "../Controllers/UserController";

const router: Router = Router();

//* GET/FIND USER
router.get("/:id", getUserById);

//& FOLLOW A USER

//~ UNFOLLOW A USER

//^ UPDATE USER
router.put("/:id", updateUser);

//! DELETE USER
router.delete("/:id", deleteUser);

export default router;
