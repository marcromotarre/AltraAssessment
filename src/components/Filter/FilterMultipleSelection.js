import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FilterMultipleSelectionContainer = styled.section`
  width: 100%;
  display: flex;
`;

const Title = styled.label`
  grid-area: m-title;
  font-family: 'HelveticaNeue-Thin';
  color: #000;
  font-size: 14px;
  white-space: nowrap;
  padding-right: 10px;
`;

const Elements = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FilterMultipleSelection = ({ title, children, clickOnElement }) => {
  const handleClickOnChild = (event) => {
    clickOnElement(event.currentTarget.id);
  };

  return (
    <FilterMultipleSelectionContainer>
      <Title>{title}:</Title>
      <Elements>
        {children.map((child, index) => (
          <button
            data-testid={`${title}-button-${index}`}
            id={index}
            key={index}
            onClick={handleClickOnChild}
          >
            {child}
          </button>
        ))}
      </Elements>
    </FilterMultipleSelectionContainer>
  );
};

FilterMultipleSelection.propTypes = {
  title: PropTypes.string.isRequired,
  clickOnElement: PropTypes.func,
};

FilterMultipleSelection.defaultProps = {
  clickOnElement: () => {},
};

export default FilterMultipleSelection;
