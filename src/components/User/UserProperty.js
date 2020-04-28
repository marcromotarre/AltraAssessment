import React from 'react';
import styled from 'styled-components';

const UserPropertyContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  label {
    font-family: 'HelveticaNeue-Thin';
    color: #707070;
    font-size: 12px;
  }

  .big {
    font-size: 22px;
  }
`;

const UserProperty = ({ children }) => {
  return (
    <UserPropertyContainer data-testid="user-property">
      {children}
    </UserPropertyContainer>
  );
};

export default UserProperty;
