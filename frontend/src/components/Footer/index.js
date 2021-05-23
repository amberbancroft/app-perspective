import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer(){
  return (
    <div className='footer-container'>
    <i className="fab fa-github" id='footer-img'></i>
    <a id='github-button' href="https://github.com/amberbancroft">Developer</a>
    </div>
  );
};

export default Footer;