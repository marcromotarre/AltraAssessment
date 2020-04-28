import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import UserProperty from '../UserProperty';

/** this component should:
 *  - render children inside a div
 */

describe('User Property Component tests', () => {
  it('render UserProperty Snapshot', () => {
    const tree = renderer
      .create(
        <UserProperty>
          <label>text</label>
        </UserProperty>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('insert props children inside user property div', () => {
    const { getByTestId } = render(
      <UserProperty>
        <label>text</label>
      </UserProperty>
    );
    const userProperty = getByTestId('user-property');
    expect(userProperty.children.length).toEqual(1);
    expect(userProperty.querySelector('label').innerHTML).toBe('text');
  });
});
