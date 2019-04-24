import {
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
        })
        .catch(error => {

        });
};

