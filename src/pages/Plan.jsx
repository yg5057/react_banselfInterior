import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import PlanConts from '../contents/PlanConts';
import BtnHome from '../components/buttons/BtnHome';


// styled components
const PlanWrapper = styled.section`
  height: 100vh; 
  width: 100%;
  padding: 5rem 10rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5rem;
  overflow: auto; 
`;
const PlanContsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1; 
  box-sizing: border-box;
`;

// Plan page
const Plan = () => {
  const navigate = useNavigate();
  const goToHome = () => { navigate('/'); };

  return (
    <PlanWrapper>
      <PlanContsWrapper>
        <PlanConts />
      </PlanContsWrapper>
      <BtnHome onClick={goToHome}>Home</BtnHome>
    </PlanWrapper>
  );
};

export default Plan;
