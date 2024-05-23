import React from'react';
import styled from 'styled-components';
import homePageImage from '../images/home_page_image_web.png';

const BodyImage = () => {
  return (
    <BodyImageContent>
      <CenteredText>日本在地泡泡浴領路人</CenteredText>
      <StyledBodyImage src={homePageImage} />
    </BodyImageContent>
  );
};

const StyledBodyImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const BodyImageContent = styled.div`
  position: relative;
  display: flex;
  max-height: 25vh;
  width: 100%;
`;

const CenteredText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: black;
  font-size: 24px;
`;


export default BodyImage;