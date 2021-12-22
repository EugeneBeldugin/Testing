import { SHOWN_POPUP } from './actions'
import { HIDEN_POPUP } from './actions'
import { ADDED_DAY } from './actions'

const initialState = {
   showPopup: false,
   dayToShow: null,
}

export const reducer = (state = initialState, action) => {
   switch (action.type) {
      case SHOWN_POPUP:
         return {
            ...state,
            showPopup: true
         }
      case HIDEN_POPUP:
         return {
            ...state,
            showPopup: false,
            dayToShow: null
         }
      case ADDED_DAY: 
         return {
            ...state,
            dayToShow: action.payload
         }

      default:
         return state
   }
}