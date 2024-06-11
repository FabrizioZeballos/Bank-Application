import { Router } from "express";
import {
  getAllUsersCont,
  getUserCont,
  loginUserCont,
  registerUserCont,
  setprofilePictureCont,
} from "../controllers/usersControllers";

const usersRouter = Router();

usersRouter.get("/", getAllUsersCont);
usersRouter.get("/:id", getUserCont);
usersRouter.post("/register", registerUserCont);
usersRouter.post("/login", loginUserCont);
usersRouter.put("/updatePicture", setprofilePictureCont);

export { usersRouter };
