import * as types from './../constants';

export function fetchTownPending() {
  return {
    type: types.FETCH_TOWN_PENDING,
  };
}

export function fetchTownSuccess(response) {
  return {
    type: types.FETCH_TOWN_SUCCESS,
    payload: {
      response,
    },
  };
}

export function fetchTownError(error) {
  return {
    type: types.FETCH_TOWN_ERROR,
    payload: {
      error,
    },
  };
}
