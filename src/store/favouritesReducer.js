const defaultState = {
    favourites: [],
    filter: '',
    isIncreasing: true
}

export const SET_Favourites = "SET_FAVOURITES"
export const FETCH_FAVOURITES = "FETCH_FAVOURITES"

export default function favouritesReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_Favourites:
            return {...state, ...action.payload}
    }
    return state
}

export const setFavourites = payload => ({type: SET_Favourites, payload})
export const fetchFavourites = () => ({type: FETCH_FAVOURITES})
