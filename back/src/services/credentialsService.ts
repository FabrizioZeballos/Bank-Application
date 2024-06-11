import { CredentialModel } from "../config/data-source";
import { CredentialDto } from "../dto/CredentialDto";
import { Credential } from "../entities/Credential";
import { HTTPError } from "../utils/errorClass";

const createCredService = async function (
  credentials: CredentialDto
): Promise<Credential> {
  const newCredentials: Credential = CredentialModel.create(credentials);
  await CredentialModel.save(newCredentials);

  return newCredentials;
};

const validateCredService = async function (
  credentials: CredentialDto
): Promise<number> {
  const { username, password } = credentials;

  const userCredentials = await CredentialModel.findOne({
    where: { username },
  });

  if (!userCredentials) throw new HTTPError("Invalid username", 400);
  if (userCredentials.password !== password)
    throw new HTTPError("Invalid password", 400);

  return userCredentials.id;
};

export { createCredService, validateCredService };
