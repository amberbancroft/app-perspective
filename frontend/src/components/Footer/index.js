import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css';

function Footer(){
  return (
    <div className='footer-container'>

      <a className= 'link--icon' href= { `https://github.com/amberbancroft` }>
        <GitHubIcon/>
      </a>

      <a className= 'link--icon' href= { `https://www.linkedin.com/in/amber-bancroft/` }>
          <LinkedInIcon/>
      </a>

      <h3 id= 'signature--footer'>Developed by Amber Bancroft</h3>
    </div>
  );
};

export default Footer;