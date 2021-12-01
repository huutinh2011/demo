import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function LoginForm() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(false);


    const submitHandler = (event) => {
        event.preventDefault();
        let emailValue = email;
        let passwordValue = password;
        if (emailValue === "" || passwordValue === "") {
            setStatus(false);
            setMessage("please type into mandatory fields");
        } else {
            if (emailValue === "admin" && passwordValue === "123") {
                setStatus(true);
                setMessage("Login successfully");
                navigate('/Home');
            }
            else {
                setStatus(false);
                setMessage("Login failed");
            }
        }
    }
    return (
        <div>
            <div className="formLogin">
                <div >
                    <h1 className="login">LOGIN</h1>
                </div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="email">Email:<br /></label>
                        <input className="inputemail" value={email} onChange={text => setEmail(text.target.value)} type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:<br /></label>
                        <input className="inputemail" value={password} onChange={text => setPassword(text.target.value)} type="password" />
                    </div>
                    <button className="btnLogin" value="LOGIN" >LOGIN</button>
                </form>
            </div>
            {status === true ? (<p style={{ color: 'green' }}>{message}</p>) : (<p style={{ color: 'red' }}>{message}</p>)}
        </div>
    )
}
export default LoginForm;