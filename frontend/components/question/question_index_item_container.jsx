import { connect } from 'react-redux';
import QuestionIndexItem from './question_index_item';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);

  let question = ownProps.question;
  delete ownProps.question;
  if (!question) {
    return {};
  }

  question.user = state.entities.users[question.author_id];
  delete question.author_id;

  question.votes = 0;
  Object.keys(question).forEach((key) => {
    if (typeof question[key] === "object" && question[key].votableId) {
      question.votes += question[key].value;
      delete question[key];
    }
  });

  return {
    ...question
  };
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndexItem);