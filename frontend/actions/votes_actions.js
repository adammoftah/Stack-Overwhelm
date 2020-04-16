import * as VoteAPIUtil from '../util/vote_api_util';

export const UPVOTE_QUESTION = 'UPVOTE_QUESTION';
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