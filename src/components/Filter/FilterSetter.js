import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch, connect } from 'react-redux';

import CloseRedIcon from './../../svg/x.svg';

import * as actions from '../../redux/actions/filters';

import { isArrayFilterApplied } from './../../utils/filters';

import {
  getMinUserValueByField,
  getMaxUserValueByField,
} from './../../utils/limits';

import FilterMinMax from './FilterMinMax.js';
import ColoredHair from '../User/ColoredHair';
import FilterMultipleSelection from './FilterMultipleSelection';
import { colors } from '../../data/colors';

const FilterSetterContainer = styled.section`
  align-items: stretch;
  display: flex;
  flex-flow: column;
  height: 100%;
  flex: auto;
  background: #f7f8fd;
  width: 100%;
`;

const NumberFilteredUsers = styled.section`
  font-family: 'HelveticaNeue-Thin';
  color: #000;
  font-size: 18px;
  justify-self: center;
  align-self: center;
`;

const Filters = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  row-gap: 10px;
`;

const Filter = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  > * {
    justify-self: center;
    align-self: center;
  }
`;

const FilterSetter = ({ filteredUsersNumber }) => {
  const dispatch = useDispatch();
  const { users, uniqueHairColors } = useSelector((state) => state.town);
  const { age, height, weight, hair_colors } = useSelector(
    (state) => state.filters
  );

  const clearAgeFilter = () =>
    dispatch(
      actions.setAgeFilter({
        filterData: { min: '', max: '', range: age.range },
      })
    );

  const ageMinValueChanged = (value) =>
    dispatch(actions.setAgeMin({ min: value }));

  const ageMaxValueChanged = (value) =>
    dispatch(actions.setAgeMax({ max: value }));

  const ageRangeValueChanged = (value) =>
    dispatch(actions.setAgeRange({ range: value }));

  const clearHeightFilter = () =>
    dispatch(
      actions.setHeightFilter({
        filterData: { min: '', max: '', range: height.range },
      })
    );
  const heightMinValueChanged = (value) =>
    dispatch(actions.setHeightMin({ min: value }));

  const heightMaxValueChanged = (value) =>
    dispatch(actions.setHeightMax({ max: value }));

  const heightRangeValueChanged = (value) =>
    dispatch(actions.setHeightRange({ range: value }));

  const clearWeightFilter = () =>
    dispatch(
      actions.setWeightFilter({
        filterData: { min: '', max: '', range: weight.range },
      })
    );

  const weightMinValueChanged = (value) =>
    dispatch(actions.setWeightMin({ min: value }));

  const weightMaxValueChanged = (value) =>
    dispatch(actions.setWeightMax({ max: value }));

  const weightRangeValueChanged = (value) =>
    dispatch(actions.setWeightRange({ range: value }));

  const handleOnClickHairColor = (index) => {
    const uniqueHairColor = uniqueHairColors[index];
    const isSelected = hair_colors.includes(uniqueHairColor);
    if (isSelected) {
      dispatch(actions.deleteHairColorFilter({ color: uniqueHairColor }));
    } else {
      dispatch(actions.addHairColorFilter({ color: uniqueHairColor }));
    }
  };

  const clearHairColorsFilter = () =>
    dispatch(actions.clearHairColorsFilters());

  return (
    <FilterSetterContainer data-testid="FilterSetter">
      <NumberFilteredUsers>{`( ${filteredUsersNumber} )`}</NumberFilteredUsers>
      <Filters>
        <Filter>
          <FilterMinMax
            title="Age"
            minInputValue={age.min}
            maxInputValue={age.max}
            showTo={age.range}
            minLimit={getMinUserValueByField(users, 'age')}
            maxLimit={getMaxUserValueByField(users, 'age')}
            minChanged={ageMinValueChanged}
            maxChanged={ageMaxValueChanged}
            showToChanged={ageRangeValueChanged}
          />
          {(age.min !== '' || age.max !== '') && (
            <button data-testid="clear-age-icon" onClick={clearAgeFilter}>
              <CloseRedIcon width={14} />
            </button>
          )}
        </Filter>

        <Filter>
          <FilterMinMax
            title="Height"
            minInputValue={height.min}
            maxInputValue={height.max}
            showTo={height.range}
            minLimit={getMinUserValueByField(users, 'height')}
            maxLimit={getMaxUserValueByField(users, 'height')}
            minChanged={heightMinValueChanged}
            maxChanged={heightMaxValueChanged}
            showToChanged={heightRangeValueChanged}
          />
          {(height.min !== '' || height.max !== '') && (
            <button data-testid="clear-height-icon" onClick={clearHeightFilter}>
              <CloseRedIcon width={14} />
            </button>
          )}
        </Filter>

        <Filter>
          <FilterMinMax
            title="Weight"
            minInputValue={weight.min}
            maxInputValue={weight.max}
            showTo={weight.range}
            minLimit={getMinUserValueByField(users, 'weight')}
            maxLimit={getMaxUserValueByField(users, 'weight')}
            minChanged={weightMinValueChanged}
            maxChanged={weightMaxValueChanged}
            showToChanged={weightRangeValueChanged}
          />
          {(weight.min !== '' || weight.max !== '') && (
            <button data-testid="clear-weight-icon" onClick={clearWeightFilter}>
              <CloseRedIcon width={14} />
            </button>
          )}
        </Filter>

        <Filter>
          <FilterMultipleSelection
            title="Hair Color"
            clickOnElement={handleOnClickHairColor}
          >
            {uniqueHairColors.map((uniqueHairColor) => {
              const isSelected = hair_colors.includes(uniqueHairColor);
              return (
                <ColoredHair
                  key={uniqueHairColor}
                  strokecolor={
                    isSelected ? colors.Transparent : uniqueHairColor
                  }
                  color={isSelected ? uniqueHairColor : colors.Transparent}
                  width={14.28}
                />
              );
            })}
          </FilterMultipleSelection>
          {isArrayFilterApplied(hair_colors) && (
            <button
              data-testid="clear-colors-icon"
              onClick={clearHairColorsFilter}
            >
              <CloseRedIcon width={14} />
            </button>
          )}
        </Filter>
      </Filters>
    </FilterSetterContainer>
  );
};

export default FilterSetter;
