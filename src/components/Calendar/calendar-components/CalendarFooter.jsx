import React from 'react'
import moment from 'moment'

const CalendarFooter = () => {
   return (
      <div className='calendar__element'>
         {
            [...Array(7)].map(
               (_, index) => {
                  return <div key={index} className='calendar__day calendar__name-day'>{moment().day(index).format('ddd').substring(0, 1)}</div>
               }
            )
         }
      </div>
   )
}

export default CalendarFooter
