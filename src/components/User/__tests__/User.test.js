import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import User from '../User';

/** this component should:
 *  - render all user detailed data
 *    - including:
 *      - all professions user data are links to professions route
 *      - all clickable friends user data to user routes
 */

describe('User Element Component tests', () => {
  const friend = {
    id: 'friend_id',
    name: 'user name',
    thumbnail: 'imagepath',
    age: 20,
    weight: 70.86543,
    height: 150.83749,
    hair_color: 'Green',
    professions: [
      'profession_1',
      'profession_2',
      'profession_3',
      'profession_4',
    ],
    friends: ['friend1', 'friend2', 'friend3'],
  };

  const props = {
    name: 'user name',
    thumbnail: 'imagepath',
    age: 20,
    weight: 70.86543,
    height: 150.33749,
    hair_color: 'Green',
    professions: ['profession_1', 'profession_2'],
    friends: [friend],
  };

  const propsNoFriendNoProfessions = {
    name: 'user name',
    thumbnail: 'imagepath',
    age: 20,
    weight: 70.86543,
    height: 150.33749,
    hair_color: 'Green',
    professions: [],
    friends: [],
  };

  it('render UserElement', () => {
    const tree = renderer.create(<User {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render container and its children', () => {
    const { getByTestId } = render(<User {...props} />);
    const container = getByTestId('actual-user-container');
    expect(container.children.length).toBe(5);
  });

  it('should render user image', () => {
    const { getByTestId } = render(<User {...props} />);
    const userImage = getByTestId('actual-user-image');
    expect(userImage.getAttribute('src')).toBe('imagepath');
  });

  it('should render user name', () => {
    const { getByTestId } = render(<User {...props} />);
    const userName = getByTestId('actual-user-name');
    expect(userName.innerHTML).toBe(props.name);
  });

  it('should render user properties (age. width, height, hair_color)', () => {
    const { getByTestId } = render(<User {...props} />);
    const userProperties = getByTestId('actual-user-properties');
    expect(userProperties.children.length).toBe(4);

    const age = userProperties.children[0];
    expect(age.children.length).toBe(2);
    expect(age.querySelector('svg').getAttribute('width')).toBe('28.39');
    expect(age.querySelector('label').innerHTML).toBe(`${props.age}`);
    expect(age.querySelector('label').getAttribute('class')).toBe('big');

    const height = userProperties.children[1];
    expect(height.children.length).toBe(2);
    expect(height.querySelector('svg').getAttribute('height')).toBe('33.36');
    expect(height.querySelector('label').innerHTML).toBe('150');
    expect(height.querySelector('label').getAttribute('class')).toBe('big');

    const weight = userProperties.children[2];
    expect(weight.children.length).toBe(2);
    expect(weight.querySelector('svg').getAttribute('width')).toBe('33.36');
    expect(weight.querySelector('label').innerHTML).toBe('70');
    expect(weight.querySelector('label').getAttribute('class')).toBe('big');

    const hairColor = userProperties.children[3];
    expect(hairColor.children.length).toBe(1);
    expect(hairColor.querySelector('svg').getAttribute('width')).toBe('39.5');
    expect(hairColor.querySelector('svg').getAttribute('color')).toBe(
      props.hair_color
    );
  });

  it('should not render professions if user has no professions & should not render friends if user has no friends', () => {
    const { getByTestId } = render(<User {...propsNoFriendNoProfessions} />);
    const container = getByTestId('actual-user-container');
    expect(container.children.length).toBe(3);
  });

  it('should render professions', () => {
    const wrapper = shallow(<User {...props} />);
    const professions = wrapper.find('[data-testid="actual-user-professions"]');
    const sectionTitle = professions.childAt(0);
    expect(sectionTitle.prop('name')).toBe('Professions');
    expect(sectionTitle.prop('number')).toBe(props.professions.length);
    expect(sectionTitle.childAt(0).prop('width')).toBe(25.05);
    const professionsList = professions.childAt(1);
    expect(professionsList.find('Link').length).toBe(props.professions.length);
    expect(professionsList.childAt(0).prop('to')).toBe(
      `/profession/${props.professions[0]}`
    );
    expect(professionsList.childAt(1).prop('to')).toBe(
      `/profession/${props.professions[1]}`
    );
  });

  it('should render friends', () => {
    const wrapper = shallow(<User {...props} />);
    const friends = wrapper.find('[data-testid="actual-user-friends"]');
    const sectionTitle = friends.childAt(0);
    expect(sectionTitle.prop('name')).toBe('Friends');
    expect(sectionTitle.prop('number')).toBe(props.friends.length);
    expect(sectionTitle.childAt(0).prop('width')).toBe(31.5);
    const friendsList = friends.childAt(1);
    expect(friendsList.find('Link').length).toBe(props.friends.length);
    expect(friendsList.childAt(0).prop('to')).toBe(
      `/user/${props.friends[0].id}`
    );
  });
});
