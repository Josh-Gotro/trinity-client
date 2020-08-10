import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";

function SignInForm(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    let history = useHistory();
    const { register, handleSubmit, errors } = useForm();

    const handleUsernameChange = (evt) => {
        setUsername(evt.target.value)
    }

    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value)
    }

    const onSubmit = (evt) => {
        fetch(`http://localhost:3001/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            .then(resp => resp.json())
            .then(data => {
                localStorage.setItem("token", data.jwt)
                props.handleLogin(data.user)
            })
        setUsername("")
        setPassword("")
        history.push('/vendors')
    }
    // const formDivStyle = {
    //     margin: "auto",
    //     padding: "20px",
    //     width: "80%"
    // }

    return (
        <div className="LoginGrid">
            {/* <div style={formDivStyle}> */}
            <h2>mirpoix</h2>
            <p> We help restaurants</p>
            <p> make smarter purchases.</p>
            <form className="LoginForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                    <label></label>
                    <input name="username" ref={register({ required: true })} value={username} onChange={handleUsernameChange} type="text" placeholder="username" />
                    {errors.contact && <p>please choose a user name </p>}
                </div>
                <div className="field">

                    <input name="password" ref={register({ required: true })} value={password} onChange={handlePasswordChange} type="password" placeholder="password" />
                    {errors.contact && <p>please choose a password </p>}
                </div>

                <button className="LoginButton1" > Sign Up</button>
            </form>
        </div>
    )
}

export default SignInForm