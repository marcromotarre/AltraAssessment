import { getUniqueHairColors } from './filters';

export const getTownsNames = (data) => Object.keys(data);

export const getUsersByTown = (data, townName) => data[townName];

export const getUniqueHairColorsByTown = (data, townName) =>
  getUniqueHairColors(data[townName]);
