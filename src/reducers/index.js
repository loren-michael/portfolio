import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import sessionsReducer from './sessionsReducer';

export default combineReducers({
  usersReducer: usersReducer,
  sessions: sessionsReducer,
})