import { useSelector } from "react-redux";
import { MyAccount } from "../MyAccount/MyAccount";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const {
    userData: { login },
  } = useSelector((state) => state.user);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles["navbar-left"]}>
        <Link to="/" className={styles["home-link"]}>
          <h2 className={styles.brand}>
            <span className={styles["brand-hh"]}>HH</span>
            <span>BC</span>
          </h2>
        </Link>
        <span
          className={`${styles["user-type"]} ${styles["user-type-active"]}`}
        >
          PERSONAL
        </span>
        <span className={styles["user-type"]}>SMALL BUSINESS</span>
        <span className={styles["user-type"]}>BUSINESSES & INSTITUTIONS</span>
      </div>
      <div className={styles["navbar-right"]}>
        <MyAccount />
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={styles["bell-container"]}
        >
          {login && isHovered ? (
            <i
              className={`fa-solid fa-bell ${styles["bell-icon-hovered"]}`}
            ></i>
          ) : login ? (
            <i className={`fa-regular fa-bell ${styles["bell-icon"]}`}></i>
          ) : null}
        </div>
      </div>
    </div>
  );
};
