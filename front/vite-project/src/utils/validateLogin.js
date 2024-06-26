const validateLogin = (values) => {
  const errors = {};

  if (!values.username.trim()) {
    errors.username = "Username is required";
  }

  if (!values.password.trim()) {
    errors.password = "Password is required";
  }

  return errors;
};

export default validateLogin;
