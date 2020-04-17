import * as VoteAPIUtil from '../util/vote_api_util';

export const HANDLE_VOTE = 'HANDLE_VOTE';

export const handleVote = vote => ({
    type: HANDLE_VOTE,
    vote
});

export const upvoteQuestion = questionId => dispatch => (
    VoteAPIUtil.upvoteQuestion(questionId).then(
        vote => {
            return dispatch(handleVote(vote));
        }
    )
);

export const downvoteQuestion = questionId => dispatch => (
    VoteAPIUtil.downvoteQuestion(questionId).then(
        vote => {
            return dispatch(handleVote(vote));
        }
    )
);

export const upvoteAnswer = answerId => dispatch => (
    VoteAPIUtil.upvoteAnswer(answerId).then(
        vote => {
            return dispatch(handleVote(vote));
        }
    )
);

export const downvoteAnswer = answerId => dispatch => (
    VoteAPIUtil.downvoteAnswer(answerId).then(
        vote => {
            return dispatch(handleVote(vote));
        }
    )
);