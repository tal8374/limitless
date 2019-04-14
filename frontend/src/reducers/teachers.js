import {
  FETCH_TEACHERS_REQUEST,
  FETCH_TEACHERS_SUCCESS,
  FETCH_TEACHERS_FAILURE,
} from '../actions/types';

const initialState = {
  isLoading: false,
  teachers: null,
  error: null,
};

const teachers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEACHERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_TEACHERS_SUCCESS:
      return {
        isLoading: false,
        teachers: action.teachers,
        error: null,
      };
    case FETCH_TEACHERS_FAILURE:
      return {
        ...initialState,
        error: action.error,
      };
    default:
      return state;
  }
};

export default teachers;
