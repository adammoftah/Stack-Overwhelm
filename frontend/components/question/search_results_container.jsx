import { connect } from "react-redux";
import { searchQuestions } from "../../actions/questions_actions";
import SearchResults from "./search_results";

const mapStateToProps = (state, ownProps) => {
  return {
    questions: Object.values(state.entities.questions),
    searchTerm: state.ui.searchTerm,
  };
}

const mapDispatchToProps = (dispatch) => ({
  searchQuestions: (searchTerm) => dispatch(searchQuestions(searchTerm))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
