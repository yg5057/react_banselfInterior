import React from 'react';
import styled from 'styled-components';


//styled components
const StyledCardImage = styled.img`
  width: 90%;
  height: 90%;
  object-fit: contain;
  transition: transform 0.3s ease-in-out; 
  &:hover {
    transform: translateY(-12px); 
  }
`;

const ImageCard = ({ children, src }) => {
  return (
    <StyledCardImage src={src}>
      {children}
    </StyledCardImage>
  );
};

export default ImageCard;