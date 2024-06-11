import { PORT } from "./config/envs";
import { app } from "./server";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";
import { appointmentsPreload, usersPreload } from "./helpers/dbPreload";

const initializeApp = async function () {
  await AppDataSource.initialize();
  console.log("Server connected to database successfully");

  await usersPreload();

  await appointmentsPreload();

  app.listen(PORT, () => {
    console.log(`Server listening to HTTP requests on port ${PORT}`);
  });
};

initializeApp();
