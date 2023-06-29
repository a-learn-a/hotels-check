import { MONTHS } from '../constants'

export const getISODate = (date) => {
  return date.toISOString().split('T')[0]
}

export const getFormattedDate = (date) => {
  return `${new Date(date).getDate()} ${
    MONTHS[new Date(date).getMonth()]
  } ${new Date(date).getFullYear()}`
}

export const sortHelper = (arr, filter, isIncreasing) => {
  isIncreasing
    ? arr.sort((a, b) => {
        if (a[filter] > b[filter]) {
          return 1
        }
        if (a[filter] < b[filter]) {
          return -1
        }
        return 0
      })
    : arr.sort((a, b) => {
        if (a[filter] > b[filter]) {
          return -1
        }
        if (a[filter] < b[filter]) {
          return 1
        }
        return 0
      })
  return arr
}
