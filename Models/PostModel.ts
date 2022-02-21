import { Schema, model } from "mongoose";
import IPost from "../Interfaces/IPost";

const schema = new Schema<IPost>(
  {
    userId: { type: String, required: true },
    desc: { type: String, max: 500 },
    img: { type: String },
    likes: { type: [String], default: [] },
  },
  { timestamps: true }
);

const PostModel = model<IPost>("Post", schema);

export default PostModel;
