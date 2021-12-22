import React from 'react'
import Calendar from '../Calendar/Calendar'
import Popup from '../Popup/Popup'
import { useSelector } from 'react-redux'


const Home = () => {
   const showPopup = useSelector(state => state.showPopup)

   return (
      <div className='home'>
         { showPopup && <Popup /> }
         <div className='home__text-wrapper'>
            <h2 className='home__title'>CHOOSE THE DAY<br/> FOR THE MEETING</h2>
            <p className='home__subtitle'>We encourage you to book your<br/> appointment online.<br/> This will save you time.</p>
         </div>
         <div className='home__calendar-wrapper'>
            <Calendar />
         </div>
      </div>
   )
}

export default Home
