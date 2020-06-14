import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { currentUser } from './services/Atom';
import { useRecoilValue } from 'recoil';
import './App.css';

function Header() {
    let person = useRecoilValue(currentUser)
    let history = useHistory();

    const toggleNavLink = () => {
        
        if (person !== "") {
            // logoutUser()
            return <>
                <Link to="/vendors">
                    <li>Vendors</li>
                </Link>

                <Link to="/">
                    <li>Items</li>
                </Link>

                <Link to="/">
                    <li >Price Lists</li>
                </Link>

                <Link to="/">
                    <h1 >Trinity</h1>
                </Link>

                {/* <h4>{greetUser()}</h4> */}

                <li onClick={logoutUser}>Logout</li>
            </>
        } else {
            return <>
                <Link to="/">
                    <h1 >Trinity</h1>
                </Link>
            </>
        }
    }

    const logoutUser = () => {
        // console.log(person)
        localStorage.removeItem("token");
        // setPerson("")
        toggleNavLink();
        history.push('/')
    }

    return (
        <div>
            <nav className="nav">
                <ul className="nav-links">
                    {
                        toggleNavLink()
                    }
                </ul>
            </nav>

        </div>
    )
}

export default Header;

