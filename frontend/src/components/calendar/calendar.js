// import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';

//https://github.com/onursimsek94/react-big-calendar/blob/master/examples/events.js
//https://intljusticemission.github.io/react-big-calendar/examples/index.html#selectable
//https://codesandbox.io/s/k0k86zwmmr
//https://stackoverflow.com/questions/39578533/create-events-in-react-big-calendar

/*<DayPicker />*/

import React, {Component} from 'react';

import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

const events = [
    {
        'title': 'Birthday Party',
        'bgColor': '#afeeee',
        'start':new Date(2019, 2, 26, 7, 0, 0),
        'end': new Date(2019, 2, 26, 10, 30, 0)
    },
];

const Calendar = props => (
    <div>
        <BigCalendar
            localizer={localizer}
            events={events}
            onSelectEvent={event => alert(event.title)}
            startAccessor="start"
            endAccessor="end"
        />
    </div>
)

export default Calendar;
