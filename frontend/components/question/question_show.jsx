import React from 'react';

class QuestionShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ""
        };
        this.submitAnswer = this.submitAnswer.bind(this);
    };

    componentWillMount() {
        this.props.fetchOneQuestion(this.props.questionId);
    }

    update(field) {
        return event => this.setState({
            [field]: event.currentTarget.value
        });
    };

    submitAnswer() {
        this.props.submitAnswer(this.props.questionId, this.state.body);
    }

    render() {
        console.log(this.props);

        return (
            <>
                <div>
                    <button onClick={() => this.props.upvote(this.props.question.id)}>Upvote</button>
                    <button onClick={() => this.props.downvote(this.props.question.id)}>Downvote</button>
                    {this.props.question.id &&
                        <h1>{this.props.question.title}</h1>
                    }
                    <form onSubmit={this.submitAnswer}>
                        <input
                            type='text'
                            value={this.state.body ? this.state.body : ""}
                            onChange={this.update("body")}
                        />
                        <input type="Submit" />
                    </form>
                </div>
            </>
        )
    }
};

export default QuestionShow;