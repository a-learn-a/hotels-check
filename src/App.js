import { Routes, Route } from 'react-router-dom'

import { AuthPage, HotelsPage } from './pages'

import { AuthProtection, RouteProtection } from './router'
import { HOME_PATH, HOTELS_PATH } from './constants'

import './assets/scss/app.scss'

export const App = () => {
  return (
    <Routes>
      <Route
        path={HOTELS_PATH}
        element={
          <AuthProtection>
            <HotelsPage />
          </AuthProtection>
        }
      />
      <Route
        path={HOME_PATH}
        element={
          <RouteProtection>
            <AuthPage />
          </RouteProtection>
        }
      />
    </Routes>
  )
}
