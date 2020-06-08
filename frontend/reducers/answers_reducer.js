import { FETCH_ONE_ANSWER, REMOVE_ANSWER } from "../actions/answers_actions";
import { FETCH_ONE_QUESTION, FETCH_ALL_QUESTIONS } from "../actions/questions_actions";
import { HANDLE_VOTE } from "../actions/votes_actions";
import { CLEAR_ENTITY } from "../actions/entity_actions";

const answersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;

    switch (action.type) {
        case FETCH_ONE_QUESTION:
            newState = Object.assign({}, action.question.answers);
            return newState;
        case FETCH_ONE_ANSWER:
            let answers = {};
            Object.keys(action.answer).forEach(answerId => {
                answers[answerId] = action.answer[answerId];
            });
            newState = Object.assign({}, oldState, answers);
            return newState;
        case REMOVE_ANSWER:
            newState = Object.assign({}, oldState);
            delete newState[action.answerId];
            return newState;
        case HANDLE_VOTE:
            newState = Object.assign({}, oldState, action.vote.answer);
            return newState;
        case CLEAR_ENTITY:
            return {};
        default:
            return oldState;
    }

};

export default answersReducer;