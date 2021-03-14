import { SHOW_ALL } from "../constants/visibleState";
import * as types from "../constants/ActionTypes";

export default function visibleTodoListReducer(state = SHOW_ALL, action) {
    switch (action.type) {
        case types.SET_VISIBLE_FILTER:
            state = action.value;
            return state;
        default:
            return state;
    }
}