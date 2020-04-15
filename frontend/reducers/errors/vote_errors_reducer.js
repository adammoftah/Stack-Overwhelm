import { FETCH_VOTE_ERRORS } from '../../actions/votes_actions';

const voteErrorsReducer = (oldState = [], action) => {

    Object.freeze(oldState);
    let newState;

    switch (action.type) {
        case FETCH_VOTE_ERRORS:
            newState = Object.assign([], action.errors);
            return newState;
        default:
            return oldState;
    }
};

export default voteErrorsReducer;