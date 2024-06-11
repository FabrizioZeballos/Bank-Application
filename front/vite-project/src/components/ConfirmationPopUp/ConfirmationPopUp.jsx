import styles from "./ConfirmationPopUp.module.css";

export const ConfirmationPopUp = ({ showPopUp, setShowPopUp }) => {
  const handleClick = () => {
    setShowPopUp(false);
  };

  return (
    <div
      className={`${styles["pop-up"]} ${
        showPopUp ? styles["pop-up-show"] : ""
      }`}
    >
      <i className={`fa-solid fa-circle-check ${styles.check}`}></i>
      <p>
        Appointment scheduled. You'll receive an email confirmation shortly.
      </p>
      <div className={styles["close-icon-container"]} onClick={handleClick}>
        <i className={`fa-solid fa-xmark ${styles.close}`}></i>
      </div>
    </div>
  );
};
