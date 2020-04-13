import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/sessions_actions';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formState: { email: "", password: "" },
    formType: 'Log In',
    navLink: <Link to="/signup">Sign Up</Link>,
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
