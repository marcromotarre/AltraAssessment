import React from 'react';
import { renderRouteRedux } from '../../../utils/test';
import users from '../../../fixtures/users';
import '@testing-library/jest-dom/extend-expect';

import { Router } from '@reach/router';

import ProfessionsFinder from '../ProfessionsFinder';

describe('User Route Component', () => {
  it('User Route Snapshot', () => {
    expect(
      renderRouteRedux(
        <Router>
          <ProfessionsFinder path="/profession/:name" />
        </Router>,
        {
          route: '/profession/profession_1',
          initialState: { town: { users: users } },
        }
      ).baseElement
    ).toMatchSnapshot();
  });
});
