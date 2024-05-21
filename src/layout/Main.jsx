import React from 'react';
import styled from 'styled-components';


const MainContent = styled.main`
 width: 140rem;
 margin: 0 auto;
 display: flex; 
 justify-content: center; 
 align-items: center; 
 background: #F8F9FB;  
 padding: 2rem; `;

const MainLayout = ({ children }) => {
  return (
    <div>
      <MainContent>{children}</MainContent>
    </div>
  );
};

export default MainLayout;