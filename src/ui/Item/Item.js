import React from 'react'
import cn from 'classnames'

import { Rating } from '../Rating/Rating'

import { HouseIcon } from '../../assets/svg/HouseIcon'
import { LikeIcon } from '../../assets/svg/LikeIcon'

import styles from './Item.module.scss'

export const Item = ({
  hasIcon,
  name,
  price,
  stars,
  isFavourite,
  daysAmount,
  dateStart,
  onClick,
}) => {
  const wrapperClassName = cn(styles.wrapper, {
    [styles.grid]: hasIcon,
  })

  return (
    <div className={wrapperClassName}>
      {hasIcon && (
        <div className={styles.hotelIcon}>
          <HouseIcon />
        </div>
      )}
      <div className={styles.info}>
        <div>
          <div className={styles.name}>{name}</div>
          <div className={styles.date}>
            <span>{dateStart}</span>
            <span className={styles.daysCount}>{daysAmount} день</span>
          </div>
          <div>
            <Rating rating={stars} />
          </div>
        </div>
        <div
          className={cn(
            styles.likeIcon,
            isFavourite && styles.likeIconSelected,
          )}
          onClick={onClick}
        >
          <LikeIcon />
        </div>
        <div className={styles.price}>
          <span className={styles.title}>Price:</span>
          <span className={styles.daysCount}>{price} ₽</span>
        </div>
      </div>
    </div>
  )
}
