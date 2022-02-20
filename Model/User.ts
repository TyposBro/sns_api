import { Schema, model } from "mongoose";
import UserType from "../Interfaces/User";

const schema = new Schema<UserType>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: { type: String },
});

const UserModel = model<UserType>("User", schema);

export default UserModel;
