import React from 'react';
import styled from 'styled-components';


const StyledCard = styled.div.attrs(props => ({
  style: {
      backgroundColor: props.backgroundColor || 'auto',
      justifyContent: props.justifyContent || 'auto',
      alignContent: props.alignContent || 'auto',
  },
}))`
  width: 45.75rem;
  height: 57.6rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 5px 5px 50px 3px #DEDEDECC;
`;

const CardMidium = ({ children, backgroundColor, justifyContent, alignContent }) => {
    return (
      <StyledCard backgroundColor={backgroundColor} justifyContent={justifyContent} alignContent={alignContent}>
        {children}
      </StyledCard>
    );
  };

export default CardMidium;
