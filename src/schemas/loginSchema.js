import * as yup from 'yup'

const emailRegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/i
const passwordRegExp = /^[~`"!@#$%^&*()_+=[\]\{}|\\;':",.\/<>?a-zA-Z0-9-]+$/

const email = yup
  .string()
  .required('Электронная почта обязательна к заполнению')
  .matches(emailRegExp, 'Неверный формат электронной почты')

const password = yup
  .string()
  .required('Пароль обязателен к заполнению')
  .min(8, 'Пароль не должен быть короче 8 символов')
  .matches(passwordRegExp, 'Некорректный пароль')

export const loginSchema = yup.object().shape({
  email,
  password,
})
