import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
} from "typeorm";

import { Appointment } from "../entities/Appointment";
import { sendAppointmentConfirmationEmail } from "../services/emailService";

@EventSubscriber()
export class AppointmentSubscriber
  implements EntitySubscriberInterface<Appointment>
{
  listenTo() {
    return Appointment;
  }

  async afterInsert(event: InsertEvent<Appointment>) {
    const { entity } = event;

    const user = entity.user;

    if (user && user.email) {
      const userEmail = user.email;

      await sendAppointmentConfirmationEmail(
        userEmail,
        "Appointment Scheduled",
        `
Dear ${user.fullName},

We are pleased to inform you that your appointment has been successfully scheduled.

Appointment Details:
- Date: ${entity.date}
- Time: ${entity.time} hrs
- Action: ${entity.action}

Thank you for choosing our service. If you have any questions or need to make changes, please feel free to contact us.

Best regards,
HHBC
`
      );
    }
  }
}
