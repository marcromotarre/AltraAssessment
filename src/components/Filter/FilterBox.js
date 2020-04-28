import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import FiltersApplied from './FiltersApplied';
import FilterSetter from './FilterSetter';
import FilterSVG from '../../svg/filter.svg';

export const FilterContainer = styled.section`
  background: #f7f8fd;
  width: 100%;
  display: grid;
  grid-template-columns: 40px auto;
`;

export const FilterButtonContainer = styled.div`
  button {
    padding-left: 10px;
    padding-top: 10px;
    justify-self: center;
    align-self: start;
  }
`;

const FilterBox = ({
  filteredUsersNumber,
  filteringMode,
  setFilteringMode,
  isAnyFilterApplied,
}) => {
  const filters = useSelector((state) => state.filters);
  const handleOnClickFilterIcon = () => setFilteringMode(!filteringMode);

  return (
    <FilterContainer>
      <FilterButtonContainer>
        {(isAnyFilterApplied || filteringMode) && (
          <button onClick={handleOnClickFilterIcon}>
            <FilterSVG width={21.5} />
          </button>
        )}
      </FilterButtonContainer>
      {isAnyFilterApplied && !filteringMode && <FiltersApplied {...filters} />}
      {filteringMode && (
        <FilterSetter filteredUsersNumber={filteredUsersNumber} />
      )}
    </FilterContainer>
  );
};

FilterBox.propTypes = {
  filteredUsersNumber: PropTypes.number.isRequired,
  filteringMode: PropTypes.bool,
  setFilteringMode: PropTypes.func,
  isAnyFilterApplied: PropTypes.bool,
};

FilterBox.defaultProps = {
  filteringMode: false,
  setFilteringMode: () => {},
  isAnyFilterApplied: false,
};

export default FilterBox;
