import Header from "./header";
import { connect } from "react-redux";
import { logout } from "../../actions/sessions_actions";
import { searchQuestions } from "../../actions/questions_actions"


const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    searchQuestions: (searchTerm) => dispatch(searchQuestions(searchTerm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);