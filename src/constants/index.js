import { getISODate } from '../utils'

export const HOME_PATH = '/'
export const HOTELS_PATH = '/hotels'

export const IS_SIGNED_IN = 'IS_SIGNED_IN'

export const STARS_FILTER = 'stars'
export const PRICE_FILTER = 'price'
export const DEFAULT_LOCATION = 'Москва'

export const TODAY = getISODate(new Date())
export const ONE_DAY = 86400000

export const MONTHS = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
]
