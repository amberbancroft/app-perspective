import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';
import DemoUser from "../DemoUser";

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

            <form className='form' onSubmit= { handleSubmit } >

                <i className='fas fa-camera-retro' id='cameraImage2'></i>
                <h2 className='modal--title' > Welcome Back! </h2>

                
                    <div className='loginInput'>
                        <input
                            type='text'
                            className='input--container'
                            placeholder='Username or Email'
                            value= { credential }
                            onChange= { (e) => setCredential(e.target.value) }
                            required
                        />
                    </div>
               
                
                    <div className='loginInput'>
                        <input
                            type='password'
                            className='input--container'
                            placeholder='Password'
                            value= { password }
                            onChange= { (e) => setPassword(e.target.value) }
                            required
                        />
                    </div>

                    <div className= 'modal--form--errors'>  
                        { errors.map( (error, idx) => <div key= { idx } > { error } </div>) } 
                    </div>
                
                <button id='logIn-btn' type='submit'> Sign In </button>

            </form>

            <div className='DemoButton--container'> 
                <DemoUser/>
            </div>
            
        </div>
    );
}

export default LoginFormPage;