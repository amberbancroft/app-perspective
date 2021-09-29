import { useState } from 'react';
import { signup } from '../../store/session';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../LoginFormPage/LoginForm.css';

const CreateUser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];
    dispatch(signup({ username, email, password, confirmPassword }))
      .then(() => {
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          newErrors = data.errors;
          setErrors(newErrors);
        }
        else {
          <Redirect to='/home' />
        }
      });
  };

  return (
    <div className='form-container'>

      <form className='form' onSubmit= { handleSubmit } >

        <i className='fas fa-camera-retro' id='cameraImage2' />
        <h2 className='modal--title'> Sign Up </h2>

        <div className='loginInput'>
          <input
            type='text'
            className='input--container'
            placeholder='Username'
            value={username}
            onChange= { (e) => setUsername(e.target.value) }
            required
          />
        </div>

        <div id='user-email' className='loginInput'>
          <input
            type='email'
            className='input--container'
            placeholder='Email'
            value={email}
            onChange= { (e) => setEmail(e.target.value) }
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

        <div className='loginInput'>
          <input
            type='password'
            className='input--container'
            placeholder='Confirm Password'
            value= { confirmPassword }
            onChange= { (e) => setConfirmPassword(e.target.value) }
            required
          />
        </div>

        <div className= 'modal--form--errors'>  
          { errors.map( (error, idx) => <div key= { idx } > { error } </div>) } 
        </div>

        <button className='submit-btn' type='submit'> Create User </button>

      </form>

    </div>
  );
};

export default CreateUser;