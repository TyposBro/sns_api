import express from "express";
import { connect } from "mongoose";
// import morgan from "morgan";
import dotenv from "dotenv";
import helmet from "helmet";
import Router from "./routes/Router";

//! CONST
const HOST = process.env.HOST || 4000;
const app: express.Application = express();

//* CONFIG & CONNECT
dotenv.config();
run().catch((err) => console.error(err));

async function run(): Promise<void> {
  await connect(process.env.DB!);
  console.log("DB is ON");
}

app.use(express.json());
app.use(helmet());
// app.use(morgan());
app.use("/api", Router);

app.listen(HOST, () => {
  console.log(`Server's running on ${HOST}`);
});
