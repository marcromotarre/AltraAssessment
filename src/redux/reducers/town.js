import * as types from './../constants';
import {
  getTownsNames,
  getUsersByTown,
  getUniqueHairColorsByTown,
} from '../../utils/town';

export const initialState = {
  pending: false,
  townName: '',
  users: [],
  uniqueHairColors: [],
  error: null,
};

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.FETCH_TOWN_PENDING:
      return {
        ...state,
        pending: true,
      };
    case types.FETCH_TOWN_SUCCESS:
      const townName = getTownsNames(payload.response)[0];
      return {
        ...state,
        pending: false,
        townName,
        users: getUsersByTown(payload.response, townName),
        uniqueHairColors: getUniqueHairColorsByTown(payload.response, townName),
      };
    case types.FETCH_TOWN_ERROR:
      return {
        ...state,
        pending: false,
        error: payload.error,
      };

    default:
      return {
        ...state,
      };
  }
}
