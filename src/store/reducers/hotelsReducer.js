import {SET_HOTELS_LIST} from "../actions/actionTypes";

export default function hotelsReducer(state = null, action) {
    switch (action.type) {
        case SET_HOTELS_LIST:
            return {
                ...state, hotelList: action.payload
            }
        default: return state
    }
}