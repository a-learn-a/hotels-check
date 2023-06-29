import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ArrowIcon } from '../../assets/svg/ArrowIcon'
import { Item } from '../../ui'
import { Carousel } from './Carousel/Carousel'

import {
  asyncSetHotelsCreator,
  setHotelsCreator,
} from '../../store/hotelsReducer'
import { setFavourites } from '../../store/favouritesReducer'
import { sortHelper } from '../../utils'
import { text } from '../../data'

import styles from './HotelsCard.module.scss'

export const HotelsCard = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.hotelsReducer)
  const favourites = useSelector((state) => state.favouritesReducer.favourites)
  const filter = useSelector((state) => state.favouritesReducer)
  const { hotelsText, hotelsTitle, favouritesText } = text

  useEffect(() => {
    dispatch(asyncSetHotelsCreator(data))
  }, [])

  const handleLikeClick = (index) => {
    const hotelsCopy = [...data.hotels]
    hotelsCopy[index].isFavourite = !hotelsCopy[index].isFavourite
    dispatch(setHotelsCreator(hotelsCopy))
    let payload = [...favourites]
    if (hotelsCopy[index].isFavourite) {
      filter.filter
        ? (payload = sortHelper(
            [...payload, hotelsCopy[index]],
            filter.filter,
            filter.isIncreasing,
          ))
        : payload.push(hotelsCopy[index])
    } else {
      payload = payload.filter((hotel) => hotel.name !== hotelsCopy[index].name)
    }
    dispatch(setFavourites({ favourites: payload }))
  }

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.header}>
        <div className={styles.city}>
          <span>{hotelsTitle}</span>
          <span>
            <ArrowIcon />
          </span>
          <span>{data.location}</span>
        </div>
        <div className={styles.date}>{data.formattedDate}</div>
      </div>
      <Carousel />
      <div className={styles.favourites}>
        <span>{favouritesText}</span>
        <span className={styles.favouritesCount}>{favourites.length}</span>
        <span>{hotelsText}</span>
      </div>
      <div className={styles.list}>
        {data.hotels.map(({ name, price, stars, isFavourite }, i) => (
          <Item
            name={name}
            price={price}
            stars={stars}
            isFavourite={isFavourite}
            key={name}
            hasIcon={true}
            daysAmount={data.daysAmount}
            dateStart={data.formattedDate}
            onClick={() => handleLikeClick(i)}
          />
        ))}
      </div>
    </div>
  )
}
