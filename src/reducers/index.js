import { combineReducers } from "redux";
import DataMembers from "./DataMembers";
import sampleMembers from "./sampleMembers";
import ColorsReducer from './ColorsReducer';
import GradientsReducer from './GradientsReducer';
import SettingsReducer from './SettingsReducer';

export default combineReducers({
    colors: ColorsReducer,
    gradients: GradientsReducer,
    settings: SettingsReducer,
    DataMembers : DataMembers,
    sampleMembers : sampleMembers
});