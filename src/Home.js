import React, { useState, useEffect } from 'react';
import SignInForm from './SignInForm';
import LoginForm from './LoginForm';
import { currentUser } from './services/Atom';
import { useRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';
import './App.css';


function Home() {
    const [user, setUser] = useState({})
    const [form, setForm] = useState("")
    const [person, setPerson] = useRecoilState(currentUser);
    let history = useHistory();
    const [loginToggle, setLoginToggle] = useState(false);
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
    }, [setUser, setPerson])

    const handleLogin = (user) => {
        setUser(user);
        setPerson(user)
        if (person !== undefined) {
            return history.push('/vendors')
        };
    }

    const handleFormSwitch = (input) => {
        setLoginToggle(prev => !prev)
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
                return <LoginForm handleLogin={handleLogin} />;
            case "signUp":
                return <SignInForm handleLogin={handleLogin} />;
            default:
                return <LoginForm handleLogin={handleLogin} />;
        }
    }

    const whoisuser = () => {
        console.log(person)
        // console.log(crrnt)
        console.log(user)
    }
    return (
        <>
            <div className="HeroPage">
            <div className="AccentStripe">
            </div>
                {/* <button onClick={handleAuthClick} className="hiddefgjhdfg">Access Authorized Route</button><br></br> */}

                {renderForm()}
        
                {loginToggle ? <button className="LoginButtonSwap" onClick={() => handleFormSwitch("login")}>|  log in</button> : null }
                {loginToggle ? null : <button className="LoginButtonSwap" onClick={() => handleFormSwitch("signUp")}>|  sign up</button>}
            
            </div>
        </>
    );
};





export default Home;

