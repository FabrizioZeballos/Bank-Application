import styles from "./ProfilePicture.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const ProfilePicture = () => {
  const { userData } = useSelector((state) => state.user);
  const { user, login } = userData;

  useEffect(() => {}, [userData]);

  return (
    <div className={styles["img-container"]}>
      <img
        src={
          login
            ? user.profilePicture
            : "https://cdn-icons-png.freepik.com/512/8742/8742495.png"
        }
        alt=""
        className={styles["user-img"]}
      />
    </div>
  );
};
