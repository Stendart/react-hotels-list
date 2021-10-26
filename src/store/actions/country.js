import {ADD_COUNTRY_LIST, CHANGE_SELECT_COUNTRY, RESET_SELECT_COUNTRY} from "./actionTypes";

export function addCountryToList(country) {
    return dispatch => {
        dispatch({
            type: ADD_COUNTRY_LIST,
            payload: country
        })
    }
}

export function resetSelectCountry() {
    return dispatch => {
        dispatch({
            type: RESET_SELECT_COUNTRY
        })
    }
}

export function changeSelectCountry(isSelectCountry, countryIndex) {
    return {
        type: CHANGE_SELECT_COUNTRY,
        isSelectCountry,
        countryIndex
    }
}
