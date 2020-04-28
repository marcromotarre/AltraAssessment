import { reducer } from '../filters';
import * as types from './../../constants';

describe('filters reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      age: { min: '', max: '', range: true },
      weight: { min: '', max: '', range: true },
      height: { min: '', max: '', range: true },
      hair_colors: [],
    });
  });

  it('SET_AGE_FILTER', () => {
    expect(
      reducer(undefined, {
        type: types.SET_AGE_FILTER,
        payload: {
          filterData: { min: '30', max: '50', range: false },
        },
      })
    ).toEqual({
      age: { min: '30', max: '50', range: false },
      weight: { min: '', max: '', range: true },
      height: { min: '', max: '', range: true },
      hair_colors: [],
    });
  });

  it('SET_AGE_MIN', () => {
    expect(
      reducer(undefined, {
        type: types.SET_AGE_MIN,
        payload: {
          min: '40',
        },
      })
    ).toEqual({
      age: { min: '40', max: '', range: true },
      weight: { min: '', max: '', range: true },
      height: { min: '', max: '', range: true },
      hair_colors: [],
    });
  });

  it('SET_AGE_MAX', () => {
    expect(
      reducer(undefined, {
        type: types.SET_AGE_MAX,
        payload: {
          max: '40',
        },
      })
    ).toEqual({
      age: { min: '', max: '40', range: true },
      weight: { min: '', max: '', range: true },
      height: { min: '', max: '', range: true },
      hair_colors: [],
    });
  });

  it('SET_AGE_RANGE', () => {
    expect(
      reducer(undefined, {
        type: types.SET_AGE_RANGE,
        payload: {
          range: false,
        },
      })
    ).toEqual({
      age: { min: '', max: '', range: false },
      weight: { min: '', max: '', range: true },
      height: { min: '', max: '', range: true },
      hair_colors: [],
    });
  });

  it('SET_WEIGHT_FILTER', () => {
    expect(
      reducer(undefined, {
        type: types.SET_WEIGHT_FILTER,
        payload: {
          filterData: { min: '30', max: '50', range: false },
        },
      })
    ).toEqual({
      age: { min: '', max: '', range: true },
      weight: { min: '30', max: '50', range: false },
      height: { min: '', max: '', range: true },
      hair_colors: [],
    });
  });

  it('SET_WEIGHT_MIN', () => {
    expect(
      reducer(undefined, {
        type: types.SET_WEIGHT_MIN,
        payload: {
          min: '40',
        },
      })
    ).toEqual({
      age: { min: '', max: '', range: true },
      weight: { min: '40', max: '', range: true },
      height: { min: '', max: '', range: true },
      hair_colors: [],
    });
  });

  it('SET_WEIGHT_MAX', () => {
    expect(
      reducer(undefined, {
        type: types.SET_WEIGHT_MAX,
        payload: {
          max: '40',
        },
      })
    ).toEqual({
      age: { min: '', max: '', range: true },
      weight: { min: '', max: '40', range: true },
      height: { min: '', max: '', range: true },
      hair_colors: [],
    });
  });

  it('SET_WEIGHT_RANGE', () => {
    expect(
      reducer(undefined, {
        type: types.SET_WEIGHT_RANGE,
        payload: {
          range: false,
        },
      })
    ).toEqual({
      age: { min: '', max: '', range: true },
      weight: { min: '', max: '', range: false },
      height: { min: '', max: '', range: true },
      hair_colors: [],
    });
  });

  it('SET_HEIGHT_FILTER', () => {
    expect(
      reducer(undefined, {
        type: types.SET_HEIGHT_FILTER,
        payload: {
          filterData: { min: '30', max: '50', range: false },
        },
      })
    ).toEqual({
      age: { min: '', max: '', range: true },
      weight: { min: '', max: '', range: true },
      height: { min: '30', max: '50', range: false },
      hair_colors: [],
    });
  });

  it('SET_HEIGHT_MIN', () => {
    expect(
      reducer(undefined, {
        type: types.SET_HEIGHT_MIN,
        payload: {
          min: '40',
        },
      })
    ).toEqual({
      age: { min: '', max: '', range: true },
      weight: { min: '', max: '', range: true },
      height: { min: '40', max: '', range: true },
      hair_colors: [],
    });
  });

  it('SET_HEIGHT_MAX', () => {
    expect(
      reducer(undefined, {
        type: types.SET_HEIGHT_MAX,
        payload: {
          max: '40',
        },
      })
    ).toEqual({
      age: { min: '', max: '', range: true },
      weight: { min: '', max: '', range: true },
      height: { min: '', max: '40', range: true },
      hair_colors: [],
    });
  });

  it('SET_HEIGHT_RANGE', () => {
    expect(
      reducer(undefined, {
        type: types.SET_HEIGHT_RANGE,
        payload: {
          range: false,
        },
      })
    ).toEqual({
      age: { min: '', max: '', range: true },
      weight: { min: '', max: '', range: true },
      height: { min: '', max: '', range: false },
      hair_colors: [],
    });
  });

  it('ADD_HAIR_COLOR_FILTER', () => {
    expect(
      reducer(undefined, {
        type: types.ADD_HAIR_COLOR_FILTER,
        payload: {
          color: 'Green',
        },
      })
    ).toEqual({
      age: { min: '', max: '', range: true },
      weight: { min: '', max: '', range: true },
      height: { min: '', max: '', range: true },
      hair_colors: ['Green'],
    });
    expect(
      reducer(
        {
          age: { min: '', max: '', range: true },
          weight: { min: '', max: '', range: true },
          height: { min: '', max: '', range: true },
          hair_colors: ['Red'],
        },
        {
          type: types.ADD_HAIR_COLOR_FILTER,
          payload: {
            color: 'Green',
          },
        }
      )
    ).toEqual({
      age: { min: '', max: '', range: true },
      weight: { min: '', max: '', range: true },
      height: { min: '', max: '', range: true },
      hair_colors: ['Red', 'Green'],
    });
  });

  it('DELETE_HAIR_COLOR_FILTER', () => {
    expect(
      reducer(undefined, {
        type: types.DELETE_HAIR_COLOR_FILTER,
        payload: {
          color: 'Green',
        },
      })
    ).toEqual({
      age: { min: '', max: '', range: true },
      weight: { min: '', max: '', range: true },
      height: { min: '', max: '', range: true },
      hair_colors: [],
    });

    expect(
      reducer(
        {
          age: { min: '', max: '', range: true },
          weight: { min: '', max: '', range: true },
          height: { min: '', max: '', range: true },
          hair_colors: ['Yellow', 'Green', 'Pink'],
        },
        {
          type: types.DELETE_HAIR_COLOR_FILTER,
          payload: {
            color: 'Green',
          },
        }
      )
    ).toEqual({
      age: { min: '', max: '', range: true },
      weight: { min: '', max: '', range: true },
      height: { min: '', max: '', range: true },
      hair_colors: ['Yellow', 'Pink'],
    });
  });

  it('CLEAR_HAIR_COLORS_FILTER', () => {
    expect(
      reducer(
        {
          age: { min: '', max: '', range: true },
          weight: { min: '', max: '', range: true },
          height: { min: '', max: '', range: true },
          hair_colors: ['Yellow', 'Green', 'Pink'],
        },
        {
          type: types.CLEAR_HAIR_COLORS_FILTER,
          payload: {
            color: 'Green',
          },
        }
      )
    ).toEqual({
      age: { min: '', max: '', range: true },
      weight: { min: '', max: '', range: true },
      height: { min: '', max: '', range: true },
      hair_colors: [],
    });
  });
});
