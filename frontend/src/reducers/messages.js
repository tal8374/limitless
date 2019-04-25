import {
    SHOW_CREATE_MESSAGE_MODAL,
    CLOSE_CREATE_MESSAGE_MODAL,
} from '../actions/types';

const initialState = {
    isCreateMessageModalOpen: false,
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_CREATE_MESSAGE_MODAL:
            return {
                isCreateMessageModalOpen: true,
            };
        case CLOSE_CREATE_MESSAGE_MODAL:
            return {
                isCreateMessageModalOpen: false,
            };
        default:
            return state;
    }
};

export default user;
