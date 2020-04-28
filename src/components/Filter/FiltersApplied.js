import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CandleSVG from '../../svg/candle.svg';
import WeightSVG from '../../svg/weight.svg';
import HeightSVG from '../../svg/height.svg';

import {
  isMinMaxFilterApplied,
  getFilterMinMaxString,
  isAgeOrWeightOrHeightFilterApplied,
} from './../../utils/filters';
import ColoredHair from '../User/ColoredHair';

const FiltersAppliedContainer = styled.section`
  padding: 10px 0px;
  background: #f7f8fd;
  display: grid;
  grid-template-columns: 100%;
`;

const PrimaryFilters = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const SecondaryFilters = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin: 0px 10px;
  }
`;
const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  label {
    padding-left: 10px;
    font-family: 'HelveticaNeue-Thin';
    color: #000;
    font-size: 12px;
  }
`;

const AgeWeightHeightFilters = ({ age, weight, height }) => {
  return (
    <>
      {isMinMaxFilterApplied(age) && (
        <Filter>
          <CandleSVG width={14.63} />
          <label>{getFilterMinMaxString(age)}</label>
        </Filter>
      )}
      {isMinMaxFilterApplied(weight) && (
        <Filter>
          <WeightSVG width={17.7} />
          <label>{getFilterMinMaxString(weight)}</label>
        </Filter>
      )}
      {isMinMaxFilterApplied(height) && (
        <Filter>
          <HeightSVG height={17.7} />
          <label>{getFilterMinMaxString(height)}</label>
        </Filter>
      )}
    </>
  );
};

const HairFilter = ({ hair_colors }) => {
  return (
    <>
      {hair_colors.map((hair_color) => (
        <ColoredHair key={hair_color} color={hair_color} width={14.24} />
      ))}
    </>
  );
};

const FiltersApplied = ({ age, weight, height, hair_colors }) => {
  return (
    <FiltersAppliedContainer data-testid="FiltersApplied">
      <PrimaryFilters>
        {isAgeOrWeightOrHeightFilterApplied({
          age,
          height,
          weight,
        }) && (
          <AgeWeightHeightFilters age={age} weight={weight} height={height} />
        )}
        {!isAgeOrWeightOrHeightFilterApplied({ age, height, weight }) &&
          hair_colors.length > 0 && <HairFilter hair_colors={hair_colors} />}
      </PrimaryFilters>
      <SecondaryFilters>
        {isAgeOrWeightOrHeightFilterApplied({ age, height, weight }) &&
          hair_colors.length > 0 && <HairFilter hair_colors={hair_colors} />}
      </SecondaryFilters>
    </FiltersAppliedContainer>
  );
};

FiltersApplied.propTypes = {
  age: PropTypes.exact({
    min: PropTypes.string,
    max: PropTypes.string,
    range: PropTypes.bool,
  }),
  weight: PropTypes.exact({
    min: PropTypes.string,
    max: PropTypes.string,
    range: PropTypes.bool,
  }),
  height: PropTypes.exact({
    min: PropTypes.string,
    max: PropTypes.string,
    range: PropTypes.bool,
  }),
  hair_colors: PropTypes.arrayOf(PropTypes.string),
  onClickFilterIcon: PropTypes.func,
};

FiltersApplied.defaultProps = {
  age: { min: '', max: '', range: false },
  weight: { min: '', max: '', range: false },
  height: { min: '', max: '', range: false },
  hair_colors: [],
  onClickFilterIcon: () => {},
};

export default FiltersApplied;
