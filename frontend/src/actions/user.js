import {
    FETCH_USER_REQUEST,
    FETCH_USER_FAILURE,
    FETCH_USER_SUCCESS,
} from './types';
import {fetchUserApi} from '../api';
import {apiErrorHandler} from '../utils/errorhandler';

export const fetchUser = (id) => dispatch => {
    dispatch(fetchUserRequest());

    fetchUserApi(id)
        .then(response => {
            console.log(response.data)
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
