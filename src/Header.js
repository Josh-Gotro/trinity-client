import React from 'react'
import { Link } from 'react-router-dom';
import { currentUser } from './services/Atom';
import { useRecoilValue, } from 'recoil';
import './App.css';



function Header() {
    const current = useRecoilValue(currentUser);
    
    const toggleNavLink = () => {
        if (current !== undefined) {
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

            <li >Logout</li>
            </>
        } else { 
            return <>
            <Link to="home">
                <h1 >Trinity</h1>
            </Link>
            </>
        }
    }

    console.log(current)
    
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

