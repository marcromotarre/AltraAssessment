import * as actions from '../town';
import * as types from './../../constants';
import towns from './../../../fixtures/towns';

describe('actions', () => {
  it('fetchTownPending', () => {
    const expectedAction = {
      type: types.FETCH_TOWN_PENDING,
    };
    expect(actions.fetchTownPending()).toEqual(expectedAction);
  });

  it('fetchTownSuccess', () => {
    const expectedAction = {
      type: types.FETCH_TOWN_SUCCESS,
      payload: { response: towns },
    };
    expect(actions.fetchTownSuccess(towns)).toEqual(expectedAction);
  });

  it('fetchTownError', () => {
    const error = 'error';
    const expectedAction = {
      type: types.FETCH_TOWN_ERROR,
      payload: { error: error },
    };
    expect(actions.fetchTownError(error)).toEqual(expectedAction);
  });
});
