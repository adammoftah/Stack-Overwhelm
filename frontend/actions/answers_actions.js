import * as AnswerAPIUtil from '../util/answer_api_util';

export const FETCH_ANSWERS = 'FETCH_ANSWERS';
export const FETCH_ONE_ANSWER = 'FETCH_ONE_ANSWER';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';
export const FETCH_ANSWER_ERRORS = 'FETCH_ANSWER_ERRORS';

const fetchAnswers = payload => ({
    type: FETCH_ANSWERS,
    answers: payload.answers,
    users: payload.users,
});

const fetchOneAnswer = payload => ({
    type: FETCH_ONE_ANSWER,
    answer: payload.answer,
    user: payload.user,
});

const removeAnswer = payload => ({
    type: REMOVE_ANSWER,
    answer: payload.answer,
});

const fetchAnswerErrors = errors => ({
    type: FETCH_ANSWER_ERRORS,
    errors: errors,
});

export const fetchAllAnswers = () => dispatch => {
    return AnswerAPIUtil.fetchAllAnswers().then(
        (payload) => {
            return dispatch(fetchAnswers(payload));
        });
};

export const fetchAnswer = answerId => dispatch => {
    return AnswerAPIUtil.fetchAnswer(answerId).then(
        payload => {
            return dispatch(fetchOneAnswer(payload));
        });
};

export const createAnswer = (questionId, answer) => dispatch => (
    AnswerAPIUtil.createAnswer(questionId, answer)
        .then(
            payload => dispatch(fetchOneAnswer(payload)),
            errors => dispatch(fetchAnswerErrors(errors.responseJSON))
        )
);

export const deleteAnswer = answerId => dispatch => (
    AnswerAPIUtil.deleteAnswer(answerId)
        .then(
            payload => dispatch(removeAnswer(payload)),
            errors => dispatch(fetchAnswerErrors(errors.responseJSON))
        )
);