import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CardLarge from '../components/cards/CardLage';
import CardMidium from '../components/cards/CardMidium';
import SubTitle from '../components/titles/SubTitle';
import BtnHome from '../components/buttons/BtnHome';
import SelectOptionConts from '../contents/SelectOptionConts';
import ImageCardLarge from '../components/images/ImageCardLarge';

import mainTitle_icon from "../assets/mainTitle_icon.png"
import selectarea_img from "../assets/selectarea_img.png"


// styled components
const SelectAreaWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`
const CardContentsWrapper = styled.section`
  width: 100%; 
  height: 100%;
  padding: 2rem; 
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
`;

const CardLeft = styled.div`
  width: 45.75rem; 
  height: 57.6rem; 
  display: flex; 
  flex-direction: column; 
  padding: 2rem; 
  border-radius: 15px; 
`;

// SelectArea Page
const SelectArea = () => {
  const navigate = useNavigate();
  const goToHome = () => { navigate('/'); };

  return (
    <SelectAreaWrapper>
      <CardContentsWrapper>
      <CardLarge>
        <CardLeft>
          <div>
            <img src={mainTitle_icon} style={{ marginBottom: '.8rem' }} />
            <SubTitle color='#0047FF'>전체 공사</SubTitle>
          </div>
          <ImageCardLarge src={selectarea_img} />
        </CardLeft>
        <CardMidium justifyContent='center' alignContent='center' backgroundColor="#CFDFF6A6">
          <SelectOptionConts />
        </CardMidium>
      </CardLarge>
      </CardContentsWrapper>
      <section style={{ width: '100%', display: 'flex', justifyContent: "left"}}>
        <BtnHome onClick={goToHome}>Home</BtnHome>
      </section>
    </SelectAreaWrapper>
  );
};

export default SelectArea;
