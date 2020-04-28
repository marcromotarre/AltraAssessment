import React, { useState } from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import UserElement from './UserElement.js';
import UserPagination from './UserPagination.js';

export const UsersListContainer = styled.div`
  a {
    text-decoration: none;
  }
`;

const UsersList = ({ users, usersPerPage }) => {
  const [page, setPage] = useState(1);

  const loadMoreUsers = () => {
    setPage(page + 1);
  };

  const moreUsers = usersPerPage * page >= users.length ? false : true;

  return (
    <UsersListContainer>
      {users &&
        users
          .filter((a, index) => index < usersPerPage * page)
          .map((user) => (
            <Link key={user.id} to={`/user/${user.id}`}>
              <UserElement {...user} />
            </Link>
          ))}
      {moreUsers && <UserPagination onClick={loadMoreUsers} />}
    </UsersListContainer>
  );
};

UsersList.propTypes = {
  users: PropTypes.array,
  usersPerPage: PropTypes.number,
};

UsersList.defaultProps = {
  users: [],
  usersPerPage: Number.POSITIVE_INFINITY,
};

export default UsersList;
