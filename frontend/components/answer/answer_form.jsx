import React from 'react';
import { connect } from 'react-redux';
import { deleteAnswer } from '../../actions/answers_actions';
import { vote } from '../../actions/votes_actions';

const mapStateToProps = (state, ownProps) => {
    const author = state.entities.users[ownProps.answer.authorId];
    const isLoggedIn = !!state.session.id;
    const isAuthor = (state.session.id === author.id);
    return {
        comments: comments,
        author: author,
        isLoggedIn: isLoggedIn,
        isAuthor: isAuthor,
    };
};

const mapDispatchToProps = dispatch => ({
    deleteAnswer: (answerId) => dispatch(deleteAnswer(answerId)),
    vote: (voteType, votableType, votableId) => dispatch(vote(voteType, votableType, votableId))
});

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
                // renderErrors();
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
                        <svg className="svg-icon" aria-hidden="true" width="36" height="36" viewBox="0 0 36 36"><path d="M2 26h32L18 10z"></path></svg>
                    </button>
                    <div className="answer-score">{answer.score}</div>
                    <button className={`down-arrow ${answer.currentUserVote === 'down_vote' ? 'current-user-vote' : ''}`} onClick={this.handleVote('down_vote')}>
                        <svg className="svg-icon" aria-hidden="true" width="36" height="36" viewBox="0 0 36 36"><path d="M2 10h32L18 26z"></path></svg>
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

export default connect(mapStateToProps, mapDispatchToProps)(Answer);