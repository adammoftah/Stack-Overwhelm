import { connect } from "react-redux";
import { fetchQuestion } from "../../actions/questions_actions";
import { createAnswer } from "../../actions/answers_actions";
import { upvoteQuestion, downvoteQuestion } from "../../actions/votes_actions";
import QuestionShow from "./question_show";

const mapStateToProps = (state, ownProps) => {
  const questionId = ownProps.match.params.questionId;
  let question = {};
  let author = {};
  let answers = [];
  let votes = 0;
  let currentUserVote = 0;
  if (state.entities.questions && state.entities.questions[questionId]) {
    const tempQuestion = state.entities.questions[questionId];
    question = tempQuestion.question;
    author = tempQuestion.authors[question.author_id];
    Object.keys(tempQuestion.votes).forEach((vote) => {
      let currentVote = tempQuestion.votes[vote];
      votes += currentVote.value;
      if (currentVote.userId === state.session.id) {
        currentUserVote = currentVote.value;
      }
    });
    Object.keys(state.entities.answers).forEach((answerId) => {
      const answer = state.entities.answers[answerId];
      if (answer) answers.push(answer);
    });
  }

  return {
    questionId,
    answers,
    author,
    question,
    votes,
    currentUserVote,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchOneQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
  submitAnswer: (questionId, body) => dispatch(createAnswer(questionId, body)),
  upvote: (questionId) => dispatch(upvoteQuestion(questionId)),
  downvote: (questionId) => dispatch(downvoteQuestion(questionId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);
