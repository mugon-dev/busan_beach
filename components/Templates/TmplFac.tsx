import React from 'react';
import styled from '@emotion/styled';
import OFacParking from '$components/Organisms/OFacParking';
import OFacBooth from '$components/Organisms/OFacBooth';
import OFacShower from '$components/Organisms/OFacShower';
import OFacSwim from '$components/Organisms/OFacSwim';
import OFacLifejacket from '$components/Organisms/OFacLifejacket';
import OFacParasole from '$components/Organisms/OFacParasole';
import OFacSunbed from '$components/Organisms/OFacSunbed';
import OFacTube from '$components/Organisms/OFacTube';

const TemplateCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 1.2em;
`;

const WrapTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleLine = styled.div`
  width: 54%;
  height: 1px;
  background-color: #fff;
  @media (max-width: ${props => props.theme.deviceSizes.tablet}) {
    width: 74%;
  }
  @media (max-width: ${props => props.theme.deviceSizes.mobile13P}) {
    width: 50%;
  }
`;

const TitleSection = styled.div`
  width: 10em;
  box-sizing: border-box;
  position: relative;
  font-size: 1.6em;
  font-weight: 700;
  padding: 1.2em 0;
  @media (max-width: ${props => props.theme.deviceSizes.tablet}) {
    width: 13em;
  }
  @media (max-width: ${props => props.theme.deviceSizes.mobile13P}) {
    width: 12em;
  }
`;

const TmplFac = ({
  swim,
  parking,
  booth,
  shower,
  lifejacket,
  parasole,
  sunbed,
  tube,
}: {
  swim: string;
  parking: string;
  booth: string;
  shower: string;
  lifejacket: string;
  parasole: string;
  sunbed: string;
  tube: string;
}) => {
  return (
    <TemplateCenter>
      <WrapTitle>
        <TitleSection>해수욕장 시설정보</TitleSection>
        <TitleLine />
      </WrapTitle>
      <>
        <OFacSwim swim={swim} />
        <OFacParking parking={parking} />
        <OFacBooth booth={booth} />
        <OFacShower shower={shower} />
        <OFacLifejacket lifejacket={lifejacket} />
        <OFacParasole parasole={parasole} />
        <OFacSunbed sunbed={sunbed} />
        <OFacTube tube={tube} />
      </>
    </TemplateCenter>
  );
};

export default TmplFac;