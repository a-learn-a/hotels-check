import { TODAY, ONE_DAY, DEFAULT_LOCATION } from '../constants'
import { getFormattedDate, getISODate } from '../utils'

const defaultState = {
  location: DEFAULT_LOCATION,
  dateStart: TODAY,
  dateEnd: getISODate(
    new Date(new Date().getTime() + ONE_DAY),
  ),
  daysAmount: 1,
  hotels: [],
  formattedDate: getFormattedDate(TODAY),
}

export const SET_HOTELS = 'SET_HOTELS'
export const ASYNC_SET_HOTELS = 'ASYNC_SET_HOTELS'

export default function hotelsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_HOTELS:
      return { ...state, ...action.payload }
  }
  return state
}

export const setHotelsCreator = (payload) => ({ type: SET_HOTELS, payload })
export const asyncSetHotelsCreator = (payload) => ({
  type: ASYNC_SET_HOTELS,
  payload,
})

