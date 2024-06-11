import { useState } from "react";
import { Time } from "../Time/Time";
import styles from "./TimeContainer.module.css";
import { useDispatch } from "react-redux";
import { setTime } from "../../redux/userSlice";

export const TimeContainer = ({ setCanClickNext }) => {
  const dispatch = useDispatch();

  const times = [
    "09:00",
    "09:15",
    "09:30",
    "09:45",
    "10:00",
    "10:15",
    "10:30",
    "10:45",
    "11:00",
    "11:15",
    "11:30",
    "11:45",
    "12:00",
    "12:15",
    "12:30",
    "12:45",
  ];

  const [activeTime, setActiveTime] = useState(null);

  const handleTimeClick = (time) => {
    setActiveTime(time);
    dispatch(setTime(time));
  };

  return (
    <div className={styles["time-container"]}>
      {times.map((time, index) => (
        <Time
          key={index}
          time={time}
          onClick={handleTimeClick}
          isActive={activeTime === time}
          setCanClickNext={setCanClickNext}
        />
      ))}
    </div>
  );
};
