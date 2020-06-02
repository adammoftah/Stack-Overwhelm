import { connect } from 'react-redux';
import QuestionIndexItem from './question_index_item';

const mapStateToProps = (state, ownProps) => {
  // const question = ownProps.match.params.question;
  return {};
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndexItem);