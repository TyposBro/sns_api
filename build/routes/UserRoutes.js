"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../Controllers/UserController");
const router = (0, express_1.Router)();
router.get("/", UserController_1.getUserList);
//* GET/FIND USER
//& FOLLOW A USER
//~ UNFOLLOW A USER
//^ UPDATE USER
router.put("/:id");
//! DELETE USER
exports.default = router;
//# sourceMappingURL=UserRoutes.js.map