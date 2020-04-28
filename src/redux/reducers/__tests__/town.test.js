import { reducer } from '../town';
import * as types from './../../constants';
import users from '../../../fixtures/users';
import towns from '../../../fixtures/towns';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      pending: false,
      townName: '',
      users: [],
      uniqueHairColors: [],
      error: null,
    });
  });

  it('FETCH_TOWN_PENDING', () => {
    expect(
      reducer(undefined, {
        type: types.FETCH_TOWN_PENDING,
      })
    ).toEqual({
      pending: true,
      townName: '',
      users: [],
      uniqueHairColors: [],
      error: null,
    });
  });

  it('FETCH_TOWN_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: types.FETCH_TOWN_SUCCESS,
        payload: {
          response: towns,
        },
      })
    ).toEqual({
      pending: false,
      townName: 'town1',
      users: [
        {
          hair_color: 'Pink',
          id: 0,
        },
        {
          hair_color: 'Red',
          id: 1,
        },
        {
          hair_color: 'Black',
          id: 2,
        },
        {
          hair_color: 'Red',
          id: 3,
        },
      ],
      uniqueHairColors: ['Pink', 'Red', 'Black'],
      error: null,
    });
  });

  it('FETCH_TOWN_ERROR', () => {
    expect(
      reducer(undefined, {
        type: types.FETCH_TOWN_ERROR,
        payload: {
          error: 'error',
        },
      })
    ).toEqual({
      pending: false,
      townName: '',
      users: [],
      uniqueHairColors: [],
      error: 'error',
    });
  });
});
