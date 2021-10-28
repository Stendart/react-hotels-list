import {CHANGE_REVIEWS_COUNT, RESET_REVIEWS_COUNT} from "./actionTypes";

export function changeReviewsCount(reviewsCount) {
    return {
        type: CHANGE_REVIEWS_COUNT,
        reviewsCount
    }
}

export const resetReviewsCount = () => ({
    type: RESET_REVIEWS_COUNT
})