import React from 'react';
import { renderRouteRedux } from '../../../utils/test';
import users from '../../../fixtures/users';
import '@testing-library/jest-dom/extend-expect';
import { initialState as filtersInitialState } from './../../../redux/reducers/filters';

import { Router } from '@reach/router';

import Home from '../Home';

describe('Home Route Component', () => {
  it('Home Route Snapshot', () => {
    expect(
      renderRouteRedux(
        <Router>
          <Home path="/" />
        </Router>,
        {
          route: '/',
          initialState: {
            filters: filtersInitialState,
            town: { users: users },
          },
        }
      ).baseElement
    ).toMatchSnapshot();
  });
});
