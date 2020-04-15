export const vote = (voteType, votableType, votableId) => (
    $.ajax({
        method: 'POST',
        url: '/api/vote/',
        data: {
            votable_id: votableId,
            votable_type: votableType,
            vote_type: voteType
        }
    })
);

export const upvoteAnswer = answerId => (
    $.ajax({
        method: 'POST',
        url: `/api/answers/${answerId}/upvote`,
    })
);

export const downvoteAnswer = answerId => (
    $.ajax({
        method: 'POST',
        url: `/api/answers/${answerId}/downvote`,
    })
);