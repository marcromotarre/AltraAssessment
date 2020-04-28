import * as filterUtils from '../filters';

import users from '../../fixtures/users';
import * as filterData from '../../fixtures/filters';

it('isMinMaxFilterApplied', () => {
  expect(filterUtils.isMinMaxFilterApplied(filterData.data_empty)).toBe(false);
  expect(filterUtils.isMinMaxFilterApplied(filterData.data_range_empty)).toBe(
    false
  );
  expect(filterUtils.isMinMaxFilterApplied(filterData.data_range_min_max)).toBe(
    true
  );
  expect(filterUtils.isMinMaxFilterApplied(filterData.data_min_max)).toBe(true);
  expect(filterUtils.isMinMaxFilterApplied(filterData.data_max)).toBe(true);
  expect(filterUtils.isMinMaxFilterApplied(filterData.data_min)).toBe(true);
  expect(filterUtils.isMinMaxFilterApplied(filterData.data_range_min)).toBe(
    true
  );
  expect(filterUtils.isMinMaxFilterApplied(filterData.data_range_max)).toBe(
    true
  );
});

it('isArrayFilterApplied', () => {
  expect(filterUtils.isArrayFilterApplied([])).toBe(false);
  expect(filterUtils.isArrayFilterApplied(['Red', 'Pink'])).toBe(true);
});

it('getFilterMinMaxString', () => {
  expect(filterUtils.getFilterMinMaxString(filterData.data_range_min_max)).toBe(
    `${filterData.data_range_min_max.min} - ${filterData.data_range_min_max.max}`
  );
  expect(filterUtils.getFilterMinMaxString(filterData.data_min_max)).toBe(
    `${filterData.data_range_min_max.min}`
  );
  expect(filterUtils.getFilterMinMaxString(filterData.data_max)).toBe(
    `${filterData.data_max.max}`
  );
  expect(filterUtils.getFilterMinMaxString(filterData.data_min)).toBe(
    `${filterData.data_min.min}`
  );
  expect(filterUtils.getFilterMinMaxString(filterData.data_range_min)).toBe(
    `${filterData.data_range_min.min}`
  );
  expect(filterUtils.getFilterMinMaxString(filterData.data_range_max)).toBe(
    `${filterData.data_range_max.max}`
  );
});

it('isAgeOrWeightOrHeightFilterApplied', () => {
  expect(
    filterUtils.isAgeOrWeightOrHeightFilterApplied({
      age: filterData.data_empty,
      height: filterData.data_empty,
      weight: filterData.data_empty,
    })
  ).toBe(false);
  expect(
    filterUtils.isAgeOrWeightOrHeightFilterApplied({
      age: filterData.data_min,
      height: filterData.data_empty,
      weight: filterData.data_empty,
    })
  ).toBe(true);
  expect(
    filterUtils.isAgeOrWeightOrHeightFilterApplied({
      age: filterData.data_range_empty,
      height: filterData.data_range_min_max,
      weight: filterData.data_empty,
    })
  ).toBe(true);
  expect(
    filterUtils.isAgeOrWeightOrHeightFilterApplied({
      age: filterData.data_empty,
      height: filterData.data_empty,
      weight: filterData.data_max,
    })
  ).toBe(true);
  expect(
    filterUtils.isAgeOrWeightOrHeightFilterApplied({
      age: filterData.data_max,
      height: filterData.data_max,
      weight: filterData.data_max,
    })
  ).toBe(true);
});
it('isAnyFilterApplied', () => {
  expect(
    filterUtils.isAnyFilterApplied({
      age: filterData.data_empty,
      height: filterData.data_empty,
      weight: filterData.data_empty,
      hair_colors: [],
    })
  ).toBe(false);
  expect(
    filterUtils.isAnyFilterApplied({
      age: filterData.data_empty,
      height: filterData.data_empty,
      weight: filterData.data_empty,
      hair_colors: ['Red'],
    })
  ).toBe(true);
  expect(
    filterUtils.isAnyFilterApplied({
      age: filterData.data_empty,
      height: filterData.data_min,
      weight: filterData.data_empty,
      hair_colors: [],
    })
  ).toBe(true);
  expect(
    filterUtils.isAnyFilterApplied({
      age: filterData.data_max,
      height: filterData.data_empty,
      weight: filterData.data_empty,
      hair_colors: ['Red'],
    })
  ).toBe(true);
});

it('getUsersByName', () => {
  expect(filterUtils.getUsersByName(users, 'one')).toMatchObject([users[0]]);
  expect(filterUtils.getUsersByName(users, 'One')).toMatchObject([users[0]]);
  expect(filterUtils.getUsersByName(users, 'OnE')).toMatchObject([users[0]]);
  expect(filterUtils.getUsersByName(users, 'O')).toMatchObject([
    users[0],
    users[1],
    users[3],
  ]);
  expect(filterUtils.getUsersByName(users, 'five')).toMatchObject([users[4]]);
});

it('getUsersByProfession', () => {
  expect(filterUtils.getUsersByProfession(users, 'prof')).toMatchObject([]);
  expect(filterUtils.getUsersByProfession(users, 'profession_0')).toMatchObject(
    []
  );
  expect(
    filterUtils.getUsersByProfession(users, 'profession_1')
  ).toMatchObject([users[0], users[2]]);
  expect(
    filterUtils.getUsersByProfession(users, 'profession_2')
  ).toMatchObject([users[0], users[2], users[4]]);
  expect(
    filterUtils.getUsersByProfession(users, 'profession_3')
  ).toMatchObject([users[0], users[1]]);
});

it('getUniqueHairColors', () => {
  expect(filterUtils.getUniqueHairColors(users)).toMatchObject([
    'Red',
    'Green',
    'Pink',
  ]);
});

it('getUsersByMinMaxFilter', () => {
  expect(
    filterUtils.getUsersByMinMaxFilter(users, 'age', {
      min: '',
      max: '',
      range: false,
    })
  ).toMatchObject([...users]);
  expect(
    filterUtils.getUsersByMinMaxFilter(users, 'age', {
      min: '',
      max: '',
      range: true,
    })
  ).toMatchObject([...users]);
  expect(
    filterUtils.getUsersByMinMaxFilter(users, 'age', {
      min: '10',
      max: '18',
      range: true,
    })
  ).toMatchObject([users[0], users[1], users[3]]);
  expect(
    filterUtils.getUsersByMinMaxFilter(users, 'age', {
      min: '40',
      max: '40',
      range: false,
    })
  ).toMatchObject([users[2]]);
  expect(
    filterUtils.getUsersByMinMaxFilter(users, 'age', {
      min: '40',
      max: '',
      range: true,
    })
  ).toMatchObject([users[2]]);
  expect(
    filterUtils.getUsersByMinMaxFilter(users, 'age', {
      min: '',
      max: '40',
      range: false,
    })
  ).toMatchObject([users[2]]);
  expect(
    filterUtils.getUsersByMinMaxFilter(users, 'age', {
      min: '',
      max: '40',
      range: true,
    })
  ).toMatchObject([users[2]]);
});

it('getUsersByArrrayFilter', () => {
  expect(
    filterUtils.getUsersByArrayFilter(users, 'hair_color', [])
  ).toMatchObject([...users]);
  expect(
    filterUtils.getUsersByArrayFilter(users, 'hair_color', ['Red'])
  ).toMatchObject([users[0], users[2], users[4]]);
  expect(
    filterUtils.getUsersByArrayFilter(users, 'hair_color', ['Red', 'Pink'])
  ).toMatchObject([users[0], users[2], users[3], users[4]]);
  expect(
    filterUtils.getUsersByArrayFilter(users, 'hair_color', [
      'Red',
      'Pink',
      'Green',
    ])
  ).toMatchObject([...users]);
});

it('getUsersByFilters', () => {
  expect(
    filterUtils.getUsersByFilters({
      users: users,
      height: { min: '30', max: '', range: false },
    })
  ).toMatchObject([users[3], users[4]]);

  expect(
    filterUtils.getUsersByFilters({
      users: users,
      age: { min: '17', max: '100', range: false },
      height: { min: '30', max: '', range: false },
    })
  ).toMatchObject([users[3]]);

  expect(
    filterUtils.getUsersByFilters({
      users: users,
      age: { min: '17', max: '100', range: true },
      height: { min: '30', max: '', range: false },
      hair_colors: ['Red'],
    })
  ).toMatchObject([users[4]]);

  expect(
    filterUtils.getUsersByFilters({
      users: users,
      age: { min: '17', max: '100', range: true },
      height: { min: '30', max: '', range: false },
      hair_colors: ['Red', 'Pink'],
    })
  ).toMatchObject([users[3], users[4]]);
});
