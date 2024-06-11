import { useEffect } from "react";
import { ActionCard } from "../../components/ActionCard/ActionCard";
import styles from "./Actions.module.css";

export const Actions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const iconsArray = [
    {
      icon: <i className={`fa-solid fa-dollar-sign ${styles.icon}`}></i>,
      title: "Checking Account",
    },
    {
      icon: <i className={`fa-solid fa-piggy-bank ${styles.icon}`}></i>,
      title: "Savings Account",
    },
    {
      icon: <i className={`fa-brands fa-cc-visa ${styles.icon}`}></i>,
      title: "Credit Cards",
    },
    {
      icon: <i className={`fa-solid fa-house ${styles.icon}`}></i>,
      title: "Home Loans",
    },
    {
      icon: (
        <i className={`fa-solid fa-hand-holding-dollar ${styles.icon}`}></i>
      ),
      title: "Personal Loans",
    },
    {
      icon: <i className={`fa-solid fa-car-side ${styles.icon}`}></i>,
      title: "Auto Loans",
    },
    {
      icon: <i className={`fa-solid fa-seedling ${styles.icon}`}></i>,
      title: "Investing",
    },
  ];

  return (
    <div className={styles["view-container"]}>
      <h2 className={styles.title}>SELECT YOUR APPOINTMENT REASON</h2>
      <div className={styles["cards-container"]}>
        {iconsArray.map(({ icon, title }) => (
          <ActionCard icon={icon} action={title} />
        ))}
      </div>
    </div>
  );
};
