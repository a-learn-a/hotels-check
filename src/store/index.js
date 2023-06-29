import { applyMiddleware, combineReducers, createStore } from 'redux'

import hotelsReducer from './hotelsReducer'
import favouritesReducer from './favouritesReducer'
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from '../saga'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  hotelsReducer,
  favouritesReducer,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)
