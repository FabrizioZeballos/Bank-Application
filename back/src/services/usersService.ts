import { UserModel } from "../config/data-source";
import { UserDto } from "../dto/UserDto";
import { User } from "../entities/User";
import { createCredService } from "./credentialsService";
import { Credential } from "../entities/Credential";
import { HTTPError } from "../utils/errorClass";
import { profilePictureDto } from "../dto/ProfilePictureDto";

const getAllUsersService = async function (): Promise<User[]> {
  const users: User[] = await UserModel.find({
    relations: { credentials: true },
  });

  return users;
};

const getUserService = async function (id: number): Promise<User> {
  const user: User | null = await UserModel.findOne({
    where: { id },
    relations: { credentials: true, appointments: true },
  });

  if (!user) throw new HTTPError("User not found", 404);
  return user;
};

const getUserByCredIdService = async function (
  userCredId: number
): Promise<User> {
  const user: User | null = await UserModel.findOne({
    where: { credentials: { id: userCredId } },
    relations: { credentials: true, appointments: true },
  });

  if (!user) throw new HTTPError("User not found", 404);
  return user;
};

const registerUserService = async function (user: UserDto): Promise<User> {
  const { fullName, email, birthdate, identityNumber, username, password } =
    user;

  if (
    !fullName ||
    !email ||
    !birthdate ||
    !identityNumber ||
    !username ||
    !password
  )
    throw new HTTPError("Invalid data", 400);

  const userFound: User | null = await UserModel.findOne({
    where: { credentials: { username } },
  });

  if (userFound) throw new HTTPError("Username already exists", 422);

  const credentials: Credential = await createCredService({
    username,
    password,
  });

  const newUser: User = UserModel.create({
    fullName,
    email,
    birthdate,
    identityNumber,
    credentials,
  });

  await UserModel.save(newUser);

  return newUser;
};

const setProfilePicService = async (data: profilePictureDto): Promise<void> => {
  const { id, url } = data;

  console.log(id, url);

  const user = await UserModel.findOne({ where: { id } });

  if (!user) throw new HTTPError("User not found", 404);

  user.profilePicture = url;

  await UserModel.save(user);
};

export {
  getAllUsersService,
  getUserService,
  getUserByCredIdService,
  registerUserService,
  setProfilePicService,
};
