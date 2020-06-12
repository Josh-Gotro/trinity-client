import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { currentUser } from './services/Atom';
import { useRecoilState } from 'recoil';
import './App.css';

function Header() {
    const [person, setPerson] = useRecoilState(currentUser);
    let history = useHistory();

    const toggleNavLink = () => {
        if (person.id !== undefined) {
            return <>
                <Link to="/vendors">
                    <li>Vendors</li>
                </Link>

                <Link to="home">
                    <li>Items</li>
                </Link>

                <Link to="home">
                    <li >Price Lists</li>
                </Link>

                <Link to="home">
                    <h1 >Trinity</h1>
                </Link>

                <li onClick={logoutUser}>Logout</li>
            </>
        } else {
            return <>
                <Link to="home">
                    <h1 >Trinity</h1>
                </Link>
            </>
        }
    }

    const logoutUser = () => {
        console.log(person)
        localStorage.removeItem("token");
        setPerson("")
        toggleNavLink();
        history.push('/home')
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

