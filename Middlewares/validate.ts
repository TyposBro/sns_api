import IUser from "../Interfaces/IUser";
import UserModel from "../Model/UserModel";
import { Request, Response, NextFunction } from "express";
import { HydratedDocument } from "mongoose";
import { validationResult } from "express-validator";

export const duplicateCheck = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const email = await UserModel.findOne({ email: req.body.email.toLowerCase() }).exec();
    const username = await UserModel.findOne({ username: req.body.username.toLowerCase() }).exec();
    if (email) {
      res.status(400).json({ msg: "Email is already resgistered" });
    } else if (username) {
      res.status(400).json({ msg: "Username is already taken" });
    }
  } catch (error) {
    console.error(error);
  }

  next();
};

export const validateRegistration = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};
