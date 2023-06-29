import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'

import { Input, Button } from '../../ui'

import { loginSchema } from '../../schemas/loginSchema'
import { text } from '../../data'
import { IS_SIGNED_IN, HOTELS_PATH } from '../../constants'

import styles from './AuthPage.module.scss'

export const AuthPage = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onTouched',
  })
  const navigate = useNavigate()
  const { nameTitle, loginLabel, passwordLabel, loginBtn } = text

  const onSubmit = () => {
    localStorage.setItem(IS_SIGNED_IN, true)
    navigate(HOTELS_PATH)
  }

  return (
    <div className={styles.wrapper}>
      <form
        className={styles.form}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className={styles.formTitle}>{nameTitle}</h2>
        <div className={styles.inputsWrapper}>
          <Input
            label={loginLabel}
            register={register}
            id="email"
            helperText={errors['email']?.message}
            type="text"
          />
          <Input
            label={passwordLabel}
            register={register}
            id="password"
            helperText={errors['password']?.message}
            type="text"
          />
        </div>
        <Button>{loginBtn}</Button>
      </form>
    </div>
  )
}
