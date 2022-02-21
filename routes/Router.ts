import { Router } from "express";
import UserRoutes from "./UserRoutes";
import AuthRoutes from "./AuthRoutes";
import PostRoutes from "./PostRoutes";

const router: Router = Router();

router.use("/auth", AuthRoutes);
router.use("/user", UserRoutes);
router.use("/post", PostRoutes);

export default router;
