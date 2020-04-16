import AnswerForm from "./answer_form"
import { connect } from 'react-redux';
import { createAnswer } from '../../actions/answers_actions';

const mapStateToProps = state => ({
    errors: state.errors.answers
});

const mapDispatchToProps = dispatch => {
    return {
        postAnswer: (questionId, answer) => dispatch(postAnswer(questionId, answer)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerForm);