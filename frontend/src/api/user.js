import axios from 'axios';
import {
    TEACHER_URL,
} from './constants';
import {getConfig} from '../utils/config';

export const fetchUserApi = (id) => {
    return axios.get(TEACHER_URL + id, {});
};
