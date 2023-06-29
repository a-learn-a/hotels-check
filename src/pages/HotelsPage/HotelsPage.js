import React from 'react'

import {
  Header,
  SearchCard,
  HotelsCard,
  FavouritesCard,
} from '../../components'

import styles from './HotelsPage.module.scss'

export const HotelsPage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.contentWrapper}>
        <div className={styles.aside}>
          <SearchCard />
          <FavouritesCard />
        </div>
        <HotelsCard />
      </div>
    </div>
  )
}
