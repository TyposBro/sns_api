import { EStatus, ERelationship, ERole } from "./../Interfaces/IUser";
import { Schema, model } from "mongoose";
import IUser from "../Interfaces/IUser";

const schema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true, min: 3, max: 30, toLowerCase: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, min: 3, max: 30, lowercase: true },
    password: { type: String, required: true, min: 6 },
    profilePicture: { type: String, default: "" },
    coverPicture: { type: String, default: "" },
    followers: { type: [String], default: [] },
    followings: { type: [String], default: [] },
    role: { type: String, enum: ERole, default: ERole.user },
    desc: { type: String, max: 70 },
    location: { type: String, max: 70 },
    hometown: { type: String, max: 70 },
    status: { type: String, enum: EStatus, default: EStatus.offline },
    relationship: { type: String, enum: ERelationship, default: ERelationship.unknown },
  },
  { timestamps: true }
);

const UserModel = model<IUser>("User", schema);

export default UserModel;
function SchemaDefinitionProperty<T>(arg0: number): import("mongoose").NumberSchemaDefinition | undefined {
  throw new Error("Function not implemented.");
}
