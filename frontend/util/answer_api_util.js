export const fetchAllAnswers = () => (
    $.ajax({
        method: 'GET',
        url: '/api/answers'
    })
);

export const fetchAnswer = answerId => (
    $.ajax({
        method: 'GET',
        url: `/api/answers/${answerId}`
    })
);

export const createAnswer = (questionId, answer) => (
    $.ajax({
        method: 'POST',
        url: `/api/questions/${questionId}/answers`,
        data: { answer }
    })
);

export const updateAnswer = answer => (
    $.ajax({
        method: 'PATCH',
        url: `api/answers/${answer.id}`,
        data: { answer }
    })
);

export const deleteAnswer = answerId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/answers/${answerId}`
    })
);