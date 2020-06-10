import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { currentUser } from './services/Atom';
import { useRecoilValue,  } from 'recoil';
import './App.css';



function Header() {
    let current = useRecoilValue(currentUser);

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
        localStorage.removeItem("token");
        toggleNavLink();
        // console.log(current)
        // current = undefined;
        // console.log(current)

    }

    // console.log(current)
    
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

