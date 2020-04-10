import * as QuestionAPIUtil from "../util/question_api_util";

export const FETCH_QUESTION_ERRORS = "FETCH_QUESTION_ERRORS";
export const FETCH_ALL_QUESTIONS = "FETCH_ALL_QUESTIONS";
export const FETCH_QUESTION = "FETCH_QUESTION";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const REMOVE_QUESTION = "REMOVE_QUESTION";

export const fetchAllQuestions = questions => ({
    type: FETCH_ALL_QUESTIONS,
    questions
});


export const fetchQuestion = question => ({
    type: FETCH_NEW_QUESTION,
    question
});

export const removeQuestion = questionId => ({
    type: REMOVE_QUESTION,
    questionId
});

export const fetchQuestionErrors = errors => ({
    type: FETCH_QUESTION_ERRORS,
    errors: errors
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
});

export const fetchQuestions = () => dispatch => (
    QuestionAPIUtil.fetchQuestions().then(
        questions => {
            return dispatch(fetchAllQuestions(questions));
        }
    )
);


export const fetchQuestion = id => dispatch => (
    QuestionAPIUtil.fetchQuestion(id).then(
        question => {
            return dispatch(fetchQuestion(question));
        }
    )
);

export const createQuestion = question => dispatch => {
    return QuestionAPIUtil.createQuestion(question).then(
        (question) => {
            return dispatch(fetchNewQuestion(question));
        },
        (errors) => {
            return dispatch(fetchQuestionErrors(errors.responseJSON));
        });
};

export const updateQuestion = question => dispatch => {
    return QuestionAPIUtil.updateQuestion(question).then(
        (question) => {
            return dispatch(fetchQuestion(question));
        },
        (errors) => {
            return dispatch(fetchQuestionErrors(errors.responseJSON));
        });
};

export const deleteQuestion = (id) => (dispatch) => {
    return QuestionAPIUtil.deleteQuestion(id).then(
        () => {
            return dispatch(removeQuestion(id));
        });
}; 