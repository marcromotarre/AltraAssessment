import * as types from './../constants';

export const initialState = {
  age: {
    min: '',
    max: '',
    range: true,
  },
  weight: {
    min: '',
    max: '',
    range: true,
  },
  height: {
    min: '',
    max: '',
    range: true,
  },
  hair_colors: [],
};

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.SET_AGE_FILTER:
      return {
        ...state,
        age: payload.filterData,
      };
    case types.SET_AGE_MIN:
      return {
        ...state,
        age: { ...state.age, min: payload.min },
      };
    case types.SET_AGE_MAX:
      return {
        ...state,
        age: { ...state.age, max: payload.max },
      };
    case types.SET_AGE_RANGE:
      return {
        ...state,
        age: { ...state.age, range: payload.range },
      };
    case types.SET_HEIGHT_FILTER:
      return {
        ...state,
        height: payload.filterData,
      };
    case types.SET_HEIGHT_MIN:
      return {
        ...state,
        height: { ...state.height, min: payload.min },
      };
    case types.SET_HEIGHT_MAX:
      return {
        ...state,
        height: { ...state.height, max: payload.max },
      };
    case types.SET_HEIGHT_RANGE:
      return {
        ...state,
        height: { ...state.height, range: payload.range },
      };
    case types.SET_WEIGHT_FILTER:
      return {
        ...state,
        weight: payload.filterData,
      };
    case types.SET_WEIGHT_MIN:
      return {
        ...state,
        weight: { ...state.weight, min: payload.min },
      };
    case types.SET_WEIGHT_MAX:
      return {
        ...state,
        weight: { ...state.weight, max: payload.max },
      };
    case types.SET_WEIGHT_RANGE:
      return {
        ...state,
        weight: { ...state.weight, range: payload.range },
      };
    case types.ADD_HAIR_COLOR_FILTER:
      return {
        ...state,
        hair_colors: !state.hair_colors.includes(payload.color)
          ? [...state.hair_colors, payload.color]
          : [...state.hair_colors],
      };

    case types.DELETE_HAIR_COLOR_FILTER:
      return {
        ...state,
        hair_colors: state.hair_colors.filter(
          (color) => color !== payload.color
        ),
      };

    case types.CLEAR_HAIR_COLORS_FILTER:
      return {
        ...state,
        hair_colors: [],
      };

    default:
      return {
        ...state,
      };
  }
}
