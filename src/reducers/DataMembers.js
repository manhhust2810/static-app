import * as types from "../constants/ActionTypes";
import DetailList from "../DetailList.json";
import { v4 as uuidv4 } from "uuid";

// var data = JSON.parse(localStorage.getItem("task"));

const initialState = { 
    previousState: DetailList ? DetailList : [],
    currentState: DetailList ? DetailList : []
}

const DataMembers = (state = initialState, action) => {
    const { type, value, id, newList } = action;
    switch(type) {
        case types.LIST_ALL_TEAM_MEMBERS:
            return {...state};
        case types.CREATE_NEW_TEAM:
            const newListAfterCreate = [
                ...state.previousState,
                {
                    "id": uuidv4(),
                    "name": "",
                    "creator": "",
                    "memberIds": [
                    ],
                    "managerIds": [
                    ]
                } 
            ];
            return {
                previousState: [...newListAfterCreate],
                currentState: [...newListAfterCreate]
            }
        case types.DELETE_TEAM_BY_ID:
            const newListAfterDelete = state.previousState.filter(item => item.id !== id);
            return { 
                previousState: [...newListAfterDelete],
                currentState: [...newListAfterDelete]
            }
        case types.CHANGE_NAME_BY_ID:
            const newName = { name: value };
            const newListAfterChanging = state.previousState.map((item)=>{
                if(item.id === id){
                    return {...item, ...newName}
                }
                return item;
            });
            return {
                previousState: [...newListAfterChanging],
                currentState:  [...newListAfterChanging]
            };
        case types.SEARCH_ANYTHING:
            const newListAfterSearching = state.previousState.filter(item => {
                const { memberIds, managerIds } = item;
                const matchUserId = [...memberIds, ...managerIds].filter(({ firstName = "", lastName = "" }) => firstName.includes(value) || lastName.includes(value))
                if (matchUserId.length > 0) {
                    return true;
                }
                return item.name.includes(value);
            });
            return {
                ...state,
                currentState:  [...newListAfterSearching]
            };
        case types.UPDATE_LIST:
            return {
                previousState: [...newList],
                currentState: [...newList]
            }
        default:
            return {...state};
    }
};

export default DataMembers;