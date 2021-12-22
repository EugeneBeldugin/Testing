export const SHOWN_POPUP = 'SHOWN_POPUP'

export const shownPopup = () => {
   return {
      type: SHOWN_POPUP,
   }
}

export const HIDEN_POPUP = 'HIDEN_POPUP'

export const hidenPopup = () => {
   return {
      type: HIDEN_POPUP,
   }
}

export const ADDED_DAY = 'ADDED_DAY'

export const addedDay = (day) => {
   return {
      type: ADDED_DAY,
      payload: day
   }
}