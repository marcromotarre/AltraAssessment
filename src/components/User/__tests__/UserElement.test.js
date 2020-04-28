import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import UserElement from '../UserElement';

/** this component should:
 *  - render all user data
 */

describe('User Element Component tests', () => {
  const props = {
    name: 'user name',
    thumbnail: 'imagepath',
    age: 20,
    weight: 70.76543,
    height: 150.83749,
    hair_color: 'Green',
    professions: ['profession1', 'profession2'],
    friends: ['friend1', 'friend2', 'friend3'],
  };

  it('render UserElement Snapshot', () => {
    const tree = renderer.create(<UserElement {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render user name', () => {
    const { getByTestId } = render(<UserElement {...props} />);
    const userName = getByTestId('user-name');
    expect(userName.innerHTML).toBe(props.name);
  });

  it('should render all properties name', () => {
    const { getByTestId } = render(<UserElement {...props} />);
    const userProperties = getByTestId('user-properties');
    expect(userProperties.children.length).toBe(6);

    const age = userProperties.children[0];
    expect(age.children.length).toBe(2);
    expect(age.querySelector('svg').getAttribute('width')).toBe('14.63');
    expect(age.querySelector('label').innerHTML).toBe(`${props.age}`);

    const height = userProperties.children[1];
    expect(height.children.length).toBe(2);
    expect(height.querySelector('svg').getAttribute('height')).toBe('17.7');
    expect(height.querySelector('label').innerHTML).toBe('150');

    const weight = userProperties.children[2];
    expect(weight.children.length).toBe(2);
    expect(weight.querySelector('svg').getAttribute('width')).toBe('17.7');
    expect(weight.querySelector('label').innerHTML).toBe('70');

    const hairColor = userProperties.children[3];
    expect(hairColor.children.length).toBe(1);
    expect(hairColor.querySelector('svg').getAttribute('width')).toBe('15.26');
    expect(hairColor.querySelector('svg').getAttribute('color')).toBe(
      props.hair_color
    );

    const professions = userProperties.children[4];
    expect(professions.children.length).toBe(2);
    expect(professions.querySelector('svg').getAttribute('width')).toBe(
      '14.34'
    );
    expect(professions.querySelector('label').innerHTML).toBe(
      `${props.professions.length}`
    );

    const friends = userProperties.children[5];
    expect(friends.children.length).toBe(2);
    expect(friends.querySelector('svg').getAttribute('width')).toBe('15.26');
    expect(friends.querySelector('label').innerHTML).toBe(
      `${props.friends.length}`
    );
  });
});
