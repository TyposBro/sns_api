import * as bcrypt from "bcrypt";
import { Request, Response } from "express";
import { HydratedDocument } from "mongoose";
import IUser from "../Interfaces/IUser";
import UserModel from "../Models/UserModel";

export const register = async (req: Request, res: Response) => {
  const newUser: HydratedDocument<IUser> = new UserModel({
    username: req.body.username,
    password: req.body.encrypted,
    name: req.body.name,
    email: req.body.email,
  });

  try {
    const user: IUser | null = await newUser.save();
    console.log(user);

    res.status(200).json({ msg: "OK" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error. Try later" });
  }
};

export const login = async (req: Request, res: Response) => {
  const user: IUser | null = await UserModel.findOne({ $or: [{ email: req.body.email }, { username: req.body.username }] });

  //! USER NOT FOUND
  !user && res.status(404).json({ msg: "User Not Found" });

  try {
    const password = user ? user.password : "";

    const pwd = await bcrypt.compare(req.body.password, password);

    !pwd && res.status(400).json({ msg: "Wrong password" });

    //* SUCCESS
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error. Try later" });
  }
};
