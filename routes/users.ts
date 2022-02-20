import { Router } from "express";
import { getUserList } from "../Controllers/User";

const router: Router = Router();

router.get("/", getUserList);

export default router;
