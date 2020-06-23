import React, {useState} from 'react'
import { useForm } from "react-hook-form";

function LoginForm(props){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { register, handleSubmit, errors } = useForm();

    const handleUsernameChange = (evt) => {
        setUsername(evt.target.value)
    }

    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value)
    }

    const onSubmit = (evt) => {
        fetch(`http://localhost:3001/login`, {
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
    }
    // const formDivStyle = {
    //     margin: "auto",
    //     padding: "20px",
    //     width: "80%"
    // }
    return(
        <div className="LoginGrid">
        
            {/* <div className="NewForm"> */}
            <h2>mirpoix</h2>
            <p> We help restaurants</p>
            <p> make smarter purchases.</p>
            
            <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                    <label></label>
                    <input name="username" ref={register({ required: true })} value={username} onChange={handleUsernameChange} type="text" placeholder="username"/>
                    {errors.contact && <p>please enter your user name </p>}
                </div>
                <div className="field">
                    <label></label>
                    <input name="password" ref={register({ required: true })} value={password} onChange={handlePasswordChange} type="password" placeholder="password"/>
                    {errors.contact && <p>please enter your password</p>}
                </div>
                
                <button className="LoginButton1" type="submit">Login</button>
            </form>
    
        </div>
    )
} 

export default LoginForm