import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import styled from 'styled-components';

import CustomDate from '../components/Input/CustomDate';
import Calendar from '../components/Calendar';
import Table from '../components/Table';
import SubTitle from '../components/titles/SubTitle';
import HighlightTitle from '../components/titles/HighlightTitle';



// styled components
const PlanContsWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8rem;
`;
const PlanSectionWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;
`;
const PlanTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.4rem;
`
const PlanTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;
`
const DividingLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #C0C0C0;
`;


// PlanConts
const PlanConts = () => {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(''); // 시작 날짜 상태 추가
  const [modifiedData, setModifiedData] = useState([]); // 변경된 데이터 상태 추가

  useEffect(() => {
    fetch('./data/02.xlsx')
      .then(response => response.arrayBuffer())
      .then(buffer => {
        const workbook = XLSX.read(buffer, { type: 'buffer' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setData(jsonData);
      });
  }, []);

  // 시작 날짜 변경 핸들러
  const handleStartDateChange = event => {
    setStartDate(event.target.value);
    updateModifiedData(event.target.value); // 변경된 데이터 업데이트
  };

  // 변경된 데이터 업데이트 함수
  const updateModifiedData = startDate => {
    const modified = data.map(row => {
      const modifiedRow = { ...row };
      if (row['공사 기간'] && startDate) {
        modifiedRow['공사 기간'] = getModifiedPeriod(row['공사 기간'], startDate);
      }
      return modifiedRow;
    });
    setModifiedData(modified);
  };

  // 주말을 제외하고 날짜를 더하는 함수
  const addDaysExcludingWeekends = (date, days) => {
    let count = 0;
    while (count < days) {
      date.setDate(date.getDate() + 1);
      if (date.getDay() !== 0 && date.getDay() !== 6) { // 0은 일요일, 6은 토요일
        count++;
      }
    }
    return date;
  };

  // 시작 날짜를 기준으로 변경된 공사 기간을 계산하는 함수
  const getModifiedPeriod = (period, startDate) => {
    const [startOffset, endOffset] = period.split(', ').map(Number);
    const startDateObj = new Date(startDate);
    const newStartDate = addDaysExcludingWeekends(new Date(startDateObj), startOffset);
    const newEndDate = addDaysExcludingWeekends(new Date(newStartDate), endOffset);
    return `${newStartDate.toISOString().slice(0, 10)} ~ ${newEndDate.toISOString().slice(0, 10)}`;
  };

  // 고정된 색상 배열
  const colors = ['#AED9E0', '#AFBDD9', '#B2D8F1', '#B2EBF2', '#B5D3E5', '#B6E2D5', '#BAD7D9', '#BADCE6', '#BBC7D1', '#BCC6E0', '#BCE5E7', '#BDE4E6', '#BED3E1', '#C0E4F9', '#C3E6CB', '#C5E1A5', '#C5E4E7', '#C6D3DE', '#C7CEEB', '#C9E3E6', '#CCE7E7', '#CFE0E1', '#CFE5FA', '#D5E5E7', '#DAE9F5', '#E0ECF6', '#E3E8F2'];

  // 풀캘린더에 표시할 이벤트 배열 생성
  const events = modifiedData.map((row, index) => ({
    title: row['시공 개요'], // 시공 개요를 이벤트 타이틀로 사용
    start: row['공사 기간'].split(' ~ ')[0], // 시작 날짜를 이벤트 시작 날짜로 사용
    end: row['공사 기간'].split(' ~ ')[1], // 종료 날짜를 이벤트 종료 날짜로 사용
    color: colors[index % colors.length], // 고정된 색상 배열에서 순서대로 색상 할당
    textColor: '#021034',
  }));

  return (
    <PlanContsWrapper>
      <PlanSectionWrapper>
        <PlanTableWrapper>
          <PlanTitleWrapper>
            <HighlightTitle>전체공사</HighlightTitle>
            <SubTitle>공사 계획표</SubTitle>
          </PlanTitleWrapper>
          <CustomDate startDate={startDate} handleStartDateChange={handleStartDateChange} />
          <Table data={modifiedData} />
        </PlanTableWrapper>
      </PlanSectionWrapper>
      <DividingLine />
      <PlanSectionWrapper>
        <PlanTitleWrapper>
          <HighlightTitle>전체공사</HighlightTitle>
          <SubTitle>공사 일정표</SubTitle>
        </PlanTitleWrapper>
        <Calendar events={events} />
      </PlanSectionWrapper>
    </PlanContsWrapper>
  );
};

export default PlanConts;
