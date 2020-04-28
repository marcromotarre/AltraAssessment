import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const SectionTitleContainer = styled.section`
  display: grid;
  grid-template-columns: 25px auto 24px 10px;
  grid-template-areas: '. m-name m-number .';
`;
export const SectionName = styled.section`
  grid-area: m-name;
  display: flex;
  justify-content: start;
  align-items: center;

  label {
    font-family: 'HelveticaNeue-Thin';
    color: #000;
    font-size: 16px;
    padding-left: 10px;
  }
`;
export const SectionNumber = styled.label`
  grid-area: m-number;
  width: 24px;
  height: 24px;
  background-color: #919191;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  label {
    font-family: 'HelveticaNeue-Thin';
    color: #ffffff;
    font-size: 16px;
  }
`;

const SectionTitle = ({ name, children, number }) => {
  return (
    <SectionTitleContainer>
      <SectionName>
        {children}
        <label>{name}</label>
      </SectionName>
      <SectionNumber>
        <label>{number}</label>
      </SectionNumber>
    </SectionTitleContainer>
  );
};

SectionTitle.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default SectionTitle;
