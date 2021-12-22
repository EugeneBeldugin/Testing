import React from 'react'
import { useDispatch } from 'react-redux'
import { addedDay } from '../../../redux/actions'
import { SHOWN_POPUP } from '../../../redux/actions'


const CalendarMain = ({ calendar, currentDay, startPoint }) => {
   const dispatch = useDispatch()

   const handleShowDate = (day) => {
      dispatch(addedDay(day))
      dispatch({ type: SHOWN_POPUP })
   }

   return (
      <div className='calendar__element'>
         {
            calendar.map((day) => {
               return <div
                  key={day.format('YYYYMMDD')}
                  onClick={() => { handleShowDate(day) }}
                  className={
                     currentDay.isSame(day, 'day') ?
                        'calendar__day calendar__day--current' :
                        !startPoint.isSame(day, 'month') ?
                           'calendar__day calendar__day--disabled' :
                           'calendar__day'
                  }
               >
                  {day.format('DD')}
               </div>
            })
         }
      </div>
   )
}

export default CalendarMain
