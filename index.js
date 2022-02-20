import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import helmet from "helmet";

const App = express();
const HOST = process.env.HOST || 4000;
dotenv.config();

mongoose.connect(process.env.DB, { useNewUrlParser: true }, () => {
  console.log(`DB is running`);
});

App.use(express.json());
App.use(helmet());
App.use(morgan());

App.listen(HOST, () => {
  console.log(`Server's running on ${HOST}`);
});
