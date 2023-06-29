import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Filter, Item } from '../../ui'

import { text } from '../../data'
import {
  setHotelsCreator,
} from '../../store/hotelsReducer'
import { setFavourites } from '../../store/favouritesReducer'
import { sortHelper } from '../../utils'
import { STARS_FILTER, PRICE_FILTER } from '../../constants'

import styles from './FavouritesCard.module.scss'

export const FavouritesCard = () => {
  const [selectedId, setSelectedId] = useState(-1)
  const [isIncreasing, setIsIncreasing] = useState(true)
  const favourites = useSelector((state) => state.favouritesReducer.favourites)
  const data = useSelector((state) => state.hotelsReducer)
  const dispatch = useDispatch()
  const { favouritesTitle, filterTitles } = text

  const handleFilterChange = (id) => {
    if (id === selectedId) {
      setIsIncreasing((isIncreasing) => !isIncreasing)
    } else {
      setSelectedId(id)
      setIsIncreasing(true)
    }
  }

  useEffect(() => {
    if (selectedId === -1) return
    const payload = sortHelper(
      [...favourites],
      selectedId === 0 ? STARS_FILTER : PRICE_FILTER,
      isIncreasing,
    )
    dispatch(
      setFavourites({
        filter: selectedId === 0 ? STARS_FILTER : PRICE_FILTER,
        favourites: payload,
        isIncreasing,
      }),
    )
  }, [isIncreasing, selectedId])

  const handleLikeClick = (name) => {
    const hotelsCopy = [...data.hotels]
    const targetHotel =
      hotelsCopy[hotelsCopy.findIndex((hotel) => hotel.name === name)]
    if (targetHotel) {
      targetHotel.isFavourite = !targetHotel.isFavourite
      dispatch(setHotelsCreator(hotelsCopy))
    }
    let payload = [...favourites]
    if (targetHotel?.isFavourite) {
      payload.push(targetHotel)
    } else {
      payload = payload.filter((hotel) => hotel.name !== name)
    }
    dispatch(setFavourites({ favourites: payload }))
  }

  return (
    <div className={styles.cardWrapper}>
      <h2 className={styles.title}>{favouritesTitle}</h2>
      {favourites.length > 0 && (
        <div className={styles.filtersWrapper}>
          {filterTitles.map((title, i) => (
            <Filter
              key={title}
              text={title}
              isSelected={i === selectedId}
              isIncreasing={isIncreasing}
              id={i}
              onClick={() => handleFilterChange(i)}
            />
          ))}
        </div>
      )}
      {favourites.map(({ name, price, stars, isFavourite }) => (
        <Item
          name={name}
          price={price}
          stars={stars}
          isFavourite={isFavourite}
          key={name}
          hasIcon={false}
          daysAmount={data.daysAmount}
          dateStart={data.formattedDate}
          onClick={() => handleLikeClick(name)}
        />
      ))}
    </div>
  )
}
