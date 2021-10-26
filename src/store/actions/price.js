import {CHANGE_MAX_PRICE, CHANGE_MIN_PRICE} from "./actionTypes";

export function resetPriceFilter(minPrice) {
    return {
        type: CHANGE_MIN_PRICE,
        minPrice
    }
}

export function changeMinPrice(minPrice) {
    return {
        type: CHANGE_MIN_PRICE,
        minPrice
    }
}

export function changeMaxPrice(maxPrice) {
    return {
        type: CHANGE_MAX_PRICE,
        maxPrice
    }
}