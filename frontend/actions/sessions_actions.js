import * as SessionAPIUtil from '../util/session_api_util';

export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const FETCH_SESSION_ERRORS = 'FETCH_SESSION_ERRORS';
export const CLEAR_ERRORS = "CLEAR_ERRORS";


export const fetchCurrentUser = currentUser => ({
    type: FETCH_CURRENT_USER,
    currentUser
});

export const logoutUser = () => ({
    type: LOGOUT_USER,
});

export const fetchSessionErrors = errors => ({
    type: FETCH_SESSION_ERRORS,
    errors
});

export const clearErrors = () => {
    return ({
        type: CLEAR_ERRORS
    });
};

export const signup = user => dispatch => (
    SessionAPIUtil.signup(user).then(user => (
        dispatch(fetchCurrentUser(user))
    ), err => (
        dispatch(fetchSessionErrors(err.responseJSON))
    ))
);

export const login = user => dispatch => (
    SessionAPIUtil.login(user).then(user => (
        dispatch(fetchCurrentUser(user))
    ), err => (
        dispatch(fetchSessionErrors(err.responseJSON))
    ))
);

export const logout = () => dispatch => (
    SessionAPIUtil.logout().then(user => (
        dispatch(logoutUser())
    ))
);
