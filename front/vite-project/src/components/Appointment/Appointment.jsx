import { useDispatch, useSelector } from "react-redux";
import styles from "./Appointment.module.css";
import axios from "axios";
import { cancelAppointment } from "../../redux/userSlice";
import { useEffect, useState } from "react";

export const Appointment = ({ appointmentId, date, time, status, action }) => {
  const { userAppointments } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const updateCurrentDate = () => {
      setCurrentDate(new Date());
    };

    const timer = setInterval(updateCurrentDate, 60000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const currentDay = currentDate.getDate();
  const dateDay = Number(date[0] + date[1]);

  const handleClick = async () => {
    console.log("yeah");
    await axios.put(
      `http://localhost:3000/appointments/cancel/${appointmentId}`
    );
    dispatch(cancelAppointment(appointmentId));
  };

  useEffect(() => {}, [userAppointments]);

  return (
    <div className={styles["appointment-container"]}>
      <div className={styles.left}>
        <p className={styles["item"]}>{date}</p>
        <p className={styles["item"]}>{time} hs</p>
        <p className={styles["item"]}>{action}</p>
        <p className={styles["item"]}>
          <span className={status === "active" ? styles.green : styles.red}>
            {" "}
            {status.toUpperCase()}{" "}
          </span>
        </p>
      </div>
      <button
        onClick={handleClick}
        className={
          status === "cancelled" || dateDay === currentDay
            ? styles["disabled-btn"]
            : styles["cancel-btn"]
        }
        disabled={
          status === "cancelled" || dateDay === currentDay ? true : false
        }
      >
        Cancel
      </button>
    </div>
  );
};
