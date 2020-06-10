import React, { useState, useEffect } from 'react';
import SignInForm from './SignInForm';
import LoginForm from './LoginForm';
import { currentUser } from './services/Atom';
import { useRecoilState } from 'recoil';
import './App.css';


function Home() {
    const [user, setUser] = useState({})
    const [form, setForm] = useState("")
    const [person, setPerson] = useRecoilState(currentUser);
    // let crrnt = useRecoilValue(currentUser)

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
                setUser(data);
                setPerson(data)
                
            })
        }
    }, [])

    const handleLogin = (user) => {
        setUser(user);
        setPerson(user)
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
        console.log(person)
        // console.log(crrnt)
        console.log(user)
    }
    return (
        <div>
            <button onClick={handleAuthClick} className="hiddefgjhdfg">Access Authorized Route</button><br></br>

            {
                renderForm()
            }

            <button className="ui button" onClick={() => handleFormSwitch("signUp")}>Sign Up</button>
            <button className="ui button" onClick={() => handleFormSwitch("login")}>Log In</button>
        </div>
    );
};





export default Home;

