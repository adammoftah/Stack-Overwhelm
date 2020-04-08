import React from "react";
import SessionForm from "./session_form";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { signup } from "../../actions/sessions_actions";

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formState: { displayName: "", email: "", password: "" },
    formType: "Sign Up",
    navLink: <Link to="/login">Log In</Link>,
});

const mapDispatchToProps = (dispatch) => ({
    processForm: user => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);