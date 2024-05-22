import React from 'react';
import styled from 'styled-components';


const MainContent = styled.main`
 width: 100vw;
 height: 100vh;
 margin: 0 auto;
 display: flex; 
 justify-content: center; 
 align-items: center; 
 background: #F8F9FB;  
 `;

const MainLayout = ({ children }) => {
  return (
    <section>
      <MainContent>{children}</MainContent>
    </section>
  );
};

export default MainLayout;