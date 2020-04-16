import React from 'react';

class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleVote = this.handleVote.bind(this);
    }


    handleVote(voteType) {
        return (event) => {
            event.preventDefault();
            if (this.props.isLoggedIn) {
                this.props.vote(voteType, 'Answer', this.props.answer.id);
            } else {
                //render errors
            }
        };
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteAnswer(this.props.answer.id);
    }

    render() {
        const { answer } = this.props;

        return (
            <div className="answer-container">
                <div className="answer-voting">
                    <button className={`up-arrow ${answer.currentUserVote === 'up_vote' ? 'current-user-vote' : ''}`} onClick={this.handleVote('up_vote')}>
                        {/* upvote_image */}
                    </button>
                    <div className="answer-score">{answer.score}</div>
                    <button className={`down-arrow ${answer.currentUserVote === 'down_vote' ? 'current-user-vote' : ''}`} onClick={this.handleVote('down_vote')}>
                        {/* downvote_image */}
                    </button>
                </div>
                <div className="answer-main">
                    value={answer.body}
                    <div className="answer-footer">
                        <div className="answer-buttons">
                            {this.props.isAuthor && <button className="answer-delete-btn" onClick={this.handleDelete}>delete</button>}
                        </div>
                        <div className="answer-user">
                            {/* author component */}
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

export default Answer;