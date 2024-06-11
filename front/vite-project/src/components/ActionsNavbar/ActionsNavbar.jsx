import styles from "./ActionsNavbar.module.css";

export const ActionsNavbar = () => {
  return (
    <div className={styles["actions-navbar"]}>
      <ul className={styles["actions-list"]}>
        <li className={styles.action}>
          <a className={styles["action-link"]} href="#checking">
            Checking
          </a>
        </li>
        <li className={styles.action}>
          <a className={styles["action-link"]} href="#savings">
            Savings & CDs
          </a>
        </li>
        <li className={styles.action}>
          <a className={styles["action-link"]} href="#credit-card">
            Credit Cards
          </a>
        </li>
        <li className={styles.action}>
          <a className={styles["action-link"]} href="#home-loan">
            Home Loans
          </a>
        </li>
        <li className={styles.action}>
          <a className={styles["action-link"]} href="#personal-loan">
            Personal Loans
          </a>
        </li>
        <li className={styles.action}>
          <a className={styles["action-link"]} href="#auto-loan">
            Auto Loans
          </a>
        </li>
        <li className={styles.action}>
          <a className={styles["action-link"]} href="#investing">
            Investing
          </a>
        </li>
      </ul>
    </div>
  );
};
