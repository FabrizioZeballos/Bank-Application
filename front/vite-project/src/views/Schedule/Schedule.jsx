import { useEffect, useState } from "react";
import styles from "./Schedule.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar-styles.css";
import { TimeContainer } from "../../components/TimeContainer/TimeContainer";
import { useDispatch } from "react-redux";
import { setDate } from "../../redux/userSlice";
import { ConfirmationData } from "../../components/ConfirmationData/ConfirmationData";

export const Schedule = () => {
  const [activeDate, setActiveDate] = useState(new Date());
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [nextIsActive, setNextIsActive] = useState(false);
  const [canClickNext, setCanClickNext] = useState(false);
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

  const handleDateChange = (date) => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const fullDate = `${day}-${month + 1}-${year}`;

    setActiveDate(date);

    dispatch(setDate(fullDate));

    setShowTimeSlots(true);
  };

  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };

  const tileDisabled = (date) => {
    return isWeekend(date);
  };

  const isBeforeCurrentDate = (date) => {
    return date < currentDate;
  };

  const isTwoMonthsAway = (dateToCheck) => {
    const currentDate = new Date();
    const twoMonthsAwayDate = new Date();
    twoMonthsAwayDate.setMonth(currentDate.getMonth() + 3);
    return dateToCheck > twoMonthsAwayDate;
  };

  const handleNext = () => {
    setShowConfirmation(true);
    setShowTimeSlots(false);
    setNextIsActive(true);
  };

  return (
    <div>
      <h3 className={styles.title}>
        {nextIsActive ? "CONFIRM APPOINTMENT" : "SELECT DATE AND TIME"}
      </h3>
      <div className={styles["schedule-form"]}>
        <div className={styles["schedule-form-top"]}>
          {!showConfirmation ? (
            <Calendar
              tileDisabled={({ date }) =>
                tileDisabled(date) ||
                isBeforeCurrentDate(date) ||
                isTwoMonthsAway(date)
              }
              onChange={handleDateChange}
              tileClassName={({ date }) =>
                date.toDateString() === activeDate.toDateString()
                  ? "active-date"
                  : ""
              }
            />
          ) : null}
          {showTimeSlots ? (
            <TimeContainer setCanClickNext={setCanClickNext} />
          ) : null}
        </div>

        {nextIsActive ? <ConfirmationData /> : null}

        <div className={styles["schedule-form-bottom"]}>
          {!nextIsActive ? (
            <button
              className={` ${
                canClickNext ? styles["next-btn"] : styles["next-btn-disabled"]
              }`}
              onClick={handleNext}
              disabled={canClickNext ? false : true}
            >
              Next
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};
