import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { currentUser, logout } = this.props;
        const loggedIn = () => (
            <>
            </>
        );

        const loggedOut = () => (
            <>
            </>
        );

        const sessionLinks = () => (
            <nav className="session-button-nav">
                <Link className="session-button session-button-log" to="/login">Log in</Link>
                &nbsp;
                <Link className="session-button session-button-signup" to="/signup">Sign up</Link>
            </nav>
        );
        const greeting = () => (
            <>
                <span>Hi, {currentUser.display_name}!</span>
                <nav className="session-button-nav">
                    {/* <Link className="session-button session-button-log" to="/signup">Log out</Link> */}
                    <button className="session-button session-button-log" onClick={this.props.logout}>Log out</button>
                </nav>
            </>
        );

        return (
            <header className="navbar">
                <div className="navbar-items">
                    <img id="menu-button" src="/images/menu.png"></img>
                    <span>StackOverwhelm</span>
                    {currentUser ? greeting() : sessionLinks()}
                </div>

            </header>
        )
        //return currentUser ? loggedIn() : loggedOut();
    }

}

export default Header;