import { combineReducers } from "redux";
import movieSearchReducer from "./containers/MovieSearch/MovieSearchReducer";

const rootReducer = combineReducers({ search: movieSearchReducer });

export default rootReducer;
