import { useDispatch } from "react-redux";
import styles from "./Welcome.module.css";
import { setWelcome } from "../../redux/userSlice";

export const Welcome = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setWelcome(false));
  };

  return (
    <div>
      <div className={styles["overlay"]} onClick={handleClick}></div>
      <div className={styles["welcome-popup"]}>
        <h3 className={styles["welcome-title"]}>Welcome to HHBC</h3>
        <p className={styles["welcome-txt"]}>
          Your financial journey begins here.
        </p>
        <button className={styles["continue-btn"]} onClick={handleClick}>
          Continue
        </button>
      </div>
    </div>
  );
};
