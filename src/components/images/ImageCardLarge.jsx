import React from 'react';
import styled, { keyframes } from 'styled-components';

// keyframes를 사용하여 확대 및 축소 애니메이션 정의
const zoom = keyframes`
  0% {
    transform: translateY(-12px) scale(1);
  }
  50% {
    transform: translateY(-12px) scale(1.05);
  }
  100% {
    transform: translateY(-12px) scale(1);
  }
`;

// styled components
const StyledCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
  animation: ${zoom} 3s infinite ease-in-out; // 확대 및 축소 애니메이션 추가
`;

const ImageCardLarge = ({ src }) => {
  return <StyledCardImage src={src} />;
};

export default ImageCardLarge;
