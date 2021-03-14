import * as types from "../constants/ActionTypes";

export default function visibleThemeReducer(state = "light", action) {
    switch (action.type) {
        case types.CHANGE_THEME:
            state = action.theme;
            return state;
        default:
            return state;
    }
}