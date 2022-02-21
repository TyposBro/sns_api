import { Router } from "express";
import { getUserList } from "../Controllers/UserController";
import { body } from "express-validator";
import { validateRegistration } from "../Middlewares/validate";

const router: Router = Router();

router.get("/", getUserList);

//* GET/FIND USER

//& FOLLOW A USER

//~ UNFOLLOW A USER

//^ UPDATE USER
router.put(
  "/:id",
  //! VALIDATION
  [body("username").toLowerCase(), body("email").normalizeEmail(), body("password").isAlphanumeric().isLength({ min: 6 })],
  validateRegistration
  //* END
);

//! DELETE USER

export default router;
