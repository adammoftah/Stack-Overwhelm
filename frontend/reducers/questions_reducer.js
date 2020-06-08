import { FETCH_ALL_QUESTIONS, FETCH_ONE_QUESTION, REMOVE_QUESTION } from "../actions/questions_actions";
import { FETCH_CURRENT_USER } from "../actions/sessions_actions";
import { CLEAR_ENTITY } from "../actions/entity_actions";

const questionsReducer = (oldState = {}, action) => {

    Object.freeze(oldState);
    let newState;

    switch (action.type) {
        case FETCH_ALL_QUESTIONS:
            newState = Object.assign({}, action.questions.questions);
            return newState;
        case FETCH_ONE_QUESTION:
            newState = Object.assign({}, { [action.question.question.id]: action.question });
            return newState;
        case FETCH_CURRENT_USER:
            newState = {};
            return newState;
        case REMOVE_QUESTION:
            newState = Object.assign({}, oldState);
            delete newState[action.questionId];
            return newState;
        case CLEAR_ENTITY:
            return {};
        default:
            return oldState;
    }
};

export default questionsReducer;