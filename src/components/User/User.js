import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import HeightSVG from './../../svg/height.svg';
import WeightSVG from './../../svg/weight.svg';
import AgeSVG from './../../svg/candle.svg';
import FriendsSVG from './../../svg/friends.svg';
import ProfessionsSVG from './../../svg/professions.svg';

import SectionTitle from './../SectionTitle.js';

import UserProperty from './../User/UserProperty.js';
import Profession from '../Profession';
import UserElement from './UserElement';
import { Link } from '@reach/router';
import ColoredHair from './ColoredHair';

export const UserContainer = styled.section`
  display: grid;
  grid-template-columns: 100%;
  row-gap: 25px;

  a {
    text-decoration: none;
  }
`;

export const UserImage = styled.img`
  border-radius: 50%;
  height: 137px;
  width: 137px;
  justify-self: center;
  align-self: center;
`;

export const UserName = styled.label`
  justify-self: center;
  align-self: center;
  font-family: 'HelveticaNeue-Bold';
  color: #707070;
  font-size: 24px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const UserProperties = styled.div`
  width: 80%;
  justify-self: center;
  align-self: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: 100%;
  row-gap: 15px;
`;

export const ProfessionsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px 40px;
  a {
    > section {
      margin: 5px;
    }
  }
`;

const User = ({
  name,
  thumbnail,
  age,
  weight,
  height,
  hair_color,
  professions = [],
  friends = [],
}) => {
  return (
    <UserContainer data-testid="actual-user-container">
      <UserImage data-testid="actual-user-image" src={thumbnail} />
      <UserName data-testid="actual-user-name">{name}</UserName>
      <UserProperties data-testid="actual-user-properties">
        <UserProperty>
          <AgeSVG width={28.39} /> <label className="big">{age}</label>
        </UserProperty>
        <UserProperty>
          <HeightSVG height={33.36} />
          <label className="big">{Math.floor(height).toFixed(0)}</label>
        </UserProperty>
        <UserProperty>
          <WeightSVG width={33.36} />
          <label className="big">{Math.floor(weight).toFixed(0)}</label>
        </UserProperty>
        <UserProperty>
          <ColoredHair color={hair_color} width={39.5} />
        </UserProperty>
      </UserProperties>
      {professions.length > 0 && (
        <Section data-testid="actual-user-professions">
          <SectionTitle name="Professions" number={professions.length}>
            <ProfessionsSVG width={25.05} />
          </SectionTitle>
          <ProfessionsList>
            {professions.map((profession, index) => (
              <Link key={index} to={`/profession/${profession}`}>
                <Profession key={index} name={profession} />
              </Link>
            ))}
          </ProfessionsList>
        </Section>
      )}
      {friends.length > 0 && (
        <Section data-testid="actual-user-friends">
          <SectionTitle name="Friends" number={friends.length}>
            <FriendsSVG width={31.5} />
          </SectionTitle>
          <div>
            {friends.map((friend, index) => (
              <Link key={index} to={`/user/${friend.id}`}>
                <UserElement {...friend} />
              </Link>
            ))}
          </div>
        </Section>
      )}
    </UserContainer>
  );
};

export default User;
