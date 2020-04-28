import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import {
  getUsersByName,
  getUsersByFilters,
  isAnyFilterApplied as checkAnyFilterApplied,
} from '../../utils/filters.js';
import MainBanner from '../Banners/MainBanner.js';
import UsersList from '../User/UsersList.js';
import SearchInput from '../SearchInput.js';
import FilterBox from '../Filter/FilterBox.js';
import DataManager from '../DataManager.js';

export const HomeContainer = styled.section``;

export const Header = styled.div`
  position: sticky;
  top: 0;
`;

const Home = () => {
  const { townName, users } = useSelector((state) => state.town);
  const { age, height, weight, hair_colors } = useSelector(
    (state) => state.filters
  );
  const [filteringMode, setFilteringMode] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const filteredUsers = getUsersByFilters({
    users,
    age,
    height,
    weight,
    hair_colors,
  });
  const searchedUsers = getUsersByName(filteredUsers, searchValue);

  const search = (inputSearchValue) => {
    setSearchValue(inputSearchValue);
  };

  const setFilteringModeTrue = () => {
    setFilteringMode(true);
  };

  const isAnyFilterApplied = checkAnyFilterApplied({
    age,
    height,
    weight,
    hair_colors,
  });

  return (
    <HomeContainer data-testid="HomeSite">
      <Header>
        <MainBanner
          townName={townName}
          onClickFilterIcon={setFilteringModeTrue}
          showFilterButton={!isAnyFilterApplied && !filteringMode}
        />
        <FilterBox
          filteredUsersNumber={filteredUsers.length}
          isAnyFilterApplied={isAnyFilterApplied}
          filteringMode={filteringMode}
          setFilteringMode={setFilteringMode}
        ></FilterBox>
        {!filteringMode && (
          <SearchInput onSearch={search} initValue={searchValue} />
        )}
      </Header>
      {!filteringMode && (
        <DataManager>
          <UsersList users={searchedUsers} usersPerPage={15} />
        </DataManager>
      )}
    </HomeContainer>
  );
};

export default Home;
