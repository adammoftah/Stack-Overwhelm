import QuestionForm from "./question_form";
import { connect } from "react-redux";
import { createQuestion, clearErrors } from "../../actions/questions_actions";

const mapStateToProps = state => {

    const currentUserId = state.entities.users[state.session.id].id;

    return ({
        question: { title: "", body: "", author_id: currentUserId },
        errors: state.errors.questions,
        formType: "Create Question"
    });
};

const mapDispatchToProps = (dispatch) => ({
    processQuestionForm: question => dispatch(createQuestion(question)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);