import axios from 'axios';
import {
    MESSAGE_UPDATE_URL,
    MESSAGE_CREATE_URL,
} from './constants';

export const updateMessagesApi = (body) => {
    return axios.put(MESSAGE_UPDATE_URL, body);
};

export const sendMessageApi = (body) => {
    console.log(body)

    return axios.post(MESSAGE_CREATE_URL, body);
};


