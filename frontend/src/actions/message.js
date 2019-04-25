import {
    SHOW_CREATE_MESSAGE_MODAL,
    CLOSE_CREATE_MESSAGE_MODAL,
} from './types';
import {updateMessagesApi, sendMessageApi} from '../api';
import {apiErrorHandler} from '../utils/errorhandler';

export const updateMessages = (body) => dispatch => {
    updateMessagesApi(body)
        .then(response => {
        })
        .catch(error => {

        });
};

export const sendMessage = (body) => dispatch => {
    sendMessageApi(body)
        .then(response => {
            dispatch(closeCreateMessageModalRequest());
        })
        .catch(error => {

        });
};

export const showCreateMessageModal = () => dispatch => {
    dispatch(showCreateMessageModalRequest());
};

export const showCreateMessageModalRequest = () => {
    return {
        type: SHOW_CREATE_MESSAGE_MODAL,
    };
};

export const closeCreateMessageModal = () => dispatch => {
    dispatch(closeCreateMessageModalRequest());
};

export const closeCreateMessageModalRequest = () => {
    return {
        type: CLOSE_CREATE_MESSAGE_MODAL,
    };
};


