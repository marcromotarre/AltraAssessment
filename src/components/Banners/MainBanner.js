import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import BannerSmallSVG from './../../svg/banner-mini.svg';
import FilterSVG from './../../svg/filter.svg';

export const BannerContainer = styled.div`
  position: relative;
  background: white;
  width: 100%;
  height: 72px;
  display: grid;
  grid-template-columns: 15% 35% 35% 15%;
  grid-template-areas: '. m-town-name m-town-name m-filter';

  label {
    grid-area: m-town-name;
    font-family: 'HelveticaNeue-Thin';
    font-weight: 300;
    font-size: 42px;
    align-self: center;
    justify-self: center;
  }
`;

const BannerBackground = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  svg {
    width: 90%;
    opacity: 0.17;
  }
`;

const BannerSmall = styled(BannerSmallSVG)`
  width: 90%;
  opacity: 0.17;
  position: absolute;
`;

const FilterButton = styled.button`
  grid-area: m-filter;
  align-self: center;
  justify-self: center;
  z-index: 1;
`;

const MainBanner = ({ townName, onClickFilterIcon, showFilterButton }) => {
  const handleClickFilter = () => {
    onClickFilterIcon();
  };

  return (
    <BannerContainer>
      <BannerBackground>
        <BannerSmall />
      </BannerBackground>
      {townName && <label>{townName}</label>}
      {showFilterButton && (
        <FilterButton onClick={handleClickFilter}>
          <FilterSVG width={21.5} />
        </FilterButton>
      )}
    </BannerContainer>
  );
};

MainBanner.propTypes = {
  townName: PropTypes.string,
  onClickFilter: PropTypes.func,
  showFilterButton: PropTypes.bool,
};

MainBanner.defaultProps = {
  townName: '',
  onClickFilter: () => {},
  showFilterButton: false,
};

export default MainBanner;
