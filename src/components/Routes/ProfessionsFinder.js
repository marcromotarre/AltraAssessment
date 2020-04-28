import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { useParams } from '@reach/router';

import ProfessionsSVG from './../../svg/professions.svg';
import { getUsersByName, getUsersByProfession } from '../../utils/filters.js';

import Profession from '../Profession';
import SectionBanner from '../Banners/SectionBanner';
import UsersList from '../User/UsersList.js';
import SearchInput from '../SearchInput.js';
import DataManager from '../DataManager';

export const ProfessionHeader = styled.div`
  background: white;
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: 100%;
  row-gap: 13px;

  svg,
  section {
    justify-self: center;
  }
`;

const ProfessionsFinder = () => {
  let { name } = useParams();
  const { users } = useSelector((state) => state.town);
  const [searchValue, setSearchValue] = useState('');

  const usersByProfession = getUsersByProfession(users, name);
  const searchedUsers = getUsersByName(usersByProfession, searchValue);

  const search = (inputSearchValue) => {
    setSearchValue(inputSearchValue);
  };

  return (
    <section data-testid="ProfessionSite">
      <ProfessionHeader>
        <SectionBanner />
        <ProfessionsSVG width={49.83}> </ProfessionsSVG>
        <Profession name={name}> </Profession>
        <SearchInput onSearch={search} />
      </ProfessionHeader>
      <DataManager>
        <UsersList users={searchedUsers} />
      </DataManager>
    </section>
  );
};

export default ProfessionsFinder;
