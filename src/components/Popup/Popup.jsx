import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { HIDEN_POPUP } from '../../redux/actions'

const Popup = () => {
   const dayToShow = useSelector(state => state.dayToShow)
   const dispatch = useDispatch()
   
   const handleClose = () => {
      dispatch({type: HIDEN_POPUP})
   }

   return (
      <div onClick={handleClose} className='popup-background'>
         <div onClick={e => e.stopPropagation()} className='popup'>
            <div>
               <h3 className='popup__title'>Month</h3>
               <div className='popup__input'>{dayToShow?.format('MMMM')}</div>
            </div>
            <div>
               <h3 className='popup__title'>Day</h3>
               <div className='popup__input'>{dayToShow?.format('Do')} {dayToShow?.format('dddd')}</div>
            </div>
            <button onClick={handleClose} className='popup__close-btn'>×</button>
         </div>
      </div>
   )
}

export default Popup
