// import React from 'react';
import React from "react";
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
// import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded, user}){
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/');
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <button className='navbar-button' id='logout-btn' onClick={logout}>Log Out</button>
      <a className='navbar-button' id='add-photo-btn' href={`/photos/new`}> +Photo </a>
      <a className='navbar-button' id='add-photo-btn' href={`/albums/new`}> +Album </a>
      <a className='navbar-button' id='profile-btn' href={`/users/${sessionUser.id}`}> Profile </a>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className='navbar-button' id='logInButton'to="/login">Log In</NavLink>
        <NavLink className='navbar-button' id='signUpButton' to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
      <li className='navbar-li'>
        <div className='home-container'>
        <i className="fas fa-camera-retro" id='cameraImage'></i>
        <NavLink className='navbar-button' id='home-button' exact to="/">Perspective</NavLink>
        </div>
        <div className='session-container'>
        {isLoaded && sessionLinks}
        </div>
      </li>
  );
}

// Exports
export default Navigation;