import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import HairSVG from './../../svg/hair.svg';

const HairIcon = styled(HairSVG)`
  path {
    stroke: ${(props) => props.strokecolor};
    fill: ${(props) => props.color};
  }
`;

const ColoredHair = ({ color, strokecolor, width, height }) => {
  return (
    <HairIcon
      color={color}
      strokecolor={strokecolor}
      width={width}
      height={height}
    />
  );
};

ColoredHair.propTypes = {
  color: PropTypes.string,
  strokecolor: PropTypes.string,
  width: PropTypes.number,
};

ColoredHair.defaultProps = {
  strokecolor: 'rgba(0,0,0,0)',
  color: '#000',
};

export default ColoredHair;
