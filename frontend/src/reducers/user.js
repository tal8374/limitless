import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from '../actions/types';

const initialState = {
  isLoading: false,
  user: null,
  error: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_USER_SUCCESS:
      return {
        isLoading: false,
        user: action.user,
        error: null,
      };
    case FETCH_USER_FAILURE:
      return {
        ...initialState,
        error: action.error,
      };
    default:
      return state;
  }
};

export default user;
