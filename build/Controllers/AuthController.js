"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.login = exports.register = void 0;
const bcrypt = __importStar(require("bcrypt"));
const UserModel_1 = __importDefault(require("../Model/UserModel"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = new UserModel_1.default({
        username: req.body.username,
        password: req.body.encrypted,
        name: req.body.name,
        email: req.body.email,
    });
    try {
        const user = yield newUser.save();
        console.log(user);
        res.status(200).json({ msg: "OK" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error. Try later" });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UserModel_1.default.findOne({ $or: [{ email: req.body.email }, { username: req.body.username }] });
    //! USER NOT FOUND
    !user && res.status(404).json({ msg: "User Not Found" });
    try {
        const password = user ? user.password : "";
        const pwd = yield bcrypt.compare(req.body.password, password);
        !pwd && res.status(400).json({ msg: "Wrong password" });
        //* SUCCESS
        res.status(200).json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error. Try later" });
    }
});
exports.login = login;
//# sourceMappingURL=AuthController.js.map