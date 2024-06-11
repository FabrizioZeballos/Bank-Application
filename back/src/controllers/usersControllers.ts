import { Request, Response } from "express";
import {
  registerUserService,
  getAllUsersService,
  getUserService,
  getUserByCredIdService,
  setProfilePicService,
} from "../services/usersService";
import { validateCredService } from "../services/credentialsService";
import { UserDto } from "../dto/UserDto";
import { User } from "../entities/User";
import { catchAsync } from "../utils/catchAsync";

const getAllUsers = async function (
  req: Request,
  res: Response
): Promise<void> {
  const users: User[] = await getAllUsersService();

  res.status(200).json(users);
};

const getUser = async function (req: Request, res: Response): Promise<void> {
  const { id } = req.params;

  const user: User = await getUserService(Number(id));

  res.status(200).json(user);
};

const registerUser = async function (
  req: Request,
  res: Response
): Promise<void> {
  const {
    fullName,
    email,
    birthdate,
    identityNumber,
    username,
    password,
  }: UserDto = req.body;

  const registeredUser: User | undefined = await registerUserService({
    fullName,
    email,
    birthdate,
    identityNumber,
    username,
    password,
  });

  res.status(201).json(registeredUser);
};

const loginUser = async function (req: Request, res: Response): Promise<void> {
  const { username, password } = req.body;

  const userCredId: number = await validateCredService({ username, password });

  const user = await getUserByCredIdService(userCredId);

  const loggedIn = { login: true, user };

  res.status(200).json(loggedIn);
};

const setProfilePicture = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id, url } = req.body;

  console.log(id, url);

  await setProfilePicService({ id, url });

  res.status(200).json({ message: "Profile picture updated" });
};

export const getAllUsersCont = catchAsync(getAllUsers);
export const getUserCont = catchAsync(getUser);
export const registerUserCont = catchAsync(registerUser);
export const loginUserCont = catchAsync(loginUser);
export const setprofilePictureCont = catchAsync(setProfilePicture);
