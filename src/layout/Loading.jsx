import React from 'react';
import styled, { keyframes } from 'styled-components';

import loading_icon from '../assets/loading_icon.png';


const LoadingContent = styled.main`
 display: flex; 
 justify-content: center; 
 align-items: center; 
 gap: 4.5rem;
 background: linear-gradient(252.17deg, #F8F9FB 0%, #DBE5FA 83.16%, #C8D9F9 100%);
 font-family: Krona One;
 font-size: 4.8rem;
 font-weight: 400;
 line-height: 60px;
 text-align: center;
`;
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const ImageContent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: ${rotateAnimation} 2s linear infinite;
`

const Loading = () => {
  return (
    <LoadingContent>
      <ImageContent src={loading_icon}></ImageContent>
      Loading
    </LoadingContent>
  );
};

export default Loading;