import {SET_HOTELS_LIST} from "./actionTypes";

export function setHotelList (hotelsList) {
    return {
        type: SET_HOTELS_LIST,
        payload: hotelsList
    }
}