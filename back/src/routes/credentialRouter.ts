import { Router } from "express";

const credentialRouter = Router();

credentialRouter.get("/", (req, res) => {
  res.status(200).send("All credentials");
});

export { credentialRouter };
