"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserRoutes_1 = __importDefault(require("./UserRoutes"));
const AuthRoutes_1 = __importDefault(require("./AuthRoutes"));
const router = (0, express_1.Router)();
router.use("/auth", AuthRoutes_1.default);
router.use("/users", UserRoutes_1.default);
exports.default = router;
//# sourceMappingURL=Router.js.map