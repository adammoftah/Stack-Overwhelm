import { FETCH_ONE_ANSWER, REMOVE_ANSWER } from "../actions/answers_actions";
import { FETCH_ONE_QUESTION, FETCH_ALL_QUESTIONS } from "../actions/questions_actions";

const answersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;

    switch (action.type) {
        case FETCH_ONE_QUESTION:
            return oldState;
        case FETCH_ALL_QUESTIONS:
            newState = Object.assign({}, action.payload.answers);
            return newState;
        case FETCH_QUESTION:
            newState = Object.assign({}, action.payload.answers);
            return newState;
        case FETCH_ONE_ANSWER:
            newState = Object.assign({}, oldState, { [action.answer.id]: action.answer });
            return newState;
        case REMOVE_ANSWER:
            newState = Object.assign({}, oldState);
            delete newState[action.answerId];
            return newState;
        default:
            return oldState;
    }

};

export default answersReducer;