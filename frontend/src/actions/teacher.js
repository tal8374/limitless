import {
    FETCH_TEACHERS_REQUEST,
    FETCH_TEACHERS_SUCCESS,
    FETCH_TEACHERS_FAILURE,
} from './types';
import {fetchTeachersApi} from '../api';
import {apiErrorHandler} from '../utils/errorhandler';

export const fetchTeachers = () => dispatch => {
    dispatch(fetchTeachersRequest());

    fetchTeachersApi()
        .then(response => {
            dispatch(fetchTeachersSuccess(response.data));
        })
        .catch(error => {
            const errorMessage = apiErrorHandler(error);
            dispatch(fetchTeachersFailure(errorMessage));
        });
};

export const fetchTeachersRequest = () => {
    return {
        type: FETCH_TEACHERS_REQUEST,
    };
};

export const fetchTeachersSuccess = data => {
    return {
        type: FETCH_TEACHERS_SUCCESS,
        users: data,
    };
};

export const fetchTeachersFailure = error => {
    return {
        type: FETCH_TEACHERS_FAILURE,
        error,
    };
};
