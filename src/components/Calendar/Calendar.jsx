import React, { useEffect, useState } from 'react'
import moment from 'moment'
import CalendarHeader from './calendar-components/CalendarHeader'
import CalendarMain from './calendar-components/CalendarMain'
import CalendarFooter from './calendar-components/CalendarFooter'

const Calendar = () => {
   const [startPoint, setStartPoint] = useState(moment())
   const [calendar, setCalendar] = useState([])
   const [currentDay, setCurrentDay] = useState(null)

   useEffect(() => {
      setCurrentDay(moment())
      const startCalendarDay = startPoint.clone().startOf('month').startOf('week')
      const endCalendarDay = startPoint.clone().endOf('month').endOf('week')

      const calendar = []
      const day = startCalendarDay.clone()

      while (!day.isAfter(endCalendarDay)) {
         calendar.push(day.clone())
         day.add(1, 'day')
      }

      setCalendar(calendar)
   }, [startPoint])

   const prevHendler = () => {
      setStartPoint(prev => prev.clone().subtract(1, 'month'))
   }

   const nextHendler = () => {
      setStartPoint(prev => prev.clone().add(1, 'month'))
   }

   return (
      <div className='calendar'>
         <CalendarHeader
            month={startPoint?.format('MMMM').toUpperCase()}
            year={startPoint?.format('YYYY')}
            onPrevBtnClick={prevHendler}
            onNextBtnClick={nextHendler}
         />
         <CalendarMain
            calendar={calendar}
            currentDay={currentDay}
            startPoint={startPoint}
         />
         <CalendarFooter />
      </div>
   )
}

export default Calendar
