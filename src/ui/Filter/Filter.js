import React from 'react'
import cn from 'classnames'

import { FilterIcon } from '../../assets/svg/FilterIcon'

import styles from './Filter.module.scss'

export const Filter = ({ text, isSelected, isIncreasing, onClick }) => {
  const wrapperClassName = cn(styles.wrapper, {
    [styles.wrapperSelected]: isSelected,
  })

  const filterIconClassName = cn(styles.filterIcon, {
    [styles.filterIconUp]: isSelected && isIncreasing,
    [styles.filterIconDown]: isSelected && !isIncreasing,
  })

  return (
    <div className={wrapperClassName} onClick={onClick}>
      <span>{text}</span>
      <span className={filterIconClassName}>
        <FilterIcon />
      </span>
    </div>
  )
}
