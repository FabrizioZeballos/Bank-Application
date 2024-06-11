import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { Appointment } from "../entities/Appointment";
import { AppointmentSubscriber } from "../suscribers/AppointmentSuscriber";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "777fabri777db",
  database: "hhbc_db",
  synchronize: true,
  logging: false,
  entities: [User, Credential, Appointment],
  subscribers: [AppointmentSubscriber],
  migrations: [],
  /*  dropSchema: true, */
});

const UserModel = AppDataSource.getRepository(User);
const CredentialModel = AppDataSource.getRepository(Credential);
const AppointmentModel = AppDataSource.getRepository(Appointment);

export { UserModel, CredentialModel, AppointmentModel };
