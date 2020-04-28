import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import EyeHideSVG from '../../svg/eye-hide.svg';
import EyeShowSVG from '../../svg/eye-show.svg';

const FilterMinMaxContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 20% 30% 20% 30%;
  grid-template-rows: 20px 26px 20px;
  row-gap: 2px;
  grid-template-areas:
    '. . . m-show-hide-icon'
    'm-title m-min-input m-to m-max-input'
    '. m-min-value-info . m-max-value-info';
  label {
    font-family: 'HelveticaNeue-Thin';
    color: #000;
  }
  * {
    justify-self: center;
    align-self: center;
  }

  input {
    height: 26px;
    width: 80%;
    background: white;
    border: 1px solid black;
    font-family: 'HelveticaNeue-Thin';
    color: #000;
    font-size: 14px;
    justify-self: end;
    padding-left: 10px;
  }
`;

const Title = styled.label`
  grid-area: m-title;
  font-size: 14px;
  justify-self: start;
`;

const MinInput = styled.input`
  grid-area: m-min-input;
`;

const MinValueInfo = styled.label`
  grid-area: m-min-value-info;
  font-size: 10px;
  justify-self: end;
  align-self: start;
`;

const To = styled.label`
  grid-area: m-to;
  font-size: 14px;
`;

const MaxInput = styled.input`
  grid-area: m-max-input;
`;

const MaxValueInfo = styled.label`
  grid-area: m-max-value-info;
  font-size: 10px;
  justify-self: end;
  align-self: start;
`;

const ShowHideButton = styled.button`
  grid-area: m-show-hide-icon;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilterMinMax = ({
  title,
  minLimit,
  maxLimit,
  minInputValue,
  maxInputValue,
  showTo,
  minChanged,
  maxChanged,
  showToChanged,
}) => {
  const handleMinInputChange = (event) => {
    if (event.target.value.match(/^[0-9]*$/g)) {
      minChanged(event.target.value);
    }
  };
  const handleMaxInputChange = (event) => {
    if (event.target.value.match(/^[0-9]*$/g)) {
      maxChanged(event.target.value);
    }
  };

  const handleShowTo = () => {
    showToChanged(!showTo);
  };

  return (
    <FilterMinMaxContainer>
      <Title>{title}:</Title>
      <MinInput
        value={minInputValue}
        onChange={handleMinInputChange}
        data-testid={`${title}-filterminmax-min-input`}
      />
      {showTo && <MinValueInfo>min: {Math.floor(minLimit)}</MinValueInfo>}
      {showTo && <To>to</To>}
      {showTo && (
        <MaxInput
          value={maxInputValue}
          onChange={handleMaxInputChange}
          data-testid={`${title}-filterminmax-max-input`}
        />
      )}
      {showTo && <MaxValueInfo>max: {Math.ceil(maxLimit)}</MaxValueInfo>}
      <ShowHideButton
        onClick={handleShowTo}
        data-testid={`${title}-filterminmax-show-hide-button`}
      >
        {!showTo && <EyeShowSVG width={11.43}></EyeShowSVG>}
        {showTo && <EyeHideSVG width={11.43}></EyeHideSVG>}
      </ShowHideButton>
    </FilterMinMaxContainer>
  );
};

FilterMinMax.propTypes = {
  title: PropTypes.string.isRequired,
  minLimit: PropTypes.number.isRequired,
  maxLimit: PropTypes.number.isRequired,
  minInputValue: PropTypes.string.isRequired,
  maxInputValue: PropTypes.string.isRequired,
  showTo: PropTypes.bool,
  minChanged: PropTypes.func.isRequired,
  maxChanged: PropTypes.func.isRequired,
  showToChanged: PropTypes.func.isRequired,
};

FilterMinMax.defaultProps = {
  showTo: true,
};

export default FilterMinMax;
