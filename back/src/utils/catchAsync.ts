import { Request, NextFunction, Response } from "express";

export const catchAsync = (controller: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    controller(req, res).catch((error: Error) => next(error));
  };
};
