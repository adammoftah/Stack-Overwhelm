import { connect } from "react-redux";
import { fetchQuestions } from "../../actions/questions_actions";
import QuestionIndex from "./question_index";

const mapStateToProps = (state, ownProps) => {
  if (!state.entities || !state.entities.questions || !state.entities.users) {
    return {};
  }

  let questions = [];
  Object.keys(state.entities.questions).forEach((questionId) => {
    const question = state.entities.questions[questionId];
    if (question) questions.push(question);
  });

  return {
    questions
  };
}

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: () => dispatch(fetchQuestions())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);
