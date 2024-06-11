import express, { Request, Response, NextFunction } from "express";
import { indexRouter } from "./routes/indexRouter";
import morgan from "morgan";
import { HTTPError } from "./utils/errorClass";
import cors from "cors";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(indexRouter);

app.use((err: HTTPError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode).send({
    error: err.message,
  });
});

export { app };
