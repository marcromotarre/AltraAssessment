export const getMinUserValueByField = (users, field) => {
  return users ? Math.min(...users.map((user) => Math.floor(user[field]))) : 0;
};

export const getMaxUserValueByField = (users, field) => {
  return users ? Math.max(...users.map((user) => Math.ceil(user[field]))) : 0;
};
