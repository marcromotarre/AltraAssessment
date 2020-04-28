import * as actions from '../filters';
import * as types from './../../constants';

const filterData = {
  min: '30',
  max: '70',
  range: true,
};

const hairColorsFilter = ['Red'];

describe('actions', () => {
  it('setAgeFilter', () => {
    const expectedAction = {
      type: types.SET_AGE_FILTER,
      payload: { filterData },
    };
    expect(actions.setAgeFilter({ filterData })).toEqual(expectedAction);
  });

  it('setAgeMin', () => {
    const expectedAction = {
      type: types.SET_AGE_MIN,
      payload: { min: filterData.min },
    };
    expect(actions.setAgeMin({ min: filterData.min })).toEqual(expectedAction);
  });

  it('setAgeMax', () => {
    const expectedAction = {
      type: types.SET_AGE_MAX,
      payload: { max: filterData.max },
    };
    expect(actions.setAgeMax({ max: filterData.max })).toEqual(expectedAction);
  });

  it('setAgeRange', () => {
    const expectedAction = {
      type: types.SET_AGE_RANGE,
      payload: { range: filterData.range },
    };
    expect(actions.setAgeRange({ range: filterData.range })).toEqual(
      expectedAction
    );
  });

  it('setHeightFilter', () => {
    const expectedAction = {
      type: types.SET_HEIGHT_FILTER,
      payload: { filterData },
    };
    expect(actions.setHeightFilter({ filterData })).toEqual(expectedAction);
  });

  it('setHeightMin', () => {
    const expectedAction = {
      type: types.SET_HEIGHT_MIN,
      payload: { min: filterData.min },
    };
    expect(actions.setHeightMin({ min: filterData.min })).toEqual(
      expectedAction
    );
  });

  it('setHeightMax', () => {
    const expectedAction = {
      type: types.SET_HEIGHT_MAX,
      payload: { max: filterData.max },
    };
    expect(actions.setHeightMax({ max: filterData.max })).toEqual(
      expectedAction
    );
  });

  it('setHeightRange', () => {
    const expectedAction = {
      type: types.SET_HEIGHT_RANGE,
      payload: { range: filterData.range },
    };
    expect(actions.setHeightRange({ range: filterData.range })).toEqual(
      expectedAction
    );
  });

  it('setWeightFilter', () => {
    const expectedAction = {
      type: types.SET_WEIGHT_FILTER,
      payload: { filterData },
    };
    expect(actions.setWeightFilter({ filterData })).toEqual(expectedAction);
  });

  it('setWeightMin', () => {
    const expectedAction = {
      type: types.SET_WEIGHT_MIN,
      payload: { min: filterData.min },
    };
    expect(actions.setWeightMin({ min: filterData.min })).toEqual(
      expectedAction
    );
  });

  it('setWeightMax', () => {
    const expectedAction = {
      type: types.SET_WEIGHT_MAX,
      payload: { max: filterData.max },
    };
    expect(actions.setWeightMax({ max: filterData.max })).toEqual(
      expectedAction
    );
  });

  it('should create an action to set age filter', () => {
    const expectedAction = {
      type: types.SET_WEIGHT_RANGE,
      payload: { range: filterData.range },
    };
    expect(actions.setWeightRange({ range: filterData.range })).toEqual(
      expectedAction
    );
  });

  it('addHairColorFilter', () => {
    const expectedAction = {
      type: types.ADD_HAIR_COLOR_FILTER,
      payload: { color: hairColorsFilter[0] },
    };
    expect(actions.addHairColorFilter({ color: hairColorsFilter[0] })).toEqual(
      expectedAction
    );
  });

  it('deleteHairColorFilter', () => {
    const expectedAction = {
      type: types.DELETE_HAIR_COLOR_FILTER,
      payload: { color: hairColorsFilter[0] },
    };
    expect(
      actions.deleteHairColorFilter({ color: hairColorsFilter[0] })
    ).toEqual(expectedAction);
  });

  it('clearHairColorsFilters', () => {
    const expectedAction = {
      type: types.CLEAR_HAIR_COLORS_FILTER,
    };
    expect(actions.clearHairColorsFilters()).toEqual(expectedAction);
  });
});
