import {ADD_COUNTRY_LIST, CHANGE_SELECT_COUNTRY, SET_COUNTRY_SEARCH_STRING} from "./actionTypes";

export function addCountryToList(country) {
    return dispatch => {
        dispatch({
            type: ADD_COUNTRY_LIST,
            payload: country
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
