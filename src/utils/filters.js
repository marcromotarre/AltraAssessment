export const isMinMaxFilterApplied = (filter) =>
  filter.min === '' && filter.max === '' ? false : true;

export const isArrayFilterApplied = (filter) =>
  filter.length > 0 ? true : false;

export const getFilterMinMaxString = (data) => {
  if (data.range && data.min !== '' && data.max !== '') {
    return `${data.min} - ${data.max}`;
  } else if (data.min !== '') {
    return `${data.min}`;
  } else if (data.max !== '') {
    return `${data.max}`;
  } else {
    return '';
  }
};

export const isAgeOrWeightOrHeightFilterApplied = ({ age, height, weight }) => {
  return isMinMaxFilterApplied(age) ||
    isMinMaxFilterApplied(height) ||
    isMinMaxFilterApplied(weight)
    ? true
    : false;
};

export const isAnyFilterApplied = ({ age, height, weight, hair_colors }) => {
  return isAgeOrWeightOrHeightFilterApplied({ age, height, weight }) ||
    isArrayFilterApplied(hair_colors)
    ? true
    : false;
};

export const getUsersByName = (users, name) => {
  return users.filter((user) =>
    user.name.toLowerCase().includes(name.toLowerCase())
  );
};

export const getUsersByProfession = (users, profession) => {
  return users.filter((user) => user.professions.includes(profession));
};

export const getUniqueHairColors = (users) => {
  return users
    .map((user) => user.hair_color)
    .filter((value, index, self) => self.indexOf(value) === index);
};

export const getUsersByMinMaxFilter = (users, type, filter) => {
  if (!isMinMaxFilterApplied(filter)) {
    return [...users];
  } else {
    if (filter.min !== '' && filter.max !== '' && filter.range) {
      return users.filter((user) => {
        return (
          user[type] >= parseFloat(filter.min) &&
          user[type] <= parseFloat(filter.max)
        );
      });
    } else if (
      (filter.min !== '' && filter.max !== '' && !filter.range) ||
      filter.min !== ''
    ) {
      return users.filter((user) => {
        return Math.round(user[type]) === parseFloat(filter.min);
      });
    } else {
      return users.filter((user) => {
        return Math.round(user[type]) === parseFloat(filter.max);
      });
    }
  }
};

export const getUsersByArrayFilter = (users, type, filter) => {
  if (!isArrayFilterApplied(filter)) {
    return [...users];
  } else {
    return users.filter((user) => {
      return filter.includes(user[type]);
    });
  }
};

export const getUsersByFilters = ({
  users = [],
  age = { min: '', max: '', range: false },
  height = { min: '', max: '', range: false },
  weight = { min: '', max: '', range: false },
  hair_colors = [],
}) => {
  return getUsersByArrayFilter(
    getUsersByMinMaxFilter(
      getUsersByMinMaxFilter(
        getUsersByMinMaxFilter(users, 'age', age),
        'weight',
        weight
      ),
      'height',
      height
    ),
    'hair_color',
    hair_colors
  );
};
