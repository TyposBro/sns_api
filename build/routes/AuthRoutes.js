"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = require("./../Middlewares/validate");
const express_1 = require("express");
const AuthController_1 = require("../Controllers/AuthController");
const hash_1 = require("../Middlewares/hash");
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
router.post("/register", 
//! VALIDATION
[(0, express_validator_1.body)("username").toLowerCase(), (0, express_validator_1.body)("email").isEmail().normalizeEmail(), (0, express_validator_1.body)("password").isAlphanumeric().isLength({ min: 6 })], 
// !END
hash_1.hash, validate_1.validateRegistration, validate_1.duplicateCheck, AuthController_1.register);
router.post("/login", 
//! VALIDATION
[(0, express_validator_1.body)("username").toLowerCase(), (0, express_validator_1.body)("email").isEmail().normalizeEmail(), (0, express_validator_1.body)("password").isAlphanumeric().isLength({ min: 6 })], 
// !END
AuthController_1.login);
exports.default = router;
//# sourceMappingURL=AuthRoutes.js.map