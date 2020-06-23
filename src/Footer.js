import React from 'react';
import { Link } from 'react-router-dom';
import './customCSS/Nav.css';


const Footer = () => {
    return (
        <div className="footer">
            <Link to="/about">
                <div>about</div>
            </Link>
        </div>
    );
}

export default Footer;
