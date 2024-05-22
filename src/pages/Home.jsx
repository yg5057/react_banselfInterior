import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import NavCard from '../components/cards/NavCard';
import MainTitle from '../components/titles/MainTitle';
import ImageCard from '../components/images/ImageCard';
import NoticeText from '../components/titles/\bNoticeText';

import card_img1 from "../assets/card_img1.png"
import card_img2 from "../assets/card_img2.png"
import card_img3 from "../assets/card_img3.png"
import card_img4 from '../assets/card_img4.png'


// styled components
const HomeWrapper = styled.nav`
  width: 140rem;
  /* min-height: 78.75rem;   */
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
const StyledP = styled.p`
  width: 100%;
  display: flex; 
  flex-direction: column; 
  align-items: left;  
  font-family: Pretendard;
  font-size: 2.6rem;
  font-weight: 700;
  text-align: left;
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
            <h1>30초 완성<br />반 셀프<br />인테리어 플래너</h1>
            <NoticeText>* 모바일 최적화 버전은 개발중입니다!</NoticeText>
          </MainTitle>
        </CardTopLeftWrapper>
        <NavCard onClick={() => goToSelectArea('전체공사')} width="94.8rem" height="31rem" backgroundColor="#ffff" justifyContent="space-evenly"
                 hoverTextLarge={`베란다 확장과, 샷시를 포함한 아파트 All-리모델링 공사`}
                 hoverTextSmall={`#베란다확장 #샷시 #목공 #전기 #조명 #싱크대 #욕실 완전철거 #전체필름 #도배 #바닥재`}>
          <ImageCard src={card_img1} />
          <StyledP>전체공사</StyledP>
        </NavCard>
      </CardTopWrapper>
      <CardBottomWrapper>
        <NavCard onClick={() => goToSelectArea('샷시/내부공사')} width="30rem" height="31rem" backgroundColor="#ffff" justifyContent="space-evenly"
                 hoverText={`샷시 교체와 아파트 내부 인테리어`}
                 hoverTextSmall={`#샷시 #목공 #전기 #조명 #싱크대 #욕실 완전철거 #전체필름 #도배 #바닥재`}>
          <ImageCard src={card_img2} />
          <StyledP>샷시/내부공사</StyledP>
        </NavCard>
        <NavCard onClick={() => goToSelectArea('내부공사')} width="30rem" height="31rem" backgroundColor="#ffff" justifyContent="space-evenly"
                 hoverText={`콘센트 추가, 문/문틀 교체 등 내부 인테리어`}
                 hoverTextSmall={`#목공 #전기 #조명 #싱크대 #욕실 완전철거 #전체필름 #도배 #바닥재`}>
          <ImageCard src={card_img3} />
          <StyledP>내부공사</StyledP>
        </NavCard>
        <NavCard onClick={() => goToSelectArea('욕실/주방/마감재 공사')} width="30rem" height="31rem" backgroundColor="#ffff" justifyContent="space-evenly"
                 hoverText={`욕실 전체 철거, 방수, 세면대 등 도기시공
                            과 싱크대 시공을 포함한 마감재 공사`}
                 hoverTextSmall={`#싱크대 #욕실 완전철거 #전체필름 #도배 #바닥재`}> 
          <ImageCard src={card_img4} />
          <StyledP>욕실/주방/마감재 공사</StyledP>
        </NavCard>
        <CardBottomRightWrapper>
          <NavCard onClick={() => goToSelectArea('마감재 공사')} width="30rem" height="14.3rem" backgroundColor="#0047FF" justifyContent="flex-start" color="#ffff"
                   hoverText={`도배, 마루, 타일 등 바닥재 공사와
                   전체필름 공사`}
                   hoverTextXSmall={`#전체필름 #도배 #바닥재 #욕실 타일 덧방`}> 
            <StyledP>마감재 공사</StyledP>
          </NavCard>
          <NavCard onClick={() => goToSelectArea('도배/장판 공사')} width="30rem" height="14.3rem" backgroundColor="#0047FF" justifyContent="flex-start" color="#ffff"
                   hoverText={`도배와 장판 공사`}
                   hoverTextXSmall={`#도배 #장판 #욕실 타일 덧방`}> 
            <StyledP>도배/장판 공사</StyledP>
          </NavCard>
        </CardBottomRightWrapper>
      </CardBottomWrapper>
    </HomeWrapper>
  );
};

export default Home;
