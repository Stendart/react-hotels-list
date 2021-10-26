import {CHANGE_MAX_PRICE, CHANGE_MIN_PRICE} from "../actions/actionTypes";

const initialState = {
    minPrice: 100,
    maxPrice: 90000
}

export default function priceReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_MIN_PRICE:
            return {
                ...state, minPrice: action.minPrice
            }
        case CHANGE_MAX_PRICE:
            return {
                ...state, maxPrice: action.maxPrice
            }
        default:
            return state
    }
}