import React from "react";

class QuestionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.question;
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
        return (event) => {
            this.setState({
                [field]: event.target.value
            });
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.processQuestionForm(this.state).then(payload => {
            this.props.history.push(`/questions/${payload.question.question.id}`);
        });
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
        return (
            <div className="question-form-container">
                <form onSubmit={this.handleSubmit} className="question-form">
                    <div className="question-form-body">
                        <span className="question-form-ask-a-question">Ask a Public Question</span>
                        <label className="title-container"><span className="title">Title</span>
                            <input type="text" onChange={this.update("title")} placeholder="What is your programming question? Please be specific." value={this.state ? this.state.title : ""} />
                        </label>
                        <label className="body-container"><span className="body">Body</span>
                            <textarea onChange={this.update("body")} value={this.state ? this.state.body : ""}></textarea>
                        </label>
                        <div className="question-form-errors-container">
                            <input type="Submit" className="question-submit-button" defaultValue={this.props.formType} />
                            {/* {this.renderErrors()} */}
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    // componentWillUnmount() {
    //     this.props.clearErrors();
    // }
}

export default QuestionForm;