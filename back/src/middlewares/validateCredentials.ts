import { NextFunction, Request, Response } from "express";
import { IUser } from "../interfaces/IUser";

const validateCredentials = function (
  req: Request<Partial<IUser>>,
  res: Response,
  next: NextFunction
) {
  const { credentialsId }: Partial<IUser> = req.body;

  const username = credentialsId?.username;
  const password = credentialsId?.password;

  if (!username || !password) {
    res.status(400).json({
      message: "Missing information",
    });
    return;
  }

  next();
};

export { validateCredentials };
