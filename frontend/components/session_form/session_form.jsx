import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.formState;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    };

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
        return (
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={`error-${idx}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        let displayNameContainer;
        if (this.props.formType === "Sign Up") {
            displayNameContainer = (
                <label className="cred-form-label"><p className="cred">Display name</p>
                    <input
                        value={this.state.displayName}
                        type="text"
                        onChange={this.update("displayName")}
                    />
                </label>
            );
        }

        let demoLogin;
        if (this.props.formType === "Log In") {
            demoLogin = <button className="demo-login-button" onClick={this.handleDemoLogin}>Log In as Demo User</button>
        }
        return (
            <>
                <form onSubmit={this.handleSubmit} className="cred-form-container">
                    <div className={`cred-form ${this.props.formType === 'Sign Up' ? 'signup' : ''}`}>
                        {this.renderErrors()}
                        {displayNameContainer}
                        <label className="cred-form-label"><p className="cred">Email</p>
                            <input
                                value={this.state.email}
                                type="text"
                                onChange={this.update("email")}
                            />
                        </label>
                        <label className="cred-form-label"><p className="cred">Password</p>
                            <input
                                value={this.state.password}
                                type="password"
                                onChange={this.update("password")}
                            />
                        </label>
                        <input type="Submit" className="cred-button" value={this.props.formType} readOnly />
                        {demoLogin}
                    </div>
                </form>
            </>
        );
    }; // end of render
}; //end of class

export default SessionForm;
