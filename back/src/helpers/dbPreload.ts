import {
  AppDataSource,
  AppointmentModel,
  CredentialModel,
  UserModel,
} from "../config/data-source";

const user1 = {
  fullName: "Sophie Williams",
  email: "sophie.williams@example.com",
  birthdate: "1980-04-03",
  identityNumber: 789012345,
};

const credentialsUser1 = {
  username: "sophiewill",
  password: "Williams123",
};

const apposUser1 = {
  date: "19-03-2024",
  time: "09:30",
  action: "Home Loan",
};

const user2 = {
  fullName: "Daniel Brown",
  email: "daniel.brown@example.com",
  birthdate: "1993-09-08",
  identityNumber: 654321789,
};

const credentialsUser2 = {
  username: "danbrown",
  password: "secureDan789",
};

const apposUser2 = {
  date: "20-03-2024",
  time: "12:00",
  action: "Investing",
};

const user3 = {
  fullName: "Alice Smith",
  email: "alice.smith@example.com",
  birthdate: "1985-08-20",
  identityNumber: 987654321,
};

const credentialsUser3 = {
  username: "alicesmith22",
  password: "Strongpassword456",
};

const apposUser3 = {
  date: "02-04-2024",
  time: "08:00",
  action: "Auto Loan",
};

export const usersPreload = async function () {
  await AppDataSource.manager.transaction(
    async (transactionalEntityManager) => {
      const users = await UserModel.find();

      if (users.length) return;

      const newCredUser1 = CredentialModel.create(credentialsUser1);
      const newCredUser2 = CredentialModel.create(credentialsUser2);
      const newCredUser3 = CredentialModel.create(credentialsUser3);
      await transactionalEntityManager.save(newCredUser1);
      await transactionalEntityManager.save(newCredUser2);
      await transactionalEntityManager.save(newCredUser3);

      const newUser1 = UserModel.create({
        ...user1,
        credentials: newCredUser1,
      });
      const newUser2 = UserModel.create({
        ...user2,
        credentials: newCredUser2,
      });
      const newUser3 = UserModel.create({
        ...user3,
        credentials: newCredUser3,
      });
      await transactionalEntityManager.save(newUser1);
      await transactionalEntityManager.save(newUser2);
      await transactionalEntityManager.save(newUser3);
    }
  );
};

export const appointmentsPreload = async function () {
  await AppDataSource.manager.transaction(
    async (transactionalEntityManager) => {
      const appointments = await AppointmentModel.find();

      if (appointments.length) return;

      const user1 = await UserModel.findOne({ where: { id: 1 } });

      if (user1) {
        const newAppo = AppointmentModel.create({ ...apposUser1, user: user1 });

        await transactionalEntityManager.save(newAppo);
      }

      const user2 = await UserModel.findOne({ where: { id: 2 } });

      if (user2) {
        const newAppo = AppointmentModel.create({ ...apposUser2, user: user2 });

        await transactionalEntityManager.save(newAppo);
      }

      const user3 = await UserModel.findOne({ where: { id: 3 } });

      if (user3) {
        const newAppo = AppointmentModel.create({ ...apposUser3, user: user3 });

        await transactionalEntityManager.save(newAppo);
      }
    }
  );
};
