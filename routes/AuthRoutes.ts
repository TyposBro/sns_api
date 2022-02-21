import { validateRegistration, duplicateCheck } from "./../Middlewares/validate";
import { Router } from "express";
import { login, register } from "../Controllers/AuthController";
import { hash } from "../Middlewares/hash";
import { body } from "express-validator";

const router: Router = Router();

router.post(
  "/register",
  //! VALIDATION
  [body("username").toLowerCase(), body("email").isEmail().normalizeEmail(), body("password").isAlphanumeric().isLength({ min: 6 })],
  //* END
  hash,
  validateRegistration,
  duplicateCheck,
  register
);
router.post(
  "/login",
  //! VALIDATION
  [body("username").toLowerCase(), body("email").normalizeEmail(), body("password").isAlphanumeric().isLength({ min: 6 })],
  validateRegistration,
  //* END
  login
);

export default router;
