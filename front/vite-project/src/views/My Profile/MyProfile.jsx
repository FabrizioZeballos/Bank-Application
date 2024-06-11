import { useState } from "react";
import styles from "./MyProfile.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUserPicture } from "../../redux/userSlice";

export const MyProfile = () => {
  const [profilePhoto, setProfilePicture] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { userData } = useSelector((state) => state.user);
  const {
    user: { id, profilePicture, credentials },
    login,
  } = userData;
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const url = event.target.value;
    setProfilePicture(url);
  };

  const handleSave = async (event) => {
    event.preventDefault();

    await axios.put("http://localhost:3000/users/updatePicture", {
      id,
      url: profilePhoto,
    });

    dispatch(setUserPicture(profilePhoto));
    setIsClicked(false);
  };

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleClickImg = () => {
    setIsClicked(true);
  };

  const handleClickOverlay = () => {
    setIsClicked(false);
  };

  const handleClose = () => {
    setIsClicked(false);
  };

  return (
    <div className={styles["general-container"]}>
      <div className={styles.profile}>
        <div
          className={styles["img-container"]}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img
            src={
              login
                ? profilePicture
                : "https://cdn-icons-png.freepik.com/512/8742/8742495.png"
            }
            alt=""
            className={styles["user-img"]}
          />
          {isHovered ? (
            <div className={styles["img-overlay"]} onClick={handleClickImg}>
              <i className={`fa-solid fa-camera ${styles["camera-icon"]}`}></i>
              <p className={styles.edit}>Edit</p>
            </div>
          ) : null}
        </div>
        <p className={styles.username}>{credentials.username}</p>
      </div>
      {isClicked ? (
        <div>
          <div className={styles.overlay} onClick={handleClickOverlay}></div>
          <div className={styles["change-picture"]}>
            <p className={styles["upload-txt"]}>Upload a new avatar</p>
            <input
              type="url"
              onChange={handleChange}
              placeholder="Enter image URL"
              className={styles["url-input"]}
            />
            <button onClick={handleSave} className={styles["save-btn"]}>
              Save
            </button>
            <div
              className={styles["close-icon-container"]}
              onClick={handleClose}
            >
              <i className={`fa-solid fa-xmark ${styles["close-icon"]}`}></i>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
