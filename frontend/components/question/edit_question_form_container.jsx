import React from "react";
import QuestionForm from "./question_form";
import { connect } from "react-redux";
import { fetchQuestion, updateQuestion, clearErrors } from "../../actions/questions_actions";

class EditQuestionForm extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.match.params.questionId);
    }

    // renderErrors() {
    //     let errorsList = this.props.errors.map((error, idx) => {
    //         return (<li key={idx}>
    //             {error}
    //         </li>)
    //     });

    //     return (
    //         <ul>
    //             {errorsList}
    //         </ul>
    //     );
    // }

    render() {
        const { processQuestionForm, formType, question, errors } = this.props;

        if (!question) return null;
        return (
            <QuestionForm
                processQuestionForm={processQuestionForm}
                errors={errors}
                // history={this.props.history}
                clearErrors={clearErrors}
                formType={formType}
                question={question}
            />
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    const question = state.entities.questions[ownProps.match.params.questionId];
    const currentUserId = state.entities.users[state.session.id].id;

    return ({
        formType: "Edit Question",
        question: question,
        currentUserId: currentUserId,
        errors: state.errors.questions
    });
};

const mapDispatchToProps = dispatch => ({
    fetchQuestion: id => dispatch(fetchQuestion(id)),
    processForm: question => dispatch(updateQuestion(question)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditQuestionForm);