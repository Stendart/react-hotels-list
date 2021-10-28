import {CHANGE_STAR_SELECT, CHANGE_STARS_COUNT, RESET_STAR_SELECT} from "../actions/actionTypes";

const initialState = {
    selectStar: [
        {
            count: 1,
            isChecked: true
        },
        {
            count: 2,
            isChecked: true
        },
        {
            count: 3,
            isChecked: true
        },
        {
            count: 4,
            isChecked: false
        },
        {
            count: 5,
            isChecked: false
        },
    ]
}

export default function starsReducer (state = initialState, action) {
    switch (action.type) {
        case CHANGE_STARS_COUNT:
            return {...state, selectStar: action.stars}
        case CHANGE_STAR_SELECT:
            const {isStarSelect, starIndex} = action;
            const newSelectStarArr = [...state.selectStar]
            const currentStar = newSelectStarArr[starIndex];
            newSelectStarArr[starIndex] = {...currentStar, isChecked: isStarSelect}
            return {...state, selectStar: newSelectStarArr}
        case RESET_STAR_SELECT:
            return {...initialState}
        default:
            return state
    }
}