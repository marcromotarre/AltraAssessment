import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const UserPaginationContainer = styled.button`
  margin: 0;
  border: 0;
  width: 100%;
  padding: 10px 30px 10px 10px;
  height: 40px;
  border-bottom: 1px solid #e3e3e3;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  label {
    font-family: 'HelveticaNeue-Bold';
    color: #707070;
    font-size: 16px;
  }
`;

const UserPagination = ({ text, onClick }) => {
  const onClickContainer = () => {
    onClick();
  };
  return (
    <UserPaginationContainer onClick={onClickContainer}>
      <label>{text}</label>
    </UserPaginationContainer>
  );
};

UserPagination.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

UserPagination.defaultProps = {
  text: 'Load more users',
  onClick: () => {},
};

export default UserPagination;
