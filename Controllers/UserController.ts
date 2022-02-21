import { Response, Request } from "express";
import * as bcrypt from "bcrypt";
import UserModel from "../Model/UserModel";

export const getUserById = async (req: Request, res: Response) => {
  const user = await UserModel.findById(req.params.id).catch(() => res.status(500).json({ msg: "Internal Server Error. Try later" }));

  res.status(200).json(user);
};

//^ UPDATE
export const updateUser = async (req: Request, res: Response) => {
  //* User is Authorized as Admin or UPDATING their own info
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    //^ User wants to  UPDATE their PASSWORD
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error. Try later" });
      }
    }

    //^ Find & UPDATE
    await UserModel.findByIdAndUpdate(req.params.id, { $set: req.body }).catch(() => res.status(500).json({ msg: "Internal Error" }));

    res.status(201).json({ msg: "Account has been updated." });
  } else {
    res.status(403).json({ msg: "Unauthorized" });
  }
};

//! DELETE
export const deleteUser = async (req: Request, res: Response) => {
  //* User is Authorized as Admin or DELETE their own info
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    //! Find & DELETE
    await UserModel.findByIdAndDelete(req.body.userId).catch(() => res.status(500).json({ msg: "Internal Server Error. Try later" }));

    res.status(200).json({ msg: "Account has been deleted successfully." });
  } else {
    res.status(403).json({ msg: "Unauthorized. You can delete only your own account" });
  }
};
