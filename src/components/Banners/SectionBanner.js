import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

import HomeSVG from './../../svg/backHome.svg';

export const Banner = styled.div`
  background: white;
  height: 72px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;

  svg {
    padding-left: 15px;
  }
`;

const SectionBanner = () => {
  return (
    <Banner>
      <Link to={`/`}>
        <HomeSVG width={25} />
      </Link>
    </Banner>
  );
};

export default SectionBanner;
