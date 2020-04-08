import { FETCH_SESSION_ERRORS, FETCH_CURRENT_USER, CLEAR_ERRORS } from "../actions/sessions_actions";

const sessionErrorsReducer = (oldState = [], action) => {

    Object.freeze(oldState);
    let newState;

    switch (action.type) {
        case FETCH_SESSION_ERRORS:
            newState = Object.assign([], action.errors);
            return newState;
        case FETCH_CURRENT_USER:
            newState = [];
            return newState;
        default:
            return oldState;
    }
};

export default sessionErrorsReducer;