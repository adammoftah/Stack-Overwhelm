import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up!</Link>
        </nav>
    );
    const greeting = () => (
        <div>
            <h2>Hi, {currentUser.display_name}!</h2>
            <button onClick={logout}>Log Out</button>
        </div>
    );

    return currentUser ? greeting() : sessionLinks();
};


export default Greeting;
