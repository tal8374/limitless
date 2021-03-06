import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_RESET,
    EDIT_PROFILE_REQUEST,
    EDIT_PROFILE_SUCCESS,
    EDIT_PROFILE_FAILURE,
    EDIT_PROFILE_RESET,
    LOGOUT,
    UPDATE_LOGGED_IN_SUCCESS,
} from '../actions/types';

const loginInitialState = {
    isLoading: false,
    error: null,
    loggedInUser: null,
};

const editInitialState = {
    isEditing: false,
    editError: null,
    editSuccess: false,
};

const initialState = {
    ...loginInitialState,
    ...editInitialState,
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                loggedInUser: action.loggedInUser,
                error: null,
            };
        case UPDATE_LOGGED_IN_SUCCESS:
            return {
                ...state,
                loggedInUser: action.loggedInUser,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                ...loginInitialState,
                error: action.error,
            };
        case EDIT_PROFILE_REQUEST:
            return {
                ...state,
                isEditing: true,
                editError: null,
                editSuccess: false,
            };
        case EDIT_PROFILE_SUCCESS:
            return {
                ...state,
                isEditing: false,
                editError: null,
                editSuccess: true,
                avatar: action.avatar || state.avatar,
                name: action.name || state.name,
            };
        case EDIT_PROFILE_FAILURE:
            return {
                ...state,
                ...editInitialState,
                editError: action.error,
            };
        case EDIT_PROFILE_RESET:
            return {
                ...state,
                ...editInitialState,
            };
        case LOGIN_RESET:
            return {
                ...state,
                ...loginInitialState,
            };
        case LOGOUT:
            localStorage.removeItem('userId');

            return initialState;
        default:
            return state;
    }
};

export default auth;
