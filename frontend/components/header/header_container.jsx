import Header from "./header";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout } from "../../actions/sessions_actions";
import { setSearchTerm } from "../../actions/search_actions"


const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    setSearchTerm: (searchTerm) => dispatch(setSearchTerm(searchTerm)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));