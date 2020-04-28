import React from 'react';
import { renderRouteRedux } from '../../../utils/test';
import users from '../../../fixtures/users';
import '@testing-library/jest-dom/extend-expect';

import { Router } from '@reach/router';

import User from '../User';

describe('User Route Component', () => {
  it('User Route Snapshot', () => {
    expect(
      renderRouteRedux(
        <Router>
          <User path="/user/:id" />
        </Router>,
        {
          route: '/user/0',
          initialState: { town: { users: users } },
        }
      ).baseElement
    ).toMatchSnapshot();
  });
});
