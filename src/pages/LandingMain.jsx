import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


import LandingConts from '../contents/LandingConts';


// styled components
const LandingWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: linear-gradient(107.83deg, #F8F9FB 0%, #F8F9FB 0.01%, #DBE5FA 83.16%, #C8D9F9 100%);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

// Plan page
const LandingMain = () => {
  const navigate = useNavigate();
  const goToHome = () => { navigate('/home'); };

  return (
    <LandingWrapper>
      <LandingConts />
    </LandingWrapper>
  );
};

export default LandingMain;
