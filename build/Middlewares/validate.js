"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRegistration = exports.duplicateCheck = void 0;
const UserModel_1 = __importDefault(require("../Model/UserModel"));
const express_validator_1 = require("express-validator");
const duplicateCheck = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = yield UserModel_1.default.findOne({ email: req.body.email.toLowerCase() }).exec();
        const username = yield UserModel_1.default.findOne({ username: req.body.username.toLowerCase() }).exec();
        if (email) {
            res.status(400).json({ msg: "Email is already resgistered" });
        }
        else if (username) {
            res.status(400).json({ msg: "Username is already taken" });
        }
    }
    catch (error) {
        console.error(error);
    }
    next();
});
exports.duplicateCheck = duplicateCheck;
const validateRegistration = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    return next();
};
exports.validateRegistration = validateRegistration;
//# sourceMappingURL=validate.js.map