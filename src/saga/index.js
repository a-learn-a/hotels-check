import { all } from 'redux-saga/effects'
import { hotelsWatcher } from './hotelsSaga'
import { favouritesWatcher } from './favouritesSaga'

export function* rootWatcher() {
  yield all([hotelsWatcher(), favouritesWatcher()])
}
