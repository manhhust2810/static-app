import * as types from "../constants/Types";

export function setVisibleFilter(value) {
    return {
        type: types.SET_VISIBLE_FILTER,
        value
    }
}