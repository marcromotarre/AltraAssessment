import users from './../../fixtures/users';
import { getMinUserValueByField, getMaxUserValueByField } from './../limits';

it('getMinUserValueByField', () => {
  expect(getMinUserValueByField(users, 'age')).toBe(10);
  expect(getMinUserValueByField(users, 'height')).toBe(30);
  expect(getMinUserValueByField(users, 'weight')).toBe(20);
});

it('getMaxUserValueByField', () => {
  expect(getMaxUserValueByField(users, 'age')).toBe(80);
  expect(getMaxUserValueByField(users, 'height')).toBe(121);
  expect(getMaxUserValueByField(users, 'weight')).toBe(101);
});
