import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import NavCard from '../components/cards/NavCard';
import MainTitle from '../components/titles/MainTitle';
import ImageCard from '../components/images/ImageCard';

import card_img1 from "../assets/card_img1.png"
import card_img2 from "../assets/card_img2.png"
import card_img3 from "../assets/card_img3.png"
import card_img4 from '../assets/card_img4.png'


// styled components
const HomeWrapper = styled.nav`
  width: 140rem;
  height : 100%;
  min-height: 78.75rem;  
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  gap: 2.4rem; 
`;
const CardTopWrapper = styled.section`
  display: flex; 
  flex-direction: row; 
  align-items: center; 
  justify-content: center; 
  gap: 2.4rem; 
`;
const CardTopLeftWrapper = styled.section`
  width:30rem; 
  height: 31rem; 
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  gap: 2.4rem; 
`;
const CardBottomWrapper = styled.section`
  display: flex; 
  flex-direction: row; 
  align-items: center; 
  justify-content: center; 
  gap: 2.4rem; 
`;
const CardBottomRightWrapper = styled.section`
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  gap: 2.4rem; 
`;



// Home page
const Home = () => {
  const navigate = useNavigate();
  
  const goToSelectArea = (constructionType) => {
    navigate('/select-area', { state: { constructionType } });
  };


  return (
    <HomeWrapper>
      <CardTopWrapper>
        <CardTopLeftWrapper>
          <MainTitle>
            <h1>반 - 셀프<br />인테리어<br />공정 플래너</h1>
          </MainTitle>
        </CardTopLeftWrapper>
        <NavCard onClick={() => goToSelectArea('전체 공사')} width="94.8rem" height="31rem" backgroundColor="#ffff" justifyContent="space-evenly">
          <ImageCard src={card_img1} />
          <p>전체 공사</p>
        </NavCard>
      </CardTopWrapper>
      <CardBottomWrapper>
        <NavCard onClick={() => goToSelectArea('샷시 + 내부 공사')} width="30rem" height="31rem" backgroundColor="#ffff" justifyContent="space-evenly">
          <ImageCard src={card_img2} />
          <p>샷시 + 내부 공사</p>
        </NavCard>
        <NavCard onClick={() => goToSelectArea('내부 공사')} width="30rem" height="31rem" backgroundColor="#ffff" justifyContent="space-evenly">
          <ImageCard src={card_img3} />
          <p>내부 공사</p>
        </NavCard>
        <NavCard onClick={() => goToSelectArea('욕실+주방+마감재 공사')} width="30rem" height="31rem" backgroundColor="#ffff" justifyContent="space-evenly">
          <ImageCard src={card_img4} />
          <p>욕실+주방+마감재 공사</p>
        </NavCard>
        <CardBottomRightWrapper>
          <NavCard onClick={() => goToSelectArea('마감재 공사')} width="30rem" height="14.3rem" backgroundColor="#0047FF" justifyContent="flex-end" color="#ffff">
            <p>마감재 공사</p>
          </NavCard>
          <NavCard onClick={() => goToSelectArea('도배 + 장판 공사')} width="30rem" height="14.3rem" backgroundColor="#0047FF" justifyContent="flex-end" color="#ffff">
            <p>도배 + 장판 공사</p>
          </NavCard>
        </CardBottomRightWrapper>
      </CardBottomWrapper>
    </HomeWrapper>
  );
};

export default Home;