import {CHANGE_REVIEWS_COUNT, RESET_REVIEWS_COUNT} from "../actions/actionTypes";

const initialState = {
    reviewsCount: null
}

export default function reviewsReducer(state=initialState, action) {
    switch (action.type) {
        case CHANGE_REVIEWS_COUNT:
            return {
                ...state,
                reviewsCount: action.reviewsCount
            }
        case RESET_REVIEWS_COUNT:
            return {
                ...initialState
            }
        default:
            return state
    }
}