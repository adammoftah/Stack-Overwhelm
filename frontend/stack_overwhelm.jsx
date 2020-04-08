import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root'
import configureStore from "./store/store";
import * as SessionActions from './actions/sessions_actions'

document.addEventListener("DOMContentLoaded", () => {
    //testing   
    const store = configureStore();

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.signup = SessionActions.signup;
    window.login = SessionActions.login;
    window.logout = SessionActions.logout;

    //testing

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});