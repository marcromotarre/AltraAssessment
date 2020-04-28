import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SearchSVG from '../svg/search.svg';

export const SearchContainer = styled.div`
  background-color: #ffffff;
  border-bottom: 1px solid #e6e6e6;
  height: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: 40px auto;
  grid-template-rows: 40px;
  column-gap: 10px;
`;

const SearchIcon = styled(SearchSVG)`
  justify-self: center;
  align-self: center;
`;

const SearchInputSearcher = styled.input`
  justify-self: start;
  align-self: center;
  font-family: 'HelveticaNeue-Thin';
  color: #929292;
  font-size: 12px;
  width: 90%;
  height: 90%;
  :focus {
    outline: none;
  }
`;

export function useInputValue(onSearch, initValue = '') {
  const [inputValue, setInputValue] = useState(initValue);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    onSearch(event.target.value);
  };
  return { inputValue, handleInputChange };
}

const SearchInput = ({ onSearch, initValue }) => {
  const { inputValue, handleInputChange } = useInputValue(onSearch, initValue);

  return (
    <SearchContainer className>
      <SearchIcon width={21.42} data-testid="search-icon" />
      <SearchInputSearcher
        value={inputValue}
        onChange={handleInputChange}
        data-testid="search-input"
      />
    </SearchContainer>
  );
};

SearchInput.propTypes = {
  onSearch: PropTypes.func,
  initValue: PropTypes.string,
};

SearchInput.defaultProps = {
  onSearch: () => {},
  initValue: '',
};

export default SearchInput;
