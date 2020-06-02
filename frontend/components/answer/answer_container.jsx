import { connect } from 'react-redux';
import { deleteAnswer } from '../../actions/answers_actions';
import { upvoteAnswer, downvoteAnswer } from '../../actions/votes_actions';
import Answer from './answer';

const mapStateToProps = (state, ownProps) => {
	const answer = ownProps.answer;
	console.log(answer, "suh");
	const author = state.entities.users[answer.authorId];
	const isLoggedIn = !!state.session.id;
	let votes = 0;
	let currentUserVote = 0;

	if (Object.keys(answer.votes).length > 0) {

		Object.keys(answer.votes).forEach((vote) => {
			let currentVote = answer.votes[vote];
			votes += currentVote.value;
			if (currentVote.userId === state.session.id) {
				currentUserVote = currentVote.value;
			}
		});
	}
	return {
		answer,
		author,
		isLoggedIn,
		votes,
		currentUserVote
	};
};

const mapDispatchToProps = dispatch => ({
	deleteAnswer: answerId => dispatch(deleteAnswer(answerId)),
	upvote: answerId => dispatch(upvoteAnswer(answerId)),
	downvote: answerId => dispatch(downvoteAnswer(answerId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Answer);