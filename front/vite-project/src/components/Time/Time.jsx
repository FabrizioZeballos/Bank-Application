import styles from "./Time.module.css";

export const Time = ({ time, onClick, isActive, setCanClickNext }) => {
  const handleClick = () => {
    onClick(time);
    setCanClickNext(true);
  };
  return (
    <div
      className={`${styles.time} ${isActive ? styles["time-active"] : ""}`}
      onClick={handleClick}
    >
      <span>{time}</span>
    </div>
  );
};
