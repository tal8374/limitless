import {combineReducers} from 'redux';
import teachers from './teachers';
import user from './user';

const rootReducer = combineReducers({
  users: teachers,
  user: user,
});

export default rootReducer;
