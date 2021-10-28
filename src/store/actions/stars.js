import {CHANGE_STARS_COUNT, CHANGE_STAR_SELECT, RESET_STAR_SELECT} from "./actionTypes";

export function changeStarsCount(starsCount) {
    return {
        type: CHANGE_STARS_COUNT,
        stars: starsCount
    }
}

export function changeStarsSelect(isStarSelect, starIndex) {
    return {
        type: CHANGE_STAR_SELECT,
        isStarSelect,
        starIndex
    }
}

export function resetStarsSelect() {
    return {
        type: RESET_STAR_SELECT
    }
}