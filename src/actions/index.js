import * as types from '../constants/ActionTypes';

export const listAllSampleMembers = () => {
  return {
    type: types.LIST_ALL_SAMPLE_MEMBERS
  };
};

export const listAllTeamMembers = () => {
  return {
    type: types.LIST_ALL_TEAM_MEMBERS
  };
};

export const addTask = task => {
  return {
    type: types.ADD_TASK,
    task
  };
};

export const createNewTeam = task => {
  return {
    type: types.CREATE_NEW_TEAM,
    task
  };
};

export const deleteTeamById = id => {
  return {
    type: types.DELETE_TEAM_BY_ID,
    id
  };
};

export const changeNameById = (id, value) => {
  return {
    type: types.CHANGE_NAME_BY_ID,
    id,
    value
  };
};

export const searchAnything = value => {
  return {
    type: types.SEARCH_ANYTHING,
    value
  };
};

export const updateList = newList => {
  return {
    type: types.UPDATE_LIST,
    newList
  };
};

export const addNewRow = () => {
  return {
    type: types.ADD_NEW_ROW
  };
};

export const deleteRow = id => {
  return {
    type: types.DELETE_ROW,
    id
  };
};

export const saveRow = (
  id,
  semester,
  courseId,
  courseTitle,
  credits,
  process,
  examination,
  factor
) => {
  return {
    type: types.SAVE_ROW,
    id,
    semester,
    courseId,
    courseTitle,
    credits,
    process,
    examination,
    factor
  };
};

export * from './ColorsActions';

export * from './GradientsActions';

export * from './SettingsActions';
