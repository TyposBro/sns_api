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
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
// import morgan from "morgan";
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const Router_1 = __importDefault(require("./routes/Router"));
//! CONST
const HOST = process.env.HOST || 4000;
const app = (0, express_1.default)();
//* CONFIG & CONNECT
dotenv_1.default.config();
run().catch((err) => console.error(err));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, mongoose_1.connect)(process.env.DB);
        console.log("DB is ON");
    });
}
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
// app.use(morgan());
app.use("/api", Router_1.default);
app.listen(HOST, () => {
    console.log(`Server's running on ${HOST}`);
});
//# sourceMappingURL=index.js.map