"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    username: { type: String, required: true, unique: true, min: 3, max: 30, toLowerCase: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, min: 3, max: 30, lowercase: true },
    password: { type: String, required: true, min: 6, select: false },
    profilePicture: { type: String, default: "" },
    coverPicture: { type: String, default: "" },
    followers: { type: [Number], default: [] },
    followings: { type: [Number], default: [] },
    isAdmin: { type: Boolean, default: false },
}, { timestamps: true });
const UserModel = (0, mongoose_1.model)("User", schema);
exports.default = UserModel;
//# sourceMappingURL=UserModel.js.map