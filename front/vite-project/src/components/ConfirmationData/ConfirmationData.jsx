import { useSelector } from "react-redux";
import styles from "./ConfirmationData.module.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConfirmationPopUp } from "../ConfirmationPopUp/ConfirmationPopUp";

export const ConfirmationData = () => {
  const { selectedAction, selectedDate, selectedTime, userData } = useSelector(
    (state) => state.user
  );
  const {
    user: { id },
  } = userData;
  const [showPopUp, setShowPopUp] = useState(false);
  const [showHomeBtn, setShowHomeBtn] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const handleConfirmation = async () => {
    setDisabled(true);

    try {
      const { data } = await axios.post(
        "http://localhost:3000/appointments/schedule",
        {
          date: selectedDate,
          time: selectedTime,
          action: selectedAction,
          userId: id,
        }
      );
      setShowPopUp(true);
      setShowHomeBtn(true);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className={styles["general-container"]}>
      <div className={styles["confirmation-container"]}>
        <h3 className={styles.title}>Your appointment:</h3>
        <p className={styles.data}>
          <i className={`fa-solid fa-tag ${styles.icon}`}></i> {selectedAction}
        </p>
        <p className={styles.data}>
          <i className={`fa-regular fa-calendar ${styles.icon}`}></i>{" "}
          {selectedDate}
        </p>
        <p className={styles.data}>
          <i className={`fa-regular fa-clock ${styles.icon}`}></i>{" "}
          {selectedTime} hs
        </p>
      </div>
      {showHomeBtn ? (
        <button className={styles["home-btn"]} onClick={handleHome}>
          Home
        </button>
      ) : (
        <button
          className={`${styles["confirmation-btn"]} ${
            disabled ? styles.disabled : null
          }`}
          onClick={handleConfirmation}
          disabled={disabled ? true : false}
        >
          Confirm
        </button>
      )}
      <ConfirmationPopUp showPopUp={showPopUp} setShowPopUp={setShowPopUp} />
    </div>
  );
};
