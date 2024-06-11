import { Router } from "express";
import {
  cancelAppointmentCont,
  getAllAppointmentsCont,
  getAppointmentCont,
  getUserAppointmentsCont,
  scheduleAppointmentCont,
} from "../controllers/appointmentsController";

const appointmentsRouter = Router();

appointmentsRouter.get("/", getAllAppointmentsCont);
appointmentsRouter.get("/:appointmentId", getAppointmentCont);
appointmentsRouter.get("/user/:userId", getUserAppointmentsCont);
appointmentsRouter.post("/schedule", scheduleAppointmentCont);
appointmentsRouter.put("/cancel/:appointmentId", cancelAppointmentCont);

export { appointmentsRouter };
