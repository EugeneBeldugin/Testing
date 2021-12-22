import React from 'react'

const CalendarHeader = ({ month, year, onPrevBtnClick, onNextBtnClick }) => {
   return (
      <div className='calendar__element'>
         <button onClick={onPrevBtnClick} className='calendar__btn'>‹</button>
         <span className='calendar__month'>{month} {year}</span>
         <button onClick={onNextBtnClick} className='calendar__btn'>›</button>
      </div>
   )
}

export default CalendarHeader
