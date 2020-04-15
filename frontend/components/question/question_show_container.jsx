import { connect } from 'react-redux';
import { fetchOneQuestion } from '../../actions/questions_actions';
import QuestionShow from './question_show';

const mapStateToProps = (state) => {
    const question = state.entities.question;
    let answers = [];
    if (question && question.answerIds) {
        question.answerIds.forEach(answerId => {
            const answer = state.entities.answers[answerId];
            if (answer) answers.push(answer);
        });
    }
    return {
        question: question,
        answers: answers,
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchOneQuestion: questionId => dispatch(fetchOneQuestion(questionId))
});


export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);