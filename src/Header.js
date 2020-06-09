import React from 'react'
import { Link } from 'react-router-dom';


function Header(props) {
    return (
        <div>
            <nav className="nav">
                <ul className="nav-links">

                    <Link to="/vendors">
                        <li>Vendors</li>
                    </Link>

                    <Link to="home">
                        <li>Items</li>
                    </Link>

                    <Link to="home">
                        <li>Price Lists</li>
                    </Link>

                    <Link to="home">
                        <h1>Trinity</h1>
                    </Link>

                
                    <li>Logout</li>
                    

                </ul>
            </nav>

        </div>
    )
}

export default Header;

