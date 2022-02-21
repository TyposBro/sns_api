import { Schema, model } from "mongoose";
import IUser from "../Interfaces/IUser";

const schema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true, min: 3, max: 30, toLowerCase: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, min: 3, max: 30, lowercase: true },
    password: { type: String, required: true, min: 6, select: false },
    profilePicture: { type: String, default: "" },
    coverPicture: { type: String, default: "" },
    followers: { type: [Number], default: [] },
    followings: { type: [Number], default: [] },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const UserModel = model<IUser>("User", schema);

export default UserModel;
