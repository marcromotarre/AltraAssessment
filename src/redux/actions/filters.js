import * as types from './../constants';

export const setAgeFilter = ({ filterData }) => ({
  type: types.SET_AGE_FILTER,
  payload: {
    filterData,
  },
});

export const setAgeMin = ({ min }) => ({
  type: types.SET_AGE_MIN,
  payload: {
    min,
  },
});

export const setAgeMax = ({ max }) => ({
  type: types.SET_AGE_MAX,
  payload: {
    max,
  },
});

export const setAgeRange = ({ range }) => ({
  type: types.SET_AGE_RANGE,
  payload: {
    range,
  },
});

export const setHeightFilter = ({ filterData }) => ({
  type: types.SET_HEIGHT_FILTER,
  payload: {
    filterData,
  },
});

export const setHeightMin = ({ min }) => ({
  type: types.SET_HEIGHT_MIN,
  payload: {
    min,
  },
});

export const setHeightMax = ({ max }) => ({
  type: types.SET_HEIGHT_MAX,
  payload: {
    max,
  },
});

export const setHeightRange = ({ range }) => ({
  type: types.SET_HEIGHT_RANGE,
  payload: {
    range,
  },
});

export const setWeightFilter = ({ filterData }) => ({
  type: types.SET_WEIGHT_FILTER,
  payload: {
    filterData,
  },
});

export const setWeightMin = ({ min }) => ({
  type: types.SET_WEIGHT_MIN,
  payload: {
    min,
  },
});

export const setWeightMax = ({ max }) => ({
  type: types.SET_WEIGHT_MAX,
  payload: {
    max,
  },
});

export const setWeightRange = ({ range }) => ({
  type: types.SET_WEIGHT_RANGE,
  payload: {
    range,
  },
});

export const addHairColorFilter = ({ color }) => ({
  type: types.ADD_HAIR_COLOR_FILTER,
  payload: {
    color,
  },
});

export const deleteHairColorFilter = ({ color }) => ({
  type: types.DELETE_HAIR_COLOR_FILTER,
  payload: {
    color,
  },
});

export const clearHairColorsFilters = () => ({
  type: types.CLEAR_HAIR_COLORS_FILTER,
});
