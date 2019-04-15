import {
    FETCH_USER_REQUEST,
    FETCH_USER_FAILURE,
    FETCH_USER_SUCCESS,
    EDIT_PROFILE_REQUEST,
    EDIT_PROFILE_FAILURE,
    EDIT_PROFILE_SUCCESS,
} from './types';
import {fetchUserApi, editProfileApi} from '../api';
import {apiErrorHandler} from '../utils/errorhandler';

export const fetchUser = (id) => dispatch => {
    dispatch(fetchUserRequest());

    fetchUserApi(id)
        .then(response => {
            dispatch(fetchUserSuccess(response.data));
        })
        .catch(error => {
            const errorMessage = apiErrorHandler(error);
            dispatch(fetchUserFailure(errorMessage));
        });
};

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST,
    };
};

export const fetchUserSuccess = data => {
    return {
        type: FETCH_USER_SUCCESS,
        user: data,
    };
};

export const fetchUserFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        error,
    };
};

export const updateUser = (id, newProfile) => dispatch => {
    dispatch(updateUserRequest());

    console.log(id, newProfile)

    editProfileApi(id, newProfile)
        .then(response => {
            dispatch(updateUserSuccess(response.data));
        })
        .catch(error => {
            const errorMessage = apiErrorHandler(error);
            dispatch(updateUserFailure(errorMessage));
        });
};

export const updateUserRequest = () => {
    return {
        type: EDIT_PROFILE_REQUEST,
    };
};

export const updateUserSuccess = data => {
    return {
        type: EDIT_PROFILE_SUCCESS,
        user: data,
    };
};

export const updateUserFailure = error => {
    return {
        type: EDIT_PROFILE_FAILURE,
        error,
    };
};

