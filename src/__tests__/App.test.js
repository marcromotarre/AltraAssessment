import React from 'react';
import { renderReduxWithRouter } from '../utils/test';
import App from '../App';
import { initialState as filtersInitialState } from './../redux/reducers/filters';
import { initialState as townInitialState } from './../redux/reducers/town';

const initialState = {
  filters: filtersInitialState,
  town: townInitialState,
};
describe('App test', () => {
  test('full app rendering/navigating', async () => {
    const {
      history: { navigate },
      getByTestId,
    } = renderReduxWithRouter(<App />, {
      initialState: initialState,
    });

    await navigate('/');
    expect(getByTestId('HomeSite')).toBeTruthy();

    await navigate('/user/0');
    expect(getByTestId('UserSite')).toBeTruthy();

    await navigate('/profession/professionName');
    expect(getByTestId('ProfessionSite')).toBeTruthy();
  });

  test('landing on a bad page', () => {
    const { container } = renderReduxWithRouter(<App />, {
      initialState: initialState,
      route: '/something-that-does-not-match',
    });
    expect(container.innerHTML).toMatch('<div></div>');
  });
});
