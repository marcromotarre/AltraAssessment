import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import UsersList from '../UsersList';
import { shallow } from 'enzyme';
import { fireEvent } from '@testing-library/react';

import users from './../../../fixtures/users';

/** this component should:
 *  - show all users information using UserElement component
 *      - all users has Link to user site by id
 *
 *  - at the end of the list paint user Pagination button if there are more users to paint
 */

const loadMoreUsers = jest.fn();

describe('Users List Component tests', () => {
  it('render UsersList Snapshot', () => {
    const tree = renderer
      .create(<UsersList users={users} usersPerPage={2} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('UsersList should paint all users', () => {
    const wrapper = shallow(<UsersList users={users} />);
    expect(wrapper.children().length).toBe(users.length);
  });

  it('UsersList should paint Link and UserElement for each user', () => {
    const wrapper = shallow(<UsersList users={users} />);
    const index = 3;
    const iUser = wrapper.childAt(index);
    expect(iUser.children().length).toBe(1);
    expect(iUser.find('Link').prop('to')).toBe(`/user/${users[index].id}`);
    expect(iUser.find('Link').children().length).toBe(1);
    const userElement = iUser.find('Link').childAt(0);
    expect(userElement.prop('id')).toBe(users[index].id);
    expect(userElement.prop('name')).toBe(users[index].name);
    expect(userElement.prop('thumbnail')).toBe(users[index].thumbnail);
    expect(userElement.prop('age')).toBe(users[index].age);
    expect(userElement.prop('weight')).toBe(users[index].weight);
    expect(userElement.prop('height')).toBe(users[index].height);
    expect(userElement.prop('hair_color')).toBe(users[index].hair_color);
    expect(userElement.prop('professions')).toBe(users[index].professions);
    expect(userElement.prop('friends')).toBe(users[index].friends);
  });

  it('Users pagination should be painted if there are more users than users per page', () => {
    const wrapper = shallow(
      <UsersList users={users} usersPerPage={users.length - 1} />
    );
    const userPagination = wrapper.childAt(users.length - 1);
    expect(wrapper.children().length).toBe(users.length);
    expect(userPagination.prop('text')).toBe('Load more users');
  });

  it('Users pagination should not be painted if there are same users than users per page', () => {
    const wrapper = shallow(
      <UsersList users={users} usersPerPage={users.length} />
    );
    expect(wrapper.children().length).toBe(users.length);
  });

  it('Users pagination should not be painted if there are less users than users per page', () => {
    const wrapper = shallow(
      <UsersList users={users} usersPerPage={users.length + 1} />
    );
    expect(wrapper.children().length).toBe(users.length);
  });

  it('click on User Pagination', () => {
    const { container } = render(<UsersList users={users} usersPerPage={2} />);
    expect(container.querySelectorAll('a').length).toBe(2);
    expect(container.querySelectorAll('button').length).toBe(1);
    const paginationButton = container.querySelector('button');
    fireEvent.click(paginationButton);
    expect(container.querySelectorAll('a').length).toBe(4);
    fireEvent.click(paginationButton);
    expect(container.querySelectorAll('a').length).toBe(5);
    expect(container.querySelectorAll('button').length).toBe(0);
  });
});
