import styles from "./LearnMoreBtn.module.css";

export const LearnMoreBtnWhite = () => {
  return (
    <div>
      <button className={`${styles["btn"]} ${styles["btn-white"]}`}>
        <p className={styles["txt"]}>Learn more</p>
        <div
          className={`${styles["slider-bg"]} ${styles["slider-bg-white"]}`}
        ></div>
      </button>
    </div>
  );
};
