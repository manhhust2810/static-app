import * as types from "../constants/ActionTypes";

export function actAddItem(item) {
    return {
        type: types.ADD_ITEM,
        item
    }
}

export function actChangeItemContent(content, itemId) {
    return {
        type: types.CHANGE_ITEM_CONTENT,
        content, itemId
    }
}

export function actDeleteItem(itemId) {
    return {
        type: types.DELETE_ITEM,
        itemId
    }
}

export function actToggleCompleteJob(itemId) {
    return {
        type: types.TOGGLE_COMPLETE,
        itemId
    }
}
