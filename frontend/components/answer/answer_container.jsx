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
        isLoggedIn: isLoggedIn
    };
};

const mapDispatchToProps = dispatch => ({
    deleteAnswer: answerId => dispatch(deleteAnswer(answerId)),
    vote: (voteType, votableType, votableId) => dispatch(vote(voteType, votableType, votableId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Answer);