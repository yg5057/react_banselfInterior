import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import landing_icon from '../assets/landing_icon.png';
import LandingTitleSmall from '../components/titles/LandingTitleSmall';
import LandingTitleMidium from '../components/titles/LandingTitleMidium';

import landing_img01 from '../assets/landing_img01.png'
import landing_img02 from '../assets/landing_img02.png'

// styled components
const LandingConts02Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10rem;

`;
const LandingTitleWrapper = styled.div`
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


// SelectOptionConts
const LandingConts02 = () => {
    const navigate = useNavigate();
    const goToHome = () => { navigate('/home'); };

    return (
        <LandingConts02Wrapper>
            <LandingTitleWrapper>
                <LandingIconWrapper>
                    <img src={landing_icon} style={{ width: '92px', height: '16px' }} alt="Landing Icon" />
                    <LandingTitleSmall>아파트 평수, 공사날짜만 입력해도 계획표와 일정표가!</LandingTitleSmall>
                </LandingIconWrapper>
                <LandingTitleMidium>철거? 전기? 조명?</LandingTitleMidium>
                <LandingTitleMidium>어디서부터 공사계획을 세워야할지 너무 막막하시죠?</LandingTitleMidium>
                <LandingTitleMidium>클릭 2번이면 자동완성되는 <span style={{color:'#0047FF'}}>반셀프</span> 인테리어 플래너가 <span style={{color:'#0047FF'}}>도와드릴게요!</span></LandingTitleMidium>
            </LandingTitleWrapper>
            <img src={landing_img01} alt="Landing Img" />
  
        </LandingConts02Wrapper>

    );
};

export default LandingConts02;
