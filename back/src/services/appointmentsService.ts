import { AppointmentModel, UserModel } from "../config/data-source";
import { AppointmentDto } from "../dto/AppointmentDto";
import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";
import { Status } from "../interfaces/IAppointment";
import { HTTPError } from "../utils/errorClass";

const getAllApposService = async function (): Promise<Appointment[]> {
  const appointments: Appointment[] = await AppointmentModel.find({
    relations: { user: true },
  });

  if (!appointments.length) throw new HTTPError("Appointments not found", 404);

  return appointments;
};

const getAppoService = async function (
  appointmentId: number
): Promise<Appointment> {
  const appointment: Appointment | null = await AppointmentModel.findOne({
    where: { id: appointmentId },
    relations: { user: true },
  });

  if (!appointment) throw new HTTPError("Appointment not found", 404);

  return appointment;
};

const getUserApposService = async function (
  userId: number
): Promise<Appointment[]> {
  /* const appointment: Appointment[] = await AppointmentModel.find({
    where: { user: { id: userId } },
    relations: { user: true },
  }); */

  const appointment: Appointment[] = await AppointmentModel.createQueryBuilder(
    "appointment"
  )
    .leftJoinAndSelect("appointment.user", "user")
    .where("user.id = :userId", { userId })
    .orderBy("appointment.status = :activeStatus", "DESC")
    .addOrderBy("appointment.status = :cancelledStatus", "DESC")
    .setParameter("activeStatus", "active")
    .setParameter("cancelledStatus", "cancelled")
    .getMany();

  if (!appointment) throw Error("Invalid user id");
  return appointment;
};

const scheduleAppoService = async function (appointment: AppointmentDto) {
  const { date, time, userId, status, action } = appointment;

  if (!date || !time || !userId) throw new HTTPError("Invalid data", 400);

  const user: User | null = await UserModel.findOne({ where: { id: userId } });

  if (!user) throw new HTTPError("User not found", 404);

  const newAppointment = AppointmentModel.create({
    date,
    time,
    status,
    user: user,
    action,
  });

  await AppointmentModel.save(newAppointment);

  return newAppointment;
};

const cancelAppoService = async function (
  appointmentId: number
): Promise<Appointment> {
  const appointment: Appointment | null = await AppointmentModel.findOne({
    where: { id: appointmentId },
    relations: { user: true },
  });

  if (!appointment) throw new HTTPError("Appointment not found", 404);
  appointment.status = Status.CANCELLED;

  await AppointmentModel.save(appointment);

  return appointment;
};

export {
  getAllApposService,
  getAppoService,
  getUserApposService,
  scheduleAppoService,
  cancelAppoService,
};
