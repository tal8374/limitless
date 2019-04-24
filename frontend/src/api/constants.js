// export const API_URL =
//   process.env.NODE_ENV === 'production'
//     ? process.env.REACT_APP_PROD_API_URL
//     : process.env.REACT_APP_DEV_API_URL;
export const API_URL = 'http://localhost:3000/';
export const TEACHER_URL = API_URL + 'user/';
export const USER_URL = API_URL + 'user/';
export const USER_REGISTER_URL = USER_URL;
export const USER_LOGIN_URL = USER_URL;
export const USER_LOGOUT_URL = USER_URL + 'logout/';
export const USER_EDIT_URL = USER_URL;
export const MESSAGE_UPDATE_URL = API_URL + 'message/';
export const MESSAGE_CREATE_URL = API_URL + 'message/';
