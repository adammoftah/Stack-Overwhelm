import { FETCH_QUESTION_ERRORS } from '../../actions/questions_actions';


const questionsErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let newState;

    switch (action.type) {
        case FETCH_QUESTION_ERRORS:
            newState = Object.assign([], action.errors);
            return newState;
        default:
            return oldState;
    }
};

export default questionsErrorsReducer;