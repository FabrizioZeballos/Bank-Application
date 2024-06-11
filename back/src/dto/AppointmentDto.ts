import { Status } from "../interfaces/IAppointment";

interface AppointmentDto {
  date: string;
  time: string;
  userId: number;
  status: Status;
  action: string;
}

export { AppointmentDto };
