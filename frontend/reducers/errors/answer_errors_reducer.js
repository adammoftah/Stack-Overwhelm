import { FETCH_ANSWER_ERRORS } from '../../actions/answers_actions';

const answerErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let newState;

    switch (action.type) {
        case FETCH_ANSWER_ERRORS:
            newState = Object.assign([], action.errors);
            return newState;
        default:
            return oldState;
    }
};

export default answerErrorsReducer;