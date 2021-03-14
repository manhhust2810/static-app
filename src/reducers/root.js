import { combineReducers } from "redux";
import todoList from "./todoList.reducer";
import visibleTodoListFilter from "./visibleTodoFilter.reducer";
import visibleTheme from "./visibleTheme.reducer";
import DataMembers from "./DataMembers";
import sampleMembers from "./sampleMembers";
import TranscriptReducer from "./TranscriptReducer";
import { TaskReducer } from "./TaskReducer";

const rootReducer = combineReducers({ 
    todoList,
    visibleTodoListFilter, 
    visibleTheme, 
    DataMembers,
    sampleMembers,
    TranscriptReducer, 
    TaskReducer 
});
export default rootReducer;