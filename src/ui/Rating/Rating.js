import React from 'react'

import { StarIcon } from '../../assets/svg/StarIcon'

import styles from './Rating.module.scss'

const starsAmount = ['', '', '', '', '']

export const Rating = ({ rating = 2 }) => {
  return (
    <div className={styles.wrapper}>
      {starsAmount.map((_, i) => (
        <span className={(i+1) <= rating && styles.starActive} key={i}>
          <StarIcon />
        </span>
      ))}
    </div>
  )
}
