export const getUserRaw = () => {
  return window.localStorage.getItem('user');
};

export const getUser = () => {
  const json = getUserRaw();
  return json ? JSON.parse(json) : null;
};

export const getUserId = () => {
  const user = getUser();
  return user?._id;
};

export const setUser = user => {
  return window.localStorage.setItem('user', JSON.stringify(user));
};
