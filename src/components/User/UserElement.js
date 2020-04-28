import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import HeightSVG from './../../svg/height.svg';
import WeightSVG from './../../svg/weight.svg';
import CandleSVG from './../../svg/candle.svg';
import FriendsSVG from './../../svg/friends.svg';
import ProfessionsSVG from './../../svg/professions.svg';

import UserProperty from './../User/UserProperty.js';
import ColoredHair from './ColoredHair';

const UserContainer = styled.section`
  padding: 10px 30px 10px 10px;
  display: grid;
  grid-template-columns: 58px auto;
  column-gap: 10px;
  border-bottom: 1px solid #e3e3e3;
  background-color: #f8f8f8;
`;

const UserImage = styled.img`
  border-radius: 50%;
  height: 58px;
  width: 58px;
  justify-self: center;
  align-self: center;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const UserName = styled.label`
  width: 100%;
  justify-content: start;
  align-items: center;
  font-family: 'HelveticaNeue-Bold';
  color: #707070;
  font-size: 16px;
`;

const UserProperties = styled.div`
  grid-area: m-properties;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserElement = ({
  name,
  thumbnail,
  age,
  weight,
  height,
  hair_color,
  professions,
  friends,
}) => {
  return (
    <UserContainer>
      <UserImage data-testid="user-image" src={thumbnail} />
      <UserInfo>
        <UserName data-testid="user-name">{name}</UserName>
        <UserProperties data-testid="user-properties">
          <UserProperty>
            <CandleSVG width={14.63} /> <label>{age}</label>
          </UserProperty>
          <UserProperty data-testid="user-height">
            <HeightSVG height={17.7} />
            <label>
              {isNaN(height) ? height : Math.floor(height).toFixed(0)}
            </label>
          </UserProperty>
          <UserProperty data-testid="user-width">
            <WeightSVG width={17.7} />
            <label>
              {isNaN(weight) ? weight : Math.floor(weight).toFixed(0)}
            </label>
          </UserProperty>
          <UserProperty>
            <ColoredHair color={hair_color} width={15.26} />
          </UserProperty>
          <UserProperty>
            <ProfessionsSVG width={14.34} />
            <label>{professions.length}</label>
          </UserProperty>
          <UserProperty>
            <FriendsSVG width={15.26} /> <label>{friends.length}</label>
          </UserProperty>
        </UserProperties>
      </UserInfo>
    </UserContainer>
  );
};

UserElement.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  hair_color: PropTypes.string.isRequired,
  professions: PropTypes.arrayOf(PropTypes.string).isRequired,
  friends: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UserElement;
