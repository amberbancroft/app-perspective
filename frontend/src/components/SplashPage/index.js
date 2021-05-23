// import React, { useEffect } from 'react';
import React from 'react';
// import { NavLink } from 'react-router-dom';
import "./SplashPage.css";
// import { useSelector } from 'react-redux';

  // helper function to rotate images
// function backgroundSwitch(){
//     const photos = [
//         './images/img_1.JPG',
//         './images/img_2.JPG',
//         './images/img_3.JPG',
//         './images/img_4.JPG'
//     ]
//     // Grab the 
//     const background = document.querySelector('.inspiration-container');
//     const randomPhoto = photos[Math.floor(Math.random()* photos.length)];
//     background.style.backgroundImage = randomPhoto;
// }

function SplashPage(){
  
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //     //   console.log('This will run every second!');
    //       backgroundSwitch()
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);
    
    return (
        <div className='inspiration-container'>
            <h2>Find Your Inspiration</h2>
            {/* <NavLink className='navbar-button' id='signUpButton' to="/signup">Sign Up</NavLink> */}
        </div>
    );
}

export default SplashPage;