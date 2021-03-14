import * as types from "../constants/ActionTypes";

export function actChangeTheme(theme) {
    return {
        type: types.CHANGE_THEME,
        theme
    }
}