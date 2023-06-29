import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'

import firstPic from './assets/carousel_pic_1.jpg'
import secondPic from './assets/carousel_pic_2.jpg'
import thirdPic from './assets/carousel_pic_3.jpg'

import styles from './Carousel.module.scss'

const pics = [firstPic, secondPic, thirdPic, firstPic, secondPic]

export const Carousel = () => {
  return (
    <ScrollContainer className={styles.wrapper}>
        {pics.map((pic, i) => (
        <img src={pic} key={i} />
      ))}
    </ScrollContainer>
  )
}
