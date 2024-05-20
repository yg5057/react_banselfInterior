
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

const Calendar = ({ events }) => (
    <FullcalendarWrapper>
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
        />
    </FullcalendarWrapper>
);

export default Calendar;
