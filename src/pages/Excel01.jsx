// import React, { useEffect, useState } from 'react';
// import * as XLSX from 'xlsx';

// function Excel01() {
//     const [data, setData] = useState([]);
//     const [startDate, setStartDate] = useState(""); // 시작 날짜 상태 추가

//     useEffect(() => {
//         fetch('./data/02.xlsx')
//             .then(response => response.arrayBuffer())
//             .then(buffer => {
//                 const workbook = XLSX.read(buffer, { type: 'buffer' });
//                 const worksheet = workbook.Sheets[workbook.SheetNames[0]];
//                 const jsonData = XLSX.utils.sheet_to_json(worksheet);
//                 setData(jsonData);
//             });
//     }, []);

//     // 시작 날짜 변경 핸들러
//     const handleStartDateChange = (event) => {
//         setStartDate(event.target.value);
//     };

//     return (
//         <div>
//             {/* 시작 날짜 입력 폼 */}
//             <label htmlFor="start-date">시작 날짜:</label>
//             <input type="date" id="start-date" value={startDate} onChange={handleStartDateChange} />

//             {/* 데이터 테이블 */}
//             <table>
//                 <thead>
//                     <tr>
//                         {data[0] && Object.keys(data[0]).map(key => <th key={key}>{key}</th>)}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((row, index) => (
//                         <tr key={index}>
//                             {Object.entries(row).map(([key, value], i) => (
//                                 <td key={i}>
//                                     {key === "공사 기간" && startDate ? getModifiedPeriod(value, startDate) :
//                                         (typeof value === 'string' ? value.split('\n').map((line, index) => <span key={index}>{line}<br /></span>) : value)}
//                                 </td>
//                             ))}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );

//     // 시작 날짜를 기준으로 변경된 공사 기간을 계산하는 함수
//     function getModifiedPeriod(period, startDate) {
//         const [startOffset, endOffset] = period.split(", ").map(Number);
//         const startDateObj = new Date(startDate);
//         const newStartDate = new Date(startDateObj);
//         const newEndDate = new Date(startDateObj);
//         newStartDate.setDate(newStartDate.getDate() + startOffset); // 시작 날짜에 오프셋을 더함
//         newEndDate.setDate(newEndDate.getDate() + startOffset + endOffset); // 종료 날짜에는 시작 날짜와 오프셋을 더한 후 더한 값만큼을 더함
//         return `${newStartDate.toISOString().slice(0, 10)} ~ ${newEndDate.toISOString().slice(0, 10)}`;
//     }
// }

// export default Excel01;


import React, { useEffect, useState } from 'react';

import * as XLSX from 'xlsx';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import Table from "../components/Table";


function Excel01() {
    const [data, setData] = useState([]);
    const [startDate, setStartDate] = useState(""); // 시작 날짜 상태 추가
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

    console.log("data : ", data);
    console.log("modifiedData : ", modifiedData);

    // 시작 날짜 변경 핸들러
    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
        updateModifiedData(event.target.value); // 변경된 데이터 업데이트
    };

    // 변경된 데이터 업데이트 함수
    const updateModifiedData = (startDate) => {
        const modified = data.map(row => {
            const modifiedRow = { ...row };
            if (row["공사 기간"] && startDate) {
                modifiedRow["공사 기간"] = getModifiedPeriod(row["공사 기간"], startDate);
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
        const [startOffset, endOffset] = period.split(", ").map(Number);
        const startDateObj = new Date(startDate);
        const newStartDate = addDaysExcludingWeekends(new Date(startDateObj), startOffset);
        const newEndDate = addDaysExcludingWeekends(new Date(newStartDate), endOffset);
        return `${newStartDate.toISOString().slice(0, 10)} ~ ${newEndDate.toISOString().slice(0, 10)}`;
    };

      // 풀캘린더에 표시할 이벤트 배열 생성
      const events = modifiedData.map(row => ({
        title: row["시공 개요"], // 시공 개요를 이벤트 타이틀로 사용
        start: row["공사 기간"].split(" ~ ")[0], // 시작 날짜를 이벤트 시작 날짜로 사용
        end: row["공사 기간"].split(" ~ ")[1], // 종료 날짜를 이벤트 종료 날짜로 사용
    }));

    return (
        <div style={{with: '140rem', height: '100%', padding: '10rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center'}}>
            {/* 시작 날짜 입력 폼 */}
            <input type="date" id="start-date" value={startDate} onChange={handleStartDateChange} />
            <label htmlFor="start-date">공사 시작 일자를 알려주세요 :<p>{startDate}</p></label>


            {/* 변경된 데이터 테이블 */}
            {/* <table>
                <thead>
                    <tr>
                        {modifiedData[0] && Object.keys(modifiedData[0]).map(key => <th key={key}>{key}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {modifiedData.map((row, index) => (
                        <tr key={index}>
                            {Object.entries(row).map(([key, value], i) => (
                                <td key={i}>
                                    {typeof value === 'string' ? value.split('\n').map((line, index) => <span key={index}>{line}<br /></span>) : value}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table> */}
              <Table data={modifiedData} />

            {/* 풀캘린더 */}
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={events}
            />

        </div>
    );
}

export default Excel01;
