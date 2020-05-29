import { connect } from 'react-redux';
import { deleteAnswer } from '../../actions/answers_actions';
import { upvoteAnswer, downvoteAnswer } from '../../actions/votes_actions';
import Answer from './answer';

const mapStateToProps = (state, ownProps) => {
    const author = state.entities.users[ownProps.answer.authorId];
    const isLoggedIn = !!state.session.id;
    let votes;
    let currentUserVote = 0;
    // if (Object.keys(tempQuestion.votes).length > 0) {
    //     votes = 0;
    //     Object.keys(tempQuestion.votes).forEach((vote) => {
    //         let currentVote = tempQuestion.votes[vote];
    //         votes += currentVote.value;
    //         if (currentVote.userId === state.session.id) {
    //             currentUserVote = currentVote.value;
    //         }
    //     });
    // }
    return {
        answer: ownProps.answer,
        author: author,
        isLoggedIn: isLoggedIn,
        // isAuthor: isAuthor
    };
};

const mapDispatchToProps = dispatch => ({
    deleteAnswer: answerId => dispatch(deleteAnswer(answerId)),
    upvoteAnswer: answerId => dispatch(upvoteAnswer(answerId)),
    downvoteAnswer: answerId => dispatch(downvoteAnswer(answerId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Answer);