import { connect } from "react-redux";
import { fetchQuestion } from "../../actions/questions_actions";
import { createAnswer } from "../../actions/answers_actions";
import { upvoteQuestion, downvoteQuestion } from "../../actions/votes_actions";
import QuestionShow from "./question_show";
import { clearEntity } from "../../actions/entity_actions";

const mapStateToProps = (state, ownProps) => {
  const questionId = ownProps.match.params.questionId;
  let question = {};
  let author = {};
  let answers = [];
  let votes;
  let currentUserVote = 0;
  if (state.entities.questions && state.entities.questions[questionId]) {
    const tempQuestion = state.entities.questions[questionId];
    question = tempQuestion.question;
    author = tempQuestion.authors[question.author_id];
    if (tempQuestion.votes && Object.keys(tempQuestion.votes).length > 0) {
      votes = 0;
      Object.keys(tempQuestion.votes).forEach((vote) => {
        let currentVote = tempQuestion.votes[vote];
        votes += currentVote.value;
        if (currentVote.userId === state.session.id) {
          currentUserVote = currentVote.value;
        }
      });
    }
    Object.keys(state.entities.answers).forEach((answerId) => {
      const answer = state.entities.answers[answerId];
      if (answer) answers.push(answer);
    });
  }

  let ret = {
    questionId,
    answers,
    author,
    question,
  };

  if (votes !== undefined) {
    ret.votes = votes;
    ret.currentUserVote = currentUserVote;
  }

  return ret;
};

const mapDispatchToProps = (dispatch) => ({
  fetchOneQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
  submitAnswer: (questionId, body) => dispatch(createAnswer(questionId, body)),
  upvote: (questionId) => dispatch(upvoteQuestion(questionId)),
  downvote: (questionId) => dispatch(downvoteQuestion(questionId)),
  clearEntity: () => dispatch(clearEntity()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);
