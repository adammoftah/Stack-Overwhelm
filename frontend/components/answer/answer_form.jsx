class AnswerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
        };
        this.update = this.update.bind(this);
        this.handleAnswerSubmission = this.handleAnswerSubmission.bind(this);
    };

    update(field) {
        return event => {
            this.setState({
                [field]: event.target.value
            });
        };
    };

    handleAnswerSubmission(e) {
        e.preventDefault();
        this.props.postAnswer(this.props.questionId, { body: this.state.body })
            .then(this.setState({ body: '' }));
    }

    render() {
        return (
            <>
                <form className="answer-form" onSubmit={this.handleAnswerSubmission}>
                    <h2 className="answer-form-headline">Your Answer</h2>
                    <input className="answer-form-field"
                        type="text"
                        value={this.state.body}
                        onChange={this.update("body")}
                    />
                    {/* errors */}
                    <input type="submit" className="answer-submit-button" value="Post Your Answer" />
                </form>
            </>

        );
    }

}

export default AnswerForm;