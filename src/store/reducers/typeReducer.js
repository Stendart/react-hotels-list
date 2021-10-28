import {CHANGE_TYPE_SELECT, RESET_TYPE_SELECT} from "../actions/actionTypes";

const initialState = {
    typeList: [
        {
            name: 'Апартаменты',
            isChecked: true
        },
        {
            name: 'Отель',
            isChecked: false
        }
    ]
}

export default function typeReducer (state = initialState, action) {
    switch (action.type) {
        case CHANGE_TYPE_SELECT:
            const {isChecked, index} = action;
            const newTypeList = [...state.typeList];
            const changesTypeItem = newTypeList[index];
            newTypeList[index] = {...changesTypeItem, isChecked: isChecked}

            return {...state, typeList: newTypeList}
        case RESET_TYPE_SELECT:
            return {...initialState}
        default:
            return state
    }
}