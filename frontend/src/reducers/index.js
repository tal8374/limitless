import {combineReducers} from 'redux';
import teachers from './teachers';
import user from './user';
import auth from './auth';

const rootReducer = combineReducers({
  teachers: teachers,
  user: user,
  auth: auth,
});

export default rootReducer;
