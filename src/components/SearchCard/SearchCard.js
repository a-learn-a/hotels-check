import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { Input, Button } from '../../ui'

import { text } from '../../data'
import { TODAY, ONE_DAY, DEFAULT_LOCATION } from '../../constants'
import {
  asyncSetHotelsCreator,
} from '../../store/hotelsReducer'
import { getISODate, getFormattedDate } from '../../utils'

import styles from './SearchCard.module.scss'

const defaultValues = {
  location: DEFAULT_LOCATION,
  daysAmount: 1,
  date: TODAY,
}

export const SearchCard = () => {
  const { locationLabel, dateLabel, daysLabel, searchBtn } = text
  const {
    handleSubmit,
    register,
  } = useForm({
    defaultValues,
    mode: 'onTouched',
  })
  const dispatch = useDispatch()

  const onSubmit = ({ location, daysAmount, date }) => {
    dispatch(
      asyncSetHotelsCreator({
        location,
        daysAmount,
        formattedDate: getFormattedDate(date),
        dateStart: getISODate(new Date(date)),
        dateEnd: getISODate(
          new Date(new Date(date).getTime() + daysAmount * ONE_DAY),
        ),
      }),
    )
  }

  return (
    <form
      className={styles.cardWrapper}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.inputsWrapper}>
        <Input
          label={locationLabel}
          register={register}
          id="location"
          type="text"
          isBold={true}
        />
        <Input
          label={dateLabel}
          register={register}
          id="date"
          type="date"
          valueAsDate={true}
          isBold={true}
        />
        <Input
          label={daysLabel}
          register={register}
          id="daysAmount"
          type="text"
          isBold={true}
        />
      </div>
      <Button>{searchBtn}</Button>
    </form>
  )
}
