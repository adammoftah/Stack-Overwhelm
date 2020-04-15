import * as VoteAPIUtil from '../util/vote_api_util';

export const FETCH_QUESTION_VOTE = 'FETCH_QUESTION_VOTE';
export const FETCH_ANSWER_VOTE = 'FETCH_ANSWER_VOTE';
export const FETCH_VOTE_ERRORS = 'FETCH_VOTE_ERRORS';

const fetchVote = ({ payload, votableType }) => {
    let field;
    let type;
    let votable;

    switch (votableType) {
        case 'Question':
            field = 'question';
            type = FETCH_QUESTION_VOTE;
            votable = payload.question;
            break;
        case 'Answer':
            field = 'answer';
            type = FETCH_ANSWER_VOTE;
            votable = payload.answer;
            break;
        default:
            type = "INVALID_VOTABLE_TYPE";
    }
    return ({
        [field]: votable,
        type: type,
    });

};

export const fetchVoteErrors = errors => ({
    type: FETCH_VOTE_ERRORS,
    errors: errors
});


export const vote = (voteType, votableType, votableId) => (dispatch) => (
    VoteAPIUtil.vote(voteType, votableType, votableId)
        .then(
            payload => dispatch(fetchVote({ payload, votableType })),
            errors => dispatch(fetchVoteErrors(errors.responseJSON))
        )
);