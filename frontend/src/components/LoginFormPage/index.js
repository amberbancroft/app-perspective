import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DemoUser from "../DemoUser";
import './LoginForm.css';

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/home" />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    return (
        <div className='form-container'>
            <form className="form" onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <i className="fas fa-camera-retro" id='cameraImage2'></i>
                <h2 id='welcome'>Welcome Back!</h2>
                <label>
                    <div className="loginInput">
                        <input
                            type="text"
                            placeholder="Username or Email"
                            value={credential}
                            onChange={(e) => setCredential(e.target.value)}
                            required
                        />
                    </div>
                </label>
                <label>
                    <div className="loginInput">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                </label>
                <button id='logIn-btn' type="submit">Sign In</button>
            </form>
            <div className="DemoButton--container"> 
                <DemoUser/>
            </div>
        </div>
    );
}

export default LoginFormPage;