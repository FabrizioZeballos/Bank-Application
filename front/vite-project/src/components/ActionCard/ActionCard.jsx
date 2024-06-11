import { useDispatch } from "react-redux";
import styles from "./ActionCard.module.css";
import { setSelectedAction } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

export const ActionCard = ({ action, icon }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setSelectedAction(action));
    navigate("/schedule");
  };

  return (
    <div onClick={handleClick} className={styles.card}>
      {icon}
      <p className={styles.action}>{action}</p>
    </div>
  );
};
