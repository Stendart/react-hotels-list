import {CHANGE_REVIEWS_COUNT} from "../actions/actionTypes";

const initialState = {
    reviewsCount: 0
}

export default function reviewsReducer(state=initialState, action) {
    switch (action.type) {
        case CHANGE_REVIEWS_COUNT:
            return {
                ...state,
                reviewsCount: action.reviewsCount
            }
        default:
            return state
    }
}