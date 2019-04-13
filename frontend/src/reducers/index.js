import {combineReducers} from 'redux';
import auth from './auth';
import register from './register';
import userProfile from './userprofile';
import teachers from './teachers';

const rootReducer = combineReducers({
  auth,
  register,
  userProfile,
  users: teachers,
});

export default rootReducer;
