const STORAGE_NAME = "user_data";
const CURRENT_USER = "currentUser";

export const getAllUser = () => {
  const users = JSON.parse(localStorage.getItem(STORAGE_NAME)) || [];
  return users;
};

export const getUser = (mobileOrEmail) => {
  const users = getAllUser();
  const user =
    users.filter((user) => user.mobile === mobileOrEmail)[0] ||
    users.filter((user) => user.email === mobileOrEmail)[0] ||
    null;
  return user;
};

export const verifyUser = (mobileOrEmail, password) => {
  const user = getUser(mobileOrEmail);
  if (!user) {
    return false;
  }
  setCurrentuser(user);
  return user.password === password ? user : false;
};

export const saveUser = (data) => {
  const { name, password, mobile, email } = data;
  const users = [...getAllUser(), { name, password, mobile, email }];
  localStorage.setItem(STORAGE_NAME, JSON.stringify(users));
};

export const setCurrentuser = (data) => {
  localStorage.setItem(CURRENT_USER, JSON.stringify(data));
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem(CURRENT_USER));
};

export const logoutUserLocal = () => {
  localStorage.removeItem(CURRENT_USER);
};
