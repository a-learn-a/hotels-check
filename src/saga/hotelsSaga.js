import { put, takeEvery } from 'redux-saga/effects'
import {ASYNC_SET_HOTELS,
  setHotelsCreator,
} from '../store/hotelsReducer'

const fetchData = ({ location, dateStart, dateEnd }) => {
  const res = fetch(
    `https://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${dateStart}&checkOut=${dateEnd}&limit=10`,
  )
    .then((response) => response.json())
    .then((data) =>
      data.map((hotel) => ({
        price: hotel.priceAvg,
        stars: hotel.stars,
        name: hotel.hotelName,
        isFavourite: false,
      })),
    )

  return res
}

function* setHotelsWorker({ payload }) {
  const res = yield fetchData(payload)
  yield put(setHotelsCreator({ ...payload, hotels: [...res] }))
}

export function* hotelsWatcher() {
  yield takeEvery(ASYNC_SET_HOTELS, setHotelsWorker)
}
