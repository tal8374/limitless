import {combineReducers} from 'redux';
import teachers from './teachers';
import user from './user';
import auth from './auth';
import messages from './messages';

const rootReducer = combineReducers({
  teachers: teachers,
  user: user,
  auth: auth,
  messages: messages,
});

export default rootReducer;
