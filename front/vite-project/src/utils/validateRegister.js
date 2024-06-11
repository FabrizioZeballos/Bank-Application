const validateRegister = (values) => {
  const errors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Full Name is required";
  } else if (!/^[a-zA-Z ]+$/.test(values.fullName.trim())) {
    errors.fullName = "Full Name should contain only letters and spaces";
  } else if (
    values.fullName.trim().length < 3 ||
    values.fullName.trim().length > 40
  ) {
    errors.fullName = "Full Name must be between 3 and 40 characters";
  }

  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?<!\.co)$/;
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Invalid email format";
  }

  const birthdateRegex = /^\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/;
  if (!values.birthdate) {
    errors.birthdate = "Birthdate is required";
  } else if (!birthdateRegex.test(values.birthdate)) {
    errors.birthdate =
      "Invalid birthdate format (use YYYY-MM-DD, eg. 1999/06/30)";
  }

  if (!values.identityNumber) {
    errors.identityNumber = "Identity Number is required";
  } else if (!/^\d{7,12}$/.test(values.identityNumber)) {
    errors.identityNumber = "Identity Number must be between 7 and 12 numbers";
  }

  const usernameRegex = /^(.*[a-zA-Z]){3}[a-zA-Z0-9]*$/;
  if (!values.username.trim()) {
    errors.username = "Username is required";
  } else if (/\s/.test(values.username.trim())) {
    errors.username = "Username cannot contain spaces";
  } else if (
    values.username.trim().length < 3 ||
    values.username.trim().length > 15
  ) {
    errors.username = "Username must be between 3 and 15 characters";
  } else if (!usernameRegex.test(values.username)) {
    errors.username =
      "Invalid username. Username should only contain alphanumeric characters and have at least three alphabetic characters.";
  }

  const passwordRegex = /(?=.*\d)(?=.*[A-Z]).{8,30}/;
  if (!values.password.trim()) {
    errors.password = "Password is required";
  } else if (/\s/.test(values.password.trim())) {
    errors.password = "Password cannot contain spaces";
  } else if (!passwordRegex.test(values.password.trim())) {
    errors.password =
      "Password must contain at least one number, one uppercase letter, and be between 8 and 30 characters";
  }

  return errors;
};

export default validateRegister;
