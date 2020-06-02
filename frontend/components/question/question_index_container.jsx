import { connect } from "react-redux";
import { fetchAllQuestions } from "../../actions/questions_actions";
import QuestionIndex from "./question_show";

const mapStateToProps = (state, ownProps) => { }

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);
