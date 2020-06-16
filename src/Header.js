import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { currentUser } from './services/Atom';
import { useRecoilState } from 'recoil';
import './customCSS/Nav.css';

function Header() {
    const [person, setPerson] = useRecoilState(currentUser);
    // let person = useRecoilValue(currentUser)
    let history = useHistory();

    const toggleNavLink = () => {
        
        if (person !== "") {
            // logoutUser()
            return <>
                <Link to="/vendors">
                    <div>Vendors</div>
                </Link>

                <Link to="/items">
                    <div>Items</div>
                </Link>

                <Link to="/pricelists">
                    <div>Price Lists</div>
                </Link>

                <Link  className="Title" to="/">
                    <h1 >Mirpoix</h1>
                </Link>

                {/* {greetUser()} */}

                <div className="Logout" onClick={logoutUser}>Logout</div>
            </>
        } else {
            return <>
                <Link className="Title" to="/">
                    <h1 >Mirpoix</h1>
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

    // const greetUser = () => {
    //     // console.log(person.username)
    //     return person === undefined ?  `Greetings ${person.username}!` : null
    //     // return `Greetings ${person.username}!`
    // }

    return (
        <>
            <nav className="nav">  
                {toggleNavLink()}
            </nav>        
        </>


    )
}

export default Header;

