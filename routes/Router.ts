import { Router } from "express";
import UserRoutes from "./UserRoutes";
import AuthRoutes from "./AuthRoutes";

const router: Router = Router();

router.use("/auth", AuthRoutes);
router.use("/users", UserRoutes);

export default router;
