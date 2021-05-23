import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton className='navbar-button' user={sessionUser} />
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

export default Navigation;