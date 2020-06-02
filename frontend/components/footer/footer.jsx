import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <div id="logo-link-container">
                    <Link to="/">
                        <img id="logo-link" src="/images/logo-sm.svg"></img>
                    </Link>
                </div>
                <div>
                    <span className="footer-info">Contact</span>
                    <ul className="footer-list">
                        <li className="footer-list-item">adam.moftah@gmail.com</li>
                        <li className="footer-list-item">https://adammoftah.com</li>
                        <li className="footer-list-item">(917)513-2900</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;