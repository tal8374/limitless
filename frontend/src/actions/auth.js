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
} from './types';
import {loginApi, logoutApi, editProfileApi, getUserApi} from '../api';
import store from '../store';
import {apiErrorHandler} from '../utils/errorhandler';

export const login = (email, password) => dispatch => {
    dispatch(loginRequest());

    loginApi(email, password)
        .then(response => {
            if (response.data.length === 1) {
                localStorage.setItem('userId', response.data[0]._id);

                dispatch(loginSuccess(response.data[0]));
            } else {
                dispatch(loginFailure('User email or password is not correct'));
            }

        })
        .catch(error => {
            const errorMessage = apiErrorHandler(error);
            dispatch(loginFailure(errorMessage));
        });
};

export const updateLoggedInUser = (_id) => dispatch => {
    getUserApi(_id)
        .then(response => {
            dispatch(updateLoggedInUserSuccess(response.data[0]));
        })
        .catch(error => {
        });
};

export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST,
    };
};

export const loginSuccess = data => {
    return {
        type: LOGIN_SUCCESS,
        loggedInUser: data,
    };
};

export const updateLoggedInUserSuccess = data => {
    return {
        type: UPDATE_LOGGED_IN_SUCCESS,
        loggedInUser: data,
    };
};

export const loginFailure = error => {
    return {
        type: LOGIN_FAILURE,
        error,
    };
};

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT,
    });
};

export const loginReset = () => {
    return {
        type: LOGIN_RESET,
    };
};

export const editProfile = newProfile => dispatch => {
    dispatch(editProfileRequest());

    const username = store.getState().auth.username;
    if (!username) {
        dispatch(editProfileFailure('Not authenticated'));
    } else {
        editProfileApi(username, newProfile)
            .then(response => {
                dispatch(editProfileSuccess(newProfile));
            })
            .catch(error => {
                const errorMessage = apiErrorHandler(error);
                dispatch(editProfileFailure(errorMessage));
            });
    }
};

export const editProfileRequest = () => {
    return {
        type: EDIT_PROFILE_REQUEST,
    };
};

export const editProfileSuccess = newProfile => {
    return {
        type: EDIT_PROFILE_SUCCESS,
        avatar: newProfile.avatar,
        name: newProfile.name,
    };
};

export const editProfileFailure = error => {
    return {
        type: EDIT_PROFILE_FAILURE,
        error,
    };
};

export const editProfileReset = () => {
    return {
        type: EDIT_PROFILE_RESET,
    };
};
