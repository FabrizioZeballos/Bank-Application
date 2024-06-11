import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validateLogin from "../../utils/validateLogin";
import axios from "axios";
import styles from "./RegisterLogin.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authenticateUser, setIntendedRoute } from "../../redux/userSlice";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { intendedRoute } = useSelector((state) => state.user);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/users/login",
        values
      );

      dispatch(authenticateUser(data));

      resetForm();
      setError(false);
      intendedRoute ? navigate(intendedRoute) : navigate("/");
      dispatch(setIntendedRoute(null));
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div
      className={`${styles["form-container"]} ${styles["login-form-container"]}`}
    >
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validate={validateLogin}
        onSubmit={handleSubmit}
      >
        <Form className={styles["auth-form"]}>
          <div className={styles["form-title"]}>Log In</div>
          {error && (
            <div className={styles["login-error-msg"]}>
              Invalid username or password
            </div>
          )}
          <div className={styles["input-container"]}>
            <Field
              className={styles.input}
              type="text"
              id="username"
              name="username"
              required={true}
            />
            <span className={styles["floating-label"]}>Username</span>
            <ErrorMessage
              className={styles["error-msg"]}
              name="username"
              component="div"
            />
          </div>

          <div
            className={`${styles["password-container"]} ${styles["input-container"]}`}
          >
            <Field
              className={styles.input}
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              required={true}
            />
            <span className={styles["floating-label"]}>Password</span>
            <ErrorMessage
              className={styles["error-msg"]}
              name="password"
              component="div"
            />
            <button
              className={styles["show-password-btn"]}
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? (
                <i className="fa-regular fa-eye-slash"></i>
              ) : (
                <i className="fa-regular fa-eye"></i>
              )}
            </button>
          </div>

          <button className={styles["submit-btn"]} type="submit">
            Log In
          </button>
          <p className={styles["bottom-p"]}>
            Don't have an account?{" "}
            <Link to="/register" className={styles["bottom-action"]}>
              Create Account
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
