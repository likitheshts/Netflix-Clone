export const checkValidateData = (email, password) => {
  const isEmailValid =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      email
    );

  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

  if (!isEmailValid) return "Email Id is not valid";

  if (!isPasswordValid) return "Password is not valid";

  return null;
};

export const checkValidateDataSignUp = (email, password, name) => {
  const checkEmailPass = checkValidateData(email, password);
  console.log(email);
  if (checkEmailPass != null) return checkEmailPass;

  const checkName = /^[a-zA-Z ]+$/.test(name);

  if (!checkName) return "Inavild Name";

  return null;
};
