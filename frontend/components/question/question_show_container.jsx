import { connect } from 'react-redux';
import { fetchQuestion } from '../../../actions/question_actions';
import QuestionShow from './question_show';

const mapStateToProps = (state, ownProps) => {
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

const mapDispatchToProps = (dispatch) => {
    return {
        fetchQuestion: questionId => dispatch(fetchQuestion(questionId)),
    };

};
export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);