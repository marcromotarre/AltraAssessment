import towns from './../../fixtures/towns';
import * as utils from './../town';

it('getTownsNames', () => {
  expect(utils.getTownsNames(towns)).toStrictEqual(['town1', 'town2']);
});

it('getUsersByTown', () => {
  expect(utils.getUsersByTown(towns, 'town1')).toStrictEqual([
    {
      id: 0,
      hair_color: 'Pink',
    },
    {
      id: 1,
      hair_color: 'Red',
    },
    {
      id: 2,
      hair_color: 'Black',
    },
    {
      id: 3,
      hair_color: 'Red',
    },
  ]);

  expect(utils.getUsersByTown(towns, 'town2')).toStrictEqual([
    {
      id: 0,
      hair_color: 'Green',
    },
    {
      id: 1,
      hair_color: 'Red',
    },
    {
      id: 2,
      hair_color: 'Red',
    },
    {
      id: 3,
      hair_color: 'Red',
    },
    {
      id: 4,
      hair_color: 'Green',
    },
  ]);
});
it('getUniqueHairColorsByTown', () => {
  expect(utils.getUniqueHairColorsByTown(towns, 'town1')).toStrictEqual([
    'Pink',
    'Red',
    'Black',
  ]);
  expect(utils.getUniqueHairColorsByTown(towns, 'town2')).toStrictEqual([
    'Green',
    'Red',
  ]);
});
