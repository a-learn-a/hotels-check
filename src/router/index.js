import { Navigate } from 'react-router-dom'

import { IS_SIGNED_IN, HOME_PATH, HOTELS_PATH } from '../constants'

export const AuthProtection = ({ children }) => {
  const isSignedIn = localStorage.getItem(IS_SIGNED_IN)

  if (!isSignedIn) {
    return <Navigate to={HOME_PATH} replace />
  }
  return children
}

export const RouteProtection = ({ children }) => {
  const isSignedIn = localStorage.getItem(IS_SIGNED_IN)

  if (isSignedIn) {
    return <Navigate to={HOTELS_PATH} replace />
  }
  return children
}
