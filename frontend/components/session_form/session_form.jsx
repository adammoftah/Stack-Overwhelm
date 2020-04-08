import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.formState;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return event => this.setState({
            [field]: event.currentTarget.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

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
        if (this.props.formType === "signup") {
            displayNameContainer = (
                <label><span>Display Name</span>
                    <input
                        value={this.state.displayName}
                        type="text"
                        onChange={this.update("displayName")}
                    />
                </label>
            );
        }
        return (
            <>
                <form onSubmit={this.handleSubmit} className="credentials-form-container">
                    <div className="credentials-form">
                        {this.renderErrors()}
                        {displayNameContainer}
                        <label className="email-container"><span>Email</span>
                            <input
                                value={this.state.email}
                                type="text"
                                onChange={this.update("email")}
                            />
                        </label>
                        <label className="password-container"><span>Password</span>
                            <input
                                value={this.state.password}
                                type="password"
                                onChange={this.update("password")}
                            />
                        </label>
                        <input type="Submit" className="credentials-submit-button" value={this.props.formType} />
                        {/* {demoLogin} */}
                    </div>
                </form>
            </>
        );
    } // end of render
} //end of class

export default SessionForm;
