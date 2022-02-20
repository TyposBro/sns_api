import { Router } from "express";
import UserRoutes from "./users";

const router: Router = Router();

router.use("/users", UserRoutes);

export default router;
