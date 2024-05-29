import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import PlanConts from '../contents/PlanConts';
import BtnHome from '../components/buttons/BtnHome';
import Modal from '../components/modals/modal';


// styled components
const PlanWrapper = styled.section`
  height: 100vh; 
  width: 100%;
  max-width: 140rem;
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
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const goToHome = () => { navigate('/home'); };
  const openModal = () => { setModalOpen(true); };
  const closeModal = () => { setModalOpen(false); };
  const openExternalURL = () => {  window.open('https://walla.my/survey/zXona2Te5JbfUDOB9cjH', '_blank'); };

  return (
    <PlanWrapper>
      <PlanContsWrapper>
        <PlanConts />
      </PlanContsWrapper>
      <BtnHome onClick={openModal}>Home</BtnHome>
      {isModalOpen && (
        <Modal 
        onClose={closeModal}
          goToHome={goToHome} 
          openExternalURL={openExternalURL}
        />
      )}
    </PlanWrapper>
  );
};

export default Plan;
