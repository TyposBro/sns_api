import { EStatus, ERelationship, ERole } from "./../Interfaces/IUser";
import { Schema, model } from "mongoose";
import IPost from "../Interfaces/IPost";

const schema = new Schema<IPost>(
  {
    userId: { type: String, required: true },
    desc: { type: String, max: 500 },
    img: { type: String },
    likes: { type: [String], default: [] },
    dislikes: { type: [String], default: [] },
  },
  { timestamps: true }
);

const UserModel = model<IPost>("User", schema);

export default UserModel;
function SchemaDefinitionProperty<T>(arg0: number): import("mongoose").NumberSchemaDefinition | undefined {
  throw new Error("Function not implemented.");
}
