import React, { useState, useEffect } from 'react';
import SignInForm from './SignInForm';
import LoginForm from './LoginForm'
import './App.css';
// import React from 'react'

function Header(props) {
    const [user, setUser] = useState({})
    const [form, setForm] = useState("")

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            fetch(`http://localhost:3001/auto_login`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(resp => resp.json())
                .then(data => {
                    setUser(data)
                    // console.log(data)
                })
        }
    }, [])

    const handleLogin = (user) => {
        setUser(user)
    }

    const handleFormSwitch = (input) => {
        setForm(input)
    }

    const handleAuthClick = () => {
        whoisuser();
        const token = localStorage.getItem("token")
        fetch(`http://localhost:3001/user_is_authed`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(resp => resp.json())
            .then(data => console.log(data))
    }

    console.log(user)

      const renderForm = () => {
    switch (form) {
      case "login":
        return <LoginForm handleLogin={handleLogin} />
        break;
      case "signUp":
      // default:
        return <SignInForm handleLogin={handleLogin} />
    }
  }

  const whoisuser = () => {
      console.log(user)
  }

    return (
        <div>
        <nav className="nav">
            <ul className="nav-links">
                <li>Vendors</li>
                <li>Items</li>
                <li>Price Lists</li>
                <h1>Trinity</h1>
                <li>Logout</li>

            </ul>
        </nav>
            <button onClick={handleAuthClick} className="hiddefgjhdfg">Access Authorized Route</button><br></br>
            {
                renderForm()
            }
        
            <button className="ui button" onClick={() => handleFormSwitch("signUp")}>Sign Up</button>
            <button className="ui button" onClick={() => handleFormSwitch("login")}>Log In</button>
        </div>
    )
}

export default Header;