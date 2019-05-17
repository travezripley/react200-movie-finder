import { combineReducers } from 'redux';
import movieSearchReducer from './containers/MovieSearch/movieSearchReducer';

const rootReducer = combineReducers({
    search: movieSearchReducer
});

export default rootReducer;