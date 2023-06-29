import React from 'react'
import cn from 'classnames'

import { TODAY } from '../../constants'

import styles from './Input.module.scss'

export const Input = ({
  label,
  id,
  register,
  helperText,
  type,
  valueAsDate,
  isBold,
}) => {
  return (
    <div className={styles.wrapper}>
      <label
        className={cn(styles.label, isBold && styles.labelBold)}
        htmlFor={id}
      >
        {label}
      </label>
      {type === 'date' && (
        <input
          className={styles.input}
          id={id}
          {...register?.(id, { valueAsDate: Boolean(valueAsDate) })}
          type={type}
          min={TODAY}
        />
      )}
      {type === 'text' && (
        <input
          className={styles.input}
          id={id}
          {...register?.(id)}
          type={type}
        />
      )}
      {helperText && <span className={styles.error}>{helperText}</span>}
    </div>
  )
}
