import React from 'react';
import styled from '@emotion/styled';
import OFcstWater from '../Organisms/OFcstWater';
import OFcstWave from '../Organisms/OFcstWave';

const TemplateRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap-reverse;
  @media (max-width: ${props => props.theme.deviceSizes.mobileSE}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const TmplWater = () => {
  return (
    <TemplateRight>
      <OFcstWater />
      <OFcstWave />
    </TemplateRight>
  );
};

export default TmplWater;