import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import LandingTitleLarge from '../components/titles/LandingTitleLarge';
import BtnLanding from '../components/buttons/BtnLanding';
import Scroll from '../components/scroll/Scroll';
import LandingTitleSmall from '../components/titles/LandingTitleSmall';
import LandingTitleMidium from '../components/titles/LandingTitleMidium';
import LandingCard from '../components/cards/LandingCard';

import landing_icon from '../assets/landing_icon.png';
import landing_img01 from '../assets/landing_img01.png'
import landing_img02 from '../assets/landing_img02.png'




// 키프레임
const slideInFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// styled components
const LandingWrapper = styled.div`
  width: 100%;
  height: 300vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;
const LandingConts01Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  padding-top: 5rem;
  scroll-snap-align: start;
  opacity: 0;
  animation: ${slideInFromBottom} 1s forwards;
  animation-delay: ${({ delay }) => delay}s;
`;
const LandingConts02Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding: 30rem 2rem ; 
  scroll-snap-align: start;
  opacity: 0;
  animation: ${slideInFromBottom} 1s forwards; 
  animation-delay: ${({ delay }) => delay}s;
`;
const LandingConts03Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10rem; 
  scroll-snap-align: start;
  opacity: 0;
  animation: ${slideInFromBottom} 1s forwards; 
  animation-delay: ${({ delay }) => delay}s;
`;
const LandingTitleWrapper = styled.div`
    width: 130rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;
`
const LandingIconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 4rem;
`
const LandingImgWrapper = styled.section`
    width: 120rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    scroll-snap-align: start;
    opacity: 0;
   animation: ${slideInFromBottom} 1s forwards;
   animation-delay: ${({ delay }) => delay}s;
`
const StyledFreeTrial = styled.strong`
    font-family: Pretendard;
    font-size: 6.4rem;
    font-weight: 100;
    line-height: 76.38px;
    text-align: center;
    color: #FFFFFF;
`;
const StyledCardText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Pretendard;
    font-size: 5.4rem;
    font-weight: 800;
    line-height: 64.44px;
    text-align: center;
    color: #FFFFFF;
`;



// SelectOptionConts
const LandingConts = () => {
    const navigate = useNavigate();
    const goToHome = () => { navigate('/home'); };


    return (
        <LandingWrapper>
            <LandingConts01Wrapper>
                <LandingTitleLarge>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <p style={{ color: '#FF7A00' }}>클릭 2번</p>으로 완성!
                    </div>
                    반셀프 인테리어 플래너
                </LandingTitleLarge>
                <BtnLanding onClick={goToHome}>간편한 공사계획표 만들기</BtnLanding>
                <Scroll />
            </LandingConts01Wrapper>
            <LandingConts02Wrapper>
                <LandingTitleWrapper>
                    <LandingIconWrapper>
                        <img src={landing_icon} style={{ width: '92px', height: '16px' }} alt="Landing Icon" />
                        <LandingTitleSmall>아파트 평수, 공사날짜만 입력해도 계획표와 일정표가!</LandingTitleSmall>
                    </LandingIconWrapper>
                    <LandingTitleMidium>철거? 전기? 조명?</LandingTitleMidium>
                    <LandingTitleMidium>어디서부터 공사계획을 세워야할지 너무 막막하시죠?</LandingTitleMidium>
                    <LandingTitleMidium>클릭 2번이면 자동완성되는 <span style={{ color: '#0047FF' }}>반셀프</span> 인테리어 플래너가 <span style={{ color: '#0047FF' }}>도와드릴게요!</span></LandingTitleMidium>
                </LandingTitleWrapper>
                <LandingImgWrapper>
                    <img src={landing_img01} alt="Landing Img" />
                    <img src={landing_img02} alt="Landing Img" />
                </LandingImgWrapper>
            </LandingConts02Wrapper>
            <LandingConts03Wrapper>
                <LandingCard>
                    <StyledFreeTrial>Free-trial</StyledFreeTrial>
                    <StyledCardText>
                        <h1>클릭 2번으로 완성되는</h1>
                        <h1>인테리어 공사 계획표 받아보시고</h1>
                        <h1>쉽고, 즐겁게 반셀프 인테리어를 준비하세요!</h1>
                    </StyledCardText>
                    <BtnLanding onClick={goToHome} boxShadow='none'>간편한 공사계획표 만들기</BtnLanding>
                </LandingCard>
            </LandingConts03Wrapper>
        </LandingWrapper>
    );
};

export default LandingConts;
