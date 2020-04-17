export const upvoteQuestion = questionId => {
    return $.ajax({
        method: 'POST',
        url: `/api/questions/${questionId}/upvote`,
    })
}

export const downvoteQuestion = questionId => {
    return $.ajax({
        method: 'POST',
        url: `/api/questions/${questionId}/downvote`,
    })
};

export const upvoteAnswer = answerId => {
    return $.ajax({
        method: 'POST',
        url: `/api/answers/${answerId}/upvote`,
    })
}

export const downvoteAnswer = answerId => {
    return $.ajax({
        method: 'POST',
        url: `/api/answers/${answerId}/downvote`,
    })
};