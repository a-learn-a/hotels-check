import React from 'react'
import { useNavigate } from 'react-router-dom'

import { LogOutIcon } from '../../assets/svg/LogOutIcon'

import { text } from '../../data'
import { IS_SIGNED_IN, HOME_PATH } from '../../constants'

import styles from './Header.module.scss'

export const Header = () => {
  const navigate = useNavigate()
  const { nameTitle, logOut } = text

  const handleClick = () => {
    localStorage.removeItem(IS_SIGNED_IN)
    navigate(HOME_PATH)
  }

  return (
    <header className={styles.header}>
      <div className={styles.title}>{nameTitle}</div>
      <button className={styles.button} onClick={handleClick}>
        <span>{logOut}</span>
        <span>
          <LogOutIcon />
        </span>
      </button>
    </header>
  )
}
