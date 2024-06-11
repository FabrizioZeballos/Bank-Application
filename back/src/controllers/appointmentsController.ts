import { Request, Response } from "express";
import {
  cancelAppoService,
  getAllApposService,
  getAppoService,
  getUserApposService,
  scheduleAppoService,
} from "../services/appointmentsService";
import { catchAsync } from "../utils/catchAsync";

const getAllAppointments = async function (
  req: Request,
  res: Response
): Promise<void> {
  const appointments = await getAllApposService();

  res.status(200).json(appointments);
};

const getAppointment = async function (req: Request, res: Response) {
  const { appointmentId } = req.params;

  const appointment = await getAppoService(Number(appointmentId));

  res.status(200).json(appointment);
};

const getUserAppointments = async function (
  req: Request,
  res: Response
): Promise<void> {
  const { userId } = req.params;
  const appointment = await getUserApposService(Number(userId));

  res.status(200).json(appointment);
};

const scheduleAppointment = async function (req: Request, res: Response) {
  const { date, time, userId, status, action } = req.body;

  const newAppointment = await scheduleAppoService({
    date,
    time,
    userId,
    status,
    action,
  });

  res.status(201).json(newAppointment);
};

const cancelAppointment = async function (req: Request, res: Response) {
  const { appointmentId } = req.params;

  const appointment = await cancelAppoService(Number(appointmentId));

  res.status(200).json(appointment);
};

export const getAllAppointmentsCont = catchAsync(getAllAppointments);
export const getAppointmentCont = catchAsync(getAppointment);
export const getUserAppointmentsCont = catchAsync(getUserAppointments);
export const scheduleAppointmentCont = catchAsync(scheduleAppointment);
export const cancelAppointmentCont = catchAsync(cancelAppointment);
