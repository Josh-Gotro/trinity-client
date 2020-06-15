import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { currentUser } from './services/Atom';
import { useRecoilState } from 'recoil';
import './App.css';

function Header() {
    const [person, setPerson] = useRecoilState(currentUser);
    // let person = useRecoilValue(currentUser)
    let history = useHistory();

    const toggleNavLink = () => {
        
        if (person !== "") {
            // logoutUser()
            return <>
                <Link to="/vendors">
                    <li>Vendors</li>
                </Link>

                <Link to="/items">
                    <li>Items</li>
                </Link>

                <Link to="/pricelists">
                    <li >Price Lists</li>
                </Link>

                <Link to="/">
                    <h1 >Trinity</h1>
                </Link>

                {greetUser()}

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
        setPerson("")
        toggleNavLink();
        history.push('/')
    }

    const greetUser = () => {
        // console.log(person.username)
        return person === undefined ?  `Greetings ${person.username}!` : null
        // return `Greetings ${person.username}!`
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

