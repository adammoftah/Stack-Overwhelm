import { FETCH_CURRENT_USER } from "../actions/sessions_actions";

const usersReducer = (oldState = {}, action) => {

    Object.freeze(oldState);
    let newState;

    switch (action.type) {
        case FETCH_CURRENT_USER:
            newState = Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser });
            return newState;
        default:
            return oldState;
    }
};

export default usersReducer;