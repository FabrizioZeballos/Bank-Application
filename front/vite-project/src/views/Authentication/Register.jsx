import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import MaskedInput from "react-text-mask";
import axios from "axios";
import validateRegister from "../../utils/validateRegister";
import styles from "./RegisterLogin.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  authenticateUser,
  setIntendedRoute,
  setWelcome,
} from "../../redux/userSlice";

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { intendedRoute } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.post("http://localhost:3000/users/register", values);
      const { data } = await axios.post("http://localhost:3000/users/login", {
        username: values.username,
        password: values.password,
      });
      dispatch(authenticateUser(data));
      resetForm();
      intendedRoute ? navigate(intendedRoute) : navigate("/");
      dispatch(setIntendedRoute(null));
      dispatch(setWelcome(true));
    } catch (error) {
      console.log(error.message);
      alert("Oops! Registration failed. Please try again later.");
    }
  };

  return (
    <div className={styles["form-container"]}>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          birthdate: "",
          identityNumber: "",
          username: "",
          password: "",
        }}
        validate={validateRegister}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty, errors, touched }) => (
          <Form className={styles["auth-form"]}>
            <div className={styles["form-title"]}>Create Account</div>
            <div className={styles["input-container"]}>
              <Field
                className={`${styles.input} ${
                  errors.fullName && touched.fullName
                    ? styles["red-border"]
                    : ""
                }`}
                type="text"
                id="fullName"
                name="fullName"
                required={true}
              />
              <span className={styles["floating-label"]}>Full Name</span>
              <ErrorMessage
                className={styles["error-msg"]}
                name="fullName"
                component="div"
              />
            </div>

            <div className={styles["input-container"]}>
              <Field
                className={` ${styles.input} ${
                  errors.email && touched.email ? styles["red-border"] : ""
                }`}
                type="text"
                id="email"
                name="email"
                required={true}
              />
              <span className={styles["floating-label"]}>Email Address</span>
              <ErrorMessage
                className={styles["error-msg"]}
                name="email"
                component="div"
              />
            </div>

            <div className={styles["input-container"]}>
              <Field
                className={`${styles.input} ${
                  errors.birthdate && touched.birthdate
                    ? styles["red-border"]
                    : ""
                }`}
                as={MaskedInput}
                mask={[
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  "/",
                  /\d/,
                  /\d/,
                  "/",
                  /\d/,
                  /\d/,
                ]}
                guide={false}
                id="birthdate"
                name="birthdate"
                placeholder=""
                required={true}
              />
              <span className={styles["floating-label"]}>
                Birthdate (YYYY/MM/DD)
              </span>
              <ErrorMessage
                className={styles["error-msg"]}
                name="birthdate"
                component="div"
              />
            </div>

            <div className={styles["input-container"]}>
              <Field
                className={`${styles.input} ${
                  errors.identityNumber && touched.identityNumber
                    ? styles["red-border"]
                    : ""
                }`}
                type="text"
                id="identityNumber"
                name="identityNumber"
                placeholder=""
                required={true}
              />
              <span className={styles["floating-label"]}>Identity Number</span>
              <ErrorMessage
                className={styles["error-msg"]}
                name="identityNumber"
                component="div"
              />
            </div>

            <div className={styles["input-container"]}>
              <Field
                className={`${styles.input} ${
                  errors.username && touched.username
                    ? styles["red-border"]
                    : ""
                }`}
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
                className={`${styles.input} ${
                  errors.password && touched.password
                    ? styles["red-border"]
                    : ""
                }`}
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

            <button
              className={styles["submit-btn"]}
              type="submit"
              disabled={!isValid || !dirty}
            >
              Sign up
            </button>
            <p className={styles["bottom-p"]}>
              Already have an account?{" "}
              <Link to="/login" className={styles["bottom-action"]}>
                Log In
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};
