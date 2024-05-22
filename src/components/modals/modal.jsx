import React from 'react';
import styled from 'styled-components';

import BtnRequest from '../buttons/BtnRequest';
import starbucks from '../../assets/starbucks.png';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh; 
  width: 100%;
  background: rgba(0, 0, 0, 0.5); // 딤 레이어
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
const ModalContent = styled.div`
  position: relative;
  max-width: 60rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  background: #fff;
  padding: 4rem;
  border-radius: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;
const CloseSvg = styled.svg`
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
`;
const ModalContentH2 = styled.h2`
    font-family: Pretendard;
    font-size: 4rem;
    font-weight: 800;
    line-height: 47.73px;
    text-align: center;
    color: #0047FF;
    margin-bottom: 1rem;
`;
const ModalContentP = styled.p`
    font-family: Pretendard;
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 28.64px;
    text-align: center;
    color: #121212;
`;
const ModalContentImg = styled.img`
    width: 15rem;
    height: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
`;


const Modal = ({ onClose, goToHome, openExternalURL }) => (
    <ModalWrapper onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalContentH2>
                잠깐!
                <CloseSvg onClick={onClose} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L29 29M1 29L29 1" stroke="#797979" stroke-width="2" />
                </CloseSvg>
            </ModalContentH2>
            <ModalContentP>
                방금 이용하셨던<br />
                간편한 공사계획표 작성 서비스에 대해<br />
                <span style={{ color: '#0047FF' }}>딱 1분</span> 정도만 시간을 내주실래요?
            </ModalContentP>
            <ModalContentP>
                지금도 힘들어하고 있을<br />
                <span style={{ color: '#0047FF' }}>반셀프 인테리어 소비자들을 위해!</span><br />
                앞으로 도전할<br />
                <span style={{ color: '#0047FF' }}>반셀프 인테리어 소비자들을 위해!</span><br />
            </ModalContentP>
            <ModalContentP>
                당신의 소중한 시간을 내주시면<br />
                <span style={{ color: '#0047FF' }}>스타벅스 아메리카노 쿠폰</span>을 드릴게요
            </ModalContentP>
            <ModalContentImg src={starbucks} />
            <BtnRequest onClick={openExternalURL}>설문조사 참여하기</BtnRequest>
            <BtnRequest onClick={goToHome}>홈으로 돌아가기</BtnRequest>
        </ModalContent>
    </ModalWrapper>
);

export default Modal;
