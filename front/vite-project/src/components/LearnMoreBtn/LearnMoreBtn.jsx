import styles from "./LearnMoreBtn.module.css";

export const LearnMoreBtn = () => {
  return (
    <div>
      <button className={styles["btn"]}>
        <p className={styles["txt"]}>Learn more</p>
        <div className={styles["slider-bg"]}></div>
      </button>
    </div>
  );
};
