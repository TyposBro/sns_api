import { Response, Request } from "express";

export const getUserList = (req: Request, res: Response): Response => {
  console.log(req);
  return res.sendStatus(200).json({ msg: "Hai" });
};
