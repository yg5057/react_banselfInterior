
import React from 'react';
import styled from 'styled-components';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

// styled components
const FullcalendarWrapper = styled.section`
    .fc-toolbar-chunk { font-size: 1.5rem;}
    .fc-button { color: #0047FF; background: #CFDFF6A6; }
    .fc-button-primary { border-color: #0047FF; }
    .fc-right .fc-today-button { background-color: #0047FF; border-color: #0047FF; }
    .fc-toolbar-title { font-size: 2.8rem; color: #0047FF; }
    .fc { font-size: 1.5rem;}
    .fc-col-header { background: #CFDFF6A6; color: #121212; }
    .fc-day-sun { color: red; }
    .fc-day-sat { color: #0047FF; }
`
const CustomEventTitle = styled.div`
  font-size: 1.5rem;
  color: #121212;
  line-height: 1.5;
  .fc-event-title {
    line-height: 1.5;
  }
`;


const renderEventContent = eventInfo => (
  <CustomEventTitle color={eventInfo.event.extendedProps.color}>
    {eventInfo.event.title}
  </CustomEventTitle>
);

const Calendar = ({ events }) => (
    <FullcalendarWrapper>
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            eventContent={renderEventContent}  // 커스텀 렌더 함수 사용
        />
    </FullcalendarWrapper>
);

export default Calendar;
