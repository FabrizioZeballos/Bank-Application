enum Status {
  ACTIVE = "active",
  CANCELLED = "cancelled",
}

interface IAppointment {
  id: number;
  date: string;
  time: string;
  userId: number;
  status: Status;
}

export { IAppointment, Status };
