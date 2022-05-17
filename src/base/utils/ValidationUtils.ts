export const validateEmail = email => {
  var re = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
  return re.test(String(email).toLowerCase());
};

export const validatePhone = phone => {
  var re = /^[0-9]{10,}$/;
  return re.test(String(phone).toLowerCase());
};
export const validateUsername = username => {
  var re = /^[0-9a-zA-Z_]+$/;
  return re.test(String(username).toLowerCase());
};

export const validateStrongPassword = password => {
  var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return re.test(String(password).toLowerCase());
};

export const validateSimplePassword = password => {
  var re = /^(\S+){6,20}$/;
  return re.test(String(password).toLowerCase());
};
