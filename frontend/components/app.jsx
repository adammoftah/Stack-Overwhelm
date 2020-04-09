import React from "react";
import { Provider } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';

import HeaderContainer from './header/header_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <>
        <HeaderContainer />
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch>
    </>

);

export default App;