import React from 'react';
import CommunityPoints from './community_points'
import { Link } from 'react-router-dom';
class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.formState;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    };

    componentDidMount() {
        this.props.clearErrors();
    }

    update(field) {
        return event => this.setState({
            [field]: event.currentTarget.value
        });
    };

    handleSubmit(event) {
        event.preventDefault();
        const user = Object.assign({}, this.state);
        user.display_name = user.displayName;
        this.props.processForm(user);
    };

    handleDemoLogin(event) {
        event.preventDefault();
        this.props.processForm({ email: "cat@mail", password: "password" });
    };

    renderErrors() {
        if (this.props.errors.length === 0) {
            return;
        }

        return (
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li className="session-errors" key={`error-${idx}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        let displayNameContainer;
        let passwordRequirements;
        let communityPoints;
        let otherSessionOption;
        let demoLogin;
        let logoPreview;
        if (this.props.formType === "Sign Up") {
            displayNameContainer = (
                <div>
                    <label htmlFor="displayName" className="cred-form-label"><p className="cred">Display name</p></label>
                    <input
                        id="displayName"
                        className="cred-form-input"
                        value={this.state.displayName}
                        type="text"
                        onChange={this.update("displayName")}
                    />
                    {/* {this.renderErrors()} */}
                </div>
            );

            passwordRequirements = (
                <p id="passwordRequirements">Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>
            );

            communityPoints = (
                <div className="points">
                    {<CommunityPoints />}
                </div>
            );

            otherSessionOption = (
                <p>
                    Already have an account?
                    &nbsp;<Link to="/login">Log in</Link>
                </p>
            );
        }

        if (this.props.formType === "Log In") {
            demoLogin = <button className="generic-button demo-login-button" onClick={this.handleDemoLogin}>Log In as Demo User</button>

            otherSessionOption = (
                <p>
                    Don’t have an account?
                    &nbsp;<Link to="/signup">Sign up</Link>
                </p>
            );

            logoPreview = (
                <div id="logo-link-container">
                    <Link to="/">
                        <img id="logo-link" src="/images/logo-sm.svg"></img>
                    </Link>
                </div >
            );
        }


        return (
            <div className="session-page">
                <div className="session-content">
                    {communityPoints}
                    <div className={`${this.props.formType === 'Sign Up' ? 'cred-form-container-signup' : 'cred-form-container-login'}`}>
                        {logoPreview}
                        <form onSubmit={this.handleSubmit} className={`cred-form-container`}>
                            <div className={"cred-form"}>
                                {displayNameContainer}
                                <div>
                                    <label htmlFor="email" className="cred-form-label"><p className="cred">Email</p></label>
                                    <input
                                        id="email"
                                        className="cred-form-input"
                                        value={this.state.email}
                                        type="email"
                                        onChange={this.update("email")}
                                    />
                                    {/* {this.renderErrors()} */}
                                </div>
                                <div>
                                    <label htmlFor="password" className="cred-form-label"><p className="cred">Password</p></label>
                                    <input
                                        id="password"
                                        className="cred-form-input"
                                        value={this.state.password}
                                        type="password"
                                        onChange={this.update("password")}
                                    />
                                    {this.renderErrors()}
                                    {passwordRequirements}
                                </div>
                                <input type="Submit" className="generic-button cred-button" value={this.props.formType} readOnly />
                                {demoLogin}
                            </div>
                        </form>
                        <div className="other-session-option">
                            {otherSessionOption}
                        </div>
                    </div>
                </div>
            </div>
        );
    }; // end of render


}; //end of class

export default SessionForm;
