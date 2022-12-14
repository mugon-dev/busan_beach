import React from 'react';
import styled from '@emotion/styled';
import InfoOther from '$components/Molecules/InfoOther';
import { useGetOceanData } from '$queries/useGetOceanData';

const WrapMolecules = styled.div`
  width: 13.5em;
  padding: 0.8em;
  margin-bottom: 1em;
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  @media (max-width: ${props => props.theme.deviceSizes.mobile13P}) {
    width: 48%;
    flex-direction: column;
  }
`;

const OFcstWind = ({ oceanCode }: { oceanCode: string }) => {
  const { data: wind } = useGetOceanData(oceanCode);
  return (
    <WrapMolecules>
      <InfoOther
        info={{
          icon: 'WIND',
          title: wind?.result.data[0].wind_direct == undefined ? '남동' : wind?.result.data[0].wind_direct,
          content: wind?.result.data[0].wind_speed == undefined ? '3.8m/s' : wind?.result.data[0].wind_speed + 'm/s',
        }}
      />
    </WrapMolecules>
  );
};

export default OFcstWind;
