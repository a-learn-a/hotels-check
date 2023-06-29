import { put, takeEvery } from 'redux-saga/effects'
import { FETCH_FAVOURITES, setFavourites } from '../store/favouritesReducer'

function* setFavouritesWorker({ payload }) {
  yield put(setFavourites(payload))
}

export function* favouritesWatcher() {
  yield takeEvery(FETCH_FAVOURITES, setFavouritesWorker)
}
