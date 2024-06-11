import { useEffect, useState } from "react";
import styles from "./MyAccount.module.css";
import { Dropdown } from "../Dropdown/Dropdown";
import { useSelector } from "react-redux";
import { ProfilePicture } from "../ProfilePicture/ProfilePicture";

export const MyAccount = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { userData } = useSelector((state) => state.user);

  const { login, user } = userData;

  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log(login, user);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={styles["my-account-container"]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ProfilePicture />

      <span className={styles["my-account"]}>My Account</span>
      <i
        className={`fa-solid fa-chevron-down ${styles["chevron-icon"]}`}
        style={{ transform: isHovered ? "rotate(180deg)" : "none" }}
      ></i>

      {isHovered && <Dropdown setIsHovered={setIsHovered} />}
    </div>
  );
};
