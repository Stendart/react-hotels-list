import {ADD_COUNTRY_LIST, CHANGE_SELECT_COUNTRY, RESET_SELECT_COUNTRY} from "../actions/actionTypes";

const initialState = {
    countryList: [
        {
            name: 'Австрия',
            isChecked: true
        },
        {
            name: 'Азербайджан',
            isChecked: true
        },
        {
            name: 'Албания',
            isChecked: false
        },
        {
            name: 'Греция',
            isChecked: true
        },
    ],
    searchString: ''
}

export default function countryReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_COUNTRY_LIST:
            return {
                ...state, countryList: [...state.countryList, action.payload]
            }
        case CHANGE_SELECT_COUNTRY:
            const {isSelectCountry, countryIndex } = action;
            const newCountryList = [...state.countryList];
            const prevItem = newCountryList[countryIndex];
            newCountryList[countryIndex] = {...prevItem, isChecked: isSelectCountry};

            return {
                ...state, countryList: newCountryList
            }
        case RESET_SELECT_COUNTRY:
            return {...initialState}
        default:
            return state
    }
}