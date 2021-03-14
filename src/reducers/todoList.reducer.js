import * as types from "../constants/ActionTypes";

function todoListReducer(state = [], action) {
    switch (action.type) {
        case types.ADD_ITEM:
            return [action.item, ...state];
        case types.TOGGLE_COMPLETE:
            return state.map((todo) => {
                if (todo.itemId === action.itemId) {
                    return Object.assign({}, todo, {
                        isFinished: !todo.isFinished
                    })
                }
                return todo;
            })
        case types.CHANGE_ITEM_CONTENT:
            return state.map((todo) => {
                if (todo.itemId === action.itemId) {
                    return Object.assign({}, todo, { content: action.content })
                }
                return todo;
            });
        case types.DELETE_ITEM:
            return state.filter(todo => todo.itemId !== action.itemId);
        default:
            return state;
    }
}

export default todoListReducer;