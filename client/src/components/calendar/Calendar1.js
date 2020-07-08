
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
// import { PromiseProvider } from 'mongoose';

function Calendar1(props) {
   
  return (
    <Calendar
      onChange={e => props.setCalendar(e)}
      value={props.calendar}
    />
  );
}

export default Calendar1;