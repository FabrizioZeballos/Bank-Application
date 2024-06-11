import { useEffect } from "react";
import styles from "./MyAppointments.module.css";
import { Appointment } from "../../components/Appointment/Appointment";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAppointments } from "../../redux/userSlice";

export const MyAppointments = () => {
  const user = useSelector((state) => state.user);
  const { userData, userAppointments } = user;
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/appointments/user/${userData.user.id}`)
      .then((res) => dispatch(setAppointments(res.data)));
  }, []);

  useEffect(
    () => () => {
      dispatch(setAppointments([]));
    },
    []
  );

  return (
    <div className={styles["appointments-container"]}>
      {!userAppointments.length ? (
        <div className={styles["no-appointments"]}>
          No appointments scheduled yet
        </div>
      ) : (
        userAppointments.map((appointment) => (
          <Appointment
            key={appointment.id}
            appointmentId={appointment.id}
            date={appointment.date}
            time={appointment.time}
            status={appointment.status}
            action={appointment.action}
          />
        ))
      )}
    </div>
  );
};
