import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import CustomDate from '../components/Input/CustomDate';
import Calendar from '../components/Calendar';
import Table from '../components/Table';
import SubTitle from '../components/titles/SubTitle';
import HighlightTitle from '../components/titles/HighlightTitle';
import NoticeText from '../components/titles/\bNoticeText';


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
  const location = useLocation();
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(''); // 시작 날짜 상태 추가
  const [modifiedData, setModifiedData] = useState([]); // 변경된 데이터 상태 추가
  const [constructionType, setConstructionType] = useState('');
  const [area, setArea] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('type');
    const area = queryParams.get('area');
    setConstructionType(type);
    setArea(area);

    const fileMapping = {
      '전체공사': {
        '15-19': '01.xlsx',
        '20-24': '02.xlsx',
        '25-29': '03.xlsx',
        '30-34': '04.xlsx',
        '35-39': '05.xlsx',
        '40-49': '06.xlsx',
        '50': '07.xlsx',
      },
      '샷시/내부공사': {
        '15-19': '08.xlsx',
        '20-24': '09.xlsx',
        '25-29': '10.xlsx',
        '30-34': '11.xlsx',
        '35-39': '12.xlsx',
        '40-49': '13.xlsx',
        '50': '14.xlsx',
      },
      '내부공사': {
        '15-19': '15.xlsx',
        '20-24': '16.xlsx',
        '25-29': '17.xlsx',
        '30-34': '18.xlsx',
        '35-39': '19.xlsx',
        '40-49': '20.xlsx',
        '50': '21.xlsx',
      },
      '욕실/주방/마감재 공사': {
        '15-19': '22.xlsx',
        '20-24': '23.xlsx',
        '25-29': '24.xlsx',
        '30-34': '25.xlsx',
        '35-39': '26.xlsx',
        '40-49': '27.xlsx',
        '50': '28.xlsx',
      },
      '마감재 공사': {
        '15-19': '29.xlsx',
        '20-24': '30.xlsx',
        '25-29': '31.xlsx',
        '30-34': '32.xlsx',
        '35-39': '33.xlsx',
        '40-49': '34.xlsx',
        '50': '35.xlsx',
      },
      '도배/장판 공사': {
        '15-19': '36.xlsx',
        '20-24': '37.xlsx',
        '25-29': '38.xlsx',
        '30-34': '39.xlsx',
        '35-39': '40.xlsx',
        '40-49': '41.xlsx',
        '50': '42.xlsx',
      },
    };

    const fileName = fileMapping[type]?.[area];

    if (fileName) {
      fetch(`./data/${fileName}`)
        .then(response => response.arrayBuffer())
        .then(buffer => {
          const workbook = XLSX.read(buffer, { type: 'buffer' });
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          setData(jsonData);
        });
    }
  }, [location.search]);

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

  const events = modifiedData.map((row, index) => {
    const start = row['공사 기간'].split(' ~ ')[0];
    const end = row['공사 기간'].split(' ~ ')[1];
    const endDate = new Date(end);
    endDate.setDate(endDate.getDate() + 1); // 종료 날짜를 하루 더함
    return {
      title: row['시공 개요'],
      start,
      end: endDate.toISOString().slice(0, 10),
      color: colors[index % colors.length],
    };
  });

  return (
    <PlanContsWrapper>
      <PlanSectionWrapper>
        <PlanTableWrapper>
          <PlanTitleWrapper>
            <HighlightTitle>{constructionType}</HighlightTitle>
            <SubTitle>공사 계획표</SubTitle>
          </PlanTitleWrapper>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <CustomDate startDate={startDate} handleStartDateChange={handleStartDateChange} />
            <NoticeText color='#E24242'>* 공사 계획표의 내용은 드래그하여 복사할 수 있습니다, 엑셀에 붙여 넣어 사용해 보세요.</NoticeText>
          </div>
          <Table data={modifiedData} />
        </PlanTableWrapper>
      </PlanSectionWrapper>
      <DividingLine />
      <PlanSectionWrapper>
        <PlanTitleWrapper>
          <HighlightTitle>{constructionType}</HighlightTitle>
          <SubTitle>공사 일정표</SubTitle>
        </PlanTitleWrapper>
        <Calendar events={events} />
      </PlanSectionWrapper>
    </PlanContsWrapper>
  );
};

export default PlanConts;
