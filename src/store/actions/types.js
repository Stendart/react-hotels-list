import {CHANGE_TYPE_SELECT, RESET_TYPE_SELECT} from "./actionTypes";

export function changeSelectType(isChecked, index) {
    return {
        type: CHANGE_TYPE_SELECT,
        isChecked,
        index
    }
}

export const resetSelectType = () => ({
    type: RESET_TYPE_SELECT
})
