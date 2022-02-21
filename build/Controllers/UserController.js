"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserList = void 0;
const getUserList = (req, res) => {
    console.log(req);
    return res.sendStatus(200).json({ msg: "Hai" });
};
exports.getUserList = getUserList;
//# sourceMappingURL=UserController.js.map