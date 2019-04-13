import axios from 'axios';
import {
    TEACHER_URL,
} from './constants';
import {getConfig} from '../utils/config';

export const fetchTeachersApi = () => {
    console.log(TEACHER_URL)
    return axios.get(TEACHER_URL, {
        params: {
            roles: ['teacher']
        }
    });
};
