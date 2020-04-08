
import { FETCH_CURRENT_USER, LOGOUT_USER } from "../actions/sessions_actions";

const _nullUser = Object.freeze({ id: null });

const sessionReducer = (oldState = _nullUser, action) => {

    Object.freeze(oldState);
    let newState;

    switch (action.type) {
        case FETCH_CURRENT_USER:
            newState = Object.assign({}, oldState, { id: action.currentUser.id });
            return newState;
        case LOGOUT_USER:
            newState = Object.assign({}, _nullUser);
            return newState;
        default:
            return oldState;
    }
};

export default sessionReducer;