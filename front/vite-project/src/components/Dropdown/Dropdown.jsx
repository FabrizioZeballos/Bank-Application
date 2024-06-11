import { useDispatch, useSelector } from "react-redux";
import styles from "./Dropdown.module.css";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../../redux/userSlice";

export const Dropdown = ({ setIsHovered }) => {
  const { userData } = useSelector((status) => status.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMyAppointments = () => {
    setIsHovered(false);
    navigate("/appointments");
  };

  const handleMyProfile = () => {
    setIsHovered(false);
    navigate("/profile");
  };

  const handleLogOut = () => {
    dispatch(logOut());
    setIsHovered(false);
    navigate("/");
  };

  const handleClick = () => {
    setIsHovered(false);
  };

  return (
    <div className={styles["dropdown-menu"]}>
      <ul className={styles.list}>
        {userData.login ? (
          <div>
            <div className={styles.link} onClick={handleMyAppointments}>
              <li className={styles["list-item"]}>My Appointments</li>
            </div>
            <div className={styles.link} onClick={handleMyProfile}>
              <li className={styles["list-item"]}>My Profile</li>
            </div>
            <div className={styles.link} onClick={handleLogOut}>
              <li className={styles["list-item"]}>Log out</li>
            </div>
          </div>
        ) : (
          <div>
            <Link to="/register" className={styles.link} onClick={handleClick}>
              <li className={styles["list-item"]}>Sign up</li>
            </Link>
            <Link to="/login" className={styles.link} onClick={handleClick}>
              <li className={styles["list-item"]}>Log in</li>
            </Link>
          </div>
        )}
      </ul>
    </div>
  );
};
