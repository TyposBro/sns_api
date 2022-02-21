import * as bcrypt from "bcrypt";
import { Request, Response, NextFunction } from "express";
import { HydratedDocument } from "mongoose";
import IUser from "../Interfaces/IUser";
import UserModel from "../Model/UserModel";

export const hash = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const salt = await bcrypt.genSalt(10);
    req.body.encrypted = await bcrypt.hash(req.body.password, salt);

    next();
  } catch (error) {
    console.error(error);
  }
};

// export const decrypt = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const user = await UserModel.findOne({
//       email: req.body.email
//     })
//     req.body.decrypted = await bcrypt.compare(req.body.password);

//     next();
//   } catch (error) {
//     console.error(error);
//   }
// };
